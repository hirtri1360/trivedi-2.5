import React, { Component } from "react";
import {
    Route, Routes,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
import FavouriteBooks from "./Favourite Books";

class Main extends Component {
    render() {
      return (
        <HashRouter>
          <div>
            <h1>Amazon</h1>
            <ul className="header">
              <li><NavLink exact to="/">Search Results</NavLink></li>
              <li><NavLink to="/stuff">Enhanced Filters</NavLink></li>
              <li><NavLink to="/contact">Updated Search Results </NavLink></li>
              <li><NavLink to="/Favourite Books">Updated Enhanced Filters</NavLink></li>
            </ul>
            <div className="content">
            <Routes>
              <Route exact path="/" element={<Home />}/>
              <Route path="/stuff" element={<Stuff />}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/Favourite Books" element={<FavouriteBooks/>}/>
            </Routes>  
            </div>
          </div>
        </HashRouter>
      );
    }
  }

export default Main;