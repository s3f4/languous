import React, { Component } from 'react'
import Header from '../components/layouts/Header';
import Footer from '../components/layouts/Footer';
import Body from '../components/layouts/Body';
import { connect } from "react-redux"
import * as actions from "../actions"

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }

    componentDidMount = () => {
        document.title = "languous.com | Log in";
        if (this.props.auth) {
            this.props.history.push("/")
        }

        console.log(this.props);
    }

    changeInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit = (e) => {
        const { email, password } = this.state;
        this.props.login({ email, password }, () => {
            this.props.history.push("/profile")
        });
        e.preventDefault();
    }

    render() {
        const loginForm = (
            <div>
                <form method="POST" onSubmit={this.onSubmit}>
                    <div style={{ margin: "10px auto", width: "400px" }} className="ui card">
                        <div className="content">
                            <div className="header">Login</div>
                        </div>
                        <div className="content">
                            <label>E-Mail:</label>
                            <div style={{ width: "100%" }} className="ui input">
                                <input
                                    onChange={this.changeInput}
                                    name="email"
                                    type="email" placeholder="email..." />
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
                </form>
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

const mapStateToProps = (state) => {
    return state.userReducer;
}

export default connect(mapStateToProps, actions)(Login);