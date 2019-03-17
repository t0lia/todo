import React, {Component} from 'react';
import './App.css';
import Review from "./Review";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import Add from "./Add";

class App extends Component {

    render() {
        return (
            <Router>
                <div className="App">
                    <Header/>

                    <Route exact path="/" component={Review}/>
                    <Route path="/add" component={Add}/>
                </div>
            </Router>
        );
    }
}


function Header() {
    return (

        <div>
            <h2>todo</h2>
            <div className="nav">
                <Link to="/">Review</Link>
            </div>

            <div className="nav">
                <Link to="/add">Add</Link>
            </div>
        </div>

    );
}

export default App;