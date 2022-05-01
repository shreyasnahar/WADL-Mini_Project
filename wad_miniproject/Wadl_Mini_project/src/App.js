import './App.css';
import {useMoralis} from 'react-moralis'
import {useState} from 'react'
import { Button } from 'react-bootstrap';
import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Pay from './Pay';

function App() {
  const { Moralis, authenticate, isAuthenticated, user, logout } = useMoralis();
  const [addr, setAddr] = useState('0');
  if(!isAuthenticated){
    return(
      <div className='App'>
        <img src="http://127.0.0.1:8080/Desktop/logo/default.png" alt="" className='main'/>
        <br />
        <h3>Click below to Login</h3>
        <button onClick={()=>{authenticate({signingMessage:"Welcome to PayApp"})}}>Login</button>
      </div>
    );
  }
  
  return (
    <div className='App'>
      <Router>
        <Navbar addr={user.get('ethAddress')} />
        <Switch>
          <Route exact path='/'>
            <Home  addr={user.get('ethAddress')}/>
          </Route>
          <Route path={'/pay/:'+user.getaddress}>
            <Pay addr = {user.get('ethAddress')}/>
          </Route>
        </Switch>
      
      <button onClick={()=>{logout()}}>Log out</button>
      </Router>
     

    </div>
  );
}

export default App;
