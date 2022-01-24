import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { HomeScreen } from "./screens/HomeScreen";
import ProductsAndServicesScreen from "./screens/ProductsAndServicesScreen";
import InsightsScreen from "./screens/InsightsScreen";
import MeetTheTeamScreen from "./screens/MeetTheTeamScreen";
import LoginRegisterScreen from "./screens/LoginRegisterScreen";

function App() {
  return (
    <Router>
      <Header />

      <Route exact path="/" component={HomeScreen} />
      <Route path="/products" component={ProductsAndServicesScreen} />
      <Route path="/insights" component={InsightsScreen} />
      <Route path="/meetus" component={MeetTheTeamScreen} />
      <Route path="/login" component={LoginRegisterScreen} />
      
      <Footer />
    </Router>
  );
}

export default App;
