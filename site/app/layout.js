import "./globals.css";

export const metadata = {
  title: "Contrast Color Picker",
  description: "A color picking app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
