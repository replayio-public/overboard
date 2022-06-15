import lottie, { AnimationItem } from "lottie-web";
import { useLayoutEffect, useRef } from "react";

import animationData from "../public/hoverboard.json";
import type { Colorway } from "./Colors";
import { colorways } from "./Colors";

export default function Hoverboard({ color }: { color: Colorway }) {
  const containerRef = useRef(null);
  const previousColor = useRef(null);
  const animation = useRef<AnimationItem>();
  const timeoutId = useRef<ReturnType<typeof setTimeout>>(null);

  function reset() {
    clearTimeout(timeoutId.current);
    animation.current.stop();
    animation.current.setSpeed(1);
  }

  function flip() {
    const speed = 2;
    const duration = 1800 / speed;

    reset();

    animation.current.setSpeed(speed);
    animation.current.goToAndPlay(91, true);

    setTimeout(() => {
      containerRef.current.style.mixBlendMode = colorways[color];
    }, duration / 2);

    return new Promise<void>(resolve => {
      timeoutId.current = setTimeout(() => {
        reset();
        resolve();
      }, duration);
    });
  }

  function wave() {
    const duration = 900;

    reset();

    animation.current.play();

    timeoutId.current = setTimeout(() => {
      animation.current.stop();
      animation.current.playDirection = -1;
      animation.current.play();

      timeoutId.current = setTimeout(() => {
        animation.current.stop();
        animation.current.playDirection = 1;
        wave();
      }, duration);
    }, duration);
  }

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const _animation = lottie.loadAnimation({
      container: containerRef.current!,
      renderer: "svg",
      loop: true,
      autoplay: false,
      animationData,
    });

    animation.current = _animation;

    return () => {
      _animation?.destroy();
    };
  }, []);

  useLayoutEffect(() => {
    if (previousColor.current === null) {
      wave();
    } else if (previousColor.current !== color) {
      flip().then(wave);
    }

    previousColor.current = color;
  }, [color]);

  return <div ref={containerRef} style={{ width: "100%", height: "100%" }} />;
}
