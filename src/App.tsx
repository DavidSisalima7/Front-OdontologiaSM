// import Home from 'Pages/Home';
// import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/lib/integration/react';                          
// import store, { persistor } from 'redux/store';
// import { Button, Container } from '@mui/material';
// import { NavBar } from 'common/NavBar';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './Router';
import React from 'react';
import "primereact/resources/themes/saga-blue/theme.css";  
import "primereact/resources/primereact.min.css";                 
import "primeicons/primeicons.css";
import './App.css';

const App: React.FC = () => {
  return (
    // Culaquier vista que este dentro del provider va a tener acceso al tokende autentificacion
    /*
    <div>
      <NavBar />
      <Container sx={{ mt: 9 }} maxWidth="xl">
        <Button variant="contained"> LOGIN </Button>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <Home />;
          </PersistGate>
        </Provider>
      </Container>
    </div>
    */
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;
