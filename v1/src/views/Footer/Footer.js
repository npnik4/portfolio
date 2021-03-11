import React from 'react';
import './Footer.scss';
import creds from '../../assets/creds.svg';
import yellow from '../../assets/yellow.svg';
import hotPink from '../../assets/hotPink.svg';
import brightblue from '../../assets/brightblue.svg';

function Footer() {
    return (
        <div className="footer" id="footer">
            <div className="image">
                <img src={creds} alt="creds" />
            </div>
            <div className="text">
                © Copyright. All rights reserved.
            </div>
            <img src={yellow} alt="shape" className="yellow" />
            <img src={hotPink} alt="shape" className="hotPink" />
            <img src={brightblue} alt="shape" className="brightblue" />
        </div>
    )
}

export default Footer
