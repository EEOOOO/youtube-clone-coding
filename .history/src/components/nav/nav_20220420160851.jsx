import React, { Component } from 'react';

class Nav extends Component {
    render() {
        return (
            <header>
                <img className="logo" src="/images/logo.png"/>
                <form action="text">
                    <input type="text" className="search-input" placeholder="Type here..." />
                    <button className="search-button"></button>
                </form>
            </header>
        );
    }
}

export default Nav;