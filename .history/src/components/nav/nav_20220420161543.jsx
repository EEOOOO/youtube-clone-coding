import React, { Component } from 'react';
import styles from './nav.module.css';

class Nav extends Component {
    render() {
        return <header>
                <img className={styles.logo} src="/images/logo.png" />
                <input type="search" className={styles.search-input} placeholder="Type here..." />
                <button type="submit" className={styles.search-button}></button>
        </header>
    }
}

export default Nav;