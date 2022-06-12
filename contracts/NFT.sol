// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract NFT is ERC721, Ownable {
    string public baseTokenURI;

    struct Ruz1kNft {
        uint256 tokenId;
        uint256 price;
        address payable mintedBy;
    }

    mapping(address => uint256[]) public nftsOwner;
    mapping(uint256 => Ruz1kNft) public allNfts;

    event MintNft(address senderAddress, uint256 nftToken);

    constructor(string memory _baseURI) ERC721("Ruz1kNFT", "NFT") {
        setBaseURI(_baseURI);
    }

    function baseURI() internal view virtual returns (string memory) {
        return baseTokenURI;
    }

    function setBaseURI(string memory _baseTokenURI) public onlyOwner {
        baseTokenURI = _baseTokenURI;
    }

    function mintNft(uint256 _tokenId, uint256 _price)
        public
        payable
        onlyOwner
    {
        _safeMint(msg.sender, _tokenId);
        emit MintNft(msg.sender, _tokenId);
        Ruz1kNft memory newNft = Ruz1kNft(
            _tokenId,
            _price,
            payable(msg.sender)
        );
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
