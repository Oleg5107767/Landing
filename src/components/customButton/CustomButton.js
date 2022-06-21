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
      '&$disabled': {
        color: 'white',
        background: '#B4B4B4',
      },
    },
    disabled: {},
  });

function CustomButton(props) {
    const classes = useStyles();
    const label = props.children || 'Sign up';

    const {disabled, ...other} = props;
    return(
        <>
            <Button 
              classes={{
                root: classes.root,
                disabled: classes.disabled,}}
              children={label} 
              disabled={disabled } 
              onClick={props.onClick}
              {...other}
              >
            </Button>  
        </>
    )
}

export default CustomButton;