import React from 'react';
import VideoItem from '../video_item/video_item';
const VideoList = props => (
            <ul>
                {props.videos.map(video => {
                    <h1>{video.snippet.title}</h1>
                    //<VideoItem key={video.id} video={video} />
                })}
            </ul>
    );

export default VideoList;