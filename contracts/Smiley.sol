// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract SmileyNFT is ERC721, Ownable {
    string public baseTokenURI;
    uint256 public constant PRICE = 0.008 ether;

    struct Smiley {
        uint256 tokenId;
        uint256 price;
        address payable mintedBy;
        address payable owner;
        address payable previousOwner;
    }

    mapping(address => uint256[]) public nftsOwner;
    mapping(uint256 => Smiley) public allNfts;
    mapping(uint256 => bool) public tokenIdExists;

    event MintNft(address senderAddress, uint256 nftToken);

    constructor(string memory baseURI) ERC721("Smiley", "NFT") {
        setBaseURI(baseURI);
    }

    function _baseURI() internal view virtual override returns (string memory) {
        return baseTokenURI;
    }

    function setBaseURI(string memory _baseTokenURI) public onlyOwner {
        baseTokenURI = _baseTokenURI;
    }

    function mintNft(uint256 _tokenId) external payable onlyOwner {
        require(msg.sender != address(0));
        require(!tokenIdExists[_tokenId]);
        _safeMint(msg.sender, _tokenId);
        emit MintNft(msg.sender, _tokenId);
        tokenIdExists[_tokenId] = true;
        Smiley memory newNft = Smiley(
            _tokenId,
            PRICE,
            payable(msg.sender),
            payable(msg.sender),
            payable(address(0))
        );
        allNfts[_tokenId] = newNft;
    }

    function buyNft(uint256 _tokenId) public payable {
        require(msg.sender != address(0));
        require(_exists(_tokenId), "Token are not minted");
        Smiley memory smiley = allNfts[_tokenId];
        require(smiley.owner != msg.sender);
        require(msg.value >= smiley.price);
        _transfer(smiley.owner, msg.sender, _tokenId);
        address payable sendToOwner = smiley.owner;
        sendToOwner.transfer(msg.value);
        smiley.previousOwner = smiley.owner;
        smiley.owner = payable(msg.sender);
        allNfts[_tokenId] = smiley;
    }

    function getNftsFromOwner(address _owner)
        external
        view
        returns (uint256[] memory)
    {
        return nftsOwner[_owner];
    }

    function getNftFromTokenId(uint256 _tokenId)
        public
        view
        returns (Smiley memory)
    {
        return allNfts[_tokenId];
    }

    function withdraw() public payable onlyOwner {
        address payable _toOwner = payable(msg.sender);
        address _thisContract = address(this);
        require(_thisContract.balance > 0, "No money in wallet");
        _toOwner.transfer(_thisContract.balance);
    }
}
