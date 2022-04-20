import React, { Component } from 'react';
import styles from './nav.module.css';

class Nav extends Component {
    render() {
        return (<header>
                <img className={styles.logo} src="/images/logo.png" />
                <h1 className={styles.title}>Youtube</h1>
                <input type="search" className={styles.search-input}  />
                <button type="submit" className={styles.search-button}></button>
        </header>
        );
    }
}

export default Nav;