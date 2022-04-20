import React, { Component } from 'react';

class Nav extends Component {
    render() {
        return (
            <header>
                <img className="logo" src="/images/logo.png"/>
                <form action="text">
                    <input type="text" placeholder="Type here..."className="search-input" />
                    <button className="search-button"></button>
                </form>
            </header>
        );
    }
}

export default Nav;