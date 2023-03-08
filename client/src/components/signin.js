import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
//import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { useState } from 'react';
//import jwt from 'jsonwebtoken'
import jwt_decode from 'jwt-decode';
//import { decode } from 'jsonwebtoken';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn() {
    const [res,setres] = useState()
    const [resData,setresData] = useState()

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const formData = {
      Email: data.get('Email'),
      Password: data.get('Password'),
    };
    axios.post('http://localhost:8000/api/login',formData)
    .then((response) => {
        console.log(response)
      setres(response.data.message)
      const authHeader = response.headers.authorization;
      const token = authHeader.split(' ')[1];
      // const decoded = jwt.verify(token, 'my-secret-key');
      var decoded2 = jwt_decode(token);
      console.log("decoded ", jwt_decode(token))
      setresData(decoded2)
    }, (error) => {
      console.log(error);
      
    });
    
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <div>
            {res && <p> {res}</p>}
          </div>
          <div>
            {resData && 
            <div>
            <p> {"Email :" + resData.Email}</p>
            <p> {"Password :" + resData.Password}</p>
            <p> {"Encrypted Password :" + resData.EncryptedPassword}</p>

            <p> {"CNIC :" + resData.CNIC}</p>
            </div>
            }
          </div>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="Email"
              label="Email Address"
              name="Email"
              autoComplete="Email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="Password"
              label="Password"
              type="Password"
              id="Password"
              autoComplete="current-password"
            />
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}