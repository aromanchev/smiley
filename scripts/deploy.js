const hre = require("hardhat");
const { writeFileSync } = require("fs");

const { BASE_TOKEN_URI } = process.env;

async function deploy() {  
  
  const [owner] = await hre.ethers.getSigners();

  const contractFactory = await hre.ethers.getContractFactory("SmileyNFT");

  const contract = await contractFactory.deploy(BASE_TOKEN_URI);

  await contract.deployed();

  const config = `export const contractAddress = "${contract.address}"`;
  const data = JSON.stringify(config);
  writeFileSync('src/contract-address.ts', JSON.parse(data));

  console.log("Contract deployed to:", contract.address);
}


deploy()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
