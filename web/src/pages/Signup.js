import React, { Component } from 'react'
import Header from '../components/layouts/Header';
import Body from '../components/layouts/Body';
import Footer from '../components/layouts/Footer';
import "../components/forms/Form.css";
import { connect } from "react-redux";
import { signup } from "../actions/UserActions"
import Loader from '../components/common/Loader';

class Signup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user_name: "",
            email: "",
            password: "",
            password_repeat: "",
            auth: null,
            error: null
        }
    }

    componentDidMount = () => {
        document.title = "languous.com | Sign Up";
        if (this.props.auth) {
            this.props.history.push("/")
        }
    }


    formValidation = () => {
        const { user_name, email, password, password_repeat } = this.state
        const error = {};

        if (password !== password_repeat) {
            error.password_repeat = "password and passwordrepeat aren't matched";
        }

        if (password.length < 6) {
            error.password = "password count can't be less then 6";
        }

        if (!user_name.length) {
            error.user_name = "user name can't be blank"
        }

        if (!email.length) {
            error.email = "email can't be blank";
        }
        return error;
    }

    changeInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    register = (e) => {
        e.preventDefault();
        const { user_name, email, password, password_repeat } = this.state;
        const errors = this.formValidation();
        if (!Object.keys(errors).length) {
            this.props.signup({ user_name, email, password, password_repeat }, () => {
                this.props.history.push("/words");
            });
        } else {
            this.setState({ error: errors });
        }
    }


    render() {
        let content;
        if (this.props.loading) {
            content = <Loader />
        } else {
            content = (
                <div>
                    {this.state.error ? JSON.stringify(this.state.error) : null}
                    <form onSubmit={this.register} method="post">
                        <div style={{ margin: "10px auto", width: "700px" }} className="ui card">
                            <div className="content">
                                <div className="header">Register to use Languous.com</div>
                            </div>
                            <div className="content">
                                <label>Email:</label>
                                <div style={{ width: "100%" }} className="ui input">
                                    <input
                                        className="registerInput"
                                        onChange={this.changeInput}
                                        value={this.state.email}
                                        name="email" type="email" placeholder="ex@ex.com..." />
                                </div>
                                <label>UserName:</label>
                                <div style={{ width: "100%" }} className="ui input">
                                    <input
                                        onChange={this.changeInput}
                                        value={this.state.user_name}
                                        name="user_name"
                                        type="text"
                                        placeholder="Type your username ex johndoe123..." />
                                </div>
                                <label>Password:</label>
                                <div style={{ width: "100%" }} className="ui input">
                                    <input
                                        autoComplete="new-password"
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
                                        value={this.state.password_repeat}
                                        name="password_repeat"
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
        }

        return (
            <div>
                <Header />
                <Body content={content} />
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return state.userReducer;
}

const mapDispatchToProps = {
    signup,
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);