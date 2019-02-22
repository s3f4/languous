import React from 'react'
import { Link } from "react-router-dom"

export const Footer = () =>
    <div>
        <div className="ui inverted vertical footer segment">
            <div className="ui center aligned container">
                <img alt="test" src="/favicon.ico" className="ui centered mini image"></img>
                <div className="ui horizontal inverted small divided link list">
                    <Link to="#" className="item" href="#">Site Map</Link>
                    <Link to="#" className="item" href="#">Contact Us</Link>
                    <Link to="#" className="item" href="#">Terms and Conditions</Link>
                    <Link to="#" className="item" href="#">Privacy Policy</Link>
                </div>
            </div>
        </div>

    </div>

export default Footer;