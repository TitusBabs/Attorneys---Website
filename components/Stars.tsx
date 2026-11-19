import { Icon } from "./Icon";

export function Stars({ n = 5, size = 16 }: { n?: number; size?: number }) {
  return (
    <span style={{ display: "inline-flex", gap: "2px" }}>
      {Array.from({ length: n }).map((_, i) => (
        <Icon key={i} name="star" size={size} color="var(--color-brass)" />
      ))}
    </span>
  );
}
