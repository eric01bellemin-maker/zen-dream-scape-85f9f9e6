import React from 'react';
import Navbar from "@/components/Navbar";

const VideoSession = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center p-4">
        <video 
          controls 
          className="max-w-5xl w-full rounded-2xl shadow-2xl"
          src="/videos/video.mp4"
        >
          Votre navigateur ne supporte pas la lecture de vidéos.
        </video>
      </div>
    </div>
  );
};

export default VideoSession;
