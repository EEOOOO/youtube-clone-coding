import React from 'react';
import styles from './nav.module.css';

const Nav = (props) => {
    const inputRef = useRef();
    const handleSearch = () => {

    }
    const onKeyPress = () => {
        console.log('onKeyPress')
    }
    const onClick = () => {
        console.log('onClick')
    }
    return  <header className={styles.search_header}>
                <img className={styles.logo} src="/images/logo.png" />
                <h1 className={styles.title}>Youtube</h1>
                <input 
                ref = {inputRef}
                className={styles.search_input} 
                type="search" 
                placeholder="Type here..." 
                onKeyPress={onKeyPress} />
                <button className={styles.search_button} type="submit" onClick={onClick} >
                    <img className={styles.search_button_img} src="/images/search.png" />
                </button>
        </header>
}

export default Nav;