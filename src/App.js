// import logo from './logo.svg';
//f03e01d50c2e4ffabc8085e819003fcb api key
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/news';
import {
BrowserRouter as Router,
Route,
Routes
} from "react-router-dom";


export default class App extends Component {


  render() {
    return (<>
      <Router>
        <Navbar />
        
          <Routes>
          <Route exact path="/"   element={<News key="logo" category="general" logo="Top Headlines"/>} ></Route>
            <Route exact path="/home"   element={<News key="general" category="general" logo="Top Headlines"/>} ></Route>
            <Route exact path="/sports"  element={<News key="sports" category="sports" logo="Sports"/>} ></Route>
            <Route exact path="/technology"  element={<News key="technology" category="technology" logo="Technology"/>} ></Route>
            <Route exact path="/science"  element={<News key="science" category="science" logo="Science"/>} ></Route>
            <Route exact path="/business"  element={<News key="business" category="business" logo="Business"/>} ></Route>
            <Route exact path="/entertainment"  element={<News key="entertainment" category="entertainment" logo="entertainment"/>}></Route>
            <Route exact path="/health"  element={<News key="health" category="health" logo="Health" />} ></Route>

          </Routes>
         
      </Router>
      


    </>
    )
  }
}
