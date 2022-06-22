import  React from 'react';
import {AppBar, Toolbar, Box } from '@material-ui/core';
import CustomButton from '../customButton/CustomButton';
import {handleAnchor} from '../helper/Helper'
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
  },

  toolbar: {
    minHeight: 60,
  },
  [theme.breakpoints.only('sm')]: {
    toolbar: {
      paddingLeft: '32px',
      paddingRight: '32px',
    }
  },

  [theme.breakpoints.only('md')]: {
    toolbar: {
      paddingLeft: '60px',
      paddingRight: '60px',
    }
  },
  
  [theme.breakpoints.only('xl')]: {
    toolbar: {
      paddingLeft: '695px',
      paddingRight: '695px',
    }
  }
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
                          <CustomButton children={"Users"} children={"Users"} onClick={() => handleAnchor("#back-to-user")}/>
                        </Box>
                        <Box>
                          <CustomButton onClick={() => handleAnchor("#back-to-form")}/>
                        </Box>
                      </Box>
                </Toolbar> 
            </AppBar>  
  )
}

export default AppHeader;