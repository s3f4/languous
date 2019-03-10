import React, { Component } from 'react';
import { connect } from 'react-redux';
export default Child => {

    class Composed extends Component {
        // Our component just got rendered
        componentDidMount() {
            this.shouldNavigateAway();
        }
        // Our component just got updated
        componentDidUpdate() {
            this.shouldNavigateAway();
        }
        shouldNavigateAway() {
            if (!this.props.auth) {
                this.props.history.push('/login');
            }
        }
        render() {
            return <Child {...this.props} />;
        }
    }
    function mapStateToProps(state) {
        return { auth: state.userReducer.auth };
    }
    return connect(mapStateToProps)(Composed);
};