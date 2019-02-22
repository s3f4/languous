import React, { Component } from 'react'
import Header from "../components/layouts/Header"
import Footer from "../components/layouts/Footer"
import Body from "../components/layouts/Body"
import WordForm from '../components/forms/WordForm';
import Card from '../components/card/Card';


class MainPage extends Component {
    render() {
        const content = (
            <div>
                <div style={{ margin: "20px" }}>
                    <WordForm />
                    <div className="ui text container">
                        <div className="ui three column grid">
                            <div className=" wide column"><Card /></div>
                            <div className=" wide column"><Card /></div>
                            <div className=" wide column"><Card /></div>
                            <div className=" wide column"><Card /></div>
                            <div className=" wide column"><Card /></div>
                            <div className=" wide column"><Card /></div>
                            <div className=" wide column"><Card /></div>
                            <div className=" wide column"><Card /></div>
                        </div>
                    </div>
                </div>
            </div >
        );

        return (
            <div className="App">
                <Header />
                <Body content={content} />
                <Footer />
            </div>
        )
    }
}

export default MainPage;