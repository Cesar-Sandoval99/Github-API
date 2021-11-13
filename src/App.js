import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import MainLayout from "./Layouts/MainLayout";
import NotFound from "./views/NotFound/NotFound";






//Styles 
import './App.css';
import Followers from "./views/Followers/Followers";


function App() {
  return (
    <Router>
      <Switch>
        <MainLayout>
          <Route exact path="/" component={Home} />
          <Route exact path="/followers/:user" component={Home, Followers} />
        </MainLayout>
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
