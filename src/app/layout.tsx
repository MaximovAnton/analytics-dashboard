import type { ReactNode } from "react";
import "../shared/styles/globals.css";
import { Header } from "@/widgets/dashboard-header/ui/Header";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="app-root">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
