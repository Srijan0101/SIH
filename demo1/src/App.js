import './App.css';
import Nav from './Nav/nav';
import Login from './Login/Login';
import Register from './Register/Register';
import Home from './Home/Home';
import Event from './Home/event/event';
import EventLink from './eventLink/eventlink';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { useContext } from 'react';
import { Context } from "./context/Context";

// import Carousel from './Carousel/carousel';
function App() {

  const {user} = useContext(Context);
  return (
    <Router>
        
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/register"> {user ? <Home /> : <Register />} </Route>
          <Route path="/login"> {user ? <Home /> : <Login />} </Route>
          <Route path="/eventlink"> {user ? <EventLink /> : <Login />} </Route>
        </Switch>
        {/* <Login /> */}
        {/* <Register /> */}
        {/* <Home />  */}
        {/* <Event /> */}
        {/* <EventLink /> */}
    </Router>
  );
}

export default App;
