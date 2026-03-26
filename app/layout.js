import "./globals.css";

export const metadata = {
  title: "ISKCON Stone Temple - Sri Gaura Radha Gokulananda",
  description: "Official website for ISKCON Stone Temple.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
