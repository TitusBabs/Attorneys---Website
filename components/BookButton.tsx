"use client";

import type { ComponentProps } from "react";
import { Button } from "./Button";
import { scrollToContact } from "./scrollToContact";

/** A Button wired to the reference's `onBook` handler (scroll to #contact). */
export function BookButton(props: Omit<ComponentProps<typeof Button>, "onClick" | "href">) {
  return <Button {...props} onClick={scrollToContact} />;
}
