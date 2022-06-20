import  React from 'react';
import {AppBar, Toolbar, Box } from '@material-ui/core';
import CustomButton from '../customButton/CustomButton';

import Logo from '../../img/logo.svg';

import { makeStyles } from '@material-ui/core/styles';






const useStyles = makeStyles((theme) => ({
  
  wrap: {
    display: "flex" ,
    flexWrap: "nowrap",
    gap: '10px'
  },

  appBar: {
    boxShadow: 'none',
    backgroundColor: 'grey'
  },

  toolbar: {
    minHeight: 60,
  },

 
}));

const AppHeader = (props) => {

  const classes = useStyles();

    
  return (
            <AppBar position="absolute" color="inherit" className={classes.appBar}>
                <Toolbar 
                  className={classes.toolbar}
                  > 
                    <Box 
                      display="flex"
                      justifyContent="flex-start"
                      alignItems="center"
                      flexGrow={1}
                    >
                      <Box pt={0.625}>
                        <img src={Logo}/>
                      </Box>   
                    </Box>
                      <Box  
                        className={classes.wrap}
                        alignItems="center"
                      >
                        <Box>
                          <CustomButton children={"Users"} />
                        </Box>
                        <Box>
                          <CustomButton />
                        </Box>
                      </Box>
                </Toolbar> 
            </AppBar>  
  );
}

export default AppHeader;