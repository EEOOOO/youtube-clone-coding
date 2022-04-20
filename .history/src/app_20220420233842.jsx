import React, { useEffect, useState } from 'react';
import './App.css';
import Nav from './components/nav/nav';
import VideoList from './components/video_list/video_list';

function App(props) {
  const [videos, setVideos] = useState([]);

  const onSearch = keyword =>{
    props.youtube.search(keyword);    
  }
  useEffect(()=>{
    props.youtube.mostPopular();
  },[]);
    

  return <>
  <Nav onSearch={onSearch}/>
  <VideoList videos={videos}/>
  </>
}

export default App;
