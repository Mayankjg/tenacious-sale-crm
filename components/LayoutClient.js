"use client";

import Sidebar from "./Sidebar";

export default function LayoutClient({ children }) {
  return (
    <div className="flex">
      {/* <Sidebar /> */}
      <main className="flex-1 p-6 bg-gray-50">{children}</main>
    </div>
  );
}
