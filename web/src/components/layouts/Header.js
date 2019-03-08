import React, { Component } from 'react'
import { Link } from "react-router-dom"

class Header extends Component {
    render() {
        return (
            <div>
                <div style={{ display: "flex", margin: "10px", justifyContent: "center" }}>
                    <div className="ui secondary menu">
                        <div className="item">
                            <Link style={{ margin: "0 5px" }} to="/words" className="ui tiny button"><i className="tags icon"></i>Words</Link>
                            <Link style={{ margin: "0 5px" }} to="/users" className="ui tiny button"><i className="user icon"></i>Users</Link>
                        </div>

                        <div className="right menu">
                            <div className="item">
                                <div className="item"><Link to="/"><img alt="sgs" src="/languous.png"></img></Link></div>
                            </div>
                            <div className="item">

                                <div className="ui buttons">
                                    <Link style={{ margin: "0 5px" }} to="/register" className="ui tiny button"><i className="pencil alternate icon"></i>New</Link>
                                    <Link to="/login" className="ui primary button">Login</Link>
                                    <div className="or"></div>
                                    <Link to="/register" className="ui primary button">Register</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ clear: "both" }} className="ui fitted divider"></div>
            </div >
        )
    }
}
export default Header;