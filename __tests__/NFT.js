const { expect } = require("chai");
const { ethers } = require("hardhat");

const { BASE_TOKEN_URI } = process.env;

describe("Testing NFT smart contract", () => {
  let owner;
  let bob;
  let nftContract;

  beforeEach(async () => {
    [owner, bob] = await ethers.getSigners();
    const NFT = await ethers.getContractFactory("SmileyNFT");
    nftContract = await NFT.deploy(BASE_TOKEN_URI);
  });

  it("should return default base token uri", async () => {
    expect(await nftContract.baseTokenURI()).to.equal(BASE_TOKEN_URI);
  });

  it("should pass when owner want mint", async () => {
    await nftContract.mintNft(1);
    expect(await nftContract.allNfts(1)).to.have.keys([
      "0",
      "1",
      "2",
      "3",
      "4",
      "mintedBy",
      "owner",
      "previousOwner",
      "price",
      "tokenId",
    ]);
  });
});
