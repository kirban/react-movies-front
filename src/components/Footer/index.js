import React from 'react';
import Image from 'next/image'
// import logo from '../../logo.svg';
// import "@styles/footer.scss";
export default class Footer extends React.PureComponent {
    render() {
        return (
            <footer>
                <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                    <Image src='/logo.svg' alt="App Logo" className="logo" width={139} height={24}/>
                    {/* <img src={logo} alt="App Logo" className="logo" /> */}
                </a>
            </footer>
        )
    }
}