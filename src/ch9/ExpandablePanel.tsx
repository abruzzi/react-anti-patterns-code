import React from "react";
import { PanelProps } from "./types";

export const ExpandablePanel = ({
  state,
  toggle,
  heading,
  content,
}: PanelProps) => {
  return (
    <section>
      <header onClick={toggle}>{heading}</header>
      {state && <main>{content}</main>}
    </section>
  );
};
