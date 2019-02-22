import React, { Component } from 'react'
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Body from '../layouts/Body';

class LoginForm extends Component {
    render() {
        const loginForm = (
            <div>
                <div style={{ margin: "10px auto", width: "700px" }} className="ui card">
                    <div className="content">
                        <div className="header">Add New Word</div>
                    </div>
                    <div className="content">
                        <label>Word:</label>
                        <div style={{ width: "100%" }} className="ui input">
                            <input name="word" style={{ margin: "10px auto", width: "100%" }} type="text" placeholder="Type your word..." />
                        </div>
                        <label>Translation:</label>
                        <div style={{ width: "100%" }} className="ui input">
                            <input name="word-translation" style={{ margin: "10px auto", width: "100%" }} type="text" placeholder="Type translation..." />
                        </div>
                    </div>
                    <div className="extra content">
                        <button className="ui primary button">Add Your New Word</button>
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