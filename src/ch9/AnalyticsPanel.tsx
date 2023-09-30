import React, { useEffect } from "react";
import { PanelProps } from "./types";
import { ExpandablePanel } from "./ExpandablePanel";

const AnalyticsPanel = (props: PanelProps) => {
  const now = performance.now();

  useEffect(() => {
    const later = performance.now();
    console.log(`The action took: ${later - now} ms`);
  }, [now]);

  return <ExpandablePanel {...props} />;
};

export default AnalyticsPanel;
