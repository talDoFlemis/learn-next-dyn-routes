import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex">
      <aside className="bg-red-500 w-32 h-screen flex justify-center items-center">
        Sidebar lasqueida
      </aside>
      {children}
    </div>
  );
};

export default layout;
