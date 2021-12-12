import React from 'react';
import logo from '../../logo.svg';
// import "@styles/footer.scss";
export default class Footer extends React.PureComponent {
    render() {
        return (
            <footer>
                <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                    <img src={logo} alt="App Logo" className="logo" />
                </a>
            </footer>
        )
    }
}