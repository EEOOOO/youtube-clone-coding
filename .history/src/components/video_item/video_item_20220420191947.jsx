import React from 'react';

const VideoItem = (props) => <li>
    <h1>{props.video.snippet.title}</h1>
    <h1>{props.video.snippet.channelTitle}</h1>;
    <img src={props.video.snippet.thumbnail.medium.url} />
</li>


export default VideoItem;