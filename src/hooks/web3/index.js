import { ethers } from "ethers";

import NFTContract from "../../artifacts/contracts/NFT.sol/SmileyNFT.json";
import { contractAddress } from "../../contract-address";

export const useWeb3 = () => {
  const { ethereum } = window;
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const contract = new ethers.Contract(
    contractAddress,
    NFTContract.abi,
    signer
  );

  const getAccounts = async () => {
    return await provider.listAccounts();
  }

  const getAccount = async () => {
    const accounts = await getAccounts();
    if (accounts.length) {
      return;
    }
    return await ethereum
      .request({ method: "eth_requestAccounts" })
      .then((account) => {
        account[0];
      })
      .catch((err) => err);
  };

  const mint = async (tokenId) => {
    return await contract
      .mintNft(tokenId, { value: ethers.utils.parseEther("0.00005") })
      .then((data) => data)
      .catch((err) => err);
  };

  const isConnected = async () => {
    const addresses = await provider.listAccounts();
    return !!addresses.length;
  };

  return {
    isConnected,
    getAccount,
    getAccounts,
    mint,
  };
};
