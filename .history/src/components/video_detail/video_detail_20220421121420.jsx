import React from 'react';
import styles from './video_detail.module.css';
const VideoDetail = (props) => {
    const decodeHTML = text => {
        const txt = document.createElement("textarea");
        txt.innerHTML = text;
        return txt.value
    }
    return <div className={styles.detail_container}>
        <h1>{decodeHTML(props.video.snippet.title)}</h1>
        <iframe className={styles.video_player}id="player" type="text/html" width="640" height="360" 
        src={`http://www.youtube.com/embed/${props.video.id.videoId}`}
        frameborder="0"></iframe>
        <h2>{decodeHTML(props.video.snippet.channelTitle)}</h2>
    </div>
            
}

export default VideoDetail;