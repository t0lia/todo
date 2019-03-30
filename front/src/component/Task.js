import React from 'react';
import './Task.css';
import PropTypes from 'prop-types';

function Task(props) {

    const handleClick = function () {
        props.onDelete();
    };

    const renderView = function () {
        return (
            <div>
                <div className="Task review">{props.value}</div>
                <div className="delBttn">
                    <button onClick={handleClick}>del</button>
                </div>
            </div>
        );
    };

    const renderCreate = function () {
        const divStyle = {
            opacity: 1 - 0.2 * (props.i | 0),
        };

        return (
            <div>
                <div className="Task created" style={divStyle}>{props.value}</div>
            </div>
        );
    };

    return props.created ? renderCreate() : renderView();
}

Task.propTypes = {
    i: PropTypes.number,
    onDelete: PropTypes.func,
    value: PropTypes.string.isRequired,
    created: PropTypes.bool.isRequired
};

export default Task;