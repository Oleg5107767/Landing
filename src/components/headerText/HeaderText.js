import React from "react";
import { Typography} from "@material-ui/core";
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles({
    root: {
        fontSize: '40px',
        lineHeight: '40px',
    },
  });

const HeaderText = (props) => {

    const classes = useStyles();

    const label = props.children;

    const {...other} = props;
    
    return(

        <Typography 
            className={classes.root}
            component="h1"
            variant="h4"
            children={label} 
            {...other}
        />
    )
}
export default HeaderText;