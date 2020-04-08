import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Main from './components/Main';
import "./style.css";
const App = () => {
  
  return (
   <div>
   
     <BrowserRouter>
     
     <div>
     <Route path="/" exact component={Main}/>
 
   
     </div>
     </BrowserRouter>
   </div>
  );
}

export default App;
