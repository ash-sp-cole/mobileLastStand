import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Eat from './components/Eat';
import Drink from './components/Drink';
import Home from './components/Home';
import Visit from "./components/Visit";
import Nav from './components/BottomNav';
import Main from './components/Main';
import "./style.css";
const App = () => {
  
  
  
  return (
   <div>
   
     <BrowserRouter>
     
     <div>
     <Route path="/" exact component={Main}/>
     <Route path="/eat"  component={Eat}/>
     <Route path="/drink" exact component={Drink}/>
     <Route path="/visit" component={Visit}/>
   
     </div>
     </BrowserRouter>
   </div>
  );
}

export default App;
