import React from 'react';
import './Task.css';
import PropTypes from 'prop-types';

function Task(props) {
    const divStyle = {
        opacity: 1 - 0.2 * (props.i | 0),
    };
    return (
        <div className={`Task ${props.created ? 'created' : ' review'}`} style={divStyle}>{props.value}</div>
    );
}


Task.propTypes = {
    i: PropTypes.number,
    value: PropTypes.string.isRequired,
    created: PropTypes.bool.isRequired
};

export default Task;