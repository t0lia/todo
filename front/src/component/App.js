import React, {Component} from 'react';
import './App.css';
import Review from "./Review";
import NewTask from "./NewTask";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import axios from "axios";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: "",
            tasks: [],
            history: [],
        };
        this.handleCreate = this.handleCreate.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        axios.get("http://localhost:8080/api/tasks")
            .then(rsp => rsp.data)
            .then(tasks => this.setState({tasks}))
            .catch(this.handleError);
    }

    handleCreate(value) {

        axios.post("http://localhost:8080/api/tasks", {value})
            .then(rsp => rsp.data)
            .then(newTask => {
                const tasks = [newTask, ...this.state.tasks];
                const history = [newTask, ...this.state.history];
                if (history.length > 5) {
                    history.pop();
                }
                this.setState({tasks, history});
                console.log("created task:" + JSON.stringify(newTask));
            })
            .then(console.log)
            .catch(this.handleError);


    }

    handleDelete(taskId) {
        console.log(taskId);
        axios.delete(`http://localhost:8080/api/tasks/${taskId}`)
            .then(rsp => rsp.data)
            .then(tsk => {
                console.log("deleted task with id:" + JSON.stringify(tsk.id));
                const tasks = this.state.tasks.filter(task => task.id !== tsk.id);
                this.setState({tasks});

            })
            .catch(this.handleError)
    }


    handleError(error) {
        console.log(error);
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <Header/>
                    <Route exact path="/" render={() => (<Review tasks={this.state.tasks}
                                                                 onTaskDelete={this.handleDelete}/>)}/>
                    <Route path="/add" render={() => (<NewTask tasks={this.state.history}
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