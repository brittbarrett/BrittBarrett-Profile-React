import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import Homepage from "./pages/Homepage";
import ContactMe from "./pages/ContactMe";

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Switch>
          <Route exact path={["/"]} component={Homepage} />
          <Route exact path={["/"]} component={ContactMe}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
