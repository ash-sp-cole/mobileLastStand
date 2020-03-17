import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Eat from './components/Eat';
import Drink from './components/Drink';
import Home from './components/Home';
import Visit from "./components/Visit";
import Nav from './components/BottomNav';
const App = () => {
  
  
  
  return (
   <div>
   
     <BrowserRouter>
     <Nav/>
     <div>
     <Route path="/" exact component={Home}/>
     <Route path="/eat"  component={Eat}/>
     <Route path="/drink" exact component={Drink}/>
     <Route path="/visit" component={Visit}/>
   
     </div>
     </BrowserRouter>
   </div>
  );
}

export default App;
