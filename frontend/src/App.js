import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer  from './components/Footer'
import Header from './components/Header'
import {HomeScreen} from './screens/HomeScreen'
import ProductsAndServicesScreen from './screens/ProductsAndServicesScreen'

function App() {
  return (

    <Router>
      
      
      <Header />

      < Route exact path ='/' component= {HomeScreen} />
      < Route path="/products" component={ProductsAndServicesScreen} />
      <Footer />
      
    </Router>
  );
}

export default App;