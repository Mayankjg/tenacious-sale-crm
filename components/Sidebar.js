"use client";
import { useState } from "react";
import {
  Home,
  Users,
  Key,
  ClipboardList,
  FileText,
  Mail,
  BarChart2,
  UserPlus,
  ChevronRight,
  ChevronDown,
  LogOut,
  MessageCircle,
  Power,
  CircleDot,
} from "lucide-react";

export default function Sidebar() {
  const [openMenus, setOpenMenus] = useState({});
  const toggleMenu = (menu) =>
    setOpenMenus((prev) => ({ ...prev, [menu]: !prev[menu] }));

  return (
    <div className="w-64 min-h-screen bg-[#1f2028] text-white shadow-lg flex flex-col justify-between">
      <div>
        {/* Header */}
        <div className="flex items-center justify-center py-4 border-b border-gray-700">
          <h1 className="text-lg font-semibold tracking-wide">Tenacious Sales</h1>
        </div>

        {/* Welcome */}
        <div className="p-4 text-sm border-b border-gray-700">
          <p>Welcome</p>
          <p className="font-semibold">Test</p>
        </div>

        {/* Menu */}
        <nav className="mt-2">
          <ul className="space-y-1">
            <li className="flex items-center px-4 py-2 bg-[#434a5a] cursor-pointer rounded">
              <Home size={18} className="mr-3" /> Dashboard
            </li>

            <li>
              <div
                className="flex items-center justify-between px-4 py-2 hover:bg-[#2a3241] cursor-pointer"
                onClick={() => toggleMenu("leads")}
              >
                <span className="flex items-center">
                  <ClipboardList size={18} className="mr-3" /> Leads
                </span>
                {openMenus["leads"] ? (
                  <ChevronDown size={16} />
                ) : (
                  <ChevronRight size={16} />
                )}
              </div>
            </li>

            <li>
              <div
                className="flex items-center justify-between px-4 py-2 hover:bg-[#2a3241] cursor-pointer"
                onClick={() => toggleMenu("sales")}
              >
                <span className="flex items-center">
                  <Users size={18} className="mr-3" /> Manage Salespersons
                </span>
                {openMenus["sales"] ? (
                  <ChevronDown size={16} />
                ) : (
                  <ChevronRight size={16} />
                )}
              </div>
            </li>

            <li className="flex items-center px-4 py-2 hover:bg-[#2a3241] cursor-pointer">
              <FileText size={18} className="mr-3" /> Manage Items
            </li>

            <li className="flex items-center px-4 py-2 hover:bg-[#2a3241] cursor-pointer">
              <Mail size={18} className="mr-3" /> News Letter
            </li>

            <li className="flex items-center px-4 py-2 hover:bg-[#2a3241] cursor-pointer">
              <ClipboardList size={18} className="mr-3" /> Lead Capture Form
            </li>

            <li className="flex items-center px-4 py-2 hover:bg-[#2a3241] cursor-pointer">
              <BarChart2 size={18} className="mr-3" /> Reports
            </li>

            <li className="flex items-center px-4 py-2 hover:bg-[#2a3241] cursor-pointer">
              <Key size={18} className="mr-3" /> Change Password
            </li>

            <li className="flex items-center px-4 py-2 hover:bg-[#2a3241] cursor-pointer">
              <UserPlus size={18} className="mr-3" /> Tell a Friend
            </li>

            <li className="flex items-center px-4 py-2 hover:bg-[#2a3241] cursor-pointer">
              <MessageCircle size={18} className="mr-3" /> Give Your Feedback
            </li>

            <li className="flex items-center px-4 py-2 hover:bg-[#2a3241] cursor-pointer">
              <Power size={18} className="mr-3" /> Log Out
            </li>
          </ul>
        </nav>
      </div>

      {/* Bottom */}
      <div className="p-4 text-sm border-t border-gray-700 space-y-2">
        <p className="flex items-center text-green-500">
          <CircleDot size={12} className="mr-2" /> Buy Your Plan
        </p>
        <p className="flex items-center text-red-500">
          <CircleDot size={12} className="mr-2" /> Buy Your Email Credit
        </p>
      </div>
    </div>
  );
}
