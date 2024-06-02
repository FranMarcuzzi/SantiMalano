import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container1">
                <p>&copy; 2024 Mi Landing Page. Todos los derechos reservados.</p>
                <nav>
                    <ul>
                        <li><a href="#section1">Sección 1</a></li>
                        <li><a href="#section2">Sección 2</a></li>
                        <li><a href="#section3">Sección 3</a></li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;
