const hre = require("hardhat");
const { BASE_TOKEN_URI } = process.env;

async function deploy() {  
  const [owner] = await hre.ethers.getSigners();

  const contractFactory = await hre.ethers.getContractFactory("NFT");

  const contract = await contractFactory.deploy(BASE_TOKEN_URI);

  await contract.deployed();

  console.log("Contract deployed to:", contract.address);
}


deploy()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
