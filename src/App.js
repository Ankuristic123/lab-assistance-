import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;


// import React from 'react';
// import { BrowserRouter, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import './App.css';
// // import Home from './components/pages/Home';
// // import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Services from './components/pages/Services';
// import Products from './components/pages/Products';
// import SignUp from './components/pages/SignUp';



// const App = () => (
//     <div>
//        <BrowserRouter>
         
//            <div className="container">
//                <Navbar />
//                {/* <Route path='/' exact component={Home} /> */}
//           <Route path='/services' component={Services} />
//           <Route path='/products' component={Products} />
//           <Route path='/sign-up' component={SignUp} />
               
//            </div>
//        </BrowserRouter>
//     </div>
// )
// export default App;
