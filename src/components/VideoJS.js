import React from "react";
import VideoPlayer from 'react-video-js-player';
import testVideo from "../public/asItWas.mp4"

const VideoJS = () => {

    const videoSrc = testVideo;
    const poster =
        "https://programaenlinea.net/wp-content/uploads/2019/08/testing-1.jpg"

    return (
        <div className="App">
            <h1>Video Player</h1>
            <VideoPlayer
                src={videoSrc}
                poster={poster}
                width="720"
                height="420"
                playbackRates={[0.5, 1, 3.85, 16]} />
        </div>
    );
};
export default VideoJS;