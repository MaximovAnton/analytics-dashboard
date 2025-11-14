import { ReactNode } from "react";

export function Container({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-[1400px] mx-auto px-6">
      {children}
    </div>
  );
}