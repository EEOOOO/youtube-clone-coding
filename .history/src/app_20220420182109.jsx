import React, { useEffect, useState } from 'react';
import './App.css';
import Nav from './components/nav/nav';
import Card from './components/card/card';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(()=>{
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyA_iQsAW71LykNMoLKID5oU_-gdpc36eqE", requestOptions)
      .then(response => response.text())
      .then(result => setVideos(result.items)))
      .catch(error => console.log('error', error));
  }, []);

  return <h1>hello</h1>
}

export default App;
