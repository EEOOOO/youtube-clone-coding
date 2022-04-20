import React, { Component } from 'react';
import styles from './nav.module.css';

class Nav extends Component {
    render() {
        return (<header className={styles.search_header}>
                <img className={styles.logo} src="/images/logo.png" />
                <h1 className={styles.title}>Youtube</h1>
                <input className={styles.search_input} type="search" placeholder="Type here..." />
                <button className={styles.search_submit} type="submit" >
                    <img className={styles.search_button_img} src="/images/search.png" />
                </button>
        </header>
        );
    }
}

export default Nav;