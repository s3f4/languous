import React, { Component } from 'react'
import { PacmanLoader } from 'react-spinners';
import { css } from '@emotion/core';

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

export default class Loader extends Component {
    render() {
        return (
            <div>
                <div className="ui text container">
                    <PacmanLoader
                        css={override}
                        sizeUnit={"px"}
                        size={60}
                        color={'#2185d0'}
                    />
                    <br style={{ clear: "both" }} />
                </div>
            </div>
        )
    }
}
