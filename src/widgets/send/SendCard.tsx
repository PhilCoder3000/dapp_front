import { Box, BoxProps, Button, styled } from '@mui/material';
import React, { useState } from 'react';
import { StTextField } from 'shared/ui/fields/StTextField';
import SendIcon from '@mui/icons-material/Send';
import { FaEthereum } from 'react-icons/fa';
import { sendTransaction } from 'shared/api/contract/sendTransaction';
import { useAppSelector } from 'shared/hooks/redux';

interface StBoxProps extends BoxProps {}

const StBox = styled(Box)<StBoxProps>(({ theme }) => ({
  position: 'relative',
  margin: 'auto',
  padding: '30px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  background: theme.palette.secondary.dark,
  borderRadius: '20px',
  '& > div': {
    marginBottom: '20px',
  },
}));

const StFaEthereum = styled(FaEthereum)(() => ({
  position: 'absolute',
  top: '20%',
  left: '100px',
  height: '50%',
  width: 'auto',
}));

const initValues = {
  addressTo: '',
  amount: '',
  keyword: '',
  message: '',
}
export function SendCard() {
  const { transactions } = useAppSelector()
  const [values, setValues] = useState(initValues);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  
  const submitHandler = async (e: React.FormEvent<HTMLDivElement>) => {
    e.preventDefault();
    await sendTransaction(values, transactions.accountAddress)
    setValues(initValues)
  };

  return (
    <StBox component="form" onSubmit={submitHandler}>
      <StFaEthereum />
      <StTextField
        label="Address to"
        variant="outlined"
        value={values.addressTo}
        onChange={handleChange}
        name="addressTo"
        required
      />
      <StTextField
        label="Amount (ETH)"
        variant="outlined"
        value={values.amount}
        onChange={handleChange}
        name="amount"
        type="number"
        required
      />
      <StTextField
        label="Keyword (Gif)"
        variant="outlined"
        value={values.keyword}
        onChange={handleChange}
        name="keyword"
      />
      <StTextField
        label="Enter message"
        variant="outlined"
        value={values.message}
        multiline
        onChange={handleChange}
        name="message"
      />
      <Button
        variant="contained"
        size="large"
        type="submit"
        endIcon={<SendIcon />}
      >
        Send
      </Button>
    </StBox>
  );
}
