import React, { useState } from 'react';
import { Container } from '@material-ui/core';
// import homeScreen from '../../assets/urRecalls/home_screen.png';
// import ScanAvertGif from '../../assets/scanavert/X_frame.png';
import Card from '../../components/Grid/Card';
import './Feature.scss';

function Feature() {
    const [active, setActive] = useState([false, false]);

    const toggle = (index) => {
        setActive(Object.assign([], [false, false]));
        const newActive = Object.assign([], active);
        newActive[index] = !newActive[index];
        setActive(newActive);
    };
    return (
        <Container maxWidth="lg" className="feature" id="feature">
            <h1 className="title">Featured <span>Projects</span>.</h1>
            <div className="item-container">
                <div className="item">
                <Card
                    toggle={() => toggle(0)}
                    name="UrRecalls"
                    description="In the UrRecalls app, you can scan the barcode of your product, or search by product name to get recall information."
                    css="linear-gradient(-225deg, #E3FDF5 0%, #FFE6FA 100%)"
                    active={active[0]}
                />
                </div>
                <div className="item">
                <Card
                    toggle={() => toggle(1)}
                    name="SCANAVERT"
                    description="ScanAvert simplifies the process of making safer, compatible food choices."
                    css="linear-gradient(120deg, #f6d365 0%, #fda085 100%)"
                    active={active[1]}
                />
                </div>
            </div>

        </Container>

    )
}

export default Feature;
