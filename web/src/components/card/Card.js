import React, { Component } from 'react'

export default class Card extends Component {
    render() {
        return (
            <div>
                <div className="ui card">
                    <div className="content">
                        <i className="right floated like icon"></i>
                        <i className="right floated star icon"></i>
                        <div className="header">Cute Dog</div>
                        <div className="description">
                            <p> dolor aliqua eu. Minim commodo nulla officia laboris. Commodo incididunt nisi qui sunt ad cupidatat ad occaecat consectetur reprehenderit nostrud sit cillum officia.</p>
                        </div>
                    </div>
                    <div className="extra content">
                        <span className="left floated like">
                            <i className="like icon"></i>
                            Like
                            </span>
                        <span className="right floated star">
                            <i className="star icon"></i>
                            Favorite
                            </span>
                    </div>
                </div>

            </div>
        )
    }
}
