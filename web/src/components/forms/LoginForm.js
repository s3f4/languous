import React, { Component } from 'react'
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Body from '../layouts/Body';

class LoginForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            userName: "",
            password: ""
        }
    }

    changeInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        const loginForm = (
            <div>
                <div style={{ margin: "10px auto", width: "400px" }} className="ui card">
                    <div className="content">
                        <div className="header">Login</div>
                    </div>
                    <div className="content">
                        <label>UserName:</label>
                        <div style={{ width: "100%" }} className="ui input">
                            <input
                                onChange={this.changeInput}
                                name="userName"
                                type="text" placeholder="userName..." />
                        </div>
                        <label>Password:</label>
                        <div style={{ width: "100%" }} className="ui input">
                            <input
                                onChange={this.changeInput}
                                name="password"
                                type="password" placeholder="password..." />
                        </div>
                    </div>
                    <div className="extra content">
                        <button className="ui primary button">Login</button>
                    </div>
                </div>
            </div>
        );
        return (
            <div>
                <Header />
                <Body content={loginForm} />
                <Footer />
            </div>
        )
    }
}
export default LoginForm;