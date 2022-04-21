import React, { useEffect, useState } from 'react';
import './App.css';
import Nav from './components/nav/nav';
import VideoList from './components/video_list/video_list';

function App(props) {
  const [videos, setVideos] = useState([]);

  const onSearch = keyword =>{
    props.youtube.search(keyword)
    .then(result => setVideos(result.items))
    .catch(error => console.log('error', error));   
  }
  useEffect(()=>{
    props.youtube.mostPopular()
    .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  },[]);
  const handleVideoClick = video => {
    
  }
  return <>
  <Nav onSearch={onSearch}/>
  <VideoList videos={videos} onVideoClick={handleVideoClick}/>
  </>
}

export default App;
