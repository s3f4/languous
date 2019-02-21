import React, { Component } from 'react'
import Card from '../card/Card';

class Body extends Component {
    render() {
        return (
            <div>
                <div style={{ clear: "both" }} className="ui fitted divider"></div>
                <div style={{ margin: "20px" }}>
                    <div className="ui text container">
                        <div className="ui three column grid">
                            <div className=" wide column"><Card /></div>
                            <div className=" wide column"><Card /></div>
                            <div className=" wide column"><Card /></div>
                            <div className=" wide column"><Card /></div>
                            <div className=" wide column"><Card /></div>
                            <div className=" wide column"><Card /></div>
                            <div className=" wide column"><Card /></div>
                            <div className=" wide column"><Card /></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
export default Body;
