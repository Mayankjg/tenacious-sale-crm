"use client";
import React, { useState } from "react";
import { Mail, Phone, Briefcase, Key, Trash2, ArrowLeft } from "lucide-react";

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
    { id: 1, username: "Mayank", firstname: "Mayank", lastname: "Jagalaganeshwala", email: "Mayank@example.com", designation: "Sales Lead", contact: "9876543210", code: "+91", status: "Active", profileImage: "https://placehold.co/70x150/1f4d78/ffffff?text=MJ" },
    { id: 2, username: "Jay", firstname: "Jay", lastname: "Sharma", email: "Jay@example.com", designation: "Field Sales Rep", contact: "8888123456", code: "+91", status: "Active", profileImage: "https://placehold.co/70x150/461159/ffffff?text=JS" },
    { id: 3, username: "Parth", firstname: "Parth", lastname: "Patel", email: "Parth@example.com", designation: "Junior Executive", contact: "7770001112", code: "+91", status: "Inactive", profileImage: "https://placehold.co/70x150/198754/ffffff?text=PP" },
    { id: 4, username: "Ruchit", firstname: "Ruchit", lastname: "Vora", email: "Ruchit@example.com", designation: "Sales Trainee", contact: "9009009009", code: "+91", status: "Inactive", profileImage: "https://placehold.co/70x150/ffc107/333333?text=RV" },
];

const pageContainerStyle = {
    backgroundColor: '#ffffffff',
    padding: '20px',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    fontFamily: '"Inter", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif'
};

export default function RequestInactive() {
    const router = mockUseRouter();
    const [salespersons, setSalespersons] = useState(initialSalespersons);
    const [filter, setFilter] = useState("all");


    const handleStatusChange = (id, newStatus) => {

        const action = newStatus === 'Inactive' ? 'deactivate' : 'activate';
        console.log(`[ACTION] Requesting to ${action} salesperson ID ${id}`);

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
            ? "text-green-700 bg-green-100 border border-green-300"
            : "text-red-700 bg-red-100 border border-red-300";
    };

    const getButtonClass = (status) => {

        return status === "Active"
            ? "bg-[#dc3545] hover:bg-[#c82333]"
            : "bg-[#00a7cf] hover:bg-[#0094b8]";
    };

    const getButtonText = (status) => {
        return status === "Active" ? "Set Inactive" : "Set Active";
    };

    const getNextStatus = (status) => {
        return status === "Active" ? "Inactive" : "Active";
    };


    return (
        <div style={pageContainerStyle}>
            <div className="p-4 bg-white rounded-xl shadow-2xl w-full max-w-[1200px] min-h-[550px]">

                <div className="bg-white px-4 py-4">
                    <div className="flex justify-between items-center border-b pb-4 border-gray-200">
                        <h2 className="text-2xl font-semibold text-gray-900">
                            Request for <span className="text-[#dc3545]">Inactivation</span> / Activation
                        </h2>
                        <button
                            onClick={() => router.back()}
                            className="flex items-center gap-1 bg-[#1a1a3d] hover:bg-[#111132] text-[white] px-4 py-2 rounded-[5px] text-base transition-colors duration-200"
                        >
                            <ArrowLeft className="w-5 h-5" /> Back
                        </button>
                    </div>
                </div>

                <div className="flex justify-end mb-[30px] items-center px-4 pt-4 pb-6">
                    <label className="text-[20px] mt-[30px] mr-[20px] font-medium text-gray-600 mr-2">
                        Filter Status:</label>
                    <select
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                        className="border border-gray-300 mt-[30px] rounded-[5px] p-2 text-[15px] focus:outline-none focus:ring-2 focus:ring-[#00a7cf]"
                    >
                        <option value="all">All Salespersons</option>
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                    </select>
                </div>

                <div className="w-[1100px] px-4 grid grid-cols-1 gap-5">
                    {filteredSalespersons.length > 0 ? (
                        filteredSalespersons.map((sp) => (
                            <div
                                key={sp.id}
                                className="flex flex-col mt-[20px] h-[310px] md:flex-row items-stretch justify-between bg-white border border-gray-200 rounded-[10px] p-5 shadow-lg hover:shadow-xl transition-all duration-200"
                            >

                                <div className="flex items-start gap-6 w-full md:w-3/4">
                                    <img
                                        src={sp.profileImage || "https://placehold.co/70x150/cccccc/333333?text=N/A"}
                                        alt="Profile"
                                        className="w-[50px] h-[50px] ml-[20px] mt-[20px] rounded-[20px] border border-gray-300 object-cover flex-shrink-0 shadow-md"
                                        onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/70x150/cccccc/333333?text=N/A" }}
                                    />

                                    <div className="flex flex-col flex-grow">
                                        <div className="flex items-center mb-1">
                                            <h3 className="text-xl mb-[1px] ml-[20px] font-bold text-gray-900 capitalize">
                                                {sp.firstname} {sp.lastname}
                                            </h3>
                                            <span className={`ml-4 text-xs mt-[20px] ml-[20px] font-semibold px-3 py-1 rounded-full ${getStatusColor(sp.status)}`}>
                                                {sp.status}
                                            </span>
                                        </div>
                                        <p className="text-sm ml-[20px] text-gray-500 mb-4">@{sp.username}</p>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-6 text-sm">
                                            <p className="flex items-center gap-2 text-gray-700">
                                                <Briefcase className="w-4 h-4 ml-[20px] text-gray-500" />
                                                <span className="font-medium">Designation:</span> {sp.designation}
                                            </p>

                                            <p className="flex items-center gap-2 text-gray-700">
                                                <Phone className="w-4 h-4 ml-[20px] text-gray-500" />
                                                <span className="font-medium">Contact:</span> {sp.code} {sp.contact}
                                            </p>

                                            <p className="flex items-center gap-2 text-gray-700 col-span-1 sm:col-span-2">
                                                <Mail className="w-4 h-4 ml-[20px] text-gray-500" />
                                                <span className="font-medium">Email:</span>
                                                <a href={`mailto:${sp.email}`} className="text-[#007bff] hover:underline truncate">
                                                    {sp.email}
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-4 md:mt-0 flex-shrink-0 flex items-center justify-end md:w-1/4">
                                    <button
                                        onClick={() => handleStatusChange(sp.id, getNextStatus(sp.status))}
                                        className={`h-[40px] w-[300px] mb-[10px] max-w-[180px] rounded-[5px] mb-[100px] mr-[20px] text-white text-sm font-semibold px-4 py-2 shadow-md transition-colors duration-200 ${getButtonClass(sp.status)}`}
                                    >
                                        {getButtonText(sp.status)}
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center text-gray-500 text-lg font-medium py-12 border border-dashed border-gray-300 rounded-xl mx-auto max-w-lg">
                            No Salespersons found with status: {filter}.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}