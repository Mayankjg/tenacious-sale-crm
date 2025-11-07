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
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [salespersonToChange, setSalespersonToChange] = useState(null);

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

//   const handleDelete = async (id) => {
//     if (!confirm("Are you sure you want to delete this salesperson?")) return;

//     try {
//       const res = await fetch(`/api/salespersons/${id}`, { method: "DELETE" });

//       if (res.ok) {
//         setSalespersons((prev) => prev.filter((sp) => sp.id !== id));
//         alert("Salesperson deleted successfully");
//       } else {
//         const data = await res.json();
//         alert(data.message || "Failed to delete salesperson");
//       }
//     } catch (error) {
//       console.error("Error deleting salesperson:", error);
//       alert("Something went wrong");
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
//     try {
//       const res = await fetch(`/api/salespersons/${id}/change-password`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ password: newPassword }),
//       });

//       if (res.ok) {
//         alert("Password updated successfully!");
//       } else {
//         const data = await res.json();
//         alert(data.message || "Failed to update password");
//       }
//     } catch (error) {
//       console.error("Error changing password:", error);
//       alert("Something went wrong");
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
//       {/* Modal */}
//       {isModalOpen && (
//         <NewPasswordModal
//           salespersonId={salespersonToChange}
//           onClose={handleCloseChangePassword}
//           onPasswordChange={handleChangePassword}
//         />
//       )}

//       <div className="p-[6] bg-[#ffffff] rounded-[5px] w-[1200px]">
//         <div className="bg-[#ffffff] w-full px-4 py-4">
//           <div className="flex justify-between items-center">
//             <h2 className="text-2xl ml-[20px] font-semibold text-gray-900">
//               Salesperson List
//             </h2>
//             <button
//               onClick={() => router.push("/managesalesperson/add")}
//               className="bg-[#1a1a3d] hover:bg-[#111132] text-[white] mr-[20px] text-[20px] px-4 py-2 rounded-[6px]"
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
//           <button className="bg-[#00a7cf] w-[70px] h-[40px] text-[white] mr-[4px] mb-[40px] mt-[10px] px-5 py-2 text-sm font-medium rounded-[5px] hover:bg-[#0094b8]">
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
//                 <div className="flex items-start gap-4">
//                   <img
//                     src={sp.profileImage || "/default-avatar.png"}
//                     alt="Profile"
//                     className="w-[70px] h-[150px] ml-[20px] rounded-[10px] mt-[20px] border border-gray-300 object-cover"
//                   />
//                   <div>
//                     <h3 className="text-[16px] ml-[30px] mt-[20px] font-semibold text-gray-800 leading-tight">
//                       {sp.username}
//                     </h3>
//                     <p className="text-gray-600 ml-[30px] text-sm capitalize leading-tight">
//                       {sp.firstname} {sp.lastname}
//                     </p>

//                     <div className="flex flex-col mb-[10px] text-sm text-gray-700 mt-1">
//                       <div className="flex ml-[30px] mb-[10px] items-center gap-[10px] mr-4">
//                         <Briefcase className="w-[20px] h-[20px] text-gray-500" />
//                         <span>
//                           Designation:{" "}
//                           <span className="font-semibold">{sp.designation}</span>
//                         </span>
//                       </div>
//                       <div className="flex mb-[20px] ml-[30px] items-center gap-[10px]">
//                         <Phone className="w-[20px] h-[20px] text-gray-500" />
//                         <span>
//                           Contact Number:{" "}
//                           <span className="font-semibold">
//                             {sp.code} {sp.contact}
//                           </span>
//                         </span>
//                       </div>
//                     </div>

//                     <p className="flex items-center ml-[30px] mb-[5px] gap-[10px] text-sm text-gray-700 mt-[1px]">
//                       <Mail className="w-4 h-4 text-gray-500" />
//                       <a
//                         href={`mailto:${sp.email}`}
//                         className="text-[#007bff] hover:underline"
//                       >
//                         {sp.email}
//                       </a>
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex flex-col items-end gap-2 mr-[20px]">
//                   <div
//                     className="relative group flex flex-col items-center cursor-pointer"
//                     onClick={() => handleDelete(sp.id)}
//                   >
//                     <Trash2
//                       className="w-[20px] h-5 text-gray-600 mb-[15px] hover:text-red-600 transition"
//                       title="Delete"
//                     />
//                     <span className="absolute -left-[40px] bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
//                       Delete
//                     </span>
//                   </div>

//                   <div
//                     className="relative group flex flex-col items-center cursor-pointer"
//                     onClick={() => handleOpenChangePassword(sp.id)}
//                   >
//                     <Key
//                       className="w-[20px] h-5 text-gray-600 ml-[500px] hover:text-[#133b74] transition"
//                       title="Change Password"
//                     />
//                     <span className="absolute -left-[40px] ml-[500px] bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
//                       Change Password
//                     </span>
//                   </div>
//                 </div>

//                 <div className="flex flex-col items-end gap-2">
//                   <button className="bg-[#dc3545] mb-[10px] mr-[70px] h-[30px] w-[150px] rounded-[5px] text-[white] hover:bg-[#c82333] text-sm font-medium px-4 py-2">
//                     View Leads
//                   </button>
//                   <button className="bg-[#133b74] mb-[10px] mr-[70px] h-[30px] w-[150px] rounded-[5px] text-[white] hover:bg-[#0f2f5a] text-sm font-medium px-4 py-2 flex items-center gap-1"
//                     style={{ textIndent: "20px" }}
//                   >
//                     Change Email ID
//                   </button>
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

  const handleDelete = (id) => {
    if (!confirm("Are you sure you want to delete this salesperson? (Local Delete)")) return;

    try {
        setSalespersons((prev) => prev.filter((sp) => sp.id !== id));
        
        alert("Salesperson deleted successfully!");
        
    } catch (error) {
        console.error("Error during local delete:", error);
        alert("Local deletion failed.");
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
    await new Promise(resolve => setTimeout(resolve, 500)); 

    try {
        alert("Password updated successfully!"); 
        
    } catch (error) {
        console.error("Error during password simulation:", error);
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
    await new Promise(resolve => setTimeout(resolve, 500)); 

    try {
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
            <h2 className="text-2xl ml-[20px] font-[semibold] text-gray-900">
              Salesperson <strong> List</strong>
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































































// "use client";
// import { useRouter } from "next/navigation";
// import React, { useEffect, useState } from "react";
// import { Mail, Phone, Briefcase, Trash2, Key, AtSign } from "lucide-react";

// // --- DUMMY DATA ---
// const initialSalespersons = [
//   {
//     id: "1",
//     username: "rohit_s",
//     firstname: "Rohit",
//     lastname: "Sharma",
//     designation: "Senior Sales Rep",
//     code: "+91",
//     contact: "9876543210",
//     email: "rohit.s@example.com",
//     profileImage: "https://via.placeholder.com/70x150/007bff/ffffff?text=RS",
//   },
//   {
//     id: "2",
//     username: "virat_k",
//     firstname: "Virat",
//     lastname: "Kohli",
//     designation: "Sales Manager",
//     code: "+91",
//     contact: "9988776655",
//     email: "virat.k@example.com",
//     profileImage: "https://via.placeholder.com/70x150/28a745/ffffff?text=VK",
//   },
// ];
// // ------------------

// // --- NewPasswordModal Component (Unchanged, but only calls local state handler) ---

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

//     // Call the local state update handler (no fetch)
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

// // --- ChangeEmailModal Component (Unchanged, but only calls local state handler) ---

// const ChangeEmailModal = ({ salespersonId, onClose, onEmailChange }) => {
//   const [newEmail, setNewEmail] = useState("");
//   const [error, setError] = useState("");

//   const validateEmail = (email) => {
//     // Basic email validation regex
//     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setError("");

//     if (!validateEmail(newEmail)) {
//       setError("Please enter a valid email address.");
//       return;
//     }

//     // Call the local state update handler (no fetch)
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
//   // Initialize with dummy data, removing useEffect for storage/fetch
//   const [salespersons, setSalespersons] = useState(initialSalespersons);
//   const [searchQuery, setSearchQuery] = useState("");
//   // Password Modal State
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [salespersonToChange, setSalespersonToChange] = useState(null);
//   // Email Modal State
//   const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
//   const [salespersonToChangeEmail, setSalespersonToChangeEmail] = useState(null);

//   // --- Removed all useEffects for fetch and localStorage ---

//   // --- Simplified handleDelete (Frontend Only) ---
//   const handleDelete = (id) => {
//     if (!confirm("Are you sure you want to delete this salesperson?")) return;

//     // Update state directly, no API call
//     setSalespersons((prev) => prev.filter((sp) => sp.id !== id));
//     alert("Salesperson deleted successfully (Frontend Mock)");
//   };

//   // Password Handlers (UI/State only)
//   const handleOpenChangePassword = (id) => {
//     setSalespersonToChange(id);
//     setIsModalOpen(true);
//   };

//   const handleCloseChangePassword = () => {
//     setIsModalOpen(false);
//     setSalespersonToChange(null);
//   };

//   const handleChangePassword = (id, newPassword) => {
//     // This is a mock update for the frontend to show it's working
//     // In a real app, you wouldn't typically save the password client-side.
//     // Here, we just log a success message.
//     console.log(`Password for salesperson ${id} updated to: ${newPassword.slice(0, 3)}... (Frontend Mock)`);
//     alert("Password updated successfully! (Frontend Mock)");
//   };

//   // Email Handlers (UI/State only)
//   const handleOpenChangeEmail = (id) => {
//     setSalespersonToChangeEmail(id);
//     setIsEmailModalOpen(true);
//   };

//   const handleCloseChangeEmail = () => {
//     setIsEmailModalOpen(false);
//     setSalespersonToChangeEmail(null);
//   };

//   const handleChangeEmail = (id, newEmail) => {
//     // Update the local state with the new email
//     setSalespersons(prev => prev.map(sp =>
//       sp.id === id ? { ...sp, email: newEmail } : sp
//     ));
//     alert(`Email ID for salesperson ${id} updated to ${newEmail} (Frontend Mock)!`);
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
//             <h2 className="text-2xl ml-[20px] font-semibold text-gray-900">
//               Salesperson List
//             </h2>
//             <button
//               onClick={() => router.push("/managesalesperson/add")}
//               className="bg-[#1a1a3d] hover:bg-[#111132] text-[white] mr-[20px] text-[20px] px-4 py-2 rounded-[6px]"
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
//           <button className="bg-[#00a7cf] w-[70px] h-[40px] text-[white] mr-[4px] mb-[40px] mt-[10px] px-5 py-2 text-sm font-medium rounded-[5px] hover:bg-[#0094b8]">
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
//                 <div className="flex items-start gap-4">
//                   <img
//                     src={sp.profileImage || "/default-avatar.png"}
//                     alt="Profile"
//                     className="w-[70px] h-[150px] ml-[20px] rounded-[10px] mt-[20px] border border-gray-300 object-cover"
//                   />
//                   <div>
//                     <h3 className="text-[16px] ml-[30px] mt-[20px] font-semibold text-gray-800 leading-tight">
//                       {sp.username}
//                     </h3>
//                     <p className="text-gray-600 ml-[30px] text-sm capitalize leading-tight">
//                       {sp.firstname} {sp.lastname}
//                     </p>

//                     <div className="flex flex-col mb-[10px] text-sm text-gray-700 mt-1">
//                       <div className="flex ml-[30px] mb-[10px] items-center gap-[10px] mr-4">
//                         <Briefcase className="w-[20px] h-[20px] text-gray-500" />
//                         <span>
//                           Designation:{" "}
//                           <span className="font-semibold">{sp.designation}</span>
//                         </span>
//                       </div>
//                       <div className="flex mb-[20px] ml-[30px] items-center gap-[10px]">
//                         <Phone className="w-[20px] h-[20px] text-gray-500" />
//                         <span>
//                           Contact Number:{" "}
//                           <span className="font-semibold">
//                             {sp.code} {sp.contact}
//                           </span>
//                         </span>
//                       </div>
//                     </div>

//                     <p className="flex items-center ml-[30px] mb-[5px] gap-[10px] text-sm text-gray-700 mt-[1px]">
//                       <Mail className="w-4 h-4 text-gray-500" />
//                       <a
//                         href={`mailto:${sp.email}`}
//                         className="text-[#007bff] hover:underline"
//                       >
//                         {sp.email}
//                       </a>
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex flex-col items-end gap-2 mr-[20px]">
//                   <div
//                     className="relative group flex flex-col items-center cursor-pointer"
//                     onClick={() => handleDelete(sp.id)}
//                   >
//                     <Trash2
//                       className="w-[20px] h-5 text-gray-600 mb-[15px] hover:text-red-600 transition"
//                       title="Delete"
//                     />
//                     <span className="absolute -left-[40px] bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
//                       Delete
//                     </span>
//                   </div>

//                   <div
//                     className="relative group flex flex-col items-center cursor-pointer"
//                     onClick={() => handleOpenChangePassword(sp.id)}
//                   >
//                     <Key
//                       className="w-[20px] h-5 text-gray-600 ml-[500px] hover:text-[#133b74] transition"
//                       title="Change Password"
//                     />
//                     <span className="absolute -left-[40px] ml-[500px] bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
//                       Change Password
//                     </span>
//                   </div>
//                 </div>

//                 <div className="flex flex-col items-end gap-2">
//                   <button className="bg-[#dc3545] mb-[10px] mr-[70px] h-[30px] w-[150px] rounded-[5px] text-[white] hover:bg-[#c82333] text-sm font-medium px-4 py-2">
//                     View Leads
//                   </button>
//                   <button
//                     className="bg-[#133b74] mb-[10px] mr-[70px] h-[30px] w-[150px] rounded-[5px] text-[white] hover:bg-[#0f2f5a] text-sm font-medium px-4 py-2 flex items-center gap-1"
//                     onClick={() => handleOpenChangeEmail(sp.id)}
//                   >
//                     Change Email ID
//                   </button>
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
