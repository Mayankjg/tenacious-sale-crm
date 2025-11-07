"use client";
import React, { useState } from "react";

const mockUseRouter = () => {
  return {
    push: (path) => {
      console.log(`[MOCK ROUTER] Navigating to: ${path}`);
    },
    back: () => {
      console.log("[MOCK ROUTER] Navigating back");
    }
  };
};

const initialSalespersons = [
  { id: 1, name: "Gaurav Soni", email: "gaurav.s@example.com", designation: "Sales Lead", status: "Active" },
  { id: 2, name: "Priya Sharma", email: "priya.s@example.com", designation: "Field Sales Rep", status: "Active" },
  { id: 3, name: "Suresh Patel", email: "suresh.p@example.com", designation: "Junior Executive", status: "Inactive" },
  { id: 4, name: "Kajal Vora", email: "kajal.v@example.com", designation: "Sales Trainee", status: "Active" },
];

export default function RequestInactive() {
  const router = mockUseRouter();
  const [salespersons, setSalespersons] = useState(initialSalespersons);
  const [filter, setFilter] = useState("all"); 

  const handleStatusChange = (id, newStatus) => {
    console.log(`[ACTION] Updating ID ${id} to ${newStatus}`);
    

    setSalespersons(prev => 
      prev.map(person => 
        person.id === id ? { ...person, status: newStatus } : person
      )
    );
  };


  const filteredSalespersons = salespersons.filter(person => {
    if (filter === "all") return true;
    return person.status.toLowerCase() === filter;
  });

  const getStatusColor = (status) => {
    return status === "Active" 
      ? "text-green-600 bg-green-100 border border-green-300 px-2 py-0.5 rounded-full text-xs font-medium" 
      : "text-red-600 bg-red-100 border border-red-300 px-2 py-0.5 rounded-full text-xs font-medium";
  };
  
  const getButtonClass = (status) => {
    return status === "Active"
      ? "bg-red-500 hover:bg-red-600 text-white" 
      : "bg-green-500 hover:bg-green-600 text-white"; 
  };
  
  const getButtonText = (status) => {
    return status === "Active" ? "Set Inactive" : "Set Active";
  };
  
  const getNextStatus = (status) => {
    return status === "Active" ? "Inactive" : "Active";
  };


  return (
    <div className="bg-[#eef1f4] p-5 min-h-screen flex justify-center items-start font-sans">
      <div className="bg-white min-h-[550px] w-full max-w-6xl mx-auto rounded-xl shadow-2xl overflow-hidden">
        <div className="border-b border-[#e0e0e0] p-4 flex justify-between items-center">
          <h2 className="text-xl font-normal text-[#333]">
            Request for <span className="font-semibold">Inactive Page</span>
          </h2>
          <button
            onClick={() => router.back()}
            className="px-4 py-1.5 rounded-lg text-sm font-medium border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 transition duration-150 shadow-sm"
          >
            ← Back
          </button>
        </div>

        <div className="p-4 sm:p-6">
          
          {/* Filter Section */}
          <div className="mb-6 flex space-x-4">
            <label className="text-sm font-medium text-gray-600">Filter by Status:</label>
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="border border-gray-300 rounded-lg p-1.5 text-sm"
            >
              <option value="all">All</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>

          {/* Salesperson List (Responsive Grid) */}
          <div className="space-y-4">
            {filteredSalespersons.length > 0 ? (
              filteredSalespersons.map((person) => (
                <div 
                  key={person.id} 
                 
                  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 border border-gray-200 rounded-lg shadow-sm items-center hover:bg-gray-50 transition duration-150"
                >
                  {/* Name & Designation */}
                  <div className="flex flex-col col-span-1">
                    <p className="text-sm font-bold text-[#333]">{person.name}</p>
                    <p className="text-xs text-gray-500">{person.designation}</p>
                  </div>
                  
                  {/* Email */}
                  <div className="hidden sm:flex flex-col col-span-1">
                     <p className="text-sm text-gray-600 truncate">{person.email}</p>
                     <p className="text-xs text-gray-400">Email</p>
                  </div>
                  
                  {/* Status Tag */}
                  <div className="col-span-1 flex items-center">
                    <span className={getStatusColor(person.status)}>
                      {person.status}
                    </span>
                  </div>

                  {/* Action Button */}
                  <div className="col-span-1 flex justify-start md:justify-end">
                    <button
                      onClick={() => handleStatusChange(person.id, getNextStatus(person.status))}
                      className={`px-4 py-1.5 rounded-lg text-sm font-medium ${getButtonClass(person.status)} transition duration-150 shadow-md`}
                    >
                      {getButtonText(person.status)}
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500 p-10 border border-dashed border-gray-300 rounded-lg">
                No Salespersons found with status: {filter}.
              </p>
            )}
          </div>
          
        </div>
      </div>
    </div>
  );
}