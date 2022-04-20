import React from 'react';
import VideoItem from '../video_item/video_item';
const VideoList = (props) => (
            <ul>
                {props.vidoes.map(video=> {
                    <VideoItem title={} />
                })}
            </ul>
    );

export default VideoList;