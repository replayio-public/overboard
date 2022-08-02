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
  /**
   * Continuously flips the hoverboard in a full 360 degree rotation.
   * Pass a number from 0-360 to programmatically rotate 360 degrees.
   */
  flip: (amount: number) => void;

  /**
   * Continuously animates the hoverboard up and down along a sine wave.
   * Pass a number from 0-100 to programmatically adjust the wave animation.
   */
  wave: (amount: number) => void;

  /** Reset the hoverboard animation to its original animation of both flipping and waving. */
  reset: () => void;
};

export type HoverboardProps = {
  /**
   * Sets the colorway of the hoverboard. Transitions between colors will play
   * the flip animation once and then back to its previous animation.
   */
  color?: Colorway;

  /**
   * Explicitly controls the rotation of the hoverboard. Obtain a ref to the `Hoverboard`
   * component and use the `flip` method when frequent rotation updates are required.
   */
  flip?: number;

  /**
   * Explicitly controls the wave of the hoverboard. Obtain a ref to the `Hoverboard`
   * component and use the `wave` method when frequent wave updates are required.
   */
  wave?: number;
};

const WAVE_ANIMATION_FRAME_START = 24;

export const Hoverboard = forwardRef<HoverboardControls, HoverboardProps>(function Hoverboard(
  { color = "blue", flip: flipProp = null, wave: waveProp = null },
  ref
) {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<AnimationItem>();
  const initialFlipFrameRef = useRef<number | null>(null);
  const initialWaveFrameRef = useRef<number | null>(null);
  const interpolateFrameFromFlipRef = useRef<ReturnType<typeof interpolate> | null>(null);
  const interpolateFrameFromWaveRef = useRef<ReturnType<typeof interpolate> | null>(null);
  const totalFramesRef = useRef<number>(0);

  function flip(amount: number | undefined) {
    if (amount === undefined) {
      animationRef.current?.playSegments(
        [WAVE_ANIMATION_FRAME_START, totalFramesRef.current],
        true
      );
    } else {
      if (animationRef.current) {
        const interpolatedFrame = interpolateFrameFromFlipRef.current!(amount) as number;
        const nextFrame = wrap(0, 360, Math.floor(interpolatedFrame));

        animationRef.current.goToAndStop(nextFrame, true);
      } else {
        initialFlipFrameRef.current = amount;
      }
    }
  }

  function wave(amount: number | undefined) {
    if (amount === undefined) {
      animationRef.current?.playSegments([0, WAVE_ANIMATION_FRAME_START], true);
    } else {
      if (animationRef.current) {
        const interpolatedFrame = interpolateFrameFromWaveRef.current!(amount) as number;
        const nextFrame = wrap(0, 100, Math.floor(interpolatedFrame));

        animationRef.current.goToAndStop(nextFrame, true);
      } else {
        initialWaveFrameRef.current = amount;
      }
    }
  }

  function reset() {
    animationRef.current?.playSegments([0, totalFramesRef.current], true);
  }

  useImperativeHandle(ref, () => ({ flip, wave, reset }));

  useEffect(() => {
    if (containerRef.current === null) return;

    animationRef.current = lottie.loadAnimation({
      container: containerRef.current!,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData,
    });

    /** Cache total frames since this will change when using playSegments. */
    totalFramesRef.current = animationRef.current!.totalFrames;

    /** Calculate interpolation for waving. */
    interpolateFrameFromWaveRef.current = interpolate([0, 100], [0, WAVE_ANIMATION_FRAME_START]);

    /** Calculate interpolation for rotation. */
    interpolateFrameFromFlipRef.current = interpolate(
      [0, 360],
      [WAVE_ANIMATION_FRAME_START, totalFramesRef.current]
    );

    const animation = animationRef.current!;

    /** If flip or wave were called prior to mounting move to that value instead of auto playing. */
    if (initialFlipFrameRef.current) {
      flip(initialFlipFrameRef.current);
    } else if (initialWaveFrameRef.current) {
      wave(initialWaveFrameRef.current);
    }

    return () => {
      animation?.destroy();
    };
  }, []);

  useEffect(() => {
    if (flipProp === null) {
      return;
    }

    flip(flipProp);
  }, [flipProp]);

  useEffect(() => {
    if (waveProp === null) {
      return;
    }

    wave(waveProp);
  }, [waveProp]);

  return <div ref={containerRef} className={color} style={{ width: "100%", height: "100%" }} />;
});
