import React, {Component} from 'react';
import Task from "./Task";
import PropTypes from 'prop-types';

class NewTask extends Component {
    componentDidMount() {
        this.nameInput.focus();
    }

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(evt) {
        evt.preventDefault();
        this.props.onTaskCreate(this.nameInput.value);
        this.nameInput.value = "";
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input className="InputField"
                           ref={input => this.nameInput = input}
                           placeholder="add"
                    />
                    <div className="container">
                        {
                            this.props.tasks
                                .map((x, index) => <Task created={true} key={x.id} i={index} value={x.value}/>)
                        }
                    </div>
                </form>
            </div>
        );
    }
}

NewTask.propTypes = {
    tasks: PropTypes.array,
    onTaskCreate: PropTypes.func
};

export default NewTask;