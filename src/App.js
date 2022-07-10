//npm install react-router-dom@5.3.3
import './App.css';
import Navbar from './components/Navbar'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AboutUs from './components/AboutUs';
import Home from './components/Home';
import NoteState from './context/notes/notestate';
import Login from './components/Login';
import Signup from './components/SignUp'

function App() {
  return (
    <NoteState>
      <Router>
        <Navbar />
        <Switch>
        <Route exact path="/Login">
            <Login />
          </Route>
          <Route exact path="/SignUp">
            <Signup/>
          </Route>
          <Route exact path="/about">
            <AboutUs />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </NoteState>
  );
}

export default App;
