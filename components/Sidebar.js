"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Home, Users, ChevronDown, ChevronLeft } from "lucide-react";
import "./Sidebar.css";

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState(false);

  // Automatically open Manage Salespersons menu if on any of its subpages
  useEffect(() => {
    if (
      pathname.startsWith("/managesalesperson") ||
      pathname.startsWith("/pushnotification") ||
      pathname.startsWith("trackyourSalesperson")
    ) {
      setOpenMenu(true);
    }
  }, [pathname]);

  return (
    <nav className="sidebar-nav">
      <ul>
        <li
          className={`sidebar-item ${pathname === "/" ? "active" : ""}`}
          onClick={() => router.push("/")}
        >
          <Home size={18} className="mr-3" /> Dashboard
        </li>

        <div
          className="sidebar-collapsible"
          onClick={() => setOpenMenu(!openMenu)}
        >
          <span className="flex items-center">
            <Users size={18} className="mr-3" /> Manage Salespersons
          </span>
          {openMenu ? <ChevronDown size={20} /> : <ChevronLeft size={20} />}
        </div>

        {openMenu && (
          <ul className="sidebar-submenu">
            <li
              className={pathname === "/managesalesperson" ? "active" : ""}
              onClick={() => router.push("/managesalesperson")}
            >
              💠 Salesperson List
            </li>
            <li>💠 Request For Inactive</li>
            <li
              className={pathname === "/pushnotification" ? "active" : ""}
              onClick={() => router.push("/pushnotification")}
            >
              💠 Push Notification
            </li>
            <li
              className={pathname === "/trackyourSalesperson" ? "active" : ""}
              onClick={() => router.push("/trackyourSalesperson")}
            >
              💠 Track Your Salesperson
            </li>
            <li>💠 Account Expiry Report</li>
          </ul>
        )}

      </ul>
    </nav>
  );
}
