const { expect } = require("chai");
const { ethers } = require("hardhat");

const { BASE_TOKEN_URI } = process.env

describe("Testing NFT smart contract", () => {
  let owner;
  let nftContract;
  
  beforeEach(async () => {

    [owner] = await ethers.getSigners();
    const NFT = await ethers.getContractFactory("NFT");
    nftContract =  await NFT.deploy(BASE_TOKEN_URI)

  });

  describe("Base token uri tests", () => {
    it("Get base token uri", async () => {
      expect(await nftContract.baseTokenURI()).to.equal(BASE_TOKEN_URI);
    });
    
    it("Set base token uri", async () => {
      const setBaseURITx = await nftContract.setBaseURI('Test');
      await setBaseURITx.wait();
      expect(await nftContract.baseTokenURI()).to.equal('Test');
    });
  })
});
