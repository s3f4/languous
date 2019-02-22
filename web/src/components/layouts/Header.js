import React, { Component } from 'react'
import { Link } from "react-router-dom"

class Header extends Component {
    render() {
        return (
            <div>
                <div style={{ display: "flex", margin: "10px", justifyContent: "center" }}>
                    <div className="ui secondary menu">
                        <div className="item"><Link to="/"><img alt="sgs" src="/languous.png"></img></Link></div>
                        <div className="right menu">
                            <div className="item">
                                <div className="ui action left icon input">
                                    <i className="search icon"></i>
                                    <input type="text" placeholder="Search" />
                                    <button className="ui button">Submit</button>
                                </div>
                            </div>
                            <div className="item">
                                <div className="ui buttons">
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