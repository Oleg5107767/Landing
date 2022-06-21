import CustomButton from '../customButton/CustomButton';
import {Grid, Paper, Container, Typography, Box} from '@material-ui/core';
import Image from '../../img/pexels-alexandr-podvalny-1227513.jpeg'
import {handleAnchor} from '../helper/Helper';

import {  makeStyles,  } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  
    bg: {
      position: 'relative',
      color: theme.palette.common.white,
      width: '100%',
      height: '650px',
      backgroundColor: "transparent",
      backgroundImage: `url(${Image})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '218.5% 260%',
      backgroundPosition: '50% 80%',
      marginTop: theme.spacing(7.5),
    },

    overlay: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0.9)',
      opacity: '0.53',
    },

    contnent: { 
      position: 'relative',
      marginTop:  theme.spacing(20.5),
        "& .MuiTypography-h4": {
          fontSize: '40px',
          lineHeight: '40px',
        },
        "& .MuiTypography-body1": {
          fontSize: '16px',
          lineHeight: '26px',
        },
        "& :first-child.MuiGrid-item ": {
          width: '380px',
          height: '80px',
          marginBottom:  theme.spacing(2.6),
        },
        "& :nth-child(2).MuiGrid-item": {
          width: '380px',
          height: '156px',
          marginBottom:  theme.spacing(4),
        },
    },
    [theme.breakpoints.only('xs')]: {
      bg: {
        height: '500px',
        backgroundSize:' 342.6% 164.8%',
        backgroundPosition: '51.2% 98.7%',
      },
      contnent: {
        marginTop:  theme.spacing(5),
          "& :first-child.MuiGrid-item ": {
            width: '328px',
            height: '120px',
          },
          "& :nth-child(2).MuiGrid-item": {
            width: '328px',
            height: '182px',
          },
      }
    },
    [theme.breakpoints.only('sm')]: {
      bg: {
        height: '500px',
        backgroundSize:' 342.6% 164.8%',
        backgroundPosition: '51.2% 98.7%',
      },
      contnent: {
        marginTop:  theme.spacing(11.175),
      }
    },
    [theme.breakpoints.only('md')]: {
      bg: {
        backgroundSize:' 342.6% 164.8%',
        backgroundPosition: '51.2% 98.7%',
      },
      contnent: {
        "& :last-child.MuiGrid-item ": {
          marginTop: theme.spacing(3.9),
        },
      }
    },
    [theme.breakpoints.only('xl')]: {
      bg: {
        width: '1170px',
        backgroundSize: '218.5% 260%',
        backgroundPosition: '50% 80%',
      }
    }
  }));

const Preview = () => {

    const classes = useStyles();

    return (
      <Box 
        display="flex"
        justifyContent="center"
      >
        <Paper className={classes.bg} >
          <Container fixed >
                <div className={classes.overlay}></div>
                <Grid 
                  container 
                  justifyContent="center" 
                  alignItems="center"
                >
                  <div className={classes.contnent}>
                    <Grid item >
                      <Typography
                          component="h1"
                          variant="h4"
                          color="inherit"
                          align="center"
                      >
                        Test assignment for front-end developer
                      </Typography>
                    </Grid> 
                    <Grid item>
                      <Typography
                        component="h5"
                        color="inherit"
                        align="center"
                      >
                        What defines a good front-end developer is one that has skilled knowledge of HTML, CSS,
                        JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind.
                        They should also be excited to learn, as the world of Front-End Development keeps evolving.
                      </Typography>
                    </Grid>
                    <Grid item >
                      <CustomButton onClick={() => handleAnchor("#back-to-form")}/>
                    </Grid>
                  </div> 
                </Grid>
          </Container>
        </Paper>
      </Box>       
    )
}

export default Preview;