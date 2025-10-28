"use client";
import { useState } from "react";
import { Home, Users, Key, ClipboardList, FileText, Mail, BarChart2, UserPlus, ChevronLeft, ChevronDown, MessageCircle, Power, CircleDot,} from "lucide-react";
import "./Sidebar.css";

export default function Sidebar() {
  const [openMenus, setOpenMenus] = useState({});
  const toggleMenu = (menu) =>
    setOpenMenus((prev) => ({ ...prev, [menu]: !prev[menu] }));

  return (
    <div className="sidebar">
      <div>
        <div className="sidebar-header">
          <h1>Tenacious Sales</h1>
        </div>

        <div className="sidebar-welcome">
          <p>Welcome</p>
          <p>Test</p>
        </div>

        <nav className="sidebar-nav">
          <ul>
            <li className="sidebar-item">
              <Home size={20} className="mr-3" /> Dashboard
            </li>

            <li>
              <div
                className="sidebar-collapsible"
                onClick={() => toggleMenu("leads")}
              >
                <span className="flex items-center">
                  <ClipboardList size={20} className="mr-3" /> Leads
                </span>
                {openMenus["leads"] ? (
                  <ChevronDown size={24} />
                ) : (
                  <ChevronLeft size={24} />
                )}
              </div>

              {openMenus["leads"] && (
                <ul className="sidebar-submenu">
                  <li>Leads</li>
                  <li>Calendar</li>
                  <li>Leads On Map</li>
                  <li>Export Leads</li>
                  <li>Import Leads</li>
                </ul>
              )}
            </li>

            <li>
              <div
                className="sidebar-collapsible"
                onClick={() => toggleMenu("sales")}
              >
                <span className="flex items-center">
                  <Users size={18} className="mr-3" /> Manage Salespersons
                </span>
                {openMenus["sales"] ? (
                  <ChevronDown size={24} />
                ) : (
                  <ChevronLeft size={24} />
                )}
              </div>
              {openMenus["sales"] && (
                <ul className="sidebar-submenu">
                  <li>Salesperson List</li>
                  <li>Request For Inactive </li>
                  <li>Push Notification</li>
                  <li>Track Your Salesperson</li>
                  <li>Account Expiry Report</li>
                </ul>
              )}
            </li>

            <li>
              <div
                className="sidebar-collapsible"
                onClick={() => toggleMenu("items")}
              >
                <span className="flex items-center">
                  <FileText size={20} className="mr-3" /> Manage Items
                </span>
                {openMenus["items"] ? (
                  <ChevronDown size={24} />
                ) : (
                  <ChevronLeft size={24} />
                )}
              </div>
                {openMenus["items"] && (
                <ul className="sidebar-submenu">
                  <li> Categories</li>
                  <li> Products </li>
                  <li> Lead Status </li>
                  <li> Lead Source </li>
                </ul>
              )}
            </li>
            <li>
              <div
                className="sidebar-collapsible"
                onClick={() => toggleMenu("newsletter")}
              >
                <span className="flex items-center">
                  <Mail size={20} className="mr-3" /> News Letter
                </span>
                {openMenus["newsletter"] ? (
                  <ChevronDown size={24} />
                ) : (
                  <ChevronLeft size={24} />
                )}
              </div>

                {openMenus["newsletter"] && (
                <ul className="sidebar-submenu">
                  <li> Templates </li>
                  <li> Import Contacts </li>
                  <li> Contact List </li>
                  <li> Unsubscribe Users List </li>
                  <li> Invalid Email List </li>
                  <li> From Email List </li>
                  <li> Send Email </li>
                </ul>
              )}
            </li>

            <li>
              <div
                className="sidebar-collapsible"
                onClick={() => toggleMenu("leadform")}
              >
                <span className="flex items-center">
                  <ClipboardList size={20} className="mr-3" /> Lead Capture Form
                </span>
                {openMenus["leadform"] ? (
                  <ChevronDown size={24} />
                ) : (
                  <ChevronLeft size={24} />
                )}
              </div>
                {openMenus["leadform"] && (
                <ul className="sidebar-submenu">
                  <li> Lead Capture Form </li>
                  <li> Inquiry List </li>
                </ul>
              )}
            </li>

            <li>
              <div
                className="sidebar-collapsible"
                onClick={() => toggleMenu("reports")}
              >
                <span className="flex items-center">
                  <BarChart2 size={20} className="mr-3" /> Reports
                </span>
                {openMenus["reports"] ? (
                  <ChevronDown size={24} />
                ) : (
                  <ChevronLeft size={24} />
                )}
              </div>

                {openMenus["reports"] && (
                <ul className="sidebar-submenu">
                  <li> Leads By Products - List </li>
                  <li> Leads By Products - Graph </li>
                  <li> Leads By Status - List </li>
                  <li> Leads By Status - Graph </li>
                  <li> Leads By Source - List </li>
                  <li> Leads Into Deals - List </li>
                  <li> Deals By Source - List </li>
                  <li> Comments By Sales Person </li>
                </ul>
              )}
            </li>

            <li className="sidebar-item">
              <Key size={20} className="mr-3" /> Change Password
            </li>

            <li className="sidebar-item">
              <UserPlus size={20} className="mr-3" /> Tell a Friend
            </li>

            <li className="sidebar-item">
              <MessageCircle size={20} className="mr-3" /> Give Your Feedback
            </li>

            <li className="sidebar-item">
              <Power size={20} className="mr-3" /> Log Out
            </li>
          </ul>
        </nav>
      </div>

      <div className="sidebar-bottom">
        <p className="plan">
          <CircleDot size={20} className="mr-2" /> Buy Your Plan
        </p>
        <p className="credit">
          <CircleDot size={20} className="mr-2" /> Buy Your Email Credit
        </p>
      </div>
    </div>
  );
}
