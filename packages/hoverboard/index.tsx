import lottie, { AnimationItem } from "lottie-web";
import { interpolate } from "@popmotion/popcorn";
import React, { forwardRef, useEffect, useImperativeHandle, useRef } from "react";

import animationData from "./hoverboard.json";

type Colorway = any;

type HoverboardControls = {
  /** Continuously flips the hoverboard in a full 360 degree rotation. */
  flip: () => void;

  /** Reset the hoverboard animation to its original animation of both flipping and waving. */
  reset: () => void;

  /** Continuously animates the hoverboard up and down on a sine wave. */
  wave: () => void;
};

type HoverboardProps = {
  /**
   * Sets the colorway of the hoverboard. Transitions between colors will play
   * the flip animation once and then back to its previous animation.
   */
  color?: Colorway;

  /**
   * Explicitly controls the rotation of the hoverboard. Obtain a ref to the `Hoverboard`
   * component and use the `rotate` method when frequent rotation updates are required.
   */
  rotate?: number;
};

export const Hoverboard = forwardRef<HoverboardControls, HoverboardProps>(function Hoverboard(
  { color, rotate: rotateProp = null },
  ref
) {
  const containerRef = useRef(null);
  const previousColor = useRef(null);
  const animationRef = useRef<AnimationItem>();
  const timeoutId = useRef<ReturnType<typeof setTimeout>>(null);

  function reset() {
    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
    }
    animationRef.current!.stop();
    animationRef.current!.setSpeed(1);
  }

  function flip() {
    animationRef.current!.playSegments([24, animationRef.current!.totalFrames], true);
  }

  function wave() {
    animationRef.current!.playSegments([0, 24]);
  }

  function rotate(amount: number) {
    const interpolateFrameFromRotation = interpolate(
      [0, 360],
      [24, animationRef.current!.totalFrames]
    );
    const nextFrame = Math.floor(interpolateFrameFromRotation(amount) as number);

    animationRef.current?.goToAndStop(nextFrame, true);
  }

  useImperativeHandle(ref, () => ({ reset, flip, wave }));

  useEffect(() => {
    if (!containerRef.current) return;

    const animation = lottie.loadAnimation({
      container: containerRef.current!,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData,
    });

    animationRef.current = animation;

    return () => {
      animation?.destroy();
    };
  }, []);

  useEffect(() => {
    if (previousColor.current !== color) {
      flip();
    }

    previousColor.current = color;
  }, [color]);

  useEffect(() => {
    if (rotateProp === null) {
      return;
    }

    rotate(rotateProp);
  }, [rotateProp]);

  return <div ref={containerRef} style={{ width: "100%", height: "100%" }} />;
});
