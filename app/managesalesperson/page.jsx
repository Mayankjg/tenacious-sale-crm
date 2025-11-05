"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Mail, Phone, Briefcase, Trash2, Key } from "lucide-react";

export default function SalespersonList() {
  const router = useRouter();
  const [salespersons, setSalespersons] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch("/api/salespersons");
    const data = await res.json();
    setSalespersons(data);
  };

  // DELETE salesperson
  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this salesperson?")) return;
    try {
      const res = await fetch(`/api/salespersons/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        alert("Salesperson deleted successfully");
        fetchData(); // refresh list
      } else {
        alert("Failed to delete salesperson");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  };

  // CHANGE PASSWORD
  const handleChangePassword = async (id) => {
    const newPassword = prompt("Enter new password:");
    if (!newPassword) return;

    try {
      const res = await fetch(`/api/salespersons/${id}/change-password`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: newPassword }),
      });

      if (res.ok) {
        alert("Password updated successfully!");
      } else {
        alert("Failed to update password");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  };

  // Filter by search query
  const filteredSalespersons = salespersons.filter(
    (sp) =>
      sp.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sp.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6 bg-[#f4f6f9] rounded-[5px] min-h-screen font-sans">
      {/* Header */}
      {/* Header Section */}
      <div className="flex justify-between items-center ml-[20px] mb-4">
        <h2 className="text-2xl font-semibold text-gray-900">
          Salesperson List
        </h2>

        <button
          onClick={() => router.push("/managesalesperson/add")}
          className="bg-[#252B4F] text-[white] hover:bg-[#133b74] text-[20px] mr-[10px] font-medium px-5 py-2 rounded-[5px]"
        >
          Add Sales Person
        </button>
      </div>

      <div className="flex items-center gap-2 mb-6">
        <input
          type="text"
          placeholder="Search by name or email"
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-[200px] ml-[1100px] mr-[10px] h-[35px] border border-gray-300 rounded-[5px] mb-[40px] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00a7cf]"
        />
        <button className="bg-[#00a7cf] w-[70px] h-[35px] text-[white] mr-[10px] mb-[40px] px-5 py-2 text-sm font-medium rounded-[5px] hover:bg-[#0094b8]">
          Search
        </button>
      </div>

      {/* Cards Section */}
      {salespersons.length > 0 ? (
        <div className="w-[1300px] ml-[50px] grid grid-cols-1 gap-[20px]">
          {salespersons.map((sp, index) => (
            <div
              key={index}
              className="flex items-center mb-[10px] justify-between bg-white border border-gray-200 rounded-[10px] p-4 shadow-sm hover:shadow-md transition-all duration-200"
            >
              {/* Left Section - Info */}
              <div className="flex items-start gap-4">
                <img
                  src={sp.profileImage || "/default-avatar.png"}
                  alt="Profile"
                  className="w-[70px] h-[70px] ml-[40px] rounded-[40px] mt-[50px] border border-gray-300 object-cover"
                />
                <div>
                  <h3 className="text-[16px] ml-[50px] mt-[50px] font-semibold text-gray-800 leading-tight">
                    {sp.username}
                  </h3>
                  <p className="text-gray-600 ml-[50px] text-sm capitalize leading-tight">
                    {sp.firstname} {sp.lastname}
                  </p>

                  <div className="flex flex-col mb-[10px] text-sm text-gray-700 mt-1">
                    <div className="flex ml-[50px] mb-[10px] items-center gap-[10px] mr-4">
                      <Briefcase className="w-[20px] h-[20px] text-gray-500" />
                      <span>
                        Designation:{" "}
                        <span className="font-semibold">{sp.designation}</span>
                      </span>
                    </div>
                    <div className="flex mb-[20px] ml-[50px] items-center gap-[10px]">
                      <Phone className="w-[20px] h-[20px] text-gray-500" />
                      <span>
                        Contact Number:{" "}
                        <span className="font-semibold">
                          {sp.code} {sp.contact}
                        </span>
                      </span>
                    </div>
                  </div>

                  <p className="flex items-center ml-[50px] mb-[10px] gap-[10px] text-sm text-gray-700 mt-[1px]">
                    <Mail className="w-4 h-4 text-gray-500" />
                    <a
                      href={`mailto:${sp.email}`}
                      className="text-[#007bff] hover:underline break-all"
                    >
                      {sp.email}
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-end gap-2 mr-[20px]">
                {/* Delete Icon */}
                <div
                  className="relative group flex flex-col items-center"
                  onClick={() => handleDelete(sp.id)}
                >
                  <Trash2
                    className="w-[20px] h-5 text-gray-600 mb-[15px] cursor-pointer hover:text-red-600 transition"
                    title="Delete"
                  />
                  <span className="absolute -top-[15px] bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                    Delete
                  </span>
                </div>

                {/* Change Password Icon */}
                <div className="relative group flex flex-col items-center mt-2">
                  <Key
                    className="w-[20px] h-5 text-gray-600 ml-[600px] cursor-pointer hover:text-[#133b74] transition"
                    title="Change Password"
                  />
                  <span className="absolute -bottom-[30px] ml-[600px] bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                    Change Password
                  </span>
                </div>
              </div>

              {/* Right Section - Buttons */}
              <div className="flex flex-col items-end gap-2">
                <button className="bg-[#dc3545] mb-[10px] mr-[20px] h-[30px] w-[150px] rounded-[5px] text-[white] hover:bg-[#c82333] text-sm font-medium px-4 py-2 rounded-md">
                  View Leads
                </button>
                <button className="bg-[#133b74] mb-[10px] mr-[20px] h-[30px] w-[150px] rounded-[5px] text-[white] hover:bg-[#0f2f5a] text-sm font-medium px-4 py-2 rounded-md flex items-center gap-1">
                  <Key className="w-4 h-4" /> Change Email ID
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500 text-[18px] font-medium mt-10">
          No Salespersons Found
        </div>
      )}
    </div>
  );
}
