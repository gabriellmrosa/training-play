import React from 'react';
import Logo from './img/training-play-logo.svg'
import Carousel from './component/index'

function App() {
  return (
    <div className="App">
      <header>
        <img src={Logo} alt="Training Play | Escolha sua serie de treinos"/>
        <button className="btn btn-primary btn-line" type="button">Entrar</button>
      </header>

      <section>
        <div className="container">
          <h1>Encontre a melhor serie de exercícios para maratonar</h1>
          <button className="btn btn-primary btn-large" type="button">Assine agora</button>
        </div>
      </section>

      <Carousel/>
    </div>
  );
}

export default App;
//https://codesandbox.io/s/github/rakannimer/react-firebase/tree/master/modules/sandboxes/firebase-auth?from-embed=&file=/src/index.tsx:68-299
//https://react-firebase-js.com/docs/react-firebase-auth/getting-started#install