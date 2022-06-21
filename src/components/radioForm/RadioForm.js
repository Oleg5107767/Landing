import React from "react";
import useService from "../../service/Service";
import { useEffect, useState } from "react";
import {RadioGroup, Radio, FormControl, FormControlLabel, FormLabel, FormHelperText } from '@material-ui/core';


import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root:{
        '& .MuiFormControlLabel-root': {
            marginBottom: '3.5px',
            marginTop: '3.5px',
            height: '26px',

        },
        '& .MuiTypography-body1': {
          lineHeight: '26px',
          fontSize: '16px',
        },
        "& .MuiFormLabel-root": {
            color: "black",

          },
          "& .MuiFormLabel-root.Mui-focused ": {
            color: "black"
          },
          "& .MuiFormLabel-root.Mui-error": {
            color: "#f44336"
          }
    },
    helperText: {
        fontSize: '12px',
        fontWeight: 400,
        lineHeight: '14px',
        marginLeft: theme.spacing(2),
        marginTop: theme.spacing(0.5)
    },
    legend: {
        marginBottom: '11.5px'
    },
    radio: {
        '&$checked': {
          color: '#00bdd3'
        }
      },
      checked: {}
  }));


const RadioForm = (props) => {
    const classes = useStyles();
    const{ name,label,value,error=null, handleChange } = props;

    const {getPositions} = useService();
    const [positions, setPositions] = useState([]);

    
    useEffect(() => {
        getPositions().then(positionsLoaded)
    },[])

    const positionsLoaded = (position) => {
        setPositions([...position])
    }
   
    return(
        <FormControl 
            className={classes.root} 
            error={error} 
            component="fieldset"
        >
            <FormLabel 
                component="legend"
                className={classes.legend}
            >   
                {label}
            </FormLabel>
                <RadioGroup  
                    name={name} 
                    value={value} 
                    onChange={handleChange}
                >
                    {
                        positions.map((item) =>(
                            <FormControlLabel 
                                key={item.id} 
                                value={item.id}
                                control={<Radio classes={{root: classes.radio, checked: classes.checked}} />} 
                                label={item.name}  
                            />
                            )
                        )
                    }
                </RadioGroup>
                {error && <FormHelperText className={classes.helperText} variant="outlined">{error}</FormHelperText>}
        </FormControl>
    )
}

export default RadioForm;