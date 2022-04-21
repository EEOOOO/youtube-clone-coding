import React from 'react';
import styles from './video_detail.module.css';
const VideoDetail = (props) => (
    <div className={styles.detail_container}>
        <h1>{props.video.snippet.title}</h1>
        {console.log({props.video})}
    </div>
            
    );

export default VideoDetail;