import React from 'react';
import { SearchInput } from '@components';
import logo from '../../logo.svg';
import '@styles/header.scss';

export default class Header extends React.Component {
    render() {
        return (
            <header>
                <div className="headerBg"></div>
                <div className="headerContent-top">
                    <img src={logo} alt="App Logo" className="logo" />
                    <button className="btn addMovieBtn">+ add movie</button>
                </div>
                <div className="headerContent-main">
                    <h1>Find your movie</h1>
                    <SearchInput />
                </div>
            </header>
        )
    }
}