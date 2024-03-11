import { ReactNode } from "react";

export type NavLinkProps = {
  text: string | ReactNode;
  onClick?: () => void;
};
