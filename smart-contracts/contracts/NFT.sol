//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract NFT is ERC721, Ownable {
    uint256 public constant nft_price = 0.00005 ether;
    string public baseTokenURI;

    mapping(address => uint256[]) nftsOwner;

    event MintNft(address senderAddress, uint256 nftToken);

    constructor(string memory baseURI) ERC721("simple nft", "NFT") {
        setBaseURI(baseURI);
    }

    function _baseURI() internal view virtual override returns (string memory) {
        return baseTokenURI;
    }

    function setBaseURI(string memory _baseTokenURI) public onlyOwner {
        baseTokenURI = _baseTokenURI;
    }

    function mintNft(uint256 _tokenId) public payable {
        require(msg.value >= nft_price);
        _safeMint(msg.sender, _tokenId);
        emit MintNft(msg.sender, _tokenId);
    }

    function _getNftsFromOwner(address _owner)
        external
        view
        returns (uint256[] memory)
    {
        return nftsOwner[_owner];
    }

    function withdraw() public payable onlyOwner {
        address payable _toOwner = payable(msg.sender);
        address _thisContract = address(this);
        require(_thisContract.balance > 0, "No money in wallet");
        _toOwner.transfer(_thisContract.balance);
    }
}
