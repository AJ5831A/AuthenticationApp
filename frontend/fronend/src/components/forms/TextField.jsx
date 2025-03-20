import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import '/Users/aryanjakhar/Desktop/Authentication/frontend/fronend/src/App.css';  // ✅ Fixed CSS import
import {Controller} from 'react-hook-form';


export default function CustomTextField({ label , name , control }) {  // ✅ Fixed Naming Conflict
  return (

      <Controller 
        name={name}
        control={control}
        render={({
          field : {onChange , value},
          fieldState : {error},
          formState,
        })=>(      
            <TextField 
            id="outlined-basic" 
            onChange={onChange}
            value={value}
            label={label}
            variant="outlined"
            className="myform"
            error={!!error}
            helperText={error?.message}
            />
    )}
    />
  );
}
