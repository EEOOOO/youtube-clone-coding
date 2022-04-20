import React from 'react';
import VideoItem from '../video_item/video_item';
const VideoList = (props) => (
            <ul>
                {props.vidoes.map(()=> {
                    <VideoItem title={} />
                })}
            </ul>
    );

export default VideoList;