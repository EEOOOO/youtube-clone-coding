import React from 'react';
import styles from './video_item.module.css'
const VideoItem = (props) => <li className={styles.video_item}>
    <img className={styles.video_thumbnail} src={props.video.snippet.thumbnails.medium.url} />
    <div className="video_description">
        <span className={styles.video_title}>{props.video.snippet.title}</span>
        <span className={styles.channel_title}>{props.video.snippet.channelTitle}</span>
    </div>
</li>


export default VideoItem;