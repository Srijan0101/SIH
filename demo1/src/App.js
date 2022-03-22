import './App.css';
import Nav from './Nav/nav';
import Login from './Login/Login';
import Register from './Register/Register';
import Home from './Home/Home';
import Event from './event/event';
import EventLink from './eventLink/eventlink';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

// import Carousel from './Carousel/carousel';
function App() {

  const user = false;
  return (
    <Router>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/register"> {user ? <Home /> : <Register />} </Route>
          <Route path="/login"> {user ? <Home /> : <Login />} </Route>
          <Route path="/eventlink"> {EventLink} </Route>
        </Switch>
        {/* <Login /> */}
        {/* <Register /> */}
        {/* <Home />  */}
        {/* <Event /> */}
        <EventLink />
    </Router>
  );
}

export default App;
