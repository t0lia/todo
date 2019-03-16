import React from 'react';
import './Task.css';

function Task(props) {
    return (
        <div className="Task" >{props.value}</div>
    );
}

export default Task;