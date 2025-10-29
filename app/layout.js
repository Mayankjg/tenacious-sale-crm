import "./globals.css";
import LayoutClient from "../components/LayoutClient";

export const metadata = {
  title: "Tenacious Sales",
  description: "CRM System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}

