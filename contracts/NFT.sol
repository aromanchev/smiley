// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract NFT is ERC721, Ownable {
    string public baseTokenURI;
    uint256 public constant PRICE = 0.00005 ether;

    struct Ruz1kNft {
        uint256 tokenId;
        uint256 price;
        address payable mintedBy;
    }

    mapping(address => uint256[]) public nftsOwner;
    mapping(uint256 => Ruz1kNft) public allNfts;
    mapping(uint256 => bool) public tokenIdExists;

    event MintNft(address senderAddress, uint256 nftToken);

    constructor(string memory baseURI) ERC721("RNFT", "NFT") {
        setBaseURI(baseURI);
    }

    function _baseURI() internal view virtual override returns (string memory) {
        return baseTokenURI;
    }

    function setBaseURI(string memory _baseTokenURI) public onlyOwner {
        baseTokenURI = _baseTokenURI;
    }

    function mintNft(uint256 _tokenId) public payable onlyOwner {
        require(msg.sender != address(0));
        require(!tokenIdExists[_tokenId]);
        _safeMint(msg.sender, _tokenId);
        emit MintNft(msg.sender, _tokenId);
        tokenIdExists[_tokenId] = true;
        Ruz1kNft memory newNft = Ruz1kNft(_tokenId, PRICE, payable(msg.sender));
        allNfts[_tokenId] = newNft;
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
        returns (Ruz1kNft memory)
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
