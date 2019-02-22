import React, { Component } from 'react'
import Header from '../layouts/Header';
import Body from '../layouts/Body';
import Footer from '../layouts/Footer';

class RegisterForm extends Component {
    render() {
        const registerForm = (
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
                <Body content={registerForm} />
                <Footer />
            </div>
        )
    }
}


export default RegisterForm;