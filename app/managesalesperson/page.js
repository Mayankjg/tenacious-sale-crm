"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ManageSalesperson() {
  const router = useRouter();
  const [salespersons, setSalespersons] = useState([]);

  useEffect(() => {
    async function fetchSalespersons() {
      const res = await fetch("/api/salespersons");
      const data = await res.json();
      setSalespersons(data);
    }
    fetchSalespersons();
  }, []);

  return (
    <div className="bg-white min-h-screen p-6 border border-gray-200">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-black">
          Salesperson <span className="font-bold">List</span>
        </h2>
        <button
          onClick={() => router.push("/addsalesperson")}
          className="bg-[#1e3a5f] text-white px-4 py-2 rounded hover:bg-[#2b4c78]"
        >
          Add Sales Person
        </button>
      </div>

      <hr className="border-t border-gray-300 mb-4" />

      <div className="flex justify-end gap-2 mb-6">
        <input
          type="text"
          placeholder="Search"
          className="border border-gray-300 p-2 rounded w-64"
        />
        <button className="bg-sky-500 text-white px-4 py-2 rounded hover:bg-sky-600">
          Search
        </button>
      </div>

      {/* Salesperson Table */}
      <table className="w-full border border-gray-300 rounded-lg overflow-hidden">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            <th className="p-2 border">#</th>
            <th className="p-2 border">Username</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Designation</th>
            <th className="p-2 border">Country</th>
            <th className="p-2 border">Contact</th>
          </tr>
        </thead>
        <tbody>
          {salespersons.length > 0 ? (
            salespersons.map((sp, index) => (
              <tr key={sp.id} className="text-center">
                <td className="p-2 border">{index + 1}</td>
                <td className="p-2 border">{sp.username}</td>
                <td className="p-2 border">{sp.email}</td>
                <td className="p-2 border">{sp.designation}</td>
                <td className="p-2 border">{sp.country}</td>
                <td className="p-2 border">{sp.contact}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center p-4 text-gray-500">
                No records found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}


