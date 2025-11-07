// "use client";
// import React, { useState } from "react";
// import { Mail, Phone, Briefcase, Key, Trash2, ArrowLeft } from "lucide-react";

// const mockUseRouter = () => {
//     return {
//         push: (path) => {
//             console.log(`[MOCK ROUTER] Navigating to: ${path}`);
//         },
//         back: () => {
//             console.log("[MOCK ROUTER] Navigating back");
//         }
//     };
// };

// const initialSalespersons = [
//     { id: 1, username: "Mayank", firstname: "Mayank", lastname: "Jagalaganeshwala", email: "Mayank@example.com", designation: "Sales Lead", contact: "9876543210", code: "+91", status: "Active", profileImage: "https://placehold.co/70x150/1f4d78/ffffff?text=MJ" },
//     { id: 2, username: "Jay", firstname: "Jay", lastname: "Sharma", email: "Jay@example.com", designation: "Field Sales Rep", contact: "8888123456", code: "+91", status: "Active", profileImage: "https://placehold.co/70x150/461159/ffffff?text=JS" },
//     { id: 3, username: "Parth", firstname: "Parth", lastname: "Patel", email: "Parth@example.com", designation: "Junior Executive", contact: "7770001112", code: "+91", status: "Inactive", profileImage: "https://placehold.co/70x150/198754/ffffff?text=PP" },
//     { id: 4, username: "Ruchit", firstname: "Ruchit", lastname: "Vora", email: "Ruchit@example.com", designation: "Sales Trainee", contact: "9009009009", code: "+91", status: "Inactive", profileImage: "https://placehold.co/70x150/ffc107/333333?text=RV" },
// ];

// const pageContainerStyle = {
//     backgroundColor: '#ffffffff',
//     padding: '20px',
//     minHeight: '100vh',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'flex-start',
//     fontFamily: '"Inter", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif'
// };

// export default function RequestInactive() {
//     const router = mockUseRouter();
//     const [salespersons, setSalespersons] = useState(initialSalespersons);
//     const [filter, setFilter] = useState("all");


//     const handleStatusChange = (id, newStatus) => {

//         const action = newStatus === 'Inactive' ? 'deactivate' : 'activate';
//         console.log(`[ACTION] Requesting to ${action} salesperson ID ${id}`);

//         setSalespersons(prev =>
//             prev.map(person =>
//                 person.id === id ? { ...person, status: newStatus } : person
//             )
//         );
//     };

//     const filteredSalespersons = salespersons.filter(person => {
//         if (filter === "all") return true;
//         return person.status.toLowerCase() === filter;
//     });

//     const getStatusColor = (status) => {
//         return status === "Active"
//             ? "text-green-700 bg-green-100 border border-green-300"
//             : "text-red-700 bg-red-100 border border-red-300";
//     };

//     const getButtonClass = (status) => {

//         return status === "Active"
//             ? "bg-[#dc3545] hover:bg-[#c82333]"
//             : "bg-[#00a7cf] hover:bg-[#0094b8]";
//     };

//     const getButtonText = (status) => {
//         return status === "Active" ? "Set Inactive" : "Set Active";
//     };

//     const getNextStatus = (status) => {
//         return status === "Active" ? "Inactive" : "Active";
//     };


//     return (
//         <div style={pageContainerStyle}>
//             <div className="p-4 bg-white rounded-xl shadow-2xl w-full max-w-[1200px] min-h-[550px]">

//                 <div className="bg-white px-4 py-4">
//                     <div className="flex justify-between items-center border-b pb-4 border-gray-200">
//                         <h2 className="text-2xl font-semibold text-gray-900">
//                             Request for <span className="text-[#dc3545]">Inactivation</span> / Activation
//                         </h2>
//                         <button
//                             onClick={() => router.back()}
//                             className="flex items-center gap-1 bg-[#1a1a3d] hover:bg-[#111132] text-[white] px-4 py-2 rounded-[5px] text-base transition-colors duration-200"
//                         >
//                             <ArrowLeft className="w-5 h-5" /> Back
//                         </button>
//                     </div>
//                 </div>

//                 <div className="flex justify-end mb-[30px] items-center px-4 pt-4 pb-6">
//                     <label className="text-[20px] mt-[30px] mr-[20px] font-medium text-gray-600 mr-2">
//                         Filter Status:</label>
//                     <select
//                         value={filter}
//                         onChange={(e) => setFilter(e.target.value)}
//                         className="border border-gray-300 mt-[30px] rounded-[5px] p-2 text-[15px] focus:outline-none focus:ring-2 focus:ring-[#00a7cf]"
//                     >
//                         <option value="all">All Salespersons</option>
//                         <option value="active">Active</option>
//                         <option value="inactive">Inactive</option>
//                     </select>
//                 </div>

//                 <div className="w-[1100px] px-4 grid grid-cols-1 gap-5">
//                     {filteredSalespersons.length > 0 ? (
//                         filteredSalespersons.map((sp) => (
//                             <div
//                                 key={sp.id}
//                                 className="flex flex-col mt-[20px] h-[310px] md:flex-row items-stretch justify-between bg-white border border-gray-200 rounded-[10px] p-5 shadow-lg hover:shadow-xl transition-all duration-200"
//                             >

//                                 <div className="flex items-start gap-6 w-full md:w-3/4">
//                                     <img
//                                         src={sp.profileImage || "https://placehold.co/70x150/cccccc/333333?text=N/A"}
//                                         alt="Profile"
//                                         className="w-[50px] h-[50px] ml-[20px] mt-[20px] rounded-[20px] border border-gray-300 object-cover flex-shrink-0 shadow-md"
//                                         onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/70x150/cccccc/333333?text=N/A" }}
//                                     />

//                                     <div className="flex flex-col flex-grow">
//                                         <div className="flex items-center mb-1">
//                                             <h3 className="text-xl mb-[1px] ml-[20px] font-bold text-gray-900 capitalize">
//                                                 {sp.firstname} {sp.lastname}
//                                             </h3>
//                                             <span className={`ml-4 text-xs mt-[20px] ml-[20px] font-semibold px-3 py-1 rounded-full ${getStatusColor(sp.status)}`}>
//                                                 {sp.status}
//                                             </span>
//                                         </div>
//                                         <p className="text-sm ml-[20px] text-gray-500 mb-4">@{sp.username}</p>

//                                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-6 text-sm">
//                                             <p className="flex items-center gap-2 text-gray-700">
//                                                 <Briefcase className="w-4 h-4 ml-[20px] text-gray-500" />
//                                                 <span className="font-medium">Designation:</span> {sp.designation}
//                                             </p>

//                                             <p className="flex items-center gap-2 text-gray-700">
//                                                 <Phone className="w-4 h-4 ml-[20px] text-gray-500" />
//                                                 <span className="font-medium">Contact:</span> {sp.code} {sp.contact}
//                                             </p>

//                                             <p className="flex items-center gap-2 text-gray-700 col-span-1 md:col-span-2">
//                                                 <Mail className="w-4 h-4 ml-[20px] text-gray-500" />
//                                                 <span className="font-semibold">Email:</span>
//                                                 <a href={`mailto:${sp.email}`} className="text-blue-600 hover:underline truncate">
//                                                     {sp.email}
//                                                 </a>
//                                             </p>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 {/* Right Section: Action Button (Positioned horizontally with the main info block) */}
//                                 {/* The button container is now a sibling to the main info div within the overall card flex */}
//                                 <div className="flex-shrink-0 w-full lg:w-auto mt-4 lg:mt-0 flex items-center justify-end">
//                                     <button
//                                         onClick={() => handleStatusChange(sp.id, getNextStatus(sp.status))}
//                                         className={`w-[200px] lg:w-[150px] h-[40px] mr-[20px] mb-[40px] rounded-[5px] text-white text-sm font-semibold px-4 py-2 shadow-lg transition-colors duration-200 ${getButtonClass(sp.status)}`}
//                                     >
//                                         {getButtonText(sp.status)}
//                                     </button>
//                                 </div>
//                             </div>
//                         ))
//                     ) : (
//                         <div className="text-center text-gray-500 text-lg font-medium py-12 border-2 border-dashed border-gray-300 rounded-xl mx-auto max-w-lg mt-8">
//                             No Salespersons found with status: **{filter}**.
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// }









"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Mail, Phone, Briefcase, Trash2, Key, AtSign } from "lucide-react"; // Added AtSign icon

// --- NewPasswordModal Component (No change) ---

const NewPasswordModal = ({ salespersonId, onClose, onPasswordChange }) => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (newPassword.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("New password and confirm password do not match.");
      return;
    }

    onPasswordChange(salespersonId, newPassword);
    onClose();
  };

  const modalStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  };

  const modalContentStyle = {
    backgroundColor: 'white',
    padding: '30px',
    borderRadius: '10px',
    width: '400px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxSizing: 'border-box',
    textIndent: '10px'
  };

  const buttonStyle = {
    padding: '10px 15px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'background-color 0.2s'
  };

  return (
    <div style={modalStyle} onClick={onClose}>
      <div style={modalContentStyle} onClick={(e) => e.stopPropagation()}>
        <h3 className="text-xl font-semibold mb-4 text-gray-900">Change Password</h3>
        <form onSubmit={handleSubmit}>
          {error && <p className="text-red-500 mb-3 text-sm">{error}</p>}

          <label className="block mb-2 text-sm font-medium mb-[10px] text-gray-700">New Password</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            style={inputStyle}
            placeholder="Enter new password"
            required
            minLength="6"
          />

          <label className="block mb-2 text-sm font-medium mb-[10px] text-gray-700">Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            style={inputStyle}
            placeholder="Confirm password"
            required
          />

          <div className="flex justify-end gap-3 mt-4">
            <button
              type="submit"
              style={{ ...buttonStyle, backgroundColor: '#00a7cf', color: 'white' }}
              className="hover:bg-[#0094b8] ml-[20px]"
            >
              Update Password
            </button>
            <button
              type="button"
              onClick={onClose}
              style={{ ...buttonStyle, backgroundColor: '#f0f0f0', color: '#333' }}
              className="hover:bg-gray-200 ml-[10px]"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// --- New ChangeEmailModal Component ---

const ChangeEmailModal = ({ salespersonId, onClose, onEmailChange }) => {
  const [newEmail, setNewEmail] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    // Basic email validation regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!validateEmail(newEmail)) {
      setError("Please enter a valid email address.");
      return;
    }

    onEmailChange(salespersonId, newEmail);
    onClose();
  };

  const modalStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  };

  const modalContentStyle = {
    backgroundColor: 'white',
    padding: '30px',
    borderRadius: '10px',
    width: '400px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxSizing: 'border-box',
    textIndent: '10px'
  };

  const buttonStyle = {
    padding: '10px 15px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'background-color 0.2s'
  };

  return (
    <div style={modalStyle} onClick={onClose}>
      <div style={modalContentStyle} onClick={(e) => e.stopPropagation()}>
        <h3 className="text-xl font-semibold mb-4 text-gray-900">Change Email ID</h3>
        <form onSubmit={handleSubmit}>
          {error && <p className="text-red-500 mb-3 text-sm">{error}</p>}

          <label className="block mb-2 text-sm font-medium mb-[10px] text-gray-700">New Email ID</label>
          <input
            type="email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
            style={inputStyle}
            placeholder="Enter new email address"
            required
          />

          <div className="flex justify-end gap-3 mt-4">
            <button
              type="submit"
              style={{ ...buttonStyle, backgroundColor: '#133b74', color: 'white' }}
              className="hover:bg-[#0f2f5a] ml-[20px]"
            >
              Update Email
            </button>
            <button
              type="button"
              onClick={onClose}
              style={{ ...buttonStyle, backgroundColor: '#f0f0f0', color: '#333' }}
              className="hover:bg-gray-200 ml-[10px]"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};


const pageContainerStyle = {
  backgroundColor: '#eef1f4',
  padding: '20px',
  minHeight: '80vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
  fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'
};

export default function SalespersonList() {
  const router = useRouter();
  const [salespersons, setSalespersons] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  // Password Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [salespersonToChange, setSalespersonToChange] = useState(null);
  // Email Modal State (NEW)
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false); // NEW
  const [salespersonToChangeEmail, setSalespersonToChangeEmail] = useState(null); // NEW

  useEffect(() => {
    const storedData = localStorage.getItem("salespersons");
    if (storedData) {
      setSalespersons(JSON.parse(storedData));
    }
    fetchData();
  }, []);

  useEffect(() => {
    localStorage.setItem("salespersons", JSON.stringify(salespersons));
  }, [salespersons]);

  const fetchData = async () => {
    try {
      const res = await fetch("/api/salespersons");
      const data = await res.json();
      setSalespersons(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this salesperson?")) return;

    try {
      const res = await fetch(`/api/salespersons/${id}`, { method: "DELETE" });

      if (res.ok) {
        setSalespersons((prev) => prev.filter((sp) => sp.id !== id));
        alert("Salesperson deleted successfully");
      } else {
        const data = await res.json();
        alert(data.message || "Failed to delete salesperson");
      }
    } catch (error) {
      console.error("Error deleting salesperson:", error);
      alert("Something went wrong");
    }
  };

  // Password Handlers
  const handleOpenChangePassword = (id) => {
    setSalespersonToChange(id);
    setIsModalOpen(true);
  };

  const handleCloseChangePassword = () => {
    setIsModalOpen(false);
    setSalespersonToChange(null);
  };

  const handleChangePassword = async (id, newPassword) => {
    try {
      const res = await fetch(`/api/salespersons/${id}/change-password`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: newPassword }),
      });

      if (res.ok) {
        alert("Password updated successfully!");
      } else {
        const data = await res.json();
        alert(data.message || "Failed to update password");
      }
    } catch (error) {
      console.error("Error changing password:", error);
      alert("Something went wrong");
    }
  };

  // Email Handlers (NEW)
  const handleOpenChangeEmail = (id) => {
    setSalespersonToChangeEmail(id);
    setIsEmailModalOpen(true);
  };

  const handleCloseChangeEmail = () => {
    setIsEmailModalOpen(false);
    setSalespersonToChangeEmail(null);
  };

  const handleChangeEmail = async (id, newEmail) => {
    // Implement your API call here to update the email
    try {
      const res = await fetch(`/api/salespersons/${id}/change-email`, { // **Update API endpoint as needed**
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: newEmail }),
      });

      if (res.ok) {
        // Optimistically update the local state if the API call is successful
        setSalespersons(prev => prev.map(sp =>
          sp.id === id ? { ...sp, email: newEmail } : sp
        ));
        alert("Email ID updated successfully!");
      } else {
        const data = await res.json();
        alert(data.message || "Failed to update email ID");
      }
    } catch (error) {
      console.error("Error changing email:", error);
      alert("Something went wrong");
    }
  };


  const filteredSalespersons = salespersons.filter(
    (sp) =>
      sp.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sp.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const displayList = searchQuery ? filteredSalespersons : salespersons;

  return (
    <div style={pageContainerStyle}>
      {/* Password Modal */}
      {isModalOpen && (
        <NewPasswordModal
          salespersonId={salespersonToChange}
          onClose={handleCloseChangePassword}
          onPasswordChange={handleChangePassword}
        />
      )}

      {/* Email Modal (NEW) */}
      {isEmailModalOpen && (
        <ChangeEmailModal
          salespersonId={salespersonToChangeEmail}
          onClose={handleCloseChangeEmail}
          onEmailChange={handleChangeEmail}
        />
      )}

      <div className="p-[6] bg-[#ffffff] rounded-[5px] w-[1200px]">
        <div className="bg-[#ffffff] w-full px-4 py-4">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl ml-[20px] font-semibold text-gray-900">
              Salesperson List
            </h2>
            <button
              onClick={() => router.push("/managesalesperson/add")}
              className="bg-[#1a1a3d] hover:bg-[#111132] text-[white] mr-[20px] text-[20px] px-4 py-2 rounded-[6px]"
            >
              Add Sales Person
            </button>
          </div>
          <hr className="border border-black mt-2 mb-6" />
        </div>

        <div className="flex items-center ml-[15px] gap-2 mb-6">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-[200px] ml-[875px] mr-[10px] h-[35px] mt-[10px] border border-gray-300 rounded-[5px] mb-[40px] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00a7cf]"
            style={{ textIndent: "10px" }}
          />
          <button className="bg-[#00a7cf] w-[70px] h-[40px] text-[white] mr-[4px] mb-[40px] mt-[10px] px-5 py-2 text-sm font-medium rounded-[5px] hover:bg-[#0094b8]">
            Search
          </button>
        </div>

        {displayList.length > 0 ? (
          <div className="w-[1150px] ml-[25px] grid grid-cols-1 gap-[20px]">
            {displayList.map((sp, index) => (
              <div
                key={sp.id || index}
                className="flex items-center mb-[10px] justify-between bg-[white] border border-gray-200 rounded-[10px] p-4 shadow-sm hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-start gap-4">
                  <img
                    src={sp.profileImage || "/default-avatar.png"}
                    alt="Profile"
                    className="w-[70px] h-[150px] ml-[20px] rounded-[10px] mt-[20px] border border-gray-300 object-cover"
                  />
                  <div>
                    <h3 className="text-[16px] ml-[30px] mt-[20px] font-semibold text-gray-800 leading-tight">
                      {sp.username}
                    </h3>
                    <p className="text-gray-600 ml-[30px] text-sm capitalize leading-tight">
                      {sp.firstname} {sp.lastname}
                    </p>

                    <div className="flex flex-col mb-[10px] text-sm text-gray-700 mt-1">
                      <div className="flex ml-[30px] mb-[10px] items-center gap-[10px] mr-4">
                        <Briefcase className="w-[20px] h-[20px] text-gray-500" />
                        <span>
                          Designation:{" "}
                          <span className="font-semibold">{sp.designation}</span>
                        </span>
                      </div>
                      <div className="flex mb-[20px] ml-[30px] items-center gap-[10px]">
                        <Phone className="w-[20px] h-[20px] text-gray-500" />
                        <span>
                          Contact Number:{" "}
                          <span className="font-semibold">
                            {sp.code} {sp.contact}
                          </span>
                        </span>
                      </div>
                    </div>

                    <p className="flex items-center ml-[30px] mb-[5px] gap-[10px] text-sm text-gray-700 mt-[1px]">
                      <Mail className="w-4 h-4 text-gray-500" />
                      <a
                        href={`mailto:${sp.email}`}
                        className="text-[#007bff] hover:underline"
                      >
                        {sp.email}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-2 mr-[20px]">
                  <div
                    className="relative group flex flex-col items-center cursor-pointer"
                    onClick={() => handleDelete(sp.id)}
                  >
                    <Trash2
                      className="w-[20px] h-5 text-gray-600 mb-[15px] hover:text-red-600 transition"
                      title="Delete"
                    />
                    <span className="absolute -left-[40px] bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                      Delete
                    </span>
                  </div>

                  <div
                    className="relative group flex flex-col items-center cursor-pointer"
                    onClick={() => handleOpenChangePassword(sp.id)}
                  >
                    <Key
                      className="w-[20px] h-5 text-gray-600 ml-[500px] hover:text-[#133b74] transition"
                      title="Change Password"
                    />
                    <span className="absolute -left-[40px] ml-[500px] bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                      Change Password
                    </span>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-2">
                  <button className="bg-[#dc3545] mb-[10px] mr-[70px] h-[30px] w-[150px] rounded-[5px] text-[white] hover:bg-[#c82333] text-sm font-medium px-4 py-2">
                    View Leads
                  </button>
                  <button
                    className="bg-[#133b74] mb-[10px] mr-[70px] h-[30px] w-[150px] rounded-[5px] text-[white] hover:bg-[#0f2f5a] text-sm font-medium px-4 py-2 flex items-center gap-1"
                    onClick={() => handleOpenChangeEmail(sp.id)} // Added onClick handler
                  >
                    <div className="ml-[20px]">
                    Change Email ID
                    </div>
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
    </div>
  );
}
