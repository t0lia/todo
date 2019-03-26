import React, {Component} from 'react';
import './App.css';
import Review from "./Review";
import NewTask from "./NewTask";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: "",
            tasks: [
                {id: 1, value: "first"},
                {id: 2, value: "second"},
                {id: 3, value: "third"},
                {id: 4, value: "fourth"},
                {id: 5, value: "fifth"}
            ],
            createdTasks: [],
        };
        this.handleCreate = this.handleCreate.bind(this);
        this.generateId = this.generateId.bind(this);
    }

    handleCreate(task) {
        const id = this.generateId();
        const newTasks = [{id: id, value: task}, ...this.state.tasks];

        const newCreatedTasks = [{id: id, value: task}, ...this.state.createdTasks];
        console.log(newCreatedTasks.length);
        if (newCreatedTasks.length > 5) {
            newCreatedTasks.pop();
        }

        this.setState({tasks: newTasks, createdTasks: newCreatedTasks});
        console.log("created task:" + JSON.stringify({id: id, value: task}));
    }

    generateId() {
        return this.state.tasks
            .map(task => task.id)
            .reduce((acc, cur) => acc > cur ? acc : cur) + 1;
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <Header/>
                    <Route exact path="/" render={() => (<Review tasks={this.state.tasks}/>)}/>
                    <Route path="/add" render={() => (<NewTask tasks={this.state.createdTasks}
                                                               onTaskCreate={this.handleCreate}/>)}/>
                </div>
            </Router>
        );
    }
}


function Header() {
    return (
        <div>
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