import React from 'react';
import './App.css';
import Nav from './components/nav/nav';
import Card from './components/card/card';
import { useEffect, useState } from 'react/cjs/react.production.min';
function App() {
  const [videos, setVideos] = useState([]);

  useEffect(()=>{
    console.log("vidoes")
  }, []);

  return <>
  <Nav/>
  <Card/>
  </>
}

export default App;
