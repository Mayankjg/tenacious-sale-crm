"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Home, Users, ChevronDown, ChevronLeft } from "lucide-react";
import "./Sidebar.css";

export default function Sidebar() {
  const router = useRouter();
  const [openMenu, setOpenMenu] = useState(false);

  return (

      <nav className="sidebar-nav">
        <ul>
          <li className="sidebar-item" onClick={() => router.push("/")}>
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
              <li onClick={() => router.push("/managesalesperson")}>
                 💠 Salesperson List
              </li>
              <li> 💠 Request For Inactive</li>
              <li> 💠 Push Notification</li>
              <li> 💠 Track Your Salesperson</li>
              <li> 💠 Account Expiry Report</li>
            </ul>
          )}
        </ul>
      </nav>
  );
}


