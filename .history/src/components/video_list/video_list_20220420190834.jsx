import React from 'react';
import VideoItem from '../video_item/video_item';
const VideoList = (props) => (
            <ul>
                {props.videos.map(video => {
                    console.log({video.snippet.title});
                    //<VideoItem key={video.id} video={video} />
                })}
            </ul>
    );

export default VideoList;