import React, { useState, useRef } from "react";
import "./VideoPlayer.css";
import sampleVideo from "../../assets/istockphoto-472529112-640_adpp_is.mp4";

const VideoPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  const handlePlayPause = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    // 👇 Added ID so navbar can scroll to it
    <section className="video-section" id="video">
      <div className="video-container">
        <h2 className="video-title">🎥 Campus Life at Nurturing University</h2>
        <p className="video-description">
          Step inside the world of Nurturing University — where innovation,
          creativity, and community come together. Experience our vibrant
          classrooms, beautiful campus, and student life through this short
          video journey.
        </p>

        <div className="video-wrapper">
          <video
            ref={videoRef}
            className="video-player"
            src={sampleVideo}
            poster="https://cdn.pixabay.com/photo/2015/09/05/21/51/library-925743_960_720.jpg"
            autoPlay
            muted
            loop
            playsInline
          ></video>

          <button className="play-btn" onClick={handlePlayPause}>
            {isPlaying ? "⏸️ Pause" : "▶️ Play"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default VideoPlayer;
