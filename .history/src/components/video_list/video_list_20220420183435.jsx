import React from 'react';
import VideoItem from '../video_item/video_item';
const VideoList = props => (
            <ul>
                console.log({props})
                {props.videos.map(video=> {
                    <VideoItem key={video.id} video={video} />
                })}
            </ul>
    );

export default VideoList;