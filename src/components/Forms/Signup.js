

import React from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import Radio from '@material-ui/core/Radio';
import * as Yup from 'yup'
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {useHistory } from 'react-router-dom';


const Signup = () => {
    const paperStyle = { padding: 20, width: 300, margin: "0 auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const marginTop = { marginTop: 5 }
    let history = useHistory();
    
    // const initialValues = {
    //     username: '',
    //     email : '',
    //     gender : '',
    //     phoneNumber: '',
    //     password: '',
    //     confirmPassword: ''
        
    // }
    // const validationSchema = Yup.object().shape({
        
    //         // firstName : string().required("Please enter you first name"),
    //         // lastName : string().required("Please enter your last name"),
    //         username : string().required("Please enter username").min(8, "username too short"),
    //         email : string().required("Please enter email").email("Invalid email"),
    //         gender : string().required("Enter your gender"),
    //         password : string().required("Enter password").min(8,"Password too short"),
    //         confirmPassword : string().required("Confirm your password").min(8,"Password too short")


    //     // username: Yup.string().email('please enter valid email').required("Required"),
    //     // email: Yup.string().email('please enter valid email').required("Required"),
    //     // gender: Yup.string().email('please enter valid email').required("Required"),
    //     // password: Yup.string().required("Required").min(8,"Password should contain atleast 8 characters")
    // })
    // const onSubmit = (values, props) => {
    //     console.log(values)
    //     setTimeout(() => {
    //         props.resetForm()
    //         props.setSubmitting(false)
    //     }, 2000)s

    // }

    return (
        <Grid className='login'>
            <Paper style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <AddCircleOutlineOutlinedIcon />
                    </Avatar>
                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                </Grid>
                <form>
                    <TextField fullWidth label='Name' placeholder="Enter your name" />
                    <TextField fullWidth label='Email' placeholder="Enter your email" />
                    <FormControl component="fieldset" style={marginTop}>
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup aria-label="gender" name="gender" style={{ display: 'initial' }}>
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                        </RadioGroup>
                    </FormControl>
                    <TextField fullWidth label='Phone Number' placeholder="Enter your phone number" />
                    <TextField fullWidth label='Password' placeholder="Enter your password"/>
                    <TextField fullWidth label='Confirm Password' placeholder="Confirm your password"/>
                    <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label="I accept the terms and conditions."
                    />
                    <Button type='submit' variant='contained' color='primary' onClick={() => {history.push("/");}}>Sign up</Button>
                </form>
            </Paper>
        </Grid>
    )
}

export default Signup;