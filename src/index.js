import React from "react";
import ReactDOM from "react-dom";
import { render } from "react-dom";
import "./index.css";
import App from "./App";
import MainView from "./components/MainView";
import error404 from "./components/error404";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const BasicExample = () => (
  <header className="App-header">
    <Router>
      <div>
        <Link to="/">Home </Link>
        <Link to="/about"> About</Link>
        <hr />
        <Route exact path="/" component={App} />
        <Route path="/about" component={MainView} />
        <Route path="/*" component={error404} />
      </div>
    </Router>
  </header>
);

render(<BasicExample />, document.getElementById("root"));
registerServiceWorker();
