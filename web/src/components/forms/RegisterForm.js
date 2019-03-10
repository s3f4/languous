import React, { Component } from 'react'
import Header from '../layouts/Header';
import Body from '../layouts/Body';
import Footer from '../layouts/Footer';
import "./Form.css";
import { connect } from "react-redux";
import { signup } from "../../actions/UserActions"
import Loader from '../common/Loader';

class RegisterForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user_name: "",
            email: "",
            password: "",
            password_repeat: "",
            auth: null,
            error: {}
        }
    }

    componentDidMount = () => {
        if (this.props.auth) {
            this.props.history.push("/")
        }
    }


    formValidation() {
        const { user_name, email, password, password_repeat } = this.state

        if (password !== password_repeat) {
            this.setState({ error: "password and passwordrepeat aren't matched" });
        }

        if (password.length < 6) {
            this.setState({ error: "password count can't be less then 6" });
        }

        if (!user_name.length || !email.length) {
            this.setState({ error: "UserName or UserEmail can't be blank" });
        }

        return this.state.error
    }

    changeInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    register = (e) => {
        e.preventDefault();
        const { user_name, email, password, password_repeat } = this.state;
        if (this.formValidation()) {
            this.props.signup({ user_name, email, password, password_repeat }, () => {
                this.props.history.push("/words");
            });
        }

        console.log(this.props);

        if (this.props.error) {
            //this.props.history.push("/")
        }

    }


    render() {
        let content;
        if (this.props.loading) {
            content = <Loader />
        } else {
            content = (
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

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);