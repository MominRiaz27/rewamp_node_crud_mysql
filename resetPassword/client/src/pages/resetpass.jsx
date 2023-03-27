import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
//import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useNavigate, useLocation, useParams} from 'react-router-dom';

import axios from 'axios';


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

export default function resetpass() {
  
  const params = useParams();
  console.log(params);

  const location = useLocation();
  const navigate = useNavigate();


  const handleSubmit = (event) => {
    event.preventDefault();

    
    //get pass, confirm pass and embeed email and pass it to backend api.
    const data = new FormData(event.currentTarget);
    
    const formData = {
      Password: data.get('password'),
      ConfirmPassword: data.get('confirmpassword'),
      Email:params.id
    };
    console.log("this is email in password",location.state.Email)
    console.log(formData)

    axios.post('http://localhost:3000/api/resetPass', formData)
    .then((response) => {
      console.log(response.data);
      console.log(response.status);
      //navigate("/resetpass", {token: response.data});
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
            Change Password
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Enter Password"
              type="password"
              id="password"
              autoComplete="password"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="confirmpassword"
              label="Confirm Password"
              type="password"
              id="confirmpassword"
              autoComplete="confirm password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Save new Password 
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}