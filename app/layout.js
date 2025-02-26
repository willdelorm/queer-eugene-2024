import "./globals.css";

export const metadata = {
  title: "Queer Eugene",
  description: "Providing access to queer resources and community in Oregon",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
