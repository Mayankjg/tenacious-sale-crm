// import "./globals.css";

// export const metadata = {
//   title: "Tenacious Sales Dashboard",
//   description: "CRM Interface built with Next.js and Tailwind CSS",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body>{children}</body>
//     </html>
//   );
// }

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

