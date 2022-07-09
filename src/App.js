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

function App() {
  return (
    <NoteState>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/about">
            <AboutUs />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </NoteState>
  );
}

export default App;
