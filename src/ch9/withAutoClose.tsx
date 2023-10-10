import { PanelProps } from "./types";
import React, { useEffect, useState } from "react";

const withAutoClose =
  (Component: React.FC<PanelProps>, duration: number = 2000) =>
  (props: PanelProps) => {
    const [show, setShow] = useState<boolean>(false);

    useEffect(() => {
      if (show) {
        const timerId = setTimeout(() => setShow(false), duration);
        return () => clearTimeout(timerId);
      }
    }, [show]);

    return (
      <Component
        {...props}
        isOpen={show}
        toggle={() => setShow((show) => !show)}
      />
    );
  };

export default withAutoClose;
