import React, {Component} from 'react';
import './Filter.css';
import PropTypes from 'prop-types';

class Filter extends Component {
    componentDidMount() {
        this.nameInput.focus();
    }

    handleSubmit(evt) {
        evt.preventDefault();
    }

    render() {
        return (
            <div className="Filter">
                <form onSubmit={this.handleSubmit}>
                    <input className="InputField"
                           ref={input => this.nameInput = input}
                           onChange={() => this.props.onChange(this.nameInput.value)}
                           placeholder="filter"
                    />

                </form>
            </div>
        );
    }
}

Filter.propTypes = {
    onChange: PropTypes.func.isRequired
};

export default Filter;
