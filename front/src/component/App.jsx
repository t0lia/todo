import React, {Component} from 'react';
import './App.css';
import Review from "./Review";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";

class App extends Component {

    render() {
        return (
            <Router>
                <div className="App">
                    <Header/>

                    <Route exact path="/" component={Review}/>
                    <Route path="/plan" component={Plan}/>
                    <Route path="/add" component={Add}/>
                </div>
            </Router>
        );
    }
}

function Plan() {
    return (
        <div><h3>Plan</h3></div>
    )
}

function Add() {
    return (
        <div><h3>Add</h3></div>
    )
}


function Header() {
    return (
        <ul>
            <li>
                <Link to="/">Review</Link>
            </li>
            <li>
                <Link to="/plan">Plan</Link>
            </li>
            <li>
                <Link to="/add">Add</Link>
            </li>
        </ul>
    );
}

export default App;