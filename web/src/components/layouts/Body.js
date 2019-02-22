import React, { Component } from 'react'
import Card from '../card/Card';
import WordForm from '../forms/WordForm';

class Body extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                {this.props.content}
            </div>
        )
    }

}
export default Body;
