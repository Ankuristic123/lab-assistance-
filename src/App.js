// import React from 'react';
// import Navbar from './components/Navbar';
// import {BrowserRouter as Router,Route } from 'react-router-dom';
// import {Switch} from 'react-router-dom'
// // import { BrowserRouter,Route ,Routes } from 'react-router-dom';

// import './App.css';

// function App() {
//   return (
//    <>
//   <Router>
//     <Navbar/>
//     <Route>
//       <Route path ='/' exact/>
//       </Route>
    

//   </Router>
//    </>

//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/Navbar';



const App = () => (
    <div>
       <BrowserRouter>
         
           <div className="container">
               <Navbar />
               
               
           </div>
       </BrowserRouter>
    </div>
)
export default App;
