import type { CSSProperties, MouseEventHandler, ReactNode } from "react";

/**
 * Button — the BTA action control (design system: components/buttons/Button).
 * Variants: primary (navy), accent (blueprint blue), ink (black),
 * outline (blue text), outline-ink (navy text). Sizes: md (44px), sm (36px).
 */
type Variant = "primary" | "accent" | "ink" | "outline" | "outline-ink";

type Props = {
  variant?: Variant;
  size?: "md" | "sm";
  disabled?: boolean;
  fullWidth?: boolean;
  href?: string;
  onClick?: MouseEventHandler<HTMLElement>;
  type?: "button" | "submit" | "reset";
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  children?: ReactNode;
  style?: CSSProperties;
};

const palettes: Record<Variant, { bg: string; fg: string; bd: string }> = {
  primary: { bg: "var(--color-primary)", fg: "var(--color-on-primary)", bd: "transparent" },
  accent: { bg: "var(--color-primary-bright)", fg: "var(--color-on-primary)", bd: "transparent" },
  ink: { bg: "var(--color-ink)", fg: "var(--color-on-primary)", bd: "transparent" },
  outline: { bg: "var(--color-canvas)", fg: "var(--color-primary-bright)", bd: "var(--color-primary-bright)" },
  "outline-ink": { bg: "var(--color-canvas)", fg: "var(--color-ink)", bd: "var(--color-ink)" },
};

export function Button({
  variant = "primary",
  size = "md",
  disabled = false,
  fullWidth = false,
  href,
  onClick,
  type = "button",
  iconLeft,
  iconRight,
  children,
  style,
}: Props) {
  const heights = { md: 44, sm: 36 };
  const palette = palettes[variant];
  const base: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    height: heights[size] + "px",
    padding: size === "sm" ? "0 16px" : "0 24px",
    width: fullWidth ? "100%" : "auto",
    font: size === "sm" ? "var(--type-button-sm)" : "var(--type-button-md)",
    letterSpacing: "var(--tracking-button)",
    textTransform: "uppercase",
    textDecoration: "none",
    color: disabled ? "var(--color-on-primary)" : palette.fg,
    background: disabled ? "var(--color-steel)" : palette.bg,
    border: "1px solid",
    borderColor: disabled ? "var(--color-steel)" : palette.bd,
    borderRadius: "var(--radius-sm)",
    cursor: disabled ? "not-allowed" : "pointer",
    transition: "background var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard)",
    whiteSpace: "nowrap",
    ...style,
  };

  const content = (
    <>
      {iconLeft && <span style={{ display: "inline-flex" }} aria-hidden="true">{iconLeft}</span>}
      {children}
      {iconRight && <span style={{ display: "inline-flex" }} aria-hidden="true">{iconRight}</span>}
    </>
  );

  if (href && !disabled) {
    return (
      <a href={href} style={base} onClick={onClick}>
        {content}
      </a>
    );
  }
  return (
    <button type={type} disabled={disabled} onClick={onClick} style={base}>
      {content}
    </button>
  );
}
