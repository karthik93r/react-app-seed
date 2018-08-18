import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/home';

const App = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">Hello React! :-)</div>
        <Home />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));