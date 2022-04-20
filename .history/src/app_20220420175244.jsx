import React, { Component } from 'react';
import './App.css';
import Nav from './components/nav/nav';
import Card from './components/card/card';

class App extends Component {
    render() {
        return <>
        <Nav/>
        <Card/>
        </>
    }
}

export default App;