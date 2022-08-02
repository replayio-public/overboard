import { useState } from "react";
import { useFrame } from "use-frame";
import { wrap } from "@popmotion/popcorn";
import { Hoverboard } from "@replayio/overboard";

export default function HoverboardRotate() {
  const [flipAmount, setFlipAmount] = useState(0);

  useFrame(() => {
    const speed = 3;
    setFlipAmount(flipAmount => wrap(0, 360, flipAmount + speed));
  });

  return <Hoverboard flip={flipAmount} />;
}
