

import React from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { yellow } from '@material-ui/core/colors';

const AddStaff = ({ handleChange }) => {

    const paperStyle = { padding: 30, height: '73vh', width: 300, margin: "0 auto",  }
    const avatarStyle = { backgroundColor: '#008000' }
    const btnstyle = { margin: '8px 0' }
    const initialValues = {
        username: '',
        password: '',
        email : '',
        phone : '',
        address: '',
        tollName : '',
        
    }
    const validationSchema = Yup.object().shape({
        username: Yup.string().required("Required").min(8, 'Username should contain atleast 8 characters '),
        password: Yup.string().required("Required").min(8,"Password should contain atleast 8 characters"),
        email: Yup.string().email('Enter valid email').required("Required"),
        phone : Yup.string().required("Required").min(10,"Phone # should contain 10 digits").max(10,"Phone # should contain 10 digits"),
        address : Yup.string().required("Required"),
        tollName : Yup.string().required("Required")
    })
    const onSubmit = (values, props) => {
        console.log(values)
        setTimeout(() => {
            props.resetForm()
            props.setSubmitting(false)
        }, 2000)

    }
    return (
        <Grid>
            <Box pt={3} sx={{boxShadow: 1}} borderColor="grey">
            <Paper style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                    <h2>ADD STAFF</h2>
                </Grid>
                <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                    {(props) => (
                        <Form>
                            <Field as={TextField} label='Username' name="username"
                                placeholder='Enter username' fullWidth required
                                helperText={<ErrorMessage name="username" />}
                            />

                            <Field as={TextField} label='Email' name="email"
                                placeholder='Enter Email' fullWidth required
                                helperText={<ErrorMessage name="email" />}
                            />
                             
                             <Field as={TextField} label='Address' name="address"
                                placeholder='Address' fullWidth required
                                helperText={<ErrorMessage name="address" />}

                            />

                           <Field as={TextField} label='Phone' name="phone"
                                placeholder='Enter Phone Number' fullWidth required
                                helperText={<ErrorMessage name="phone" />
                            }
                            />
                            <Field as={TextField} label='Toll Name' name="tollName"
                                placeholder='Toll Name' fullWidth required
                                helperText={<ErrorMessage name="tollName" />}

                            />

                            <Field as={TextField} label='Password' name="password"
                                placeholder='Enter password' type='password' fullWidth required
                                helperText={<ErrorMessage name="password" />} />
                            
                            <Button type='submit' color='primary' variant="contained" disabled={props.isSubmitting}
                                style={btnstyle} fullWidth>{props.isSubmitting ? "Loading" : "Add Staff"}</Button>

                        </Form>
                    )}
                </Formik>
            </Paper>
            </Box>
        </Grid>
    )
}

export default AddStaff