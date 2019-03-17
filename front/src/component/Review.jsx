import React, {Component} from 'react';
import './Review.css';
import todo from './todo';
import Task from "./Task";
import Filter from "./Filter";
import "./Review.css"

class Review extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: "",
        };
    }

    onFilter(x) {
        this.setState({filter: x});
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Filter onChange={x => this.onFilter(x)}/>
                    <div className="container">
                        {todo.filter(x => x.value.includes(this.state.filter))
                            .map(x => <Task key={x.id} value={x.value}/>)}
                    </div>
                </header>
            </div>
        );
    }
}

export default Review;
