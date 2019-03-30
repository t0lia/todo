import React, {Component} from 'react';
import './Review.css';
import Task from "./Task";
import Filter from "./Filter";
import "./Review.css"
import PropTypes from 'prop-types';

class Review extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: "",
        };
    }

    componentDidMount() {
        console.log(this.props);
        console.log("mount");
    }

    handleFilter(filterValue) {
        console.log("set filter: " + filterValue);
        this.setState({filter: filterValue});
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Filter onChange={value => this.handleFilter(value)}/>
                    <div className="container">
                        {
                            this.props.tasks
                                .filter(task => task.value.includes(this.state.filter))
                                .map(task => <Task onDelete={() => this.props.onTaskDelete(task.id)}
                                                created={false}
                                                key={task.id}
                                                value={task.value}/>)
                        }
                    </div>
                </header>
            </div>
        );
    }
}

Review.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        value: PropTypes.string.isRequired
    })).isRequired,
    onTaskDelete: PropTypes.func
};

export default Review;
