import React, { useEffect, useState } from 'react';
import './App.css';
import Nav from './components/nav/nav';
import VideoList from './components/video_list/video_list';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(()=>{
    console.log('videos');
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyA_iQsAW71LykNMoLKID5oU_-gdpc36eqE", requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  }, []);

  console.log({videos})
  return <ul>
    videos.map(video=>{
    <h1>video.snippet.title</h1>
  })
  </ul>/*<VideoList videos={videos}/>*/
}

export default App;
