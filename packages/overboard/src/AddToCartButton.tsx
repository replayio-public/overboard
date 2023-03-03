import React, { forwardRef, useEffect, useImperativeHandle } from "react";
import { interpolate } from "@popmotion/popcorn";
import { timeline } from "motion";

export const AddToCartButton = forwardRef<
  {
    /** Allows programmatically controlling the button error state by setting progress from 0-100. */
    setErrorProgress: (amount: number) => void;
  },
  {
    /** Sets the button to the error state. */
    hasError?: boolean;

    /** Set button error state progress similar to setErrorProgress when obtaining a ref. */
    errorProgress?: number;
  }
>(function AddToCartButton({ hasError, errorProgress: errorProgressProp }, ref) {
  const timelineControlsRef = React.useRef<ReturnType<typeof timeline> | null>(null);
  const setTimelineProgress = React.useCallback((progress: number) => {
    if (timelineControlsRef.current) {
      timelineControlsRef.current.currentTime = interpolate(
        [0, 100],
        [0, timelineControlsRef.current.duration]
      )(progress) as number;
    }
  }, []);
  let className = "AddToCartButton";

  if (hasError) {
    className += " AddToCartButton--error";
  }

  useImperativeHandle(ref, () => ({ setErrorProgress: setTimelineProgress }));

  useEffect(() => {
    if (timelineControlsRef.current === null) {
      return;
    }
    if (hasError) {
      timelineControlsRef.current?.play();
    } else {
      timelineControlsRef.current?.reverse();
    }
  }, [hasError]);

  useEffect(() => {
    timelineControlsRef.current = timeline([
      [".AddToCartButton", { backgroundColor: ["var(--background)", "var(--background-error)"] }],
      [
        ".AddToCartButton-label-default",
        { transform: ["translateY(0%)", "translateY(-100%)"], opacity: [1, 0] },
        { at: "<" },
      ],
      [
        ".AddToCartButton-label-error",
        { transform: ["translateY(100%)", "translateY(0%)"], opacity: [0, 1] },
        { at: "<" },
      ],
    ]);

    timelineControlsRef.current.stop();
  }, []);

  useEffect(() => {
    if (errorProgressProp !== undefined) {
      setTimelineProgress(errorProgressProp);
    }
  }, [errorProgressProp]);

  return (
    <button data-cy="AddToCartButton" className={className}>
      <span className="AddToCartButton-label-default">Add to Cart</span>
      <span data-cy="AddToCartButtonError" className="AddToCartButton-label-error">
        Error
      </span>
    </button>
  );
});
