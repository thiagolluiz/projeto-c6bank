import { Box, Button, Checkbox, Container, createTheme, CssBaseline, FormControlLabel, TextField, ThemeProvider, Typography, Stack, Snackbar} from '@mui/material';
import Link from 'next/link';
import React,{useState, useEffect, FormEvent} from 'react'
import MuiAlert, { AlertProps } from '@mui/material/Alert';


const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

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

// const [empresa, setEmpresa] = useState<string | undefined | null | FormDataEntryValue>('');
// const [nome, setNome ] = useState("Thiago de Lima Luiz");
// const [contador, setContador] = useState<number >(0);
const [error, setError] = useState< boolean >(false);
const [errorMenssage, setErrorMessage] = useState<string >('');
const [email, setEmail] = useState<string |undefined | null| FormDataEntryValue >();
const [password, setPassword] = useState<string | undefined | null | FormDataEntryValue>();
const [open, setOpen] = useState<boolean>(false);

// A primeira vez apos carregar a pagina e apos o render
// Exceuta tambem a cada alteracao de estado
// useEffect(()=>{
//   if (contador==0){
//   document.title = `Executando useEffect pela primeira vez ${contador}`;
//   }else{
//     document.title = `Executando useEffect a cada alteracao ${contador}`;
//   }
//   //setContador(contador + 1);
//   console.log(`Executando useEffect a cada alteracao ${contador}`);
// },[contador]);

// useEffect(()=>{
//   if(nome.length > 0){
//     console.log(`Executar useEffect mudando para maiusculo ${nome}`);
//   }
// },[nome]);

useEffect(()=>{
  if(password && password.length < 6){
    setError(true);
    setErrorMessage('A senha deve ter no minimo 6 caracteres');
  }else if(password){
    setError(false);
    setErrorMessage('');
    // enviar o formulario para o servidor
    setOpen(true);
  }
}),[password];

const handleClose = ()=>{
  setOpen(false);
}

const handleSubmit= (event: FormEvent<HTMLFormElement>)=> {
  // Previne o comportamento padrao do formulario, que eria recarreagr a pagina
  event.preventDefault();
  const data= new FormData(event.currentTarget);

  console.log(data.get('email'));
  console.log(data.get('password'));

  setEmail(data.get('email'));
  setPassword(data.get('password'));
}

  return (

    <ThemeProvider theme= {theme}>
      <Container component="main" maxWidth= "xs">
        <CssBaseline/>

        <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
            Usuario autenticado com sucesso.. aguarde...
          </Alert>
        </Snackbar>

        <Box sx={{mt:8, display:'flex', flexDirection:'column', alignItems: 'center'}}>
          <Typography component="h1" variant='h5'>
            Login
          </Typography>
              {/* <button onClick={()=>setContador(contador+1)}> Muda o contador </button>
              <button onClick={()=>setNome(nome.toUpperCase())}> Tudo Grande </button>
            {"O State contador vale: " + contador}<br/>
            {"Meu Nome: " + nome} */}

          <Box component="form" onSubmit= {handleSubmit}>
            <TextField margin="normal" required fullWidth id="email" label="Digite o email" name="email" autoComplete="email" autoFocus/>
            <TextField margin="normal" required fullWidth id="password" label="Digite a senha" name="password" autoComplete="password" autoFocus/>
              <FormControlLabel control={<Checkbox value="Remember" color="primary" />} label= "Lembrar de mim"/>
              <Button type='submit' fullWidth variant="contained" sx={{mt:3, mb:2}}>Entrar</Button>
              {error && <Typography color="error">{errorMenssage}</Typography>}
          </Box>
        </Box>
        <Copyright site='www.avanade.com.br' sx= {{mt:8, mb:4}} />
      </Container>
    </ThemeProvider>
  )
}