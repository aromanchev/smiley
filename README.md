# Smiley dApp

This is a dApp for selling my own nft, you can also clone and make your own collection of nft. You will need to customize your .env to do this. But first let's go through the other sections of this project. <br />
<img src="https://gateway.pinata.cloud/ipfs/QmVYmcdAk5vBVYz3Ts7g1ao8v6ERuqn2T7t9ZgaNphGAyn/logo.png" width="100%" alt="Smiley img"> <br />

## Dependencies

- [web3](https://www.npmjs.com/package/web3)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [@openzeppelin/contracts](https://www.npmjs.com/package/@openzeppelin/contracts)
- [ethers](https://www.npmjs.com/package/ethers)
- [hardhat](https://www.npmjs.com/package/hardhat)

## .env config

The .env file contains several important variables.

- `API_URL` - url of alchemy api or etc.
- `PRIVATE_KEY` - your wallet private key.
- `PUBLIC_KEY` - your wallet publick key.
- `ETHERSCAN_API` - you can work with your contract in etherscan. Check this [documentation](https://etherscan.io/register).
- `BASE_TOKEN_URI` - folder where all nft metadata lie.
- `REACT_APP_PINATA_CLOUD_URL` - base url for render nft images from pinata cloud. <br />

You can create your own collection, create new .env file and configure for yourself!

## web3 doc

You can read about implementation contract functions in react-app [here](./src/hooks/README.md).
