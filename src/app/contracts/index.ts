import transactionsAbi from './abi/Transactions.json';

export const transactionsContract = {
  address: process.env.REACT_APP_TRANSACTIONS_CONTRACT_ADDRESS,
  abi: transactionsAbi,
};
