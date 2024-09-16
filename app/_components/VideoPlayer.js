"use client";

import { color, m } from "framer-motion";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player/youtube";

function VideoPlayer({ video }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // This ensures the component is rendered only on the client
    setIsClient(true);
  }, []);

  // Prevent rendering during server-side
  if (!isClient) {
    return null; // Or return a loader, like: <p>Loading...</p>
  }

  return (
    <div className="flex justify-center rounded-xl py-2">
      <ReactPlayer
        url={video}
        controls={true}
        width="100%"
        height={"480px"}
        muted={true}
        style={{
          borderRadius: "1rem",
          overflow: "hidden",
        }}
      />
    </div>
  );
}

export default VideoPlayer;
