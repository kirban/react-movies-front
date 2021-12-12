import React from 'react';
import Image from 'next/image'
// import logo from '../../logo.svg';
// import "@styles/footer.scss";
export default class Footer extends React.PureComponent {
    render() {
        return (
            <footer>
                <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                    <img src='/logo.svg' alt="App Logo" className="logo" />
                </a>
            </footer>
        )
    }
}