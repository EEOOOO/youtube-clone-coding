import React, { Component } from 'react';
import styles from './nav.module.css';

class Nav extends Component {
    render() {
        return (<header className={styles.search_header}>
                <img className={styles.logo} src="/images/logo.png" />
                <h1 className={styles.title}>Youtube</h1>
                <input type="search" placeholder="Type here..."className={styles.search_input} />
                <button type="submit"className={styles.search_submit} >
                    <img src="/images/search.png" alt="" className="search_button_img" />
                </button>
        </header>
        );
    }
}

export default Nav;