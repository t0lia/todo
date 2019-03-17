import React, {Component} from 'react';
import Task from "./Task";
import todo from './todo';

class Add extends Component {
    componentDidMount() {
        this.nameInput.focus();
    }

    render() {
        return (
            <div>
                <input className="InputField"
                       ref={input => {
                           this.nameInput = input;
                       }}
                />

                <div className="container">
                    {todo .map(x => <Task key={x.id} value={x.value}/>)}
                </div>
            </div>
        );
    }
}

export default Add;