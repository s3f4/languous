import React, { Component } from 'react'
import { WordList } from '../components/list/WordList';
import Header from '../components/layouts/Header';
import Body from '../components/layouts/Body';
import Footer from '../components/layouts/Footer';
import { connect } from "react-redux"
import { fetchAllWords } from "../actions/WordActions"


class WordListPage extends Component {
    componentWillMount() {
        this.props.fetchAllWords();
        console.log(this.props);
    }
    render() {
        let content;
        if (this.props.fetching) {
            content = "loading..."
        }

        if (this.props.words) {
            content =
                <div className="ui text container">
                    <div className="ui three column grid">
                        {this.props.words.map(word => {
                            return <WordList key={word.id} word={word} />
                        })}
                    </div>
                </div>
        } else {
            content = "";
        }

        return (
            <div>
                <Header />
                <Body content={content} />
                <Footer />
                {JSON.stringify(this.props)}
            </div>
        )
    }
}

//state.wordreducers
const mapStateToProps = ({ wordReducer }) => {
    return wordReducer;
}

const mapDispatchToProps = {
    fetchAllWords
}

export default connect(mapStateToProps, mapDispatchToProps)(WordListPage);