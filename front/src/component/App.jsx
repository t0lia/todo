import React, {Component} from 'react';
import './App.css';
import Review from "./Review";

class App extends Component {

    render() {
        return (
            <div className="App">
                <ul>
                    <li> review</li>
                    <li> plan</li>
                    <li> write</li>


                </ul>
                <Review/>
                <Plan/>
                <Write/>
            </div>
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

export default App;
