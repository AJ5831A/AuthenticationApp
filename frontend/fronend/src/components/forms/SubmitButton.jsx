import * as React from 'react';
import Button from '@mui/material/Button';

export default function SubmitButton({label , type}) {
  return (
    
      <Button type={type} variant="contained" className={'myform'}>{label}</Button>
 
  );
}
