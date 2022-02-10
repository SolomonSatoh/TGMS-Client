
import React from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import { Formik, Form, ErrorMessage, Field } from 'formik'
import * as Yup from 'yup'

const Signup = () => {
    const paperStyle = { padding: 20, width: 300, margin: "0 auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }

    const btnstyle = { margin: '8px 0' }
    
    const initialValues = {
        name: '',
        email : '',
        phone: '',
        password: '',
        confirmPassword: ''
        
    }
    const PASSWORD_REGEX = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;

    const validationSchema = Yup.object().shape({
        name : Yup.string().required('Required'),
        email : Yup.string().email('Enter valid email').required('Required'),
        phone : Yup.string().required("Required").min(10,"Phone # should contain 10 digits").max(10,"Phone # should contain 10 digits"),
        password: Yup.string().matches(PASSWORD_REGEX,'Password must contain atleast a digit and special character').required(),
        confirmPassword: Yup.string().when('password', {
            is: val => ( val && val.length > 0 ? true : false),
            then: Yup.string().oneOf([Yup.ref('password')],'Password does not match')
        })
    })


    const onSubmit = (values, props) => {
        console.log(values)
        setTimeout(() => {
            props.resetForm()
            props.setSubmitting(false)
        }, 2000)

    }

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
<<<<<<< HEAD
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
                    <Button type='submit' variant='contained' color='primary' onClick={() => {history.push("login");}}>Sign up</Button>
                </form>
=======

                <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                    {(props) => (
                        <Form>
                            <Field as={TextField} label='name' name="name"
                                placeholder='Enter username' fullWidth required
                                helperText={<ErrorMessage name="name" />}
                            />
                            <Field as={TextField} label='Email' name="email"
                                placeholder='Enter Email' type='email' fullWidth required
                                helperText={<ErrorMessage name="email" />}
                             />
                            <Field as={TextField} label='Phone Number' name="phone"
                                placeholder='Enter Phone Number' type='phone' fullWidth required
                                helperText={<ErrorMessage name="phone" />} 
                            />
                            <Field as={TextField} label='Password' name="password"
                                placeholder='Enter password' type='password' fullWidth required
                                helperText={<ErrorMessage name="password" />} 
                            />
                            <Field as={TextField} label='Confirm Password' name="confirmPassword"
                                placeholder='Confirm password' type='password' fullWidth required
                                helperText={<ErrorMessage name="confirmPassword" />} 
                            />

                            <Button type='submit' color='primary' variant="contained" disabled={props.isSubmitting}
                                style={btnstyle} fullWidth>{props.isSubmitting ? "Loading" : "Sign Up"}</Button>
                        </Form>
                    )} 
                </Formik>

>>>>>>> 7ac5f9f008c600b3af5ed7a16e5b6e8f3cc6fe1d
            </Paper>
        </Grid>
    )
}

export default Signup;