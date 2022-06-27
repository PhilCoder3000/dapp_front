import { ethers } from 'ethers';
import { getTransactionContract } from 'features/api/contract/getContracts';

const { ethereum } = window;

type Value = {
  addressTo: string;
  amount: string;
  keyword: string;
  message: string;
};

export const sendTransaction = async (
  { addressTo, amount, keyword, message }: Value,
  from: string,
) => {
  const contract = await getTransactionContract();
  const value = ethers.utils.parseEther(amount)._hex;
  await ethereum.request({
    method: 'eth_sendTransaction',
    params: [
      {
        from,
        to: addressTo,
        gas: '0x5208',
        value,
      },
    ],
  });
  const transactionHash = await contract?.addToBlockchain(
    addressTo,
    amount,
    message,
    keyword,
  );
  console.log('🚀 Pending transaction');
  await transactionHash?.wait();
  console.log('🚀 Success transaction');
  const count = await contract?.getTransactionCount();
  console.log(
    '🚀 ~ file: sendTransaction.ts ~ line 37 ~ func ~ count',
    count?.toNumber(),
  );
};
