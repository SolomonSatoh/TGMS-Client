
import { TextField, Button, Box, Typography } from "@material-ui/core";
import { Field, Form, Formik } from "formik";
import { object, string } from "yup";

const initalValues = {
  email: "",
  name: "",
  password: "",

  firstName:'',
  lastName: '',
  username : '',
  email: '',
  password : '',
  confirmPassword: ''
};

const MaterialForm = () => {
  return (
    <div className="MaterialForm">
      <Typography variant="h4">
        Registration Form
      </Typography>
      <Formik
        initialValues={initalValues}
        validationSchema={object({
            firstName : string().required("Please enter you first name"),
            lastName : string().required("please enter your last name"),
            username : string().required("please enter username").min(10, "user too short"),
            email : string().required("please enter email").email("invalid email"),
            password : string().required("enter password").min(8,"password too short"),
            confirmPassword : string().required("confirm your password").min(8,"password too short")
        })}
        onSubmit={(values, formikHelpers) => {
          console.log(values);
          formikHelpers.resetForm();
        }}
      >
        {({ errors, isValid, touched, dirty }) => (
          <Form>
            <Field
              name="firstName"
              type="firstName"
              as={TextField}
              variant="outlined"
              color="primary"
              label="First Name"
              fullWidth
              error={Boolean(errors.firstName) && Boolean(touched.firstName)}
              helperText={Boolean(touched.firstName) && errors.firstName}
            />

            <Box height={14} />

            <Field
              name="lastName"
              type="lastName"
              as={TextField}
              variant="outlined"
              color="primary"
              label="Last Name"
              fullWidth
              error={Boolean(errors.lastName) && Boolean(touched.lastName)}
              helperText={Boolean(touched.lastName) && errors.lastName}
            />

             <Box height={14} />

            <Field
              name="username"
              type="username"
              as={TextField}
              variant="outlined"
              color="primary"
              label="Username"
              fullWidth
              error={Boolean(errors.username) && Boolean(touched.username)}
              helperText={Boolean(touched.username) && errors.username}
            />
            <Box height={14} />

            <Field
              name="email"
              type="email"
              as={TextField}
              variant="outlined"
              color="primary"
              label="Email"
              fullWidth
              error={Boolean(errors.email) && Boolean(touched.email)}
              helperText={Boolean(touched.email) && errors.email}
            />
            <Box height={14} />

            <Field
              name="password"
              type="password"
              as={TextField}
              variant="outlined"
              color="primary"
              label="Password"
              fullWidth
              error={Boolean(errors.password) && Boolean(touched.password)}
              helperText={Boolean(touched.password) && errors.password}
            />
            <Box height={14} />

            <Field
              name="confirmPassword"
              type="password"
              as={TextField}
              variant="outlined"
              color="primary"
              label="Confirm Password"
              fullWidth
              error={Boolean(errors.confirmPassword) && Boolean(touched.confirmPassword)}
              helperText={Boolean(touched.confirmPassword) && errors.confirmPassword}
            />
            <Box height={14} />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              disabled={!isValid || !dirty}
            >
              Sign Up
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default MaterialForm;
