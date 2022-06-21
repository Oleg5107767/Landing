import React,{useState} from "react";
import useService from "../../service/Service";
import { makeStyles } from '@material-ui/core/styles';





export  function useForm(initialValue, validateOnChange= false){

    const [values, setValues] = useState(initialValue);
    const [errors, setErrors] = useState({});
    const [success, setSuccess ] = useState(false);
    const [disabledSingUp, setDisabledSingUp] = useState(true);
    const {createUser} = useService();


    const handleChange = (e) => {

       const {name,value} = e.target;

        setValues({
            ...values,
            [name]: name === 'position_id' ? Number(value) : value,
           
        })
        if(validateOnChange)
        validate({[name]: value})
    }
    
    const handleSelectPhoto = (e) => {

      let img = new Image()

      img.src = window.URL.createObjectURL(e.target.files[0]);

        img.onload = function() {
            setValues({
                ...values,
                photo: e.target.files[0],
                photo_name: e.target.files[0].name,
                photo_width: img.width,
                photo_height: img.height
            })
            if(validateOnChange)
            validate({photo: e.target.files[0]})
        }; 
    }



    const validate = (nameValues = values) => {

        let temp = {...errors}

        function validatePhoto(){

            if(nameValues.photo == null){
                return'Choose your photo'
            }else if(nameValues.photo_width < 70 && nameValues.photo_height  < 70){
                return 'Height and Width must not exceed 70px'
            }else if(nameValues.photo.size / 1024**2 > 1){
                return 'Photo must be less than 5 mb'
            }
        }

        if("name" in nameValues)
            temp.name =  nameValues.name.length < 2 ? 'Not enough symbols': '' || nameValues.name.length > 60 ? 'Many symbols': '';
        if("email" in nameValues)
            temp.email = (/^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/).test(nameValues.email) ? '': 'Email is not valid';
        if("phone" in nameValues)
            temp.phone = (/^[\+]{0,1}380([0-9]{9})$/).test(nameValues.phone) ? '': '+38 (XXX) XXX - XX - XX';
        if("position_id" in nameValues)
            temp.position_id = !nameValues.position_id ? 'Please select your position': '';
        if("photo" in nameValues)
            temp.photo = validatePhoto()

        setErrors({
                ...temp
            })
            if(nameValues == values)
                return Object.values(temp).every(x => x == "")
                const validForm = Object.values(values).every(value => value !== '' || null)
                setDisabledSingUp(!validForm)
    }

    const handleSumbit = () => {

        const {position_id, name, email, phone, photo } = values ;
        
        const formData = new FormData();
        formData.append('position_id', position_id);
        formData.append('name', name);
        formData.append('email', email);
        formData.append('phone',`+${phone}`);
        formData.append('photo', photo);
        createUser(formData);
       
        setSuccess(true)
    }

    return { 
        values, 
        setValues, 
        handleChange, 
        handleSelectPhoto,
        errors, 
        handleSumbit,
        success,
        disabledSingUp  
    }
    
}


const useStyles = makeStyles((theme) => ({
    root: {
        display:"inline-flex",
       '& .MuiOutlinedInput-input':{
           padding: theme.spacing(2),
       },
        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
           borderColor: 'black',
           
        },
        '& .MuiFormLabel-root.Mui-focused': {
            color: 'black'
        },
    }
    
}));

export  function Form(props){

    const classes = useStyles();

    const {children, ...other} = props;

    return(
        <form className={classes.root } autoComplete="off" {...other} >
            {props.children}
        </form>
    )
}