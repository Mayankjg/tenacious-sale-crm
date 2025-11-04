"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function SalespersonList() {
  const router = useRouter();
  const [salespersons, setSalespersons] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/salespersons");
      const data = await res.json();
      setSalespersons(data);
    };
    fetchData();
  }, []);

  return (
    <div className="p-6 bg-white min-h-screen font-sans">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold text-gray-900">Salesperson List</h2>
        <button
          onClick={() => router.push("/managesalesperson/add")}
          className="bg-[#252B4F] text-[#ffffff] hover:bg-[#133b74] text-white text-[18px] font-medium px-5 py-2 rounded-[6px]"
        >
          Add Sales Person
        </button>
      </div>

      <hr className="border-gray-200 mb-6" />

      {/* Table */}
      {salespersons.length > 0 ? (
        <table className="w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-3">#</th>
              <th className="p-3">Username</th>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Designation</th>
              <th className="p-3">Country</th>
              <th className="p-3">Contact</th>
            </tr>
          </thead>
          <tbody>
            {salespersons.map((sp, index) => (
              <tr key={sp.id} className="border-t">
                <td className="p-3">{index + 1}</td>
                <td className="p-3">{sp.username}</td>
                <td className="p-3">{sp.firstname} {sp.lastname}</td>
                <td className="p-3">{sp.email}</td>
                <td className="p-3">{sp.designation}</td>
                <td className="p-3">{sp.country}</td>
                <td className="p-3">{sp.code} {sp.contact}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="text-center text-gray-500 text-[18px] font-medium mt-10">
          No Salespersons Found
        </div>
      )}
    </div>
  );
}