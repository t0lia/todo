import React, {Component} from 'react';
import './Filter.css';

class Filter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Filter">
                <input onChange={(evt)=>this.props.onChange(evt.target.value)} />
            </div>
        );
    }
}

export default Filter;
