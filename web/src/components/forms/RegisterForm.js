import React, { Component } from 'react'
import Header from '../layouts/Header';
import Body from '../layouts/Body';
import Footer from '../layouts/Footer';
import "./Form.css";
import { connect } from "react-redux";
import { userAdd } from "../../actions/UserActions"

class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userEmail: "",
            userName: "",
            password: "",
            passwordRepeat: ""
        }
        this.changeInput = this.changeInput.bind(this);
    }

    changeInput = function (e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    register = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.props.userAdd(this.state);
    }



    render() {
        const registerForm = (
            <div>
                <form onSubmit={this.register} method="post">
                    <div style={{ margin: "10px auto", width: "700px" }} className="ui card">
                        <div className="content">
                            <div className="header">Register to use Languous.com everywhere</div>
                        </div>
                        <div className="content">
                            <label>Email:</label>
                            <div style={{ width: "100%" }} className="ui input">
                                <input
                                    className="registerInput"
                                    onChange={this.changeInput}
                                    value={this.state.userEmail}
                                    name="userEmail" type="text" placeholder="email..." />
                            </div>
                            <label>UserName:</label>
                            <div style={{ width: "100%" }} className="ui input">
                                <input
                                    onChange={this.changeInput}
                                    value={this.state.userName}
                                    name="userName"
                                    type="text"
                                    placeholder="Type your username ex johndoe123..." />
                            </div>
                            <label>Password:</label>
                            <div style={{ width: "100%" }} className="ui input">
                                <input
                                    onChange={this.changeInput}
                                    value={this.state.password}
                                    name="password"
                                    type="password"
                                    placeholder="Type your password..." />
                            </div>
                            <label>Password Repeat:</label>
                            <div style={{ width: "100%" }} className="ui input">
                                <input
                                    onChange={this.changeInput}
                                    value={this.state.passwordRepeat}
                                    name="passwordRepeat"
                                    type="password"
                                    placeholder="Type your password repeat..." />
                            </div>
                        </div>
                        <div className="extra content">
                            <button className="ui primary button">Register</button>
                        </div>
                    </div>
                </form>
            </div>
        );
        return (
            <div>
                <Header />
                <Body content={registerForm} />
                <Footer />
            </div>
        )
    }
}

const mapDispatchToProps = {
    userAdd
}

export default connect(null, mapDispatchToProps)(RegisterForm);