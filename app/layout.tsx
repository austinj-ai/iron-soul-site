import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Iron Soul Solutions",
  description: "Modern website overhaul for local businesses",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily:
            'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
          background: "#09090b",
          color: "#f4f4f5",
        }}
      >
        {children}
      </body>
    </html>
  );
}
