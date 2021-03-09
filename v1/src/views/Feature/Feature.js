import React from 'react';
import { Container } from '@material-ui/core';
import homeScreen from '../../assets/urRecalls/home_screen.png';
import ScanAvertGif from '../../assets/scanavert/X_frame.png';
import './Feature.scss';

function Feature() {
    return (
        <Container maxWidth="lg" className="feature" id="feature">
            <h1>Featured Projects</h1>
            <div className="item-container">
                <div className="item">
                    <div className="image">
                        <img src={homeScreen} alt="homeScreen" className="urRecalls-img"/>
                    </div>
                    <div className="description">
                        <h1>UrRecalls</h1>
                        <p>In the UrRecalls app, you can scan the barcode of your product, or search by product name to get recall information.</p>
                    </div>
                </div>
                <div className="item">
                    <div className="image">
                        <img src={ScanAvertGif} alt="homeScreen" className="urRecalls-img"/>
                    </div>
                    <div className="description">
                        <h1>SCANAVERT</h1>
                        <p>ScanAvert simplifies the process of making safer, compatible food choices.</p>
                    </div>
                </div>
            </div>

        </Container>

    )
}

export default Feature;
