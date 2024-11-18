import "./globals.css";

export const metadata = {
  title: "Crucifix",
  description: "Christian E-commerce Store | Online Shop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
