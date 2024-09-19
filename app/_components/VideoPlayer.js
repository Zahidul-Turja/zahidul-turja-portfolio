"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import ReactPlayer from "react-player/youtube";
import { gsap } from "gsap";

import LoadingContent from "./LoadingContent";

function VideoPlayer({ video }) {
  const content = useRef();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(
        content.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 1,
          delay: 1,
          ease: "power2.out",
        },
      )
        .to(".loader", { duration: 0.2, ease: "power2.out" })
        .fromTo(
          ".loader",
          {
            opacity: 1,
          },
          {
            opacity: 0,
            duration: 0.1,
            display: "none",
            ease: "power2.in",
          },
        )
        .fromTo(
          ".player",
          {
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 0.8,
            ease: "power2.in",
          },
          "-=0.8",
        );
    }, content);

    return () => ctx.revert();
  }, [isClient]);

  if (!isClient) {
    return null;
  }

  return (
    <div
      className="relative flex justify-center rounded-xl py-2"
      ref={content}
      aria-label="polite"
    >
      <div className="loader absolute w-full">
        <LoadingContent />
      </div>

      <div className="player w-full opacity-0">
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
    </div>
  );
}

export default VideoPlayer;
