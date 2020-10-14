import React from 'react';
import './App.css';
import  HomePage  from "./pages/HomePage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import SectionPage from './pages/SectionPage';
import SelectedArticle from "./pages/SelectedArticle";
import AppToolBar from "./components/AppBar";

function App() {
  return (
    <Router>
    <AppToolBar />
    <Switch>
    <Route  exact path="/" component={HomePage} />

      <Route exact path="/Business" component={SectionPage} />
      <Route exact path="/Entertainment" component={SectionPage} />
      <Route exact path="/Health" component={SectionPage} />
      <Route exact path="/Science" component={SectionPage} />
      <Route exact path="/Sports" component={SectionPage} />
      <Route exact path="/Technology" component={SectionPage} />
      <Route exact path="/news/:title" component={SelectedArticle} />

      <Redirect to="/" />
    </Switch>
  </Router>
        
       
      
    
  );
}

export default App;
