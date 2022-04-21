import React from 'react';
import styles from './video_detail.module.css';
const VideoDetail = (props) => (
            <h1>{props.video.snippet.title}</h1>
    );

export default VideoDetail;