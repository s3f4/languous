import React, { Component } from 'react'
import { Link } from "react-router-dom"

class Header extends Component {
    render() {
        return (
            <div style={{ display: "flex", margin: "10px", justifyContent: "center" }}>
                <div className="ui secondary menu">
                    <div className="item"><Link to="#"><b className="small ui primary button">languous.com</b></Link></div>
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
                                <Link to="#" className="ui primary button">Login</Link>
                                <div className="or"></div>
                                <button className="ui primary button">Register</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
export default Header;