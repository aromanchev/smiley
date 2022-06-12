import Web3 from 'web3';
import NFTContract from '../../artifacts/contracts/NFT.sol/NFT.json';
import { contractAddress } from '../../contract-address';

export const useWeb3 = () => {
  const { ethereum } = window;
  const web3 = new Web3(ethereum);
  const contract = new web3.eth.Contract(
    NFTContract.abi,
    contractAddress
  );

  const getAccount = async () => {
    if (!!ethereum) {
      return await ethereum
        .request({ method: "eth_requestAccounts" })
        .then((account) => account[0])
    }
  }

  const mint = async (tokenId) => {
    const wallet = await getAccount();
    return await contract.methods.mintNft(tokenId, 1)
    .send({from: wallet, value: web3.utils.toWei("0.000005", "ether")})
    .on('receipt', (data) => console.log('transaction success', data))
    .on('erorr', err => console.err(err));
  }

  return {
    getAccount,
    mint
  }
};

