import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Registration } from "./components/Registration";
import { Display } from "./components/Display";
import { NavBar } from "./Navigations/NavBar";

function App() {
  return (
    <Router>
      <NavBar></NavBar>
      <switch>
        <Route path="/" exact>
          <h1
            className="fs-1 p-2 text-light bg-secondary"
            style={{ height: "100vh" }}
          >
            Welcome to HomePage
          </h1>
        </Route>

        <Route path="/register" exact>
          <Registration />
        </Route>

        <Route path="/display" exact>
          <Display />
        </Route>
      </switch>
    </Router>
  );
}

export default App;
