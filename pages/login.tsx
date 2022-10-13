import { Box, Container, createTheme, CssBaseline, TextField, ThemeProvider, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react'

type CopyProps= {
  site: string;
  sx: object;
}
function Copyright(props:CopyProps){
  return(
    <Typography>
      {'Copyright ©'}
      <Link color= "inherit" href= "https://www.avanade.com.br">
        {props.site}
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const theme= createTheme();

export default function LoginPage() {
  return (
    <ThemeProvider theme= {theme}>
      <Container component="main" maxWidth= "xs">
        <CssBaseline/>
        <Box sx={{mt:8, display:'flex', flexDirection:'column', alignItems: 'center'}}>
          <Typography component="h1" variant='h5'>
            Login
          </Typography>
          <Box component="form" onSubmit= {(e) => {console.log('enviou')}}>
            <TextField margin="normal" required fullWidth id="email" label="Digite o email" name="email" autoComplete="email" autoFocus/>
            <TextField margin="normal" required fullWidth id="password" label="Digite a senha" name="password" autoComplete="password" autoFocus/>
          </Box>
        </Box>
        <Copyright site='www.avanade.com.br' sx= {{mt:8, mb:4}} />
      </Container>
    </ThemeProvider>
  )
}
