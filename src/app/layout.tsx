import "../styles/_main.scss";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Serenity",
  description: "The relaxing drink",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <body>{children}</body>
      </html>
    </>
  );
}
