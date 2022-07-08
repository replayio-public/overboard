import { useState } from "react";
import { useFrame } from "use-frame";
import { wrap } from "@popmotion/popcorn";
import { Hoverboard } from "@replayio/hoverboard";

export default function HoverboardRotate() {
  const [rotate, setRotate] = useState(0);

  useFrame(() => {
    const speed = 3;
    setRotate(rotate => wrap(0, 360, rotate + speed));
  });

  return <Hoverboard rotate={rotate} />;
}
