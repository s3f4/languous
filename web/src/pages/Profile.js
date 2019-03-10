import React, { Component } from 'react'
import Auth from '../components/common/Auth';
import { connect } from "react-redux"
import Header from '../components/layouts/Header';
import Body from '../components/layouts/Body';
import Footer from '../components/layouts/Footer';

class Profile extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <Header />
                <Body connect={null} />
                <Footer />
            </div>
        )
    }
}

export default Auth(connect()(Profile))