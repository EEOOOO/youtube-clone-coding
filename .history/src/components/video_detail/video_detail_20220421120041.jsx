import React from 'react';
import styles from './video_detail.module.css';
const VideoDetail = (props) => (
    <div className={styles.detail_container}>
        <h1>{props.video.snippet.title}</h1>
        <h1>{props.video}</h1>
    </div>
            
    );

export default VideoDetail;