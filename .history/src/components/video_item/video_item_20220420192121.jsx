import React from 'react';
import styles from './video_item.module.css'
const VideoItem = (props) => <li>
    <span className={styles.title}>{props.video.snippet.title}</span>
    <h1>{props.video.snippet.channelTitle}</h1>;
    <img src={props.video.snippet.thumbnails.medium.url} />
</li>


export default VideoItem;