import React from 'react';
import {TextField }from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    input: {
        '& .MuiInputBase-root':{
            width: '380px',  
            height:' 54px',
        },
        '& .MuiFormHelperText-root': {
            fontSize: '12px',
            fontWeight: 400,
            lineHeight: '14px'
        },
        '& .MuiFormHelperText-contained': {
            marginLeft: theme.spacing(2),
            marginTop: theme.spacing(0.5)
        }
    },


    
}));


const InputForm = (props) => {
    
    const {helperText, name, value,type,InputProps,error=null, onChange,placeholder } = props;
    const classes = useStyles();
 
    return(
        <TextField 
            className={classes.input}
            InputProps={InputProps}
            helperText={helperText}
            id="outlined-basic"
            variant="outlined" 
            type={type}
            name={name}
            placeholder={placeholder} 
            value={value}
            onChange={onChange}
            {...(error && {error: true, helperText: error})}
        />
    )
}

export default InputForm;