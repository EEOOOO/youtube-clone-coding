import React, { useRef } from 'react';
import styles from './video_item.module.css'
const VideoItem = (props) => {
    const decodeHTML = text => {
        const txt = document.createElement("textarea");
        txt.innerHTML = text;
        return txt.value
    }
    const onClick = () => {
        props.onVideoClick(props.video);
    }
    const displayType = props.display == 'grid'? styles.grid : styles.list;
    return <li className={`${styles.video_item} ${displayType}`} onClick={onClick}>
        <img className={styles.video_thumbnail} src={props.video.snippet.thumbnails.medium.url} />
        <div className="video_description">
            <p className={styles.video_title}>{decodeHTML(props.video.snippet.title)}</p>
            <p className={styles.channel_title}>{props.video.snippet.channelTitle}</p>
        </div>
    </li>
}


export default VideoItem;