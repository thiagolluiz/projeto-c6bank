import { Box, Button, Checkbox, Container, createTheme, CssBaseline, FormControlLabel, TextField, ThemeProvider, Typography} from '@mui/material';
import React,{useState, useEffect, FormEvent} from 'react';
import Copyright from '../components/utils/Copyright';
import Snackbar from '../components/utils/Snackbar';

const theme= createTheme();

export default function LoginPage() {

const [name, setName] = useState <string>(""); 
const [error, setError] = useState< boolean >(false);
const [errorMenssage, setErrorMessage] = useState<string >('');
const [email, setEmail] = useState<string |undefined | null| FormDataEntryValue >();
const [password, setPassword] = useState<string | undefined | null | FormDataEntryValue>();
const [passwordConf, setPasswordConf] = useState<string | undefined | null | FormDataEntryValue>();
const [open, setOpen] = useState<boolean>(false);

useEffect(()=>{
  if(password && password.length < 6){
    setError(true);
    setErrorMessage('A senha deve ter no minimo 6 caracteres');
  }else if(password){
    setError(false);
    setErrorMessage('');
    // enviar o formulario para o servidor
    // setOpen(true);
    if(passwordConf != password){
      setError(true);
      setErrorMessage('A senha deve ser igual a anterior!');
    }else if(passwordConf === password){
      setError(false);
      setErrorMessage('');
      setOpen(true);
    }
  }

}),[password, passwordConf];

const handleSubmit= (event: FormEvent<HTMLFormElement>)=> {
  // Previne o comportamento padrao do formulario, que iria recarregar a pagina
  event.preventDefault();
  const data= new FormData(event.currentTarget);
  setEmail(data.get('email'));
  setPassword(data.get('password'));
}
  return (
    <ThemeProvider theme= {theme}>
      <Container component="main" maxWidth= "xs">
        <CssBaseline/>
        <Box sx={{mt:8, display:'flex', flexDirection:'column', alignItems: 'center'}}>
          <Typography component="h1" variant='h5'>
            Cadastrar
          </Typography>
          <Box component="form" onSubmit= {handleSubmit}>
            <TextField margin="normal" required fullWidth id="name" label="Informe seu nome" name="name" autoComplete="name" autoFocus/>
            <TextField margin="normal" required fullWidth id="email" label="Digite o email" name="email" autoComplete="email" autoFocus/>
            <TextField margin="normal" required fullWidth id="password" label="Digite a senha" name="password" autoComplete="password" autoFocus/>
            <TextField margin="normal" required fullWidth id="passwordConf" label="Confirme a senha" name="passwordConf" autoComplete="passwordConf" autoFocus/>
              <FormControlLabel control={<Checkbox value="Remember" color="primary" />} label= "Lembrar de mim"/>
              <Button type='submit' fullWidth variant="contained" sx={{mt:3, mb:2}}>Cadastar</Button>
              {error && <Typography color="error">{errorMenssage}</Typography>}
          </Box> 
        </Box>
        <Copyright site='www.avanade.com.br' sx= {{mt:8, mb:4}} />
        {open && <Snackbar open={open} hide={4} message=" Ususario cadastrado com sucesso... Aguarde..."/>}
      </Container>
    </ThemeProvider>
  )
}