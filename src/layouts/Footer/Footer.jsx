import React, { useContext } from 'react';
import { SettingsContext } from '../../api/context/useContext';
import './Footer.scss';

const Footer = () => {
    const year = new Date().getFullYear();
    const settings = useContext(SettingsContext);

    return (
        <footer>
            <h4>{settings.title} © {year} | Powered by OpenPMS</h4>
        </footer>
    );
};

export default Footer;