import React from "react";
import { Tilt } from 'react-tilt';
import LogoImg from './logo.png';
import './Logo.css';

const Logo = () => {
    return (
        <div className="ma4 mt0">
            <Tilt className="Tilt br2 shadow-2" options={{ max: 55 }} style={{ height: 100, width: 100 }}>
                <div className="Tilt-inner">
                    <img style={{ paddingTop: '.8rem', height: '5rem', width: '10rem'}} src={LogoImg} alt="Logo" />
                </div>
            </Tilt>
        </div>
    )
}

export default Logo;