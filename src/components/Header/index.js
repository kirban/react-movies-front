import React from 'react';
import { SearchInput } from '@components';
import logo from '../../logo.svg';
import '@styles/header.scss';

export default class Header extends React.Component {
    // onMovieCreate = e => {
    //     this.props.onMovieCreate && this.props.onMovieCreate(e);
    // }

    render() {
        return (
            <>  
                <header>
                    <div className="headerBg"></div>
                    <div className="headerContent-top">
                        <img src={logo} alt="App Logo" className="logo" />
                        <button className="btn addMovieBtn" data-action="add" onClick={this.props.onMovieCreate}>+ add movie</button>
                    </div>
                    <div className="headerContent-main">
                        <h1>Find your movie</h1>
                        <SearchInput />
                    </div>
                </header>
            </>
        )
    }
}