import lottie, { AnimationItem } from "lottie-web";
import { interpolate, wrap } from "@popmotion/popcorn";
import React, { forwardRef, useEffect, useImperativeHandle, useRef } from "react";

import animationData from "../animation-data.json";

export const colorways = {
  red: ["#FF7E9F", "#F41C52"],
  green: ["#B6F0A2", "#279C14"],
  blue: ["#8AA9FA", "#3749E7"],
} as const;

export type Colorway = keyof typeof colorways;

export type HoverboardControls = {
  /** Continuously flips the hoverboard in a full 360 degree rotation. */
  flip: () => void;

  /** Continuously animates the hoverboard up and down on a sine wave. */
  wave: () => void;

  /** Reset the hoverboard animation to its original animation of both flipping and waving. */
  reset: () => void;

  /** Rotate the hoverboard programmatically from 0-360 degrees. */
  rotate: (amount: number) => void;
};

export type HoverboardProps = {
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

const WAVE_ANIMATION_FRAME_START = 24;

export const Hoverboard = forwardRef<HoverboardControls, HoverboardProps>(function Hoverboard(
  { color = "blue", rotate: rotateProp = null },
  ref
) {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<AnimationItem>();
  const totalFramesRef = useRef<number>(0);
  const interpolateFrameFromRotationRef = useRef<ReturnType<typeof interpolate> | null>(null);

  function flip() {
    animationRef.current!.playSegments([WAVE_ANIMATION_FRAME_START, totalFramesRef.current], true);
  }

  function wave() {
    animationRef.current!.playSegments([0, WAVE_ANIMATION_FRAME_START], true);
  }

  function reset() {
    animationRef.current!.playSegments([0, totalFramesRef.current], true);
  }

  function rotate(amount: number) {
    const interpolatedFrame = interpolateFrameFromRotationRef.current!(amount) as number;
    const nextFrame = wrap(0, 360, Math.floor(interpolatedFrame));

    animationRef.current?.goToAndStop(nextFrame, true);
  }

  useImperativeHandle(ref, () => ({ flip, wave, reset, rotate }));

  useEffect(() => {
    if (containerRef.current === null) return;

    animationRef.current = lottie.loadAnimation({
      container: containerRef.current!,
      renderer: "svg",
      loop: true,
      autoplay: false,
      animationData,
    });

    /** Cache total frames since this will change when using playSegments. */
    totalFramesRef.current = animationRef.current!.totalFrames;

    /** Calculate interpolation for rotation here as well so it's not done each frame. */
    interpolateFrameFromRotationRef.current = interpolate(
      [0, 360],
      [WAVE_ANIMATION_FRAME_START, totalFramesRef.current]
    );

    const animation = animationRef.current!;

    wave();

    return () => {
      animation?.destroy();
    };
  }, []);

  useEffect(() => {
    if (rotateProp === null) {
      return;
    }

    rotate(rotateProp);
  }, [rotateProp]);

  return <div ref={containerRef} className={color} style={{ width: "100%", height: "100%" }} />;
});
