import React, { useState, useEffect } from 'react';
import useService from '../../service/Service';
import CustomButton from '../customButton/CustomButton';
import HeaderText from '../headerText/HeaderText';
import {Container, Grid,  Typography, Box }from '@material-ui/core';
import Spinner from '../spinner/Spinner';



import { makeStyles } from '@material-ui/core/styles';






const useStyles = makeStyles(theme => ({

    wraper: {
        padding: theme.spacing(17.5, 5.6875, 0, 5.6875 )
    },

    listHead: {
        fontSize: '40px',
        lineHeight: '40px',
        margin: theme.spacing(0, 'auto', 4.5, 'auto'),
    },

    listItem: {   
        backgroundColor: 'white',
        borderRadius: '10px',
        padding: theme.spacing(2.5),
        width: '242pxpx',
        height: '214px',
        fontSize: '16px',
        lineHeight: '26px',
        margin: theme.spacing(1.81),
    },
    

    avatar: {
        overflow: 'hidden',
        borderRadius: '50%',
    },

  textSpan: {
    cursor: 'pointer',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '26px'
  },
  
    containerBtn: {
        marginTop: theme.spacing(4.4),
        '& .makeStyles-root-8': {
            width: '120px',
        }
    },



  }));


const UsersList = (props) => {
    

    const [users, setUsers] = useState([]);
    const [newItemLoading, setNewItemLoading] = useState(false);
    const [count, setCount] =useState(6)
    const [userEnded, setUserEnded] =useState(false);

    const {getAllUser, loading} = useService();
    const classes = useStyles();

   

    useEffect(() => {
        onRequest(count);
    }, [])  

    const onRequest = (count) =>{
        getAllUser(count)
            .then(onUserListLoaded)
    }
    console.log(users)
    const onUserListLoaded = (newUsers) => {
        let ended = false;

        if (newUsers.length < 12 ){
            ended = true;
        }
        setUsers([...newUsers]);
        setNewItemLoading(false);
        setCount(count +6 );
        setUserEnded(ended);
    }

    const items = users.map( el => { 

        return(
            <Grid item xs={12} sm={6} md={4} lg={4} xl={4} key={el.id}>
                <Box className={classes.listItem}>
                    <img src={el.photo} className={classes.avatar}></img>
                    
                    <Typography
                        component="h5"
                        color="inherit"
                        align="center"
                    >
                        {el.name}
                    </Typography>
                    
                    <Typography
                        component="h5"
                        color="inherit"
                        align="center"
                    >
                        {el.position}
                    </Typography>
                    <Typography
                        component="h5"
                        color="inherit"
                        align="center"
                    >
                        {el.email}
                    </Typography>
                    <Typography
                        component="h5"
                        color="inherit"
                        align="center"
                    >
                        {el.phone}
                    </Typography> 
                </Box>
            </Grid>
        )
    })

    const spinner = loading ? <Spinner/> : null;

    return(
        <Container  
            id="back-to-user"
            disableGutters={false}
            className={classes.wraper}
        >
            <HeaderText 
                className={classes.listHead}
                children={"Working with GET request"} 
            />
            <Grid 
                container 
                alignItems="center"
            >
                {items}
                {spinner}
            </Grid>
            <Box  className={classes.containerBtn} >
                <CustomButton 
                    onClick={() => onRequest(count)}
                    children={"Show more"}
                /> 
            </Box>
        </Container>
    )
}

export default UsersList;