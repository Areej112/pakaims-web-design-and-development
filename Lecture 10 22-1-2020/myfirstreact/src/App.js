import logo from "./logo.svg";
import "./App.css";
import PakAimsStudent from "./components/PakAimsStudent";
import MyExample from "./components/MyExample";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ContactUs from "./components/ContactUs";
import HomePage from "./components/HomePage";
function App() {
  const disturbStudent = (name) => {
    alert("You Disturbed " + name);
  };
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/contact-us">
            <ContactUs />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
