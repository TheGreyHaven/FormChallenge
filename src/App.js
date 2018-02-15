import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Preview from "./pages/Preview";
import Exporter from "./pages/Exporter";

//this is rendering index.js. Calling the Home folder it looks for index.js to render
const App = () => (
  <Router>
	    <div>
	      <Route exact path="/" component={Home} />
	      <Route exact path="/home" component={Home} />
	      <Route exact path="/preview" component={Preview} />
	      <Route exact path="/exporter" component={Exporter} />
	    </div>
  </Router>
);

export default App;
