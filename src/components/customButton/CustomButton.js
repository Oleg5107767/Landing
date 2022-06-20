import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    root: {
      height: '34px',
      width: '100px',
      background: '#F4E041',
      border: 'none',
      borderRadius: '80px',
      textAlign: 'center',
      textTransform: "none",
      fontSize: '16px',
      lineHeight:'26px',
 
    }
  });

function CustomButton(props) {
    const classes = useStyles();
    const label = props.children || 'Sign up';

    const {...other} = props;

    return(
        <>
            <Button 
              className={classes.root}
              children={label} 
              onClick={props.onClick}
              {...other}
              >
            </Button>  
        </>
    )
}

export default CustomButton;