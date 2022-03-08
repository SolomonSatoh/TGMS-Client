

import React,{useState, useEffect}from 'react'
import { Grid, Paper, Avatar, TextField, Button} from '@material-ui/core'
import Box from '@material-ui/core/Box'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { yellow } from '@material-ui/core/colors';
import Selection from './Selection'
import Plan from './Plan'
import AccType from './AccType';


const BookingForm = ({ handleChange }) => {

    const[selecteToll, setSelectedToll]= useState(JSON.parse(localStorage.getItem("selected_row")))
    const paperStyle = { padding: 80, height: '73vh', width: 500, margin: "0 auto",  }
    const avatarStyle = { backgroundColor: '#008000' }
    const btnstyle = { margin: '8px 0',backgroundColor: '#008000' }
    const initialValues = {
        district: '',
        tollName: '',
        section : '',
        plateNumber : '',
        
    }
    
    const validationSchema = Yup.object().shape({
        // username: Yup.string().required("Required").min(8, 'Username should contain atleast 8 characters '),
        // password: Yup.string().required("Required").min(8,"Password should contain atleast 8 characters"),
        // email: Yup.string().email('Enter valid email').required("Required"),
        // phone : Yup.string().required("Required").min(10,"Phone # should contain 10 digits").max(10,"Phone # should contain 10 digits"),
        district : Yup.string().required("Required"),
        tollName : Yup.string().required("Required"),
        section : Yup.string().required("Required"),
        plateNumber : Yup.string().required("Required"),
    })
    const onSubmit = (values, props) => {
        console.log(values)
        setTimeout(() => {
            props.resetForm()
            props.setSubmitting(false)
        }, 2000)

    }

    console.log(selecteToll)
    return (
        <Grid className='forms'>
            <Box pt={3} sx={{boxShadow: 1}} borderColor="grey">
            <Paper style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                    <h2>Book Toll</h2>
                </Grid>
                <Formik  onSubmit={onSubmit} initialValues={initialValues} validationSchema={validationSchema}>
                    {(props) => (
                        <Form>
                            <Field as={TextField} label='District' name="district"
                                placeholder='Enter District' type='district' fullWidth required
                                helperText={<ErrorMessage name="district" />} 

                                />
                            
                            <Field as={TextField} label='Toll Name' name="tollName"
                                placeholder='Toll Name' fullWidth required
                                helperText={<ErrorMessage name="tollName" />}
                            />
                            

                            <Field as={TextField} label='Toll Section' name="section"
                                placeholder='Toll Section' fullWidth required
                                helperText={<ErrorMessage name="email" />}
                            />
                            < Selection />
                            < Plan />
                        
                            <Field as={TextField} label='Plate Number' name="plateNumber"
                                placeholder='Plate Number' fullWidth required
                                helperText={<ErrorMessage name="plateNumber" />}
                        

                            />
                             <Field as={TextField} label='Price' name="price"
                                placeholder='Price' fullWidth required
                                helperText={<ErrorMessage name="price" />}
                            />
                            <Button type='submit' color='primary' variant="contained" disabled={props.isSubmitting}
                                style={btnstyle} fullWidth>{props.isSubmitting ? "Loading" : "Book Toll"}</Button>

                        </Form>
                    )}
                </Formik>
            </Paper>
            </Box>
        </Grid>
    )
}

export default BookingForm