import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Index from './Pages/index'

import Logo from './img/training-play-logo.svg'
import Carousel from './component/carousel/index'
import ColapseInfoComponent from './component/colapse-info';
import DescriptionPageComponent from './Pages/description-page'


function App() {

  const [loginStatus, setLoginStatus] = useState(false);


  const [modalFakeRouteDescription, setModalFakeRouteDescription] = useState({
    active: false,
    title: '', 
    description: '', 
    thumbImage: '',
    link: ''
  });

  return (

    <Router basename="/">
      <Switch>
        <Route exact path="/" component={Index}/>
        <Route path="/about/:handle" component={DescriptionPageComponent}/>
      </Switch>
    </Router>
  );
}

export default App;
//https://codesandbox.io/s/github/rakannimer/react-firebase/tree/master/modules/sandboxes/firebase-auth?from-embed=&file=/src/index.tsx:68-299
//https://react-firebase-js.com/docs/react-firebase-auth/getting-started#install