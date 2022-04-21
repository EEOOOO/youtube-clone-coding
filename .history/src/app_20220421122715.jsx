import React, { useEffect, useState } from 'react';
import Nav from './components/nav/nav';
import VideoList from './components/video_list/video_list';
import VideoDetail from './components/video_detail/video_detail';
import styles from './app.module.css'
function App(props) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const onSearch = keyword =>{
    props.youtube.search(keyword)
    .then(result => {setVideos(result.items);
      setSelectedVideo(null)})
    .catch(error => console.log('error', error));   
  }
  useEffect(()=>{
    props.youtube.mostPopular()
    .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  },[]);
  const handleVideoClick = video => {
    const selected = video
    setSelectedVideo(selected);
    console.log(selected);
  }
  return <div className={styles.app}>
    <Nav onSearch={onSearch}/>
    <section className={styles.content}>
    {selectedVideo && <div className={styles.detail}>
         <VideoDetail video={selectedVideo}/>
      </div>}
    <div className={styles.list}>
      <VideoList videos={videos} onVideoClick={handleVideoClick} display={selectedVideo? 'list':'grid'}/>
    </div>
    </section>
  </div>
}

export default App;
