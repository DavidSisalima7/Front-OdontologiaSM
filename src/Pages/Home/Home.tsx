import React from 'react';
// import { useCustomSelector, useCustomDispatch } from 'hooks/redux';
// import { login } from 'redux/slices/auth';
const Home: React.FC = () => {
  // Uso de useCustomSelector este hook ya viene con el tipado no hay necesidad de tipar el state
  // const { auth } = useCustomSelector((state) => state);

  // const dispatch = useCustomDispatch();

  // console.log(auth.accessToken);

  /*
  const handleLogin = (): void => {
    login(
      {
        email: 'eve.holt@reqres.in',
        password: 'cityslicka'
      },
      dispatch
    );
  };
  */
  return (
   <h1>HOLA HOME</h1>
    /*
    <div>
      Home <button onClick={handleLogin}>Login</button>
    </div>
    */
  );
};

export default Home;
