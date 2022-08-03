import { ReactNode } from "react";

type AspectRatioBoxProps = {
  ratio: number;
  responsive?: boolean;
  children?: ReactNode;
} & React.HTMLProps<HTMLDivElement>;

export function AspectRatioBox({
  ratio,
  responsive,
  children,
  style,
  ...rest
}: AspectRatioBoxProps) {
  return (
    <div
      style={{
        ...style,
        position: "relative",
        width: "100%",
        maxWidth: "100%",
        height: 0,
        paddingBottom: `${ratio * 100}%`,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
