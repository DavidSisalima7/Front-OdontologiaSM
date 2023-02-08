/*
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography
} from '@mui/material'; 
*/
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import '../../index.css';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button'
import { Divider, } from 'primereact/divider';
import { classNames } from 'primereact/utils';
import React, { useState } from 'react';
import '../Home/css/Login.css';
import { useFormik } from 'formik';
import type LoginDto from './interface/LoginDto';
import { width } from '@mui/system';
import { Height } from '@mui/icons-material';


export const LoginPage = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [formData, setFormData] = useState({});

  // Uso de formik para formularios
  const formik = useFormik<LoginDto>({
    // Inicializamos los valores de la interfaz importada LoginDto
    initialValues: {
      // Agregamos todos los atributos de la interfaz y los inicializamos con "" o 0
      username: '',
      password: ''
    },
    // validaciones
    validate: (data: { username: string; password: string }) => {
      // variable para controlar los errores
      const errors: any = {};
      // Aqui se validan que el campo es obligatorio y no este vacio
      if (!data.username) {
        errors.username = 'Campo obligatorio';
      }
      if (!data.password) {
        errors.password = 'Campo obligatorio';
      }
      // retorna si da error
      return errors;
    },
    onSubmit: (data: LoginDto) => {
      // Esto manda la data de los campos en JSON para el sessionStorage del navegador /F12/Inspeccionar/Aplicacion/SessionStorage
      sessionStorage.setItem('Login', JSON.stringify(data));
      setFormData(data);
      setShowMessage(true);
      formik.resetForm();
    }
  });
  
  const dialogFooter = (
    <div className="flex justify-content-center">
      <Button
        label="OK"
        className="p-button-text"
        autoFocus
        onClick={() => {
          setShowMessage(false);
        }}
      />
    </div>
  );

  // Metodo para validaciones y mensajes en cuadro de texto
  const isFormFieldValid = (
    name: keyof {
      username: string;
      password: string;
    }
  ) => !!(formik.touched[name] && formik.errors[name]);

  const getFormErrorMessage = (
    name: keyof {
      username: string;
      password: string;
    }
  ) =>
    isFormFieldValid(name) && (
      <small className="p-error">{formik.errors[name]}</small>
    );

  const passwordHeader = <h6>Pick a password</h6>;
  const passwordFooter = (
    <React.Fragment>
      <Divider />
      <p className="mt-2">Suggestions</p>
      <ul className="pl-2 ml-2 mt-0" style={{ lineHeight: '1.5' }}>
        <li>Al menos una minúscula</li>
        <li>Al menos una mayúscula</li>
        <li>Al menos un número </li>
        <li>Mínimo 8 carácteres</li>
      </ul>
    </React.Fragment>
  );

  return (
    /*
    <Container maxWidth="sm">
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: '100vh' }}
      >
        <Grid item>
          <Paper sx={{ padding: '1.2em', borderRadius: '0.5em' }}>
            <Typography variant="h4" sx={{ mt: 1, mb: 1 }}>
              {' '}
              Iniciar Sesión
            </Typography>
            <Box component="form">
            
              <TextField
                margin="normal"
                type="text"
                fullWidth
                label="E-mail"
                sx={{ mt: 2, mb: 1.5 }}
                />



              <TextField
                margin="normal"
                type="password"
                fullWidth
                label="Password"
                sx={{ mt: 1.5, mb: 1.5 }}
              />
                  
              <Button
              
                fullWidth
                type="submit"
                variant="contained"
                sx={{ mt: 1.5, mb: 3 }}
              >
                Iniciar Sesión
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
    
   */
  
    <div className="box" style={{float:"right"}}>
      <Dialog
        visible={showMessage}
        onHide={() => {
          setShowMessage(false);
        }}
        position="top"
        footer={dialogFooter}
        showHeader={false}
        breakpoints={{ '960px': '80vw' }}
        style={{ width: '30vw' }}
      >
        <div className="flex align-items-center flex-column pt-6 px-3">
          <i
            className="pi pi-check-circle"
            style={{ fontSize: '5rem', color: 'var(--green-500)' }}
          ></i>
          <h5>Inicio de Sesión Exitoso!</h5>
          <p style={{ lineHeight: 1.5, textIndent: '1rem' }}>
            Bienvenido <b>{formik.values.username}</b> ;
          </p>
        </div>
      </Dialog>
      
      <div className="flex justify-content-center">
        <div className="form">
          <h2 className="text-center">Sign in</h2>
          
          <form onSubmit={formik.handleSubmit} className="p-fluid">


            <div className="field">
              <span className="p-float-label">
                <InputText 
                  style={{ position:"relative", border:"none", outline:"none",fontSize:"1em",padding:"18px 10px 10px"}}
                  id="username"
                  name="username"
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  autoFocus
                  className={classNames("inputBox",{
                    'p-invalid': isFormFieldValid('username')
                  })}
                />
                <label
                  htmlFor="name"
                  className={classNames({
                    'p-error': isFormFieldValid('username')
                  })}
                >
                  Usuario
                </label>
              </span>
              {getFormErrorMessage('username')}
              </div>

              <div className="field">
                <span className="p-float-label">
                  <Password
                    id="password"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    toggleMask
                    className={classNames("inputBox",{
                      'p-invalid': isFormFieldValid('password')
                    })}
                    header={passwordHeader}
                    footer={passwordFooter}
                  />
                  <label
                    htmlFor="password"
                    className={classNames({
                      'p-error': isFormFieldValid('password')
                    })}
                  >
                    Contraseña
                  </label>
                </span>
                {getFormErrorMessage('password')}
              </div>
            <br />

            <Button type="submit" label="Ingresar" className="mt-2" style={{background:"#6DD5FA", width:"100px", height:"40px",textAlign:"center",position:"absolute",color:"#2d2d2d" }}/>
          </form>
        </div>
      </div>
    </div>
    
  );
};
