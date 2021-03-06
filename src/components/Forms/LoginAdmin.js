
import React,{useState} from 'react';
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {useHistory } from 'react-router-dom';
import Axions from 'axios'


const LoginAdmin = () =>{

    let history = useHistory();

    const paperStyle = { padding: 20, width: 500, margin: "0 auto" }
    const avatarStyle = { backgroundColor: '#008000' }

    const btnstyle = { margin: '8px 0',backgroundColor: '#008000' }
   

    const [username, setUsername ] = useState("");
    const [password, setPassword ] = useState("");

   /* A function that is called when the user clicks the login button. It sends the username and
   password to the server. If the server returns an error, it displays the error. If the server
   returns a token, it saves the token in the session storage and redirects the user to the admin
   dashboard. */
    const login =() => {
        const data = {username:username, password:password}
        Axions.post("http://localhost:3001/users/login",data).then((response) => {
            
            if(response.data.error) {
                alert(response.data.error);
            } else {
                sessionStorage.setItem("accessToken", response.data)
                history.push("/admin") // go to admin dashboaard
            }
          
        })
    }

    return(
        <Grid className='login'>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <TextField 
                label='Username' 
                placeholder='Enter username'
                onChange={(event) => {setUsername(event.target.value)}} 
                fullWidth required
                />
                <TextField 
                label='Password' 
                placeholder='Enter password' 
                onChange={(event) => {setPassword(event.target.value)}}
                type='password' 
                fullWidth required
                />
               
                <Button type='submit' color='primary' variant="contained" onClick={login} style={btnstyle} fullWidth>Sign in</Button>
                <Typography >
                     <Link href="#" >
                        Forgot password ?
                </Link>
                </Typography>
                <Typography > Do you have an account ?
                <Link href="#"  onClick ={ () =>{history.push("/sign");}}   >
                         Sign Up
                </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default LoginAdmin