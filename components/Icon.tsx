import type { CSSProperties } from "react";
import { iconPaths, type IconName } from "./icons";

type Props = { name: IconName; size?: number; stroke?: number; color?: string; style?: CSSProperties };

export function Icon({ name, size = 24, stroke = 1.75, color = "currentColor", style }: Props) {
  const paths = iconPaths[name] || [];
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={name === "star" || name === "play" ? color : "none"}
      stroke={color}
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={style}
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: paths.join("") }}
    />
  );
}
