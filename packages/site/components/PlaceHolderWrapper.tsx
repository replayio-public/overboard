import { AspectRatioBox } from "./AspectRatioBox";

export function PlaceHolderWrapper({ children }) {
  return (
    <div style={{ position: "relative", width: "100%" }}>
      <AspectRatioBox ratio={360 / 420} />
      <div style={{ position: "absolute", top: 0, bottom: 0, left: 0, right: 0 }}>{children}</div>
    </div>
  );
}
