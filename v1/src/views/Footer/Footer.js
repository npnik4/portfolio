import React from 'react';
import './Footer.scss';
import creds from '../../assets/creds.svg';

function Footer() {
    return (
        <div className="footer" id="footer">
            <div className="image">
                <img src={creds} alt="creds" />
            </div>
        </div>
    )
}

export default Footer
