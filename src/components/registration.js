import React from "react";
import { useFormik } from "formik";
import * as yup from 'yup'


const Registration = () => {
    
    //pass the useFormik() hook initial form values
    const formik = useFormik({
        initialValues : {
            firstName:'',
            lastName: '',
            username : '',
            email: '',
            password : '',
            confirmPassword: ''
    
        },

        validationSchema : yup.object({
             firstName: yup.string()
                 .max(15, 'Must be 15 characters or less')
                 .required('Required'),
             lasttName: yup.string()
                 .max(15, 'Must be 15 characters or less')
                 .required('Required'),
            username: yup.string()
                 .max(20, 'Must be 20 characters or less')
                 .required('Required'),
            password: yup.string()
                 .min(6, 'Must be 6 characters or more')
                 .required('Required'),
            confirmPassword: yup.string()
                 .min(6, 'Must be 16 characters or more')
                 .required('Required'),
            email: yup.string()
                 .email('Invalid email adress')
                 .required('Required')
            
        }),

        onSubmit: values => {
            alert(JSON.stringify(values, null,2))
        }
    });

    return(
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input
            id ="firstName"
            type= "text"
            // name = "firstName"
            // onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            // value={formik.values.firstName}
            {...formik.getFieldProps('firstName')}
            />
            {formik.touched.firstName && formik.errors.firstName? (
                <div>{formik.errors.firstName}</div>
                
            )  : null }

            <label htmlFor="lastName">Last Name</label>
            <input
            id ="lastName"
            type= "text"
            // name = "lastName"
            // onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            // value={formik.values.lastName}
            {...formik.getFieldProps('lastName')}
            />
            {formik.touched.lastName && formik.errors.lastName? (
                <div>{formik.errors.lastName}</div>
                
            )  : null }

            <label htmlFor="username">Username</label>
            <input
            id ="username"
            type= "text"
            // name = "username"
            // onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            // value={formik.values.username}
            {...formik.getFieldProps('username')}
            />
            {formik.touched.username && formik.errors.username? (
                <div>{formik.errors.username}</div>
                
            )  : null }

            <label htmlFor="email">Email</label>
            <input
            id ="email"
            type= "text"
            // name = "email"
            // onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            // value={formik.values.email}
            {...formik.getFieldProps('email')}
            />
            {formik.touched.email && formik.errors.email? (
                <div>{formik.errors.email}</div>
                
            )  : null }

            <label htmlFor="password">Password</label>
            <input
            id ="password"
            type= "text"
            // name = "password"
            // onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            // value={formik.values.password}
            {...formik.getFieldProps('password')}
            />

            {formik.touched.password && formik.errors.password? (
                <div>{formik.errors.password}</div>
                
            )  : null }

            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
            id ="confirmPassword"
            type= "text"
            // name = "confirmPassword"
            // onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            // value={formik.values.confirmPassword}
            {...formik.getFieldProps('confirmPassword')} //reducing boilerplate code
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword? (
                <div>{formik.errors.confirmPassword}</div>
                
            )  : null }


        </form>
    )
}

export default Registration