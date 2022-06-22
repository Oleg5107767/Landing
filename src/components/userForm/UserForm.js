import React from 'react';
import {useForm, Form} from "../useForm/useForm";
import useService from '../../service/Service';
import InputForm from '../inputForm/InputForm';
import RadioForm from '../radioForm/RadioForm';
import UploadPhotoForm from '../uploadPhotoForm/UploadPhotoForm';
import CustomButton from '../customButton/CustomButton';
import HeaderText from '../headerText/HeaderText';
import Img from '../../img/success.svg';
import Spinner from '../spinner/Spinner';
import {Container, Grid, Box}from "@material-ui/core";

import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    wraperForm: {
        padding: theme.spacing(17.525, 5.6875, 12.5, 5.6875 )
    },
    formHead: {
        fontSize: '40px',
        lineHeight: '40px',
        margin: theme.spacing(0, 'auto', 6.25, 'auto'),
 
    },
    containerInp: {
        gap: '50px',
    },
    noteArrow: {
        "&::-webkit-outer-spin-button, &::-webkit-inner-spin-button": {
            "-webkit-appearance": "none",
            display: "none"
        },
        "-moz-appearance": "textfield"
    },
    radio: { 
           textAlign: 'left',
           marginTop: '30px',
    },
      [theme.breakpoints.only('xs')]: {
        wraperForm: {
            padding: theme.spacing(17.525, 2, 12.5, 2 )
        },
        formHead: {
            margin: theme.spacing(0, 'auto', 6.25, 'auto'),
        }
    },
    [theme.breakpoints.only('sm')]: {
        wraperForm: {
            padding: theme.spacing(17.525, 3, 12.5, 3 )
        },
    }
    
}));

const initialValue ={
    name: '',
    email: '',
    phone: '',
    photo: null,
    position_id: null
}


const UserForm = () => {

    const classes = useStyles();
    

    const {
        values, 
        handleChange,
        validatePhoto,
        handleSelectPhoto, 
        handleSumbit,  
        errors,
        success,
        disabledSingUp 
    } = useForm(initialValue, true);

    const {loading} = useService();


    const renderForm = () => {
        return(
            <Form> 
                <Grid 
                    container
                    direction="column"
                >
                    <Grid 
                        className={classes.containerInp }
                        container
                        direction="column"
                    >
                    <Grid item>
                        <InputForm
                            placeholder="Your name"
                            name="name"
                            value={values.name}
                            onChange={handleChange}
                            error={errors.name} 
                        />
                    </Grid>
                    <Grid item>
                        <InputForm 
                            placeholder="Email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            error={errors.email}
                        />
                    </Grid>
                    <Grid item>
                        <InputForm 
                            InputProps={{ classes: { input: classes.noteArrow }}}
                            helperText="+38 (XXX) XXX - XX - XX" 
                            type="number"
                            placeholder="Phone"

                            name="phone"
                            value={values.phone}
                            onChange={handleChange}
                            error={errors.phone}
                        />
                    </Grid>
                    </Grid>
                    <Grid item   className={classes.radio} >
                        <RadioForm 
                            name="position_id" 
                            label="Select your position"
                            value={values.position_id} 
                            handleChange={handleChange}
                            error={errors.position_id}
                        />
                    </Grid>
                    <Grid item>
                        <UploadPhotoForm
                            validatePhoto={validatePhoto}
                            children={values.photo_name || 'Upload your photo' }
                            handleSelectPhoto={handleSelectPhoto}
                            value={values.photo} 
                            error={errors.photo}
                        />
                    </Grid>
                    <Grid item>
                        <Box pt={'50px'} pb={'50px'}>
                        <CustomButton  
                            onClick={(e) => handleSumbit(e)}
                            disabled={disabledSingUp}
                        />
                        </Box>
                    </Grid>
                </Grid>
            </Form>    
        )
    }
console.log(disabledSingUp)
    const spinner = loading ? <Spinner/> : null;
    const successImg = <img src={Img}/>;
    const formContent = success ? successImg : renderForm();
    return(
        <Container 
            id="back-to-form"
            className={classes.wraperForm}
            disableGutters={ false }
            justifyContent="center"
            alignItems="center"
        >
            <HeaderText
                className={classes.formHead}
                children={success? "User successfully registered" : "Working with POST request"}
            />
            {formContent}
            {spinner}
        </Container>
    )
}
    
export default UserForm;
