import Web3 from 'web3';
import NFTContract from '../artifacts/contracts/NFT.sol/NFT.json';
import { contractAddress } from '../contract-address';

export const useWeb3 = () => {
  const { ethereum, web3: web3Provider } = window;

  const getAccount = async () => {
    if (!!ethereum) {
      return await ethereum
        .request({ method: "eth_requestAccounts" })
        .then((account) => account[0])
    }
  }

  const getContract = async () => {
    if (!!web3Provider) {
      const web3 = new Web3(ethereum);
      const contract = await new web3.eth.Contract(
        NFTContract.abi,
        contractAddress
      );
      return await contract.methods;
    }
  }

  return {
    getAccount,
    getContract
  }

};
