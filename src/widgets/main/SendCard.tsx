import { Box, BoxProps, Button, styled } from '@mui/material';
import React, { useState } from 'react';
import { StTextField } from 'shared/ui/fields/StTextField';
import SendIcon from '@mui/icons-material/Send';

type Values = {
  addressTo: string;
  amount: string;
  keyword: string;
  message: string;
};

interface StBoxProps extends BoxProps {}

const StBox = styled(Box)<StBoxProps>(({ theme }) => ({
  margin: '100px auto',
  padding: '30px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  background: theme.palette.secondary.dark,
  borderRadius: '20px',
  '& > div': {
    marginBottom: '20px',
  }
}));

export function SendCard() {
  const [values, setValues] = useState<Values>({} as Values);
  return (
    <StBox>
      <StTextField
        label="Address to"
        variant="outlined"
        value={values.addressTo}
        onChange={(e) =>
          setValues((prev) => ({ ...prev, addressTo: e.target.value }))
        }
      />
      <StTextField
        label="Amount (ETH)"
        variant="outlined"
        value={values.amount}
        onChange={(e) =>
          setValues((prev) => ({ ...prev, amount: e.target.value }))
        }
      />
      <StTextField
        label="Keyword (Gif)"
        variant="outlined"
        value={values.keyword}
        onChange={(e) =>
          setValues((prev) => ({ ...prev, keyword: e.target.value }))
        }
      />
      <StTextField
        label="Enter message"
        variant="outlined"
        value={values.message}
        multiline 
        onChange={(e) =>
          setValues((prev) => ({ ...prev, message: e.target.value }))
        }
      />
      <Button variant="contained" color="secondary" size="large" endIcon={<SendIcon />}>
        Send
      </Button>
    </StBox>
  );
}
