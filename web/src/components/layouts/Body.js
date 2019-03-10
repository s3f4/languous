import React, { Component } from 'react'

class Body extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", justifyItems: "center", margin: "50px auto", minHeight: "250px" }}>
                {this.props.content}
            </div>
        )
    }

}
export default Body;
