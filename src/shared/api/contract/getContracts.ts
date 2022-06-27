import { transactionsContract } from 'app/contracts';
import { Transactions } from 'app/contracts/types/Transactions';
import { ethers } from 'ethers';

const { ethereum } = window;

export const getTransactionContract = async () => {
    const provider = await new ethers.providers.Web3Provider(ethereum);
    const signer = await provider.getSigner();
    if (!transactionsContract.address) {
      throw new Error("Missing transactions contract address");
    }
    const contract = await new ethers.Contract(
      transactionsContract.address,
      transactionsContract.abi.abi,
      signer,
    );
    return contract as Transactions;
};
