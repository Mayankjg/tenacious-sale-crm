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
import Sidebar from "../components/Sidebar";

export const metadata = {
  title: "Tenacious Sales Dashboard",
  description: "CRM Sidebar UI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex">
        <Sidebar />
        <main className="flex-1 p-6">{children}</main>
      </body>
    </html>
  );
}
