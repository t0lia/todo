import React, {Component} from 'react';
import './Filter.css';

class Filter extends Component {
    componentDidMount() {
        this.nameInput.focus();
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Filter">
                <input className="InputField"

                    ref={input => {
                        this.nameInput = input;
                    }}
                    onChange={(evt) => this.props.onChange(evt.target.value)}/>
            </div>
        );
    }
}

export default Filter;
