// "use client";
// import { useRouter } from "next/navigation";
// import React, { useEffect, useState } from "react";
// import { Mail, Phone, Briefcase, Trash2, Key } from "lucide-react";

// const NewPasswordModal = ({ salespersonId, onClose, onPasswordChange }) => {
//   const [newPassword, setNewPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setError("");

//     if (newPassword.length < 6) {
//       setError("Password must be at least 6 characters long.");
//       return;
//     }

//     if (newPassword !== confirmPassword) {
//       setError("New password and confirm password do not match.");
//       return;
//     }

//     onPasswordChange(salespersonId, newPassword);
//     onClose();
//   };

//   const modalStyle = {
//     position: 'fixed',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     zIndex: 1000,
//   };

//   const modalContentStyle = {
//     backgroundColor: 'white',
//     padding: '30px',
//     borderRadius: '10px',
//     width: '400px',
//     boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
//   };

//   const inputStyle = {
//     width: '100%',
//     padding: '10px',
//     marginBottom: '15px',
//     border: '1px solid #ccc',
//     borderRadius: '5px',
//     boxSizing: 'border-box',
//     textIndent: '10px'
//   };

//   const buttonStyle = {
//     padding: '10px 15px',
//     borderRadius: '5px',
//     cursor: 'pointer',
//     fontWeight: 'bold',
//     transition: 'background-color 0.2s'
//   };

//   return (
//     <div style={modalStyle} onClick={onClose}>
//       <div style={modalContentStyle} onClick={(e) => e.stopPropagation()}>
//         <h3 className="text-xl font-semibold mb-4 text-gray-900">Change Password</h3>
//         <form onSubmit={handleSubmit}>
//           {error && <p className="text-red-500 mb-3 text-sm">{error}</p>}

//           <label className="block mb-2 text-sm font-medium mb-[10px] text-gray-700">New Password</label>
//           <input
//             type="password"
//             value={newPassword}
//             onChange={(e) => setNewPassword(e.target.value)}
//             style={inputStyle}
//             placeholder="Enter new password"
//             required
//             minLength="6"
//           />

//           <label className="block mb-2 text-sm font-medium mb-[10px] text-gray-700">Confirm Password</label>
//           <input
//             type="password"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             style={inputStyle}
//             placeholder="Confirm password"
//             required
//           />

//           <div className="flex justify-end gap-3 mt-4">
//             <button
//               type="submit"
//               style={{ ...buttonStyle, backgroundColor: '#00a7cf', color: 'white' }}
//               className="hover:bg-[#0094b8] ml-[20px]"
//             >
//               Update Password
//             </button>
//             <button
//               type="button"
//               onClick={onClose}
//               style={{ ...buttonStyle, backgroundColor: '#f0f0f0', color: '#333' }}
//               className="hover:bg-gray-200 ml-[10px]"
//             >
//               Cancel
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };


// const ChangeEmailModal = ({ salespersonId, onClose, onEmailChange }) => {
//   const [newEmail, setNewEmail] = useState("");
//   const [error, setError] = useState("");

//   const validateEmail = (email) => {
//     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setError("");

//     if (!validateEmail(newEmail)) {
//       setError("Please enter a valid email address.");
//       return;
//     }

//     onEmailChange(salespersonId, newEmail);
//     onClose();
//   };

//   const modalStyle = {
//     position: 'fixed',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     zIndex: 1000,
//   };

//   const modalContentStyle = {
//     backgroundColor: 'white',
//     padding: '30px',
//     borderRadius: '10px',
//     width: '400px',
//     boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
//   };

//   const inputStyle = {
//     width: '100%',
//     padding: '10px',
//     marginBottom: '15px',
//     border: '1px solid #ccc',
//     borderRadius: '5px',
//     boxSizing: 'border-box',
//     textIndent: '10px'
//   };

//   const buttonStyle = {
//     padding: '10px 15px',
//     borderRadius: '5px',
//     cursor: 'pointer',
//     fontWeight: 'bold',
//     transition: 'background-color 0.2s'
//   };

//   return (
//     <div style={modalStyle} onClick={onClose}>
//       <div style={modalContentStyle} onClick={(e) => e.stopPropagation()}>
//         <h3 className="text-xl font-semibold mb-4 text-gray-900">Change Email ID</h3>
//         <form onSubmit={handleSubmit}>
//           {error && <p className="text-red-500 mb-3 text-sm">{error}</p>}

//           <label className="block mb-2 text-sm font-medium mb-[10px] text-gray-700">New Email ID</label>
//           <input
//             type="email"
//             value={newEmail}
//             onChange={(e) => setNewEmail(e.target.value)}
//             style={inputStyle}
//             placeholder="Enter new email address"
//             required
//           />

//           <div className="flex justify-end gap-3 mt-4">
//             <button
//               type="submit"
//               style={{ ...buttonStyle, backgroundColor: '#133b74', color: 'white' }}
//               className="hover:bg-[#0f2f5a] ml-[20px]"
//             >
//               Update Email
//             </button>
//             <button
//               type="button"
//               onClick={onClose}
//               style={{ ...buttonStyle, backgroundColor: '#f0f0f0', color: '#333' }}
//               className="hover:bg-gray-200 ml-[10px]"
//             >
//               Cancel
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };


// const pageContainerStyle = {
//   backgroundColor: '#eef1f4',
//   padding: '20px',
//   minHeight: '80vh',
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'flex-start',
//   fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'
// };

// export default function SalespersonList() {
//   const router = useRouter();
//   const [salespersons, setSalespersons] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   // Password Modal State
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [salespersonToChange, setSalespersonToChange] = useState(null);
//   // Email Modal State
//   const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
//   const [salespersonToChangeEmail, setSalespersonToChangeEmail] = useState(null);

//   useEffect(() => {
//     const storedData = localStorage.getItem("salespersons");
//     if (storedData) {
//       setSalespersons(JSON.parse(storedData));
//     }
//     fetchData();
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("salespersons", JSON.stringify(salespersons));
//   }, [salespersons]);

//   const fetchData = async () => {
//     try {
//       const res = await fetch("/api/salespersons");
//       const data = await res.json();
//       setSalespersons(data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   const handleDelete = (id) => {
//     if (!confirm("Are you sure you want to delete this salesperson ?")) return;

//     try {
//       setSalespersons((prev) => prev.filter((sp) => sp.id !== id));
//       alert("Salesperson deleted successfully!");
//     } catch (error) {
//       console.error("Error during local delete:", error);
//       alert("Local deletion failed.");
//     }
//   };

//   const handleOpenChangePassword = (id) => {
//     setSalespersonToChange(id);
//     setIsModalOpen(true);
//   };

//   const handleCloseChangePassword = () => {
//     setIsModalOpen(false);
//     setSalespersonToChange(null);
//   };

//   const handleChangePassword = async (id, newPassword) => {
//     await new Promise(resolve => setTimeout(resolve, 500));

//     try {
//       alert("Password updated successfully!");
//     } catch (error) {
//       console.error("Error during password simulation:", error);
//       alert("Something went wrong");
//     }
//   };

//   const handleOpenChangeEmail = (id) => {
//     setSalespersonToChangeEmail(id);
//     setIsEmailModalOpen(true);
//   };

//   const handleCloseChangeEmail = () => {
//     setIsEmailModalOpen(false);
//     setSalespersonToChangeEmail(null);
//   };

//   const handleChangeEmail = async (id, newEmail) => {
//     await new Promise(resolve => setTimeout(resolve, 500));

//     try {
//       setSalespersons(prev => prev.map(sp =>
//         sp.id === id ? { ...sp, email: newEmail } : sp
//       ));

//       alert("Email ID updated successfully!");
//     } catch (error) {
//       console.error("Error during local email change:", error);
//       alert("Local Email ID update failed.");
//     }
//   };

//   const filteredSalespersons = salespersons.filter(
//     (sp) =>
//       sp.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       sp.email.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const displayList = searchQuery ? filteredSalespersons : salespersons;

//   return (
//     <div style={pageContainerStyle}>

//       {/* Password Modal */}
//       {isModalOpen && (
//         <NewPasswordModal
//           salespersonId={salespersonToChange}
//           onClose={handleCloseChangePassword}
//           onPasswordChange={handleChangePassword}
//         />
//       )}

//       {/* Email Modal */}
//       {isEmailModalOpen && (
//         <ChangeEmailModal
//           salespersonId={salespersonToChangeEmail}
//           onClose={handleCloseChangeEmail}
//           onEmailChange={handleChangeEmail}
//         />
//       )}

//       <div className="p-[6] bg-[#ffffff] rounded-[5px] w-[1200px]">
//         <div className="bg-[#ffffff] w-full px-4 py-4">
//           <div className="flex justify-between items-center">
//             <h2 className="text-2xl ml-[20px] font-[semibold] text-gray-900">
//               Salesperson <strong> List</strong>
//             </h2>
//             <button
//               onClick={() => router.push("/managesalesperson/add")}
//               className="bg-[#1f3853] hover:bg-[#111132] text-[white] mr-[20px] text-[20px] px-4 py-2 rounded-[6px]"
//             >
//               Add Sales Person
//             </button>
//           </div>
//           <hr className="border border-black mt-2 mb-6" />
//         </div>

//         <div className="flex items-center ml-[15px] gap-2 mb-6">
//           <input
//             type="text"
//             placeholder="Search"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="w-[200px] ml-[875px] mr-[10px] h-[35px] mt-[10px] border border-gray-300 rounded-[5px] mb-[40px] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00a7cf]"
//             style={{ textIndent: "10px" }}
//           />
//           <button className="bg-[#0baad1] w-[70px] h-[40px] text-[white] mr-[4px] mb-[40px] mt-[10px] px-5 py-2 text-sm font-medium rounded-[5px] hover:bg-[#0094b8]">
//             Search
//           </button>
//         </div>

//         {displayList.length > 0 ? (
//           <div className="w-[1150px] ml-[25px] grid grid-cols-1 gap-[20px]">
//             {displayList.map((sp, index) => (
//               <div
//                 key={sp.id || index}
//                 className="flex items-center mb-[10px] justify-between bg-[white] border border-gray-200 rounded-[10px] p-4 shadow-sm hover:shadow-md transition-all duration-200"
//               >
//                 <div className="flex items-start gap-4 flex-1">
//                   <img
//                     src={sp.profileImage || "/default-avatar.png"}
//                     alt="Profile"
//                     className="w-[70px] h-[100px] ml-[20px] rounded-[10px] mt-[20px] border border-gray-300 object-cover"
//                   />
//                   <div className="flex-1">
//                     <h3 className="text-[20px] ml-[30px] mt-[20px] font-bold text-gray-800 leading-tight">
//                       {sp.username}
//                     </h3>
                    
//                     {/* First row: Name, Designation, Delete Icon, View Leads Button */}
//                     <div className="flex items-center justify-between ml-[30px] mt-[10px]">
//                       <div className="flex items-center gap-[40px]">
//                         <p className="text-gray-600 text-[16px] capitalize">
//                           {sp.firstname} {sp.lastname}
//                         </p>
//                         <div className="flex items-center gap-[10px]">
//                           <Briefcase className="w-[18px] h-[18px] ml-[60px] text-gray-500" />
//                           <span className="text-[16px] text-gray-700">
//                             Designation: <span className="font-semibold">{sp.designation}</span>
//                           </span>
//                         </div>
//                       </div>
                      
//                       <div className="flex items-center gap-3">
//                         {/* Delete Icon */}
//                         <div
//                           className="relative group flex items-center cursor-pointer"
//                           onClick={() => handleDelete(sp.id)}
//                         >
//                           <Trash2
//                             className="w-[20px] mr-[100px] h-5 text-gray-600 hover:text-red-600 transition"
//                             title="Delete"
//                           />
//                           <span className="absolute -top-[20px] -left-[10px] bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
//                             Delete
//                           </span>
//                         </div>
                        
//                         {/* View Leads Button */}
//                         <button className="bg-[#dc3545] h-[35px] w-[120px] mt-[10px] mr-[50px] rounded-[5px] text-[white] hover:bg-[#c82333] text-sm font-medium">
//                           View Leads
//                         </button>
//                       </div>
//                     </div>

//                     {/* Second row: Email, Contact Number, Change Password Icon, Change Email Button */}
//                     <div className="flex items-center justify-between ml-[30px] mt-[15px] mb-[20px]">
//                       <div className="flex items-center gap-[40px]">
//                         <div className="flex items-center gap-[10px]">
//                           <Mail className="w-[18px] h-[18px] mb-[10px] text-gray-500" />
//                           <a
//                             href={`mailto:${sp.email}`}
//                             className="text-[#007bff] mb-[10px] text-[16px] hover:underline"
//                           >
//                             {sp.email}
//                           </a>
//                         </div>
//                         <div className="flex items-center mb-[10px] gap-[10px]">
//                           <Phone className="w-[18px] h-[18px] text-gray-500" />
//                           <span className="text-[16px] text-gray-700">
//                             Contact Number:{" "}
//                             <span className="font-semibold">
//                               {sp.contact}
//                             </span>
//                           </span>
//                         </div>
//                       </div>
                      
//                       <div className="flex items-center gap-3">
//                         {/* Change Password Icon */}
//                         <div
//                           className="relative group flex items-center cursor-pointer"
//                           onClick={() => handleOpenChangePassword(sp.id)}
//                         >
//                           <Key
//                             className="w-[20px] h-5 mr-[100px] mb-[10px] text-gray-600 hover:text-[#133b74] transition"
//                             title="Change Password"
//                           />
//                           <span className="absolute -bottom-[10px] right-[40px] bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
//                             Change Password
//                           </span>
//                         </div>
                        
//                         {/* Change Email Button */}
//                         <button
//                           className="bg-[#2b3342] h-[35px] w-[140px] mb-[10px] mr-[30px] rounded-[5px] text-[white] hover:bg-[#0f2f5a] text-sm font-medium"
//                           onClick={() => handleOpenChangeEmail(sp.id)}
//                         >
//                           Change Email ID
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <div className="text-center text-gray-500 text-[18px] font-medium mt-10">
//             No Salespersons Found
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Mail, Phone, Briefcase, Trash2, Key } from "lucide-react";

// --- 1. NewPasswordModal Component ---
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

// --- 2. ChangeEmailModal Component ---
const ChangeEmailModal = ({ salespersonId, onClose, onEmailChange }) => {
  const [newEmail, setNewEmail] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email) => {
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

// --- 3. Main SalespersonList Component ---
export default function SalespersonList() {
  const router = useRouter();
  const [salespersons, setSalespersons] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [salespersonToChange, setSalespersonToChange] = useState(null);
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [salespersonToChangeEmail, setSalespersonToChangeEmail] = useState(null);

  // Load data from localStorage on mount
  useEffect(() => {
    const storedData = localStorage.getItem("salespersons");
    if (storedData) {
      setSalespersons(JSON.parse(storedData));
    }
    // fetchData() is removed to ensure local storage deletions persist on refresh
  }, []);

  // Sync data to localStorage whenever salespersons state changes
  useEffect(() => {
    localStorage.setItem("salespersons", JSON.stringify(salespersons));
  }, [salespersons]);

  // Placeholder for API fetch (currently unused to prioritize local storage)
  const fetchData = async () => {
    try {
      const res = await fetch("/api/salespersons");
      const data = await res.json();
      setSalespersons(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleDelete = (id) => {
    if (!confirm("Are you sure you want to delete this salesperson ?")) return;

    try {
      setSalespersons((prev) => prev.filter((sp) => sp.id !== id));
      alert("Salesperson deleted successfully!");
    } catch (error) {
      console.error("Error during local delete:", error);
      alert("Local deletion failed.");
    }
  };

  const handleOpenChangePassword = (id) => {
    setSalespersonToChange(id);
    setIsModalOpen(true);
  };

  const handleCloseChangePassword = () => {
    setIsModalOpen(false);
    setSalespersonToChange(null);
  };

  const handleChangePassword = async (id, newPassword) => {
    await new Promise(resolve => setTimeout(resolve, 500)); // Simulating network delay

    try {
      // In a real app, you would send a request to update the backend here.
      alert("Password updated successfully!");
    } catch (error) {
      console.error("Error during password simulation:", error);
      alert("Something went wrong");
    }
  };

  const handleOpenChangeEmail = (id) => {
    setSalespersonToChangeEmail(id);
    setIsEmailModalOpen(true);
  };

  const handleCloseChangeEmail = () => {
    setIsEmailModalOpen(false);
    setSalespersonToChangeEmail(null);
  };

  const handleChangeEmail = async (id, newEmail) => {
    await new Promise(resolve => setTimeout(resolve, 500)); // Simulating network delay

    try {
      // Update state and localStorage
      setSalespersons(prev => prev.map(sp =>
        sp.id === id ? { ...sp, email: newEmail } : sp
      ));

      alert("Email ID updated successfully!");
    } catch (error) {
      console.error("Error during local email change:", error);
      alert("Local Email ID update failed.");
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

      {/* Email Modal */}
      {isEmailModalOpen && (
        <ChangeEmailModal
          salespersonId={salespersonToChangeEmail}
          onClose={handleCloseChangeEmail}
          onEmailChange={handleChangeEmail}
        />
      )}

      <div className="p-[6] bg-[#ffffff] rounded-[5px] w-full max-w-[1200px]">
        {/* Header Section */}
        <div className="bg-[#ffffff] w-full px-4 py-4">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl ml-[20px] font-[semibold] text-gray-900">
              Salesperson <strong> List</strong>
            </h2>
            <button
              onClick={() => router.push("/managesalesperson/add")}
              className="bg-[#1f3853] hover:bg-[#111132] text-[white] mr-[20px] text-[20px] px-4 py-2 rounded-[6px]"
            >
              Add Sales Person
            </button>
          </div>
          <hr className="border border-black mt-2 mb-6" />
        </div>

        {/* Search Bar Section (Responsive) */}
        <div className="flex flex-col-2 sm:flex-row items-center justify-end gap-2 mb-6 px-4">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-[200px] sm:w-[200px] h-[35px] mr-[10px] mb-[20px] border border-gray-300 rounded-[5px] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00a7cf] mb-4 sm:mb-0"
            style={{ textIndent: "10px" }}
          />
          <button className="bg-[#0baad1] w-[100px] mr-[50px] mb-[20px] sm:w-[70px] h-[40px] text-[white] px-5 py-2 text-sm font-medium rounded-[5px] hover:bg-[#0094b8]">
            Search
          </button>
        </div>

        {/* Salesperson List - Responsive structure */}
        {displayList.length > 0 ? (
          <div className="w-full px-4 grid grid-cols-1 gap-[20px]">
            {displayList.map((sp, index) => (
              <div
                key={sp.id || index}
                className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-[white] border border-gray-200 rounded-[10px] p-4 shadow-sm hover:shadow-md transition-all duration-200"
              >
                <div className="flex flex-col sm:flex-row items-start gap-4 flex-1 w-full">
                  
                  {/* Image */}
                  <img
                    src={sp.profileImage || "/default-avatar.png"}
                    alt="Profile"
                    className="w-[70px] h-[70px] mt-[20px] ml-[20px] rounded-[10px] border border-gray-300 object-cover flex-shrink-0 mb-4 sm:mb-0"
                  />
                  
                  {/* Details Container */}
                  <div className="flex-1 w-full">
                    
                    <h3 className="text-[20px] font-bold text-gray-800 leading-tight mb-2 sm:mt-[20px]">
                      {sp.username}
                    </h3>
                    
                    {/* First row: Name, Designation, Delete Icon, View Leads Button (Responsive) */}
                    <div className="flex flex-col-2 sm:flex-row sm:items-center sm:justify-between w-full">
                      
                      {/* Name and Designation Group */}
                      <div className="flex flex-col-2 sm:flex-row sm:items-center sm:gap-[40px] mb-3 sm:mb-0">
                        <p className="text-gray-600 text-[16px] capitalize mb-1 sm:mb-0">
                          {sp.firstname} {sp.lastname}
                        </p>
                        <div className="flex items-center gap-[10px]">
                          <Briefcase className="w-[18px] h-[18px] ml-[100px] text-gray-500" />
                          <span className="text-[16px] text-gray-700">
                            Designation: <span className="font-semibold">{sp.designation}</span>
                          </span>
                        </div>
                      </div>
                      
                      {/* Action Buttons - Top Row */}
                      <div className="flex items-center gap-3 mt-2 sm:mt-0">
                        <div
                          className="relative group flex items-center cursor-pointer"
                          onClick={() => handleDelete(sp.id)}
                        >
                          <Trash2
                            className="w-[20px] h-5 ml-[500px] text-gray-600 hover:text-red-600 transition"
                            title="Delete"
                          />
                          <span className="absolute -top-[30px] left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap hidden sm:block">
                            Delete
                          </span>
                        </div>
                        
                        <button className="bg-[#dc3545] ml-[100px] h-[35px] w-[120px] rounded-[5px] text-[white] hover:bg-[#c82333] text-sm font-medium">
                          View Leads
                        </button>
                      </div>
                    </div>

                    {/* Second row: Email, Contact Number, Change Password Icon, Change Email Button (Responsive) */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full mt-4 sm:mt-[15px]">
                      
                      {/* Email and Contact Group */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-[40px]">
                        <div className="flex items-center gap-[10px] mb-1 sm:mb-0">
                          <Mail className="w-[18px] h-[18px] text-gray-500" />
                          <a
                            href={`mailto:${sp.email}`}
                            className="text-[#007bff] text-[16px] hover:underline"
                          >
                            {sp.email}
                          </a>
                        </div>
                        <div className="flex items-center gap-[10px]">
                          <Phone className="w-[18px] h-[18px] text-gray-500" />
                          <span className="text-[16px] text-gray-700">
                            Contact Number:{" "}
                            <span className="font-semibold">
                              {sp.contact}
                            </span>
                          </span>
                        </div>
                      </div>
                      
                      {/* Action Buttons - Bottom Row */}
                      <div className="flex items-center gap-3 mt-4 sm:mt-0">
                        <div
                          className="relative group flex items-center cursor-pointer"
                          onClick={() => handleOpenChangePassword(sp.id)}
                        >
                          <Key
                            className="w-[20px] h-5 text-gray-600 hover:text-[#133b74] transition"
                            title="Change Password"
                          />
                          <span className="absolute -bottom-[30px] left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap hidden sm:block">
                            Change Password
                          </span>
                        </div>
                        
                        <button
                          className="bg-[#2b3342] h-[35px] w-[140px] rounded-[5px] text-[white] hover:bg-[#0f2f5a] text-sm font-medium"
                          onClick={() => handleOpenChangeEmail(sp.id)}
                        >
                          Change Email ID
                        </button>
                      </div>
                    </div>
                  </div>
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