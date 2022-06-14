import lottie, { AnimationItem } from "lottie-web";
import { useEffect, useRef } from "react";

import animationData from "../public/hoverboard.json";

export default function Hoverboard() {
  const containerRef = useRef(null);
  const animation = useRef<AnimationItem>();

  useEffect(() => {
    if (!containerRef.current) return;

    let _animation: AnimationItem | undefined;

    function play() {
      animation.current.play();
    }

    animation.current = lottie.loadAnimation({
      container: containerRef.current!,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData,
    });

    play();

    _animation = animation.current;

    return () => {
      _animation?.destroy();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ width: "100%", height: "100%" }}
      onClick={() => {
        if (animation.current?.isPaused) {
          animation.current?.play();
        } else {
          animation.current?.pause();
        }
      }}
    />
  );
}
