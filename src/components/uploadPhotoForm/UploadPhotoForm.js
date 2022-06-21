import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import {Button, Grid, TextField, FormHelperText} from '@material-ui/core';



const useStyles = makeStyles((theme) =>({
  root: {
   marginTop: '43px'
  },
  hideInput: {
    display: 'none',
  },
  btnUpload: {
      width: '83px',
      height: '54px',
      backgroundColor: 'white',
      boxShadow: 'none',
      border: '1px solid black',
      borderRadius: "5px 0px 0px 5px",
      textTransform: "none",
      backgroundColor: "#f8f8f8",
      fontSize: '1rem',
      float: "left",
    },
  inputUpload: {
      pointerEvents:  "none",
      textTransform: 'none',
      color: 'rgb(118, 118, 118)',
      backgroundColor: "#f8f8f8",
      fontSize: '16px', 
      float: "right",
      '& .MuiInputBase-root': {
        width: '297px',
        height: '54px',
        borderRadius: "0px 5px 5px 0px",
      },   
  },

  helperText: {
    width: 'auto',
    height: '14px',
    fontSize: '12px',
    fontWeight: 400,
    lineHeight: '14px',
  },
  activeError: {
    borderColor: '#f44336',
    color: '#f44336',
    '& .MuiOutlinedInput-notchedOutline ': {
      borderColor: '#f44336',
    }
  },
  noBorder: {
    borderLeft: 'none',
  },

}));



const UploadPhotoForm = (props) => {

    const {name,value, handleSelectPhoto, error=null } = props;
    const label = props.children ;
    
    const classes = useStyles();

    //console.log(error)
    return(
            <Grid 
              container 
              direction="column" 
              >
              <Grid 
                container 
                direction="row" 
                className={classes.root}
                justifyContent="center"
              >
                <Grid  item xs={3}   >
                  <input
                      accept="image/jpg, image/jpeg"
                      className={classes.hideInput}
                      id="contained-button-file"
                      multiple
                      type="file"
                      onChange={handleSelectPhoto}
                  />
                  <label htmlFor="contained-button-file">
                      <Button
                        className={error ? `${classes.btnUpload} ${classes.activeError}` : classes.btnUpload } 
                        variant="contained" 
                        component="span"
                        children='Upload'
                      />

                  </label>
                </Grid>
                <Grid item xs={9}    >
                  <TextField
                    className={error ? `${classes.inputUpload} ${classes.activeError}` : classes.inputUpload } 
                    placeholder={label}
                    id="outlined-basic"
                    variant="outlined" 
                    InputProps={{
                      classes:{notchedOutline:classes.noBorder}
                    }}
                  />
                </Grid>
            </Grid>
            <Grid item>
              {error && <FormHelperText className={classes.helperText} variant="outlined" error={error}>{error}</FormHelperText>}
            </Grid>
          </Grid>
    )
}

export default UploadPhotoForm;