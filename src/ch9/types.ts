import { ReactNode } from "react";

export type ButtonProps = {
  onClick?: () => void;
  disabled?: boolean;
  children: ReactNode;
};

export interface Toggleable {
  state: boolean;
  toggle: () => void;
}

export type PanelProps = {
  heading: ReactNode;
  content: ReactNode;
} & Partial<Toggleable>;
