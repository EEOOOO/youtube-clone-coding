import React from 'react';

const VideoItem = (props) => <li>
    <h1>{props.video.snippet.title}</h1>
</li>


export default VideoItem;