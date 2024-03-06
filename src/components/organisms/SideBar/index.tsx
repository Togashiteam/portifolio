import { ReactNode } from "react";

export interface SideBarInterface {
  title?: string;
  children: ReactNode;
  isOpen?: boolean;
}

export default function SideBar({
  children,
  title,
  isOpen = true,
}: SideBarInterface) {
  return (
    <>
      {isOpen ? (
        <div style={{ width: "304px", background: "red" }}>
          <h2>{title}</h2>
          {children}
        </div>
      ) : null}
    </>
  );
}
