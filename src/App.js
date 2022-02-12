import './App.css';

import Login from './compoonents/login'
import Register from './compoonents/registerform';
import "bootstrap/dist/css/bootstrap.min.css";
import {Route, BrowserRouter, Switch} from 'react-router-dom'
// import LoginFormik from './compoonents/loginFormik'
function App() {
  return(
    <BrowserRouter>
    <div>
      <Switch>
        <Route  path ={"/"}exact component={Login}/>
        {/* <Route  path ={"/LoginFormik"}exact component={LoginFormik}/> */}
        <Route  path ={"/Register"}exact component={Register}/>


      </Switch>
{/* <Login></Login> */}
{/* <LoginFormik/> */}

{/* <Register/> */}
    </div>
    </BrowserRouter>
  

  )
}

export default App;
