import "../globals.css";

export const metadata = {
  title: "Tenacious Sales | Admin Panel",
  description: "Admin Dashboard Layout",
};

export default function AdminLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex">
          <Sidebar />
          <main className="flex-1 bg-gray-100 min-h-screen p-6">{children}</main>
        </div>
      </body>
    </html>
  );
}
