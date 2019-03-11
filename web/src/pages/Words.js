import React, { Component } from 'react'
import { WordList } from '../components/list/WordList';
import Header from '../components/layouts/Header';
import Body from '../components/layouts/Body';
import Footer from '../components/layouts/Footer';
import { connect } from "react-redux"
import { fetchAllWords } from "../actions/WordActions"
import Loader from '../components/common/Loader';


class Words extends Component {

    componentWillMount() {
        this.props.fetchAllWords();
    }

    render() {
        let content;
        if (this.props.fetching) {
            content = <Loader />
        } else {
            content = (
                <div className="ui text container">
                    <div className="ui three column grid">
                        {this.props.words.map(word => {
                            return <WordList key={word.WordID} word={word} />
                        })}
                    </div>
                </div>
            )
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

//state.wordreducers
const mapStateToProps = (state) => {
    return state.wordReducer;
}

const mapDispatchToProps = {
    fetchAllWords
}

export default connect(mapStateToProps, mapDispatchToProps)(Words);