import React, { Component } from 'react';
import styles from './nav.module.css';

class Nav extends Component {
    render() {
        return (
            <header>
                <img className={styles.logo} src="/images/logo.png"/>
                <form className={styles.input-form}>
                    <input type="text" className={styles.search-input} placeholder="Type here..." />
                    <button className={styles.search-button}></button>
                </form>
            </header>
        );
    }
}

export default Nav;