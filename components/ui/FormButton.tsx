import React, { ReactNode } from "react";
import HoverLink from "./HoverLink";

interface FormButtonProps {
  className?: string;
  children: ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function FormButton({
  className = "",
  children,
  onClick,
}: FormButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`border pt-3 w-[70%] m-auto pb-1 relative group cursor-pointer flex items-center justify-center gap-5 uppercase text-body-sm rounded-full ${className}`}
    >
      <HoverLink>{children as string}</HoverLink>
    </button>
  );
}
