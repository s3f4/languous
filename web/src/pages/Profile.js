import React, { Component } from 'react'
import Auth from '../components/common/Auth';
import { connect } from "react-redux"
import Header from '../components/layouts/Header';
import Body from '../components/layouts/Body';
import Footer from '../components/layouts/Footer';

class Profile extends Component {



    render() {
        const content = JSON.stringify(this.props.user)
        return (
            <div>
                <Header />
                <Body content={content} />
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = state => state.userReducer;

export default Auth(connect(mapStateToProps, null)(Profile))