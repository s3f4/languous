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
        this.changeInput = this.changeInput.bind(this);
        this.state = {
            loading: false,
            error: {}
        }
    }

    formValidation() {
        const { userName, userEmail, password, passwordRepeat } = this.props

        if (password !== passwordRepeat) {
            this.setState({ error: "password and passwordrepeat aren't matched" });
        }

        if (password.length < 6) {
            this.setState({ error: "password count can't be less then 6" });
        }

        if (!userName.length || !userEmail.length) {
            this.setState({ error: "UserName or UserEmail can't be blank" });
        }

        return this.state.error
    }

    changeInput = function (e) {
    }

    register = (e) => {
        e.preventDefault();

        if (this.formValidation()) {
            this.props.userAdd(this.props.userForm);
        } else {

        }

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
                                    value={this.props.userEmail}
                                    name="userEmail" type="text" placeholder="email..." />
                            </div>
                            <label>UserName:</label>
                            <div style={{ width: "100%" }} className="ui input">
                                <input
                                    onChange={this.changeInput}
                                    value={this.props.userName}
                                    name="userName"
                                    type="text"
                                    placeholder="Type your username ex johndoe123..." />
                            </div>
                            <label>Password:</label>
                            <div style={{ width: "100%" }} className="ui input">
                                <input
                                    onChange={this.changeInput}
                                    value={this.props.password}
                                    name="password"
                                    type="password"
                                    placeholder="Type your password..." />
                            </div>
                            <label>Password Repeat:</label>
                            <div style={{ width: "100%" }} className="ui input">
                                <input
                                    onChange={this.changeInput}
                                    value={this.props.passwordRepeat}
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

const mapStateToProps = state => {
    const { userEmail, userName, password, passwordRepeat } = state.userReducer;
    return { userEmail, userName, password, passwordRepeat };
}

const mapDispatchToProps = {
    userAdd,
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);