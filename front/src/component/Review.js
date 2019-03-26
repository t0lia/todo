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
                                .filter(x => x.value.includes(this.state.filter))
                                .map(x => <Task created={false} key={x.id} value={x.value}/>)
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
    })).isRequired
};

export default Review;
