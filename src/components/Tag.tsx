import React, { type ReactNode } from "react";

type TagProps = {
  children: ReactNode;
};

const Tag: React.FC<TagProps> = ({ children }) => {
  return (
    <span className="font-normal text-sm px-2 p-0.5 rounded bg-zinc-200 text-zinc-700 text-center max-w-28">
      {children}
    </span>
  );
};

export default Tag;
