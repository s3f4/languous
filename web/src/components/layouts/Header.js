import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import * as actions from "../../actions"
/**
 * withRouter used to give history feature
 */
import { withRouter } from "react-router-dom"

class Header extends Component {

    logout = () => {
        this.props.signout(() => {
            this.props.history.push("/words");
        });
    }

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

                                {
                                    this.props.userReducer.auth ?
                                        <div className="ui buttons">
                                            <Link style={{ margin: "0 5px" }} to="/words/new" className="ui tiny button"><i className="pencil alternate icon"></i>New</Link>
                                            <button className="ui primary button" onClick={this.logout}>Logout</button>
                                        </div>
                                        :
                                        <div className="ui buttons">
                                            <Link to="/login" className="ui primary button">Login</Link>
                                            <div className="or"></div>
                                            <Link to="/register" className="ui primary button">Register</Link>
                                        </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ clear: "both" }} className="ui fitted divider"></div>
            </div >
        )
    }
}

const mapStateToProps = state => {
    return state;
}
export default connect(mapStateToProps, actions)(withRouter(Header));