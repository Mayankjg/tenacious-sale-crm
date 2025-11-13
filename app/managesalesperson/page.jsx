// "use client";
// import { useRouter } from "next/navigation";
// import React, { useEffect, useState } from "react";
// import { Mail, Phone, Briefcase, Trash2, Key } from "lucide-react";

// // Internal CSS for responsiveness
// const internalStyles = `
//   @media (max-width: 1280px) {
//     .list-container {
//       width: 95% !important;
//       max-width: 1100px !important;
//     }
//     .card-list {
//       width: 100% !important;
//       margin-left: 15px !important;
//     }
//   }

//   @media (max-width: 1024px) {
//     .list-container {
//       width: 100% !important;
//     }
//     .header-section {
//       flex-direction: column !important;
//       align-items: flex-start !important;
//       gap: 15px;
//     }
//     .header-title {
//       margin-left: 10px !important;
//     }
//     .add-button {
//       margin-right: 10px !important;
//       width: 100%;
//     }
//     .search-wrapper {
//       flex-direction: column !important;
//       margin-left: 0 !important;
//       align-items: flex-start !important;
//     }
//     .search-input {
//       margin-left: 0 !important;
//       width: 100% !important;
//       max-width: 390px;
//       margin-bottom:10px;
//     }
//     .search-button {
//       margin-right: 0 !important;
//       margin-top: 1px;
//       width: 100%;
//       max-width: 395px;
//     }
//     .card-list {
//       width: 100% !important;
//       margin-left: 0 !important;
//     }
//   }

//   @media (max-width: 768px) {
//     .salesperson-card {
//       flex-direction: column !important;
//       align-items: flex-start !important;
//     }
//     .card-image {
//       margin-left: 10px !important;
//     }
//     .card-content {
//       width: 100%;
//     }
//     .card-title {
//       margin-left: 15px !important;
//     }
//     .card-row {
//       flex-direction: column !important;
//       align-items: flex-start !important;
//       gap: 15px !important;
//     }
//     .card-left-section {
//       flex-direction: column !important;
//       gap: 10px !important;
//       align-items: flex-start !important;
//     }
//     .card-right-section {
//       width: 100%;
//       justify-content: flex-start !important;
//       gap: 10px !important;
//     }
//     .delete-icon, .password-icon {
//       margin-right: 10px !important;
//     }
//     .view-leads-btn, .change-email-btn {
//       width: 100% !important;
//       margin-right: 10px !important;
//     }
//     .designation-section {
//       margin-left: 0 !important;
//     }
//   }

//   @media (max-width: 480px) {
//     .list-container {
//       padding: 10px !important;
//     }
//     .header-title {
//       font-size: 1.25rem !important;
//     }
//     .card-image {
//       width: 60px !important;
//       height: 80px !important;
//     }
//   }
// `;

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
//     padding: '20px'
//   };

//   const modalContentStyle = {
//     backgroundColor: 'white',
//     padding: '30px',
//     borderRadius: '10px',
//     width: '100%',
//     maxWidth: '400px',
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
//     padding: '20px'
//   };

//   const modalContentStyle = {
//     backgroundColor: 'white',
//     padding: '30px',
//     borderRadius: '10px',
//     width: '100%',
//     maxWidth: '400px',
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
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [salespersonToChange, setSalespersonToChange] = useState(null);
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
//     <>
//       <style>{internalStyles}</style>
//       <div style={pageContainerStyle}>
//         {isModalOpen && (
//           <NewPasswordModal
//             salespersonId={salespersonToChange}
//             onClose={handleCloseChangePassword}
//             onPasswordChange={handleChangePassword}
//           />
//         )}

//         {isEmailModalOpen && (
//           <ChangeEmailModal
//             salespersonId={salespersonToChangeEmail}
//             onClose={handleCloseChangeEmail}
//             onEmailChange={handleChangeEmail}
//           />
//         )}

//         <div className="list-container p-[6] bg-[#ffffff] rounded-[5px] w-[1200px]">
//           <div className="bg-[#ffffff] w-full px-4 py-4">
//             <div className="header-section flex justify-between items-center">
//               <h2 className="header-title text-2xl ml-[20px] font-[semibold] text-gray-900">
//                 Salesperson <strong> List</strong>
//               </h2>
//               <button
//                 onClick={() => router.push("/managesalesperson/add")}
//                 className="add-button bg-[#1f3853] hover:bg-[#111132] text-[white] mr-[20px] text-[20px] px-4 py-2 rounded-[6px]"
//               >
//                 Add Sales Person
//               </button>
//             </div>
//             <hr className="border border-black mt-2 mb-6" />
//           </div>

//           <div className="search-wrapper flex items-center ml-[15px] gap-2 mb-6">
//             <input
//               type="text"
//               placeholder="Search"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="search-input w-[200px] ml-[875px] mr-[10px] h-[35px] mt-[10px] border border-gray-300 rounded-[5px] mb-[40px] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00a7cf]"
//               style={{ textIndent: "10px" }}
//             />
//             <button className="search-button bg-[#0baad1] w-[70px] h-[40px] text-[white] mr-[4px] mb-[40px] mt-[10px] px-5 py-2 text-sm font-medium rounded-[5px] hover:bg-[#0094b8]">
//               Search
//             </button>
//           </div>

//           {displayList.length > 0 ? (
//             <div className="card-list w-[1150px] ml-[25px] grid grid-cols-1 gap-[10px]">
//               {displayList.map((sp, index) => (
//                 <div
//                   key={sp.id || index}
//                   className="salesperson-card flex items-center hover:bg-[#f6f6f6] mb-[10px] justify-between bg-[white] border border-gray-200 rounded-[10px] p-4 shadow-sm hover:shadow-md transition-all duration-200"
//                 >
//                   <div className="flex items-start gap-4 flex-1">
//                     <img
//                       src={sp.profileImage || "/default-avatar.png"}
//                       alt="Profile"
//                       className="card-image w-[70px] h-[100px] ml-[20px] rounded-[10px] mt-[20px] border border-gray-300 object-cover"
//                     />
//                     <div className="card-content flex-1">
//                       <h3 className="card-title text-[20px] ml-[30px] mt-[20px] font-bold text-gray-800 leading-tight">
//                         {sp.username}
//                       </h3>

//                       <div className="card-row flex items-center justify-between ml-[30px] mt-[10px]">
//                         <div className="card-left-section flex items-center gap-[40px]">
//                           <p className="text-gray-600 text-[16px] capitalize">
//                             {sp.firstname} {sp.lastname}
//                           </p>
//                           <div className="designation-section flex items-center gap-[10px]">
//                             <Briefcase className="w-[18px] h-[18px] ml-[60px] text-gray-500" />
//                             <span className="text-[16px] text-gray-700">
//                               Designation: <span className="font-semibold">{sp.designation}</span>
//                             </span>
//                           </div>
//                         </div>

//                         <div className="card-right-section flex items-center gap-3">
//                           <div
//                             className="relative group flex items-center cursor-pointer"
//                             onClick={() => handleDelete(sp.id)}
//                           >
//                             <Trash2
//                               className="delete-icon w-[20px] mr-[100px] h-5 text-gray-600 hover:text-red-600 transition"
//                               title="Delete"
//                             />
//                             <span className="absolute -top-[20px] -left-[10px] bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
//                               Delete
//                             </span>
//                           </div>

//                           <button className="view-leads-btn bg-[#dc3545] h-[35px] w-[120px] mt-[10px] mr-[50px] rounded-[5px] text-[white] hover:bg-[#c82333] text-sm font-medium">
//                             View Leads
//                           </button>
//                         </div>
//                       </div>

//                       <div className="card-row flex items-center justify-between ml-[30px] mt-[15px] mb-[20px]">
//                         <div className="card-left-section flex items-center gap-[40px]">
//                           <div className="flex items-center gap-[10px]">
//                             <Mail className="w-[18px] h-[18px] mb-[10px] text-gray-500" />
//                             <a
//                               href={`mailto:${sp.email}`}
//                               className="text-[#007bff] mb-[10px] text-[16px] hover:underline"
//                             >
//                               {sp.email}
//                             </a>
//                           </div>
//                           <div className="flex items-center mb-[10px] gap-[10px]">
//                             <Phone className="w-[18px] h-[18px] text-gray-500" />
//                             <span className="text-[16px] text-gray-700">
//                               Contact Number:{" "}
//                               <span className="font-semibold">
//                                 {sp.contact}
//                               </span>
//                             </span>
//                           </div>
//                         </div>

//                         <div className="card-right-section flex items-center gap-3">
//                           <div
//                             className="relative group flex items-center cursor-pointer"
//                             onClick={() => handleOpenChangePassword(sp.id)}
//                           >
//                             <Key
//                               className="password-icon w-[20px] h-5 mr-[100px] mb-[10px] text-gray-600 hover:text-[#133b74] transition"
//                               title="Change Password"
//                             />
//                             <span className="absolute -bottom-[10px] right-[40px] bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
//                               Change Password
//                             </span>
//                           </div>

//                           <button
//                             className="change-email-btn bg-[#2b3342] h-[35px] w-[140px] mb-[10px] mr-[30px] rounded-[5px] text-[white] hover:bg-[#0f2f5a] text-sm font-medium"
//                             onClick={() => handleOpenChangeEmail(sp.id)}
//                           >
//                             Change Email ID
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <div className="text-center text-gray-500 text-[18px] font-medium mt-10">
//               No Salespersons Found
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// }

























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

//   return (
//     <div
//       className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[1000] p-5"
//       onClick={onClose}
//     >
//       <div
//         className="bg-white p-8 rounded-lg w-full max-w-md shadow-lg"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <h3 className="text-xl font-semibold mb-4 text-gray-900">Change Password</h3>
//         <form onSubmit={handleSubmit}>
//           {error && <p className="text-red-500 mb-3 text-sm">{error}</p>}

//           <label className="block mb-2 text-sm font-medium text-gray-700">New Password</label>
//           <input
//             type="password"
//             value={newPassword}
//             onChange={(e) => setNewPassword(e.target.value)}
//             className="w-full p-2.5 mb-4 border border-gray-300 rounded-md pl-5"
//             placeholder="Enter new password"
//             required
//             minLength="6"
//           />

//           <label className="block mb-2 text-sm font-medium text-gray-700">Confirm Password</label>
//           <input
//             type="password"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             className="w-full p-2.5 mb-4 border border-gray-300 rounded-md pl-5"
//             placeholder="Confirm password"
//             required
//           />

//           <div className="flex justify-end gap-3 mt-4">
//             <button
//               type="submit"
//               className="bg-[#00a7cf] hover:bg-[#0094b8] text-white px-4 py-2.5 rounded-md font-bold ml-5 transition-colors"
//             >
//               Update Password
//             </button>
//             <button
//               type="button"
//               onClick={onClose}
//               className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2.5 rounded-md font-bold ml-2.5 transition-colors"
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

//   return (
//     <div
//       className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[1000] p-5"
//       onClick={onClose}
//     >
//       <div
//         className="bg-white p-8 rounded-lg w-full max-w-md shadow-lg"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <h3 className="text-xl font-semibold mb-4 text-gray-900">Change Email ID</h3>
//         <form onSubmit={handleSubmit}>
//           {error && <p className="text-red-500 mb-3 text-sm">{error}</p>}

//           <label className="block mb-2 text-sm font-medium text-gray-700">New Email ID</label>
//           <input
//             type="email"
//             value={newEmail}
//             onChange={(e) => setNewEmail(e.target.value)}
//             className="w-full p-2.5 mb-4 border border-gray-300 rounded-md pl-5"
//             placeholder="Enter new email address"
//             required
//           />

//           <div className="flex justify-end gap-3 mt-4">
//             <button
//               type="submit"
//               className="bg-[#133b74] hover:bg-[#0f2f5a] text-white px-4 py-2.5 rounded-md font-bold ml-5 transition-colors"
//             >
//               Update Email
//             </button>
//             <button
//               type="button"
//               onClick={onClose}
//               className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2.5 rounded-md font-bold ml-2.5 transition-colors"
//             >
//               Cancel
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default function SalespersonList() {
//   const router = useRouter();
//   const [salespersons, setSalespersons] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [salespersonToChange, setSalespersonToChange] = useState(null);
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
//     <div className="bg-[#eef1f4] p-5 sm:p-3 min-h-[80vh] flex justify-center items-start font-['Segoe_UI',Tahoma,Geneva,Verdana,sans-serif]">
//       {isModalOpen && (
//         <NewPasswordModal
//           salespersonId={salespersonToChange}
//           onClose={handleCloseChangePassword}
//           onPasswordChange={handleChangePassword}
//         />
//       )}

//       {isEmailModalOpen && (
//         <ChangeEmailModal
//           salespersonId={salespersonToChangeEmail}
//           onClose={handleCloseChangeEmail}
//           onEmailChange={handleChangeEmail}
//         />
//       )}

//       <div className="p-1.5 rounded-[5px] h-auto w-full max-w-[1200px] xl:w-[95%] xl:max-w-[1100px]">
//         <div className="bg-white w-full px-4 py-4 sm:px-3 sm:py-3">
//           <div className="flex justify-between items-center lg:flex-col lg:items-start lg:gap-4 sm:flex-col sm:items-start sm:gap-3">
//             <h2 className="text-2xl ml-5 lg:ml-2.5 sm:ml-0 sm:text-xl font-semibold text-gray-900">
//               Salesperson <strong>List</strong>
//             </h2>
//             <button
//               onClick={() => router.push("/managesalesperson/add")}
//               className="bg-[#1f3853] hover:bg-[#111132] text-[white] mr-5 lg:mr-2.5 lg:w-full sm:mr-0 sm:w-full text-[18px] sm:text-base px-4 py-2 rounded-[5px] transition-colors"
//             >
//               Add Sales Person
//             </button>
//           </div>
//           <hr className="border-t border-black mt-2 mb-6" />
//         </div>

//         <div className="flex items-center ml-4 gap-2 mb-6 lg:flex-col lg:ml-0 lg:items-stretch sm:flex-col sm:ml-0 sm:items-stretch sm:gap-2">
//           <input
//             type="text"
//             placeholder="Search"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="w-[200px] ml-auto lg:ml-0 lg:w-full sm:ml-0 sm:w-full mr-2.5 lg:mr-0 sm:mr-0 h-9 mt-2.5 sm:mt-0 border border-gray-300 rounded-[5px] mb-10 lg:mb-2.5 sm:mb-2 px-3 py-2 text-[18px] sm:text-base focus:outline-none focus:ring-2 focus:ring-[#00a7cf] pl-5"
//           />
//           <button className="bg-[#0baad1] w-[70px] lg:w-full sm:w-full h-10 text-white mr-1 lg:mr-0 sm:mr-0 mb-10 lg:mb-0 sm:mb-0 mt-2.5 lg:mt-0 sm:mt-0 px-5 py-2 text-[18px] sm:text-base font-medium rounded-[5px] hover:bg-[#0094b8] transition-colors">
//             Search
//           </button>
//         </div>

//         {displayList.length > 0 ? (
//           <div className="w-full max-w-[1150px] lg:w-full lg:ml-0 sm:w-full sm:ml-0 ml-6 lg:ml-0 sm:ml-0 mt-[20px] sm:mt-2 grid grid-cols-1 gap-2.5">
//             {displayList.map((sp, index) => (
//               <div
//                 key={sp.id || index}
//                 className="flex items-center h-auto min-h-[200px] bg-[#ffffff] mt-[20px] sm:mt-3 hover:bg-[#f6f6f6] mb-2.5 justify-between bg-white border border-gray-200 rounded-[10px] p-4 sm:p-3 shadow-sm hover:shadow-md transition-all duration-200 lg:flex-col lg:items-start sm:flex-col sm:items-start"
//               >
//                 <div className="flex items-start gap-4 sm:gap-3 flex-1 w-full lg:flex-row sm:flex-col">
//                   <img
//                     src={sp.profileImage || "/default-avatar.png"}
//                     alt="Profile"
//                     className="w-[70px] h-[100px] ml-[10px] lg:ml-2.5 sm:ml-0 sm:w-[60px] sm:h-20 rounded-[10px] mt-5 sm:mt-2 border border-gray-300 object-cover"
//                   />
//                   <div className="flex-1 w-full lg:w-auto sm:w-full">
//                     <h3 className="text-xl ml-8 lg:ml-4 sm:ml-0 sm:text-lg mt-5 sm:mt-2 font-bold text-gray-800 leading-tight">
//                       {sp.username}
//                     </h3>

//                     <div className="flex items-center justify-between ml-8 lg:ml-4 sm:ml-0 lg:flex-col lg:items-start lg:gap-4 sm:flex-col sm:items-start sm:gap-3 mt-2.5">
//                       <div className="flex items-center ml-[10px] sm:ml-0 gap-10 lg:gap-4 sm:flex-col sm:gap-2 sm:items-start">
//                         <p className="text-gray-600 text-base sm:text-sm capitalize">
//                           {sp.firstname} {sp.lastname}
//                         </p>
//                         <div className="flex items-center gap-2.5 ml-[60px] lg:ml-0 sm:ml-0">
//                           <Briefcase className="w-[18px] h-[18px] text-gray-500" />
//                           <span className="text-base sm:text-sm text-gray-700">
//                             Designation: <span className="font-semibold">{sp.designation}</span>
//                           </span>
//                         </div>
//                       </div>

//                       <div className="flex items-center gap-3 sm:gap-2 lg:w-full lg:justify-start sm:w-full sm:justify-start sm:flex-wrap">
//                         <div
//                           className="relative group flex items-center cursor-pointer"
//                           onClick={() => handleDelete(sp.id)}
//                         >
//                           <Trash2
//                             className="w-5 h-5 mr-[120px] lg:mr-2.5 sm:mr-2 text-gray-600 hover:text-red-600 transition"
//                             title="Delete"
//                           />
//                           <span className="absolute bottom-[20] -left-[20] bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap pointer-events-none">
//                             Delete
//                           </span>
//                         </div>

//                         <button className="bg-[#dc3545] h-9 w-[120px] sm:w-auto sm:flex-1 sm:min-w-[100px] lg:w-auto lg:flex-1 mt-2.5 sm:mt-0 mr-[50px] lg:mr-0 sm:mr-0 rounded-[5px] text-[white] hover:bg-[#c82333] text-[15px] sm:text-sm font-medium transition-colors">
//                           View Leads
//                         </button>
//                       </div>
//                     </div>

//                     <div className="flex items-center justify-between ml-8 lg:ml-4 sm:ml-0 lg:flex-col lg:items-start lg:gap-4 sm:flex-col sm:items-start sm:gap-3 mt-4 mb-5 sm:mb-3">
//                       <div className="flex items-center gap-10 lg:gap-4 sm:flex-col sm:gap-2 ml-[10px] sm:ml-0 sm:items-start">
//                         <div className="flex items-center gap-2.5">
//                           <Mail className="w-[18px] h-[18px] mb-2.5 sm:mb-0 text-gray-500" />
//                           <a
//                             href={`mailto:${sp.email}`}
//                             className="text-[#007bff] mb-2.5 sm:mb-0 text-base sm:text-sm hover:underline break-all"
//                           >
//                             {sp.email}
//                           </a>
//                         </div>
//                         <div className="flex items-center mb-2.5 sm:mb-0 gap-2.5 ml-[10px] sm:ml-0">
//                           <Phone className="w-[18px] h-[18px] text-gray-500" />
//                           <span className="text-base sm:text-sm text-gray-700">
//                             Contact Number:{" "}
//                             <span className="font-semibold">
//                               {sp.contact}
//                             </span>
//                           </span>
//                         </div>
//                       </div>

//                       <div className="flex items-center gap-3 sm:gap-2 lg:w-full lg:justify-start sm:w-full sm:justify-start sm:flex-wrap">
//                         <div
//                           className="relative group flex items-center cursor-pointer"
//                           onClick={() => handleOpenChangePassword(sp.id)}
//                         >
//                           <Key
//                             className="w-5 h-5 mr-[120px] lg:mr-2.5 sm:mr-2 mb-2.5 sm:mb-0 ml-[40px] lg:ml-0 sm:ml-0 text-gray-600 hover:text-[#133b74] transition"
//                             title="Change Password"
//                           />
//                           <span className="absolute top-[20] -left-[50] bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap pointer-events-none">
//                             Change Password
//                           </span>
//                         </div>

//                         <button
//                           className="bg-[#2b3342] h-9 w-[140px] sm:w-auto sm:flex-1 sm:min-w-[120px] lg:w-auto lg:flex-1 mr-[30px] lg:mr-0 sm:mr-0 mb-2.5 sm:mb-0 rounded-[5px] text-[white] hover:bg-[#0f2f5a] text-[15px] sm:text-sm font-medium transition-colors"
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
//           <div className="text-center text-gray-500 text-lg sm:text-base font-medium mt-10 sm:mt-5">
//             No Salespersons Found
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }



















































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

//   return (
//     <div
//       className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[1000] p-4"
//       onClick={onClose}
//     >
//       <div
//         className="bg-white p-6 sm:p-8 rounded-lg w-full max-w-md shadow-lg"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <h3 className="text-lg sm:text-xl font-semibold mb-4 text-gray-900">Change Password</h3>
//         <form onSubmit={handleSubmit}>
//           {error && <p className="text-red-500 mb-3 text-sm">{error}</p>}

//           <label className="block mb-2 text-sm font-medium text-gray-700">New Password</label>
//           <input
//             type="password"
//             value={newPassword}
//             onChange={(e) => setNewPassword(e.target.value)}
//             className="w-full p-2.5 mb-4 border border-gray-300 rounded-md"
//             placeholder="Enter new password"
//             required
//             minLength="6"
//           />

//           <label className="block mb-2 text-sm font-medium text-gray-700">Confirm Password</label>
//           <input
//             type="password"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             className="w-full p-2.5 mb-4 border border-gray-300 rounded-md"
//             placeholder="Confirm password"
//             required
//           />

//           <div className="flex flex-col-reverse sm:flex-row justify-end gap-2 sm:gap-3 mt-4">
//             <button
//               type="button"
//               onClick={onClose}
//               className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2.5 rounded-md font-bold transition-colors w-full sm:w-auto"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="bg-[#00a7cf] hover:bg-[#0094b8] text-white px-4 py-2.5 rounded-md font-bold transition-colors w-full sm:w-auto"
//             >
//               Update Password
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

//   return (
//     <div
//       className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[1000] p-4"
//       onClick={onClose}
//     >
//       <div
//         className="bg-white p-6 sm:p-8 rounded-lg w-full max-w-md shadow-lg"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <h3 className="text-lg sm:text-xl font-semibold mb-4 text-gray-900">Change Email ID</h3>
//         <form onSubmit={handleSubmit}>
//           {error && <p className="text-red-500 mb-3 text-sm">{error}</p>}

//           <label className="block mb-2 text-sm font-medium text-gray-700">New Email ID</label>
//           <input
//             type="email"
//             value={newEmail}
//             onChange={(e) => setNewEmail(e.target.value)}
//             className="w-full p-2.5 mb-4 border border-gray-300 rounded-md"
//             placeholder="Enter new email address"
//             required
//           />

//           <div className="flex flex-col-reverse sm:flex-row justify-end gap-2 sm:gap-3 mt-4">
//             <button
//               type="button"
//               onClick={onClose}
//               className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2.5 rounded-md font-bold transition-colors w-full sm:w-auto"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="bg-[#133b74] hover:bg-[#0f2f5a] text-white px-4 py-2.5 rounded-md font-bold transition-colors w-full sm:w-auto"
//             >
//               Update Email
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default function SalespersonList() {
//   const router = useRouter();
//   const [salespersons, setSalespersons] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [salespersonToChange, setSalespersonToChange] = useState(null);
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
//     <div className="bg-[#eef1f4] p-3 sm:p-5 min-h-screen flex justify-center items-start font-['Segoe_UI',Tahoma,Geneva,Verdana,sans-serif]">
//       {isModalOpen && (
//         <NewPasswordModal
//           salespersonId={salespersonToChange}
//           onClose={handleCloseChangePassword}
//           onPasswordChange={handleChangePassword}
//         />
//       )}

//       {isEmailModalOpen && (
//         <ChangeEmailModal
//           salespersonId={salespersonToChangeEmail}
//           onClose={handleCloseChangeEmail}
//           onEmailChange={handleChangeEmail}
//         />
//       )}

//       <div className="w-full max-w-[1200px] rounded-md">
//         {/* Header Section */}
//         <div className="bg-white w-full px-4 py-4 rounded-t-md">
//           <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4">
//             <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
//               Salesperson <strong>List</strong>
//             </h2>
//             <button
//               onClick={() => router.push("/managesalesperson/add")}
//               className="bg-[#1f3853] hover:bg-[#111132] text-white w-full sm:w-auto text-base sm:text-lg px-4 py-2 rounded-md transition-colors whitespace-nowrap"
//             >
//               Add Sales Person
//             </button>
//           </div>
//           <hr className="border-t border-black mt-3 mb-2" />
//         </div>

//         {/* Search Section */}
//         <div className="bg-white px-4 pb-4">
//           <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3">
//             <input
//               type="text"
//               placeholder="Search"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="flex-1 sm:flex-initial sm:w-[250px] sm:ml-auto h-10 border border-gray-300 rounded-md px-3 text-base focus:outline-none focus:ring-2 focus:ring-[#00a7cf]"
//             />
//             <button className="bg-[#0baad1] hover:bg-[#0094b8] w-full sm:w-auto h-10 text-white px-6 text-base font-medium rounded-md transition-colors">
//               Search
//             </button>
//           </div>
//         </div>

//         {/* List Section */}
//         <div className="mt-4">
//           {displayList.length > 0 ? (
//             <div className="space-y-4">
//               {displayList.map((sp, index) => (
//                 <div
//                   key={sp.id || index}
//                   className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md hover:bg-[#f6f6f6] transition-all duration-200"
//                 >
//                   {/* Card Content */}
//                   <div className="flex flex-col sm:flex-row gap-4">
//                     {/* Profile Image */}
//                     <div className="flex-shrink-0">
//                       <img
//                         src={sp.profileImage || "/default-avatar.png"}
//                         alt="Profile"
//                         className="w-20 h-24 sm:w-[70px] sm:h-[100px] rounded-lg border border-gray-300 object-cover"
//                       />
//                     </div>

//                     {/* Main Content */}
//                     <div className="flex-1 min-w-0">
//                       {/* Name */}
//                       <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 break-words">
//                         {sp.username}
//                       </h3>

//                       {/* First Row: Full Name, Designation, Actions */}
//                       <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-3 mb-3">
//                         <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
//                           <p className="text-gray-600 text-sm sm:text-base capitalize">
//                             {sp.firstname} {sp.lastname}
//                           </p>
//                           <div className="flex items-center gap-2">
//                             <Briefcase className="w-4 h-4 text-gray-500 flex-shrink-0" />
//                             <span className="text-sm sm:text-base text-gray-700">
//                               Designation: <span className="font-semibold">{sp.designation}</span>
//                             </span>
//                           </div>
//                         </div>

//                         <div className="flex items-center gap-3">
//                           <div
//                             className="relative group cursor-pointer"
//                             onClick={() => handleDelete(sp.id)}
//                           >
//                             <Trash2
//                               className="w-5 h-5 text-gray-600 hover:text-red-600 transition"
//                               title="Delete"
//                             />
//                             <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap pointer-events-none">
//                               Delete
//                             </span>
//                           </div>

//                           <button className="bg-[#dc3545] hover:bg-[#c82333] h-9 px-4 rounded-md text-white text-sm font-medium transition-colors whitespace-nowrap">
//                             View Leads
//                           </button>
//                         </div>
//                       </div>

//                       {/* Second Row: Email, Contact, Actions */}
//                       <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-3">
//                         <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
//                           <div className="flex items-center gap-2">
//                             <Mail className="w-4 h-4 text-gray-500 flex-shrink-0" />
//                             <a
//                               href={`mailto:${sp.email}`}
//                               className="text-[#007bff] text-sm sm:text-base hover:underline break-all"
//                             >
//                               {sp.email}
//                             </a>
//                           </div>
//                           <div className="flex items-center gap-2">
//                             <Phone className="w-4 h-4 text-gray-500 flex-shrink-0" />
//                             <span className="text-sm sm:text-base text-gray-700">
//                               Contact Number:{" "}
//                               <span className="font-semibold">{sp.contact}</span>
//                             </span>
//                           </div>
//                         </div>

//                         <div className="flex items-center gap-3">
//                           <div
//                             className="relative group cursor-pointer"
//                             onClick={() => handleOpenChangePassword(sp.id)}
//                           >
//                             <Key
//                               className="w-5 h-5 text-gray-600 hover:text-[#133b74] transition"
//                               title="Change Password"
//                             />
//                             <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap pointer-events-none">
//                               Change Password
//                             </span>
//                           </div>

//                           <button
//                             className="bg-[#2b3342] hover:bg-[#0f2f5a] h-9 px-4 rounded-md text-white text-sm font-medium transition-colors whitespace-nowrap"
//                             onClick={() => handleOpenChangeEmail(sp.id)}
//                           >
//                             Change Email ID
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <div className="text-center text-gray-500 text-base sm:text-lg font-medium py-10 bg-white rounded-lg">
//               No Salespersons Found
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }






































































































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

//   return (
//     <div
//       className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[1000] p-5"
//       onClick={onClose}
//     >
//       <div
//         className="bg-white p-[30px] rounded-[10px] w-full max-w-[400px] shadow-lg"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <h3 className="text-xl font-semibold mb-4 text-gray-900">Change Password</h3>
//         <form onSubmit={handleSubmit}>
//           {error && <p className="text-red-500 mb-3 text-sm">{error}</p>}

//           <label className="block mb-[10px] text-sm font-medium text-gray-700">New Password</label>
//           <input
//             type="password"
//             value={newPassword}
//             onChange={(e) => setNewPassword(e.target.value)}
//             className="w-full p-[10px] mb-[15px] border border-gray-300 rounded-[5px] pl-[10px]"
//             placeholder="Enter new password"
//             required
//             minLength="6"
//           />

//           <label className="block mb-[10px] text-sm font-medium text-gray-700">Confirm Password</label>
//           <input
//             type="password"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             className="w-full p-[10px] mb-[15px] border border-gray-300 rounded-[5px] pl-[10px]"
//             placeholder="Confirm password"
//             required
//           />

//           <div className="flex justify-end gap-3 mt-4">
//             <button
//               type="submit"
//               className="bg-[#00a7cf] hover:bg-[#0094b8] text-white px-[15px] py-[10px] rounded-[5px] font-bold ml-[20px] transition-colors"
//             >
//               Update Password
//             </button>
//             <button
//               type="button"
//               onClick={onClose}
//               className="bg-[#f0f0f0] hover:bg-gray-200 text-[#333] px-[15px] py-[10px] rounded-[5px] font-bold ml-[10px] transition-colors"
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

//   return (
//     <div
//       className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[1000] p-5"
//       onClick={onClose}
//     >
//       <div
//         className="bg-white p-[30px] rounded-[10px] w-full max-w-[400px] shadow-lg"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <h3 className="text-xl font-semibold mb-4 text-gray-900">Change Email ID</h3>
//         <form onSubmit={handleSubmit}>
//           {error && <p className="text-red-500 mb-3 text-sm">{error}</p>}

//           <label className="block mb-[10px] text-sm font-medium text-gray-700">New Email ID</label>
//           <input
//             type="email"
//             value={newEmail}
//             onChange={(e) => setNewEmail(e.target.value)}
//             className="w-full p-[10px] mb-[15px] border border-gray-300 rounded-[5px] pl-[10px]"
//             placeholder="Enter new email address"
//             required
//           />

//           <div className="flex justify-end gap-3 mt-4">
//             <button
//               type="submit"
//               className="bg-[#133b74] hover:bg-[#0f2f5a] text-white px-[15px] py-[10px] rounded-[5px] font-bold ml-[20px] transition-colors"
//             >
//               Update Email
//             </button>
//             <button
//               type="button"
//               onClick={onClose}
//               className="bg-[#f0f0f0] hover:bg-gray-200 text-[#333] px-[15px] py-[10px] rounded-[5px] font-bold ml-[10px] transition-colors"
//             >
//               Cancel
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default function SalespersonList() {
//   const router = useRouter();
//   const [salespersons, setSalespersons] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [salespersonToChange, setSalespersonToChange] = useState(null);
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
//     <div className="bg-[#eef1f4] p-5 min-h-[80vh] flex justify-center items-start font-['Segoe_UI',Tahoma,Geneva,Verdana,sans-serif]">
//       {isModalOpen && (
//         <NewPasswordModal
//           salespersonId={salespersonToChange}
//           onClose={handleCloseChangePassword}
//           onPasswordChange={handleChangePassword}
//         />
//       )}

//       {isEmailModalOpen && (
//         <ChangeEmailModal
//           salespersonId={salespersonToChangeEmail}
//           onClose={handleCloseChangeEmail}
//           onEmailChange={handleChangeEmail}
//         />
//       )}

//       <div className="p-[6px] bg-white rounded-[5px] w-full max-w-[1200px] xl:w-[95%] xl:max-w-[1100px]">
//         {/* Header Section */}
//         <div className="bg-white w-full px-4 py-4">
//           <div className="flex justify-between items-center lg:flex-col lg:items-start lg:gap-[15px]">
//             <h2 className="text-2xl ml-5 lg:ml-[10px] font-semibold text-gray-900">
//               Salesperson <strong>List</strong>
//             </h2>
//             <button
//               onClick={() => router.push("/managesalesperson/add")}
//               className="bg-[#1f3853] hover:bg-[#111132] text-[white] mr-5 lg:mr-[10px] lg:w-full text-[18px] px-4 py-2 rounded-[6px] transition-colors"
//             >
//               Add Sales Person
//             </button>
//           </div>
//           <hr className="border-t border-black mt-2 mb-6" />
//         </div>

//         {/* Search Section */}
//         <div className="flex items-center ml-[15px] gap-2 mb-6 lg:flex-col lg:ml-0 lg:items-stretch">
//           <input
//             type="text"
//             placeholder="Search"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="w-[200px] ml-auto lg:ml-0 lg:w-full lg:max-w-[390px] mr-[10px] lg:mr-0 h-[35px] mt-[10px] lg:mt-0 border border-gray-300 rounded-[5px] mb-10 lg:mb-[10px] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00a7cf] pl-[10px]"
//           />
//           <button className="bg-[#0baad1] w-[100px] h-[40px] lg:w-full lg:max-w-[395px] h-10 text-white mr-1 lg:mr-0 mb-10 lg:mb-0 mt-[10px] lg:mt-[1px] px-5 py-2 text-sm font-medium rounded-[5px] hover:bg-[#0094b8] transition-colors">
//             Search
//           </button>
//         </div>

//         {/* Cards List */}
//         {displayList.length > 0 ? (
//             <div className="card-list w-[1150px] ml-[25px] grid grid-cols-1 gap-[10px]">
//               {displayList.map((sp, index) => (
//                 <div
//                  key={sp.id || index}
//                   className="salesperson-card flex items-center mt-[20px] bg:[#ffffff] hover:bg-[#f6f6f6] mb-[10px] justify-between bg-[white] border border-gray-200 rounded-[10px] p-4 shadow-sm hover:shadow-md transition-all duration-200"
//                  >
//                 <div className="flex items-start gap-4 flex-1 w-full">
//                   <img
//                     src={sp.profileImage || "/default-avatar.png"}
//                     alt="Profile"
//                     className="w-[70px] h-[100px] ml-5 ml-[20px] mt-[20px] md:ml-[10px] rounded-[10px] mt-5 border border-gray-300 object-cover"
//                   />
//                   <div className="flex-1 w-full md:w-auto">
//                     <h3 className="text-xl ml-[30px] md:ml-[15px] mt-5 font-bold text-gray-800 leading-tight">
//                       {sp.username}
//                     </h3>

//                     {/* First Row */}
//                     <div className="flex items-center justify-between ml-[30px] md:ml-[15px] mt-[10px] md:flex-col md:items-start md:gap-[15px]">
//                       <div className="flex items-center gap-10 md:flex-col md:gap-[10px] md:items-start">
//                         <p className="text-gray-600 text-base capitalize">
//                           {sp.firstname} {sp.lastname}
//                         </p>
//                         <div className="flex items-center gap-[10px] ml-[60px] md:ml-0">
//                           <Briefcase className="w-[18px] h-[18px] text-gray-500" />
//                           <span className="text-base text-gray-700">
//                             Designation: <span className="font-semibold">{sp.designation}</span>
//                           </span>
//                         </div>
//                       </div>

//                       <div className="flex items-center gap-3 md:w-full md:justify-start md:gap-[10px]">
//                         <div
//                           className="relative group flex items-center cursor-pointer"
//                           onClick={() => handleDelete(sp.id)}
//                         >
//                           <Trash2
//                             className="w-5 h-5 mr-[100px] md:mr-[10px] text-gray-600 hover:text-red-600 transition"
//                             title="Delete"
//                           />
//                           <span className="absolute -top-5 -left-[10px] bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap pointer-events-none">
//                             Delete
//                           </span>
//                         </div>

//                         <button className="bg-[#dc3545] h-[35px] w-[120px] md:w-full md:mr-[10px] mt-[10px] md:mt-0 mr-[50px] md:mr-[10px] rounded-[5px] text-white hover:bg-[#c82333] text-sm font-medium transition-colors">
//                           View Leads
//                         </button>
//                       </div>
//                     </div>

//                     {/* Second Row */}
//                     <div className="flex items-center justify-between ml-[30px] md:ml-[15px] mt-[15px] mb-5 md:flex-col md:items-start md:gap-[15px]">
//                       <div className="flex items-center gap-10 md:flex-col md:gap-[10px] md:items-start">
//                         <div className="flex items-center gap-[10px]">
//                           <Mail className="w-[18px] h-[18px] mb-[10px] md:mb-0 text-gray-500" />
//                           <a
//                             href={`mailto:${sp.email}`}
//                             className="text-[#007bff] mb-[10px] md:mb-0 text-base hover:underline break-all"
//                           >
//                             {sp.email}
//                           </a>
//                         </div>
//                         <div className="flex items-center mb-[10px] md:mb-0 gap-[10px]">
//                           <Phone className="w-[18px] h-[18px] text-gray-500" />
//                           <span className="text-base text-gray-700">
//                             Contact Number:{" "}
//                             <span className="font-semibold">
//                               {sp.contact}
//                             </span>
//                           </span>
//                         </div>
//                       </div>

//                       <div className="flex items-center gap-3 md:w-full md:justify-start md:gap-[10px]">
//                         <div
//                           className="relative group flex items-center cursor-pointer"
//                           onClick={() => handleOpenChangePassword(sp.id)}
//                         >
//                           <Key
//                             className="w-5 h-5 mr-[100px] md:mr-[10px] mb-[10px] md:mb-0 text-gray-600 hover:text-[#133b74] transition"
//                             title="Change Password"
//                           />
//                           <span className="absolute -bottom-[10px] right-10 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap pointer-events-none">
//                             Change Password
//                           </span>
//                         </div>

//                         <button
//                           className="bg-[#2b3342] h-[35px] w-[140px] md:w-full md:mr-[10px] mb-[10px] md:mb-0 mr-[30px] md:mr-[10px] rounded-[5px] text-[white] hover:bg-[#0f2f5a] text-sm font-medium transition-colors"
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
//           <div className="text-center text-gray-500 text-lg font-medium mt-10">
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

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[1000] p-5"
      onClick={onClose}
    >
      <div
        className="bg-[white] mt-[120px] border border-gray-300 p-[30px] rounded-[10px] w-[400px] max-w-[400px] shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-xl font-semibold mb-4 text-gray-900">Change Password</h3>
        <form onSubmit={handleSubmit}>
          {error && <p className="text-red-500 mb-3 text-sm">{error}</p>}

          <label className="block mb-[10px] text-sm font-medium text-gray-700">New Password</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full p-[10px] mb-[15px] border border-gray-300 rounded-[5px] pl-[10px]"
            placeholder="Enter new password"
            required
            minLength="6"
          />

          <label className="block mb-[10px] text-sm font-medium text-gray-700">Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full p-[10px] mb-[15px] border border-gray-300 rounded-[5px] pl-[10px]"
            placeholder="Confirm password"
            required
          />

          <div className="flex justify-end gap-3 mt-4">
            <button
              type="submit"
              className="bg-[#00a7cf] hover:bg-[#0094b8] text-white px-[15px] py-[10px] rounded-[5px] font-bold ml-[20px] transition-colors"
            >
              Update Password
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-[#f0f0f0] hover:bg-gray-200 text-[#333] px-[15px] py-[10px] rounded-[5px] font-bold ml-[10px] transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

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

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[1000] p-5"
      onClick={onClose}
    >
      <div
        className="bg-[white] mt-[120px] p-[70px] border border-gray-200 rounded-[10px] w-[300px] max-w-[400px] shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-xl font-semibold mb-4 text-gray-900">Change Email ID</h3>
        <form onSubmit={handleSubmit}>
          {error && <p className="text-red-500 mb-3 text-sm">{error}</p>}

          <label className="block mb-[10px] text-sm font-medium text-gray-700">New Email ID</label>
          <input
            type="email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
            className="w-full p-[10px] mb-[15px] border border-gray-300 rounded-[5px] pl-[10px]"
            placeholder="Enter new email address"
            required
          />

          <div className="flex justify-end gap-3 mt-4">
            <button
              type="submit"
              className="bg-[#133b74] hover:bg-[#0f2f5a] text-white px-[15px] py-[10px] rounded-[5px] font-bold ml-[20px] transition-colors"
            >
              Update Email
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-[#f0f0f0] hover:bg-gray-200 text-[#333] px-[15px] py-[10px] rounded-[5px] font-bold ml-[10px] transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default function SalespersonList() {
  const router = useRouter();
  const [salespersons, setSalespersons] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [salespersonToChange, setSalespersonToChange] = useState(null);
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [salespersonToChangeEmail, setSalespersonToChangeEmail] = useState(null);

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
    await new Promise(resolve => setTimeout(resolve, 500));

    try {
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
    <div className="bg-[#eef1f4] p-5 min-h-[80vh] flex justify-center items-start font-['Segoe_UI',Tahoma,Geneva,Verdana,sans-serif]">
      {isModalOpen && (
        <NewPasswordModal
          salespersonId={salespersonToChange}
          onClose={handleCloseChangePassword}
          onPasswordChange={handleChangePassword}
        />
      )}

      {isEmailModalOpen && (
        <ChangeEmailModal
          salespersonId={salespersonToChangeEmail}
          onClose={handleCloseChangeEmail}
          onEmailChange={handleChangeEmail}
        />
      )}

      <div className="p-[6px] bg-[white] mt-[20px] h-[900px] rounded-[5px] w-full max-w-[1200px] xl:w-[95%] xl:max-w-[1100px]">
        {/* Header Section */}
        <div className="bg-white w-full px-4 py-4">
          <div className="flex justify-between items-center flex-wrap gap-4">
            <h2 className="text-2xl ml-5 font-semibold text-gray-900 max-[768px]:ml-0 max-[768px]:text-xl">
              Salesperson <strong>List</strong>
            </h2>
            <button
              onClick={() => router.push("/managesalesperson/add")}
              className="bg-[#1f3853] hover:bg-[#111132] text-[white] mr-[20px] text-[20px] px-4 py-2 rounded-[6px] transition-colors max-[768px]:mr-0 max-[768px]:w-[430px] max-[768px]:text-base"
            >
              Add Sales Person
            </button>
          </div>
          <hr className="border-t border-black mt-2 mb-6" />
        </div>

        {/* Search Section */}
        <div className="flex items-center ml-[10px] gap-2 mb-6 max-[768px]:flex-col max-[768px]:ml-0 max-[768px]:px-4">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-[200px] ml-auto mr-[30px] h-[35px] mt-[10px] border border-gray-300 rounded-[5px] mb-10 px-3 py-2 text-[18px] focus:outline-none focus:ring-2 focus:ring-[#00a7cf] max-[768px]:w-full max-[768px]:ml-0 max-[768px]:mr-0 max-[768px]:mt-0 max-[768px]:mb-0 max-[768px]:text-base"
          />
          <button className="bg-[#0baad1] w-[100px] h-[40px] text-[white] mr-1 mb-10 mt-[10px] px-5 py-2 text-[18px] font-medium rounded-[5px] hover:bg-[#0094b8] transition-colors max-[768px]:w-full max-[768px]:mr-0 max-[768px]:mb-0 max-[768px]:mt-0 max-[768px]:text-base">
            Search
          </button>
        </div>

        {/* Cards List */}
        {displayList.length > 0 ? (
          <div className="w-[1150px] mr-[25px] grid grid-cols-1 gap-[10px] max-[1280px]:w-full max-[1280px]:ml-0 max-[1280px]:px-4">
            {displayList.map((sp, index) => (
              <div
                key={sp.id || index}
                className="flex items-center mt-[20px] bg-[white] ml-[20px] hover:bg-[#f6f6f6] mb-[10px] justify-between border border-gray-200 rounded-[10px] p-4 shadow-sm hover:shadow-md transition-all duration-200 max-[768px]:flex-col max-[768px]:items-start max-[768px]:mt-3"
              >
                <div className="flex items-start gap-4 flex-1 w-full max-[768px]:flex-col">
                  <img
                    src={sp.profileImage || "/default-avatar.png"}
                    alt="Profile"
                    className="w-[70px] h-[100px] ml-[10px] mt-[10px] rounded-[10px] mt-5 border border-gray-300 object-cover max-[768px]:ml-0 max-[768px]:mt-0 max-[768px]:w-[60px] max-[768px]:h-[80px]"
                  />
                  <div className="flex-1 w-full">
                    <h3 className="text-xl ml-[30px] mt-5 font-bold text-gray-800 leading-tight max-[768px]:ml-0 max-[768px]:mt-2 max-[768px]:text-lg">
                      {sp.username}
                    </h3>

                    {/* First Row */}
                    <div className="flex items-center justify-between ml-[30px] mt-[10px] max-[768px]:flex-col max-[768px]:items-start max-[768px]:ml-0 max-[768px]:gap-3">
                     <div className="flex items-center gap-10 max-[768px]:flex-col max-[768px]:items-start max-[768px]:gap-2">
                       <p className="text-gray-600 text-base capitalize max-w-[200px] truncate max-[768px]:text-sm max-[768px]:max-w-full">
                        {sp.firstname} {sp.lastname}
                       </p>
                     <div className="flex items-center gap-[10px] ml-[110px] max-[768px]:ml-0">
                      <Briefcase className="w-[18px] h-[18px] text-gray-500 flex-shrink-0" />
                      <span className="text-base text-gray-700 ml-[5px] max-[768px]:text-sm max-[768px]:mr-0">
                         Designation: <span className="font-semibold max-w-[150px] inline-block truncate align-bottom">{sp.designation}</span>
                      </span>
                    </div>
                   </div>
                   <div className="flex items-center gap-3 max-[768px]:flex-col max-[768px]:w-full max-[768px]:mt-2">
                   <div
                     className="relative group flex items-center cursor-pointer"
                     onClick={() => handleDelete(sp.id)}
                   >
                  <Trash2
                    className="w-5 h-5 mr-[100px] text-gray-600 hover:text-red-600 transition max-[768px]:mr-0"
                    title="Delete"
                  />
                  <span className="absolute -top-[20px] -left-[10px] bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap pointer-events-none max-[768px]:left-1/2 max-[768px]:-translate-x-1/2">
                   Delete
               </span>
                </div>

                    <button className="bg-[#dc3545] h-[35px] w-[120px] mt-[10px] mr-[50px] rounded-[5px] text-[white] hover:bg-[#c82333] text-[15px] font-medium transition-colors max-[768px]:w-full max-[768px]:mt-0 max-[768px]:mr-0 max-[768px]:text-sm">
                    View Leads
                      </button>
                    </div>
                    </div> 
                    
                    {/* Second Row */}
                    <div className="flex items-center justify-between ml-[30px] mt-[15px] mb-5 max-[768px]:flex-col max-[768px]:items-start max-[768px]:ml-0 max-[768px]:gap-3 max-[768px]:mb-3">
                      <div className="flex items-center gap-10 max-[768px]:flex-col max-[768px]:items-start max-[768px]:gap-2 max-[768px]:w-full">
                       <div className="flex items-center gap-[10px]">
                       <Mail className="w-[18px] h-[18px] mb-[10px] text-gray-500 flex-shrink-0 max-[768px]:mb-0" />
                          <a
                            href={`mailto:${sp.email}`}
                            className="text-[#007bff] mb-[10px] text-base hover:underline break-all max-w-[250px] max-[768px]:mb-0 max-[768px]:text-sm max-[768px]:max-w-full"
                          >
                            {sp.email}
                          </a>
                        </div>
                       <div className="flex items-center mb-[10px] ml-[60px] gap-[10px] max-[768px]:mb-0 max-[768px]:ml-0 max-[768px]:w-full">
                      <Phone className="w-[18px] h-[18px] text-gray-500 flex-shrink-0" />
                    <span className="text-base text-gray-700 max-[768px]:text-sm">
                   Contact Number:{" "}
                  <span className="font-semibold max-w-[150px] inline-block truncate align-bottom">
                   {sp.contact}
                   </span>
                 </span>
              </div>
            </div>

  <div className="flex items-center gap-3 max-[768px]:flex-col max-[768px]:w-full max-[768px]:mt-2">
    <div
      className="relative group flex items-center cursor-pointer"
      onClick={() => handleOpenChangePassword(sp.id)}
    >
      <Key
        className="w-5 h-5 mr-[100px] mb-[10px] text-gray-600 hover:text-[#133b74] transition max-[768px]:mr-0 max-[768px]:mb-0"
        title="Change Password"
      />
      <span className="absolute -top-[20px] right-[40px] bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap pointer-events-none max-[768px]:top-[-30px] max-[768px]:bottom-auto max-[768px]:left-1/2 max-[768px]:-translate-x-1/2 max-[768px]:right-auto">
        Change Password
      </span>
    </div>

    <button
      className="bg-[#2b3342] h-[35px] w-[140px] mb-[10px] mr-[30px] rounded-[5px] text-[white] hover:bg-[#0f2f5a] text-[15px] font-medium transition-colors max-[768px]:w-full max-[768px]:mb-0 max-[768px]:mr-0 max-[768px]:text-sm"
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
          <div className="text-center text-gray-500 text-lg font-medium mt-10 max-[768px]:text-base max-[768px]:mt-5 max-[768px]:px-4">
            No Salespersons Found
          </div>
        )}
      </div>
    </div>
  );
}




























































// import React from 'react';
// import { Mail, Phone, Briefcase, Trash2, Edit } from 'lucide-react';

// const SalesmanCard = () => {
//   const salesmen = [
//     {
//       id: 1,
//       image: 'https://via.placeholder.com/60',
//       name: 'suku',
//       fullName: 'suku chauhan',
//       email: 'chauhanpratik9191613@gmail.com',
//       designation: 'sw',
//       contact: '123654789'
//     },
//     {
//       id: 2,
//       image: 'https://via.placeholder.com/60',
//       name: 'Test',
//       fullName: 'Test Testing',
//       email: 'testangel00@gmail.com',
//       designation: 'Sales Associate',
//       contact: '7845125471'
//     },
//     {
//       id: 3,
//       image: 'https://via.placeholder.com/60',
//       name: 'Tester_salesman',
//       fullName: 'Tester Saleman',
//       email: 'testofyyy@gmail.com',
//       designation: 'Sales Associate',
//       contact: '1234567890'
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-[#f9fafb] p-4 md:p-6">
//       <div className="max-w-[1400px] mx-auto space-y-0">
//         {salesmen.map((person, index) => (
//           <div
//             key={person.id}
//             className={`bg-white border-l border-r border-b ${index === 0 ? 'border-t' : ''} border-gray-200 px-6 py-6`}
//           >
//             {/* Desktop Layout - Grid with exact spacing */}
//             <div className="hidden lg:grid lg:grid-cols-[280px_1fr_auto] lg:gap-8 lg:items-start">
//               {/* Left Section - Image and Name */}
//               <div className="flex items-center gap-4">
//                 <img
//                   src={person.image}
//                   alt={person.name}
//                   className="w-[60px] h-[60px] rounded-full object-cover flex-shrink-0"
//                 />
//                 <div>
//                   <h3 className="text-[20px] font-normal text-black mb-1">{person.name}</h3>
//                   <p className="text-[16px] text-[#6b7280]">{person.fullName}</p>
//                 </div>
//               </div>

//               {/* Middle Section - Email, Designation, Contact */}
//               <div className="grid grid-cols-2 gap-x-8 gap-y-4">
//                 {/* Email */}
//                 <div className="flex items-center gap-2">
//                   <Mail size={18} className="text-[#3b82f6] flex-shrink-0" />
//                   <a href={`mailto:${person.email}`} className="text-[#3b82f6] text-[15px] hover:underline">
//                     {person.email}
//                   </a>
//                 </div>

//                 {/* Designation */}
//                 <div className="flex items-center gap-2">
//                   <Briefcase size={18} className="text-[#6b7280] flex-shrink-0" />
//                   <span className="text-[#6b7280] text-[15px]">
//                     Designation : <span className="text-[#374151] font-medium">{person.designation}</span>
//                   </span>
//                 </div>

//                 {/* Empty cell for alignment */}
//                 <div></div>

//                 {/* Contact Number */}
//                 <div className="flex items-center gap-2">
//                   <Phone size={18} className="text-[#6b7280] flex-shrink-0" />
//                   <span className="text-[#6b7280] text-[15px]">
//                     Contact Number : <span className="text-[#374151] font-medium">{person.contact}</span>
//                   </span>
//                 </div>
//               </div>

//               {/* Right Section - Action Icons and Buttons */}
//               <div className="flex items-center gap-4">
//                 <button className="text-[#9ca3af] hover:text-[#ef4444] transition-colors">
//                   <Trash2 size={22} />
//                 </button>
//                 <button className="text-[#9ca3af] hover:text-[#3b82f6] transition-colors">
//                   <Edit size={22} />
//                 </button>
//                 <button className="bg-[#ef4444] text-white px-6 py-2.5 rounded text-[15px] hover:bg-[#dc2626] transition-colors whitespace-nowrap">
//                   View Leads
//                 </button>
//                 <button className="bg-[#1e3a5f] text-white px-5 py-2.5 rounded text-[15px] hover:bg-[#152a45] transition-colors whitespace-nowrap">
//                   Change Email ID
//                 </button>
//               </div>
//             </div>

//             {/* Tablet Layout (768px - 1023px) */}
//             <div className="hidden md:block lg:hidden">
//               <div className="space-y-4">
//                 {/* Top Row - Image, Name, and Icons */}
//                 <div className="flex items-start justify-between">
//                   <div className="flex items-center gap-4 flex-1">
//                     <img
//                       src={person.image}
//                       alt={person.name}
//                       className="w-[60px] h-[60px] rounded-full object-cover flex-shrink-0"
//                     />
//                     <div>
//                       <h3 className="text-[20px] font-normal text-black mb-1">{person.name}</h3>
//                       <p className="text-[16px] text-[#6b7280]">{person.fullName}</p>
//                     </div>
//                   </div>
//                   <div className="flex items-center gap-3">
//                     <button className="text-[#9ca3af] hover:text-[#ef4444] transition-colors">
//                       <Trash2 size={22} />
//                     </button>
//                     <button className="text-[#9ca3af] hover:text-[#3b82f6] transition-colors">
//                       <Edit size={22} />
//                     </button>
//                   </div>
//                 </div>

//                 {/* Contact Info Grid */}
//                 <div className="grid grid-cols-1 gap-3 pl-[76px]">
//                   <div className="flex items-center gap-2">
//                     <Mail size={18} className="text-[#3b82f6] flex-shrink-0" />
//                     <a href={`mailto:${person.email}`} className="text-[#3b82f6] text-[15px] hover:underline">
//                       {person.email}
//                     </a>
//                   </div>
                  
//                   <div className="flex items-center gap-2">
//                     <Briefcase size={18} className="text-[#6b7280] flex-shrink-0" />
//                     <span className="text-[#6b7280] text-[15px]">
//                       Designation : <span className="text-[#374151] font-medium">{person.designation}</span>
//                     </span>
//                   </div>
                  
//                   <div className="flex items-center gap-2">
//                     <Phone size={18} className="text-[#6b7280] flex-shrink-0" />
//                     <span className="text-[#6b7280] text-[15px]">
//                       Contact Number : <span className="text-[#374151] font-medium">{person.contact}</span>
//                     </span>
//                   </div>
//                 </div>

//                 {/* Buttons */}
//                 <div className="flex gap-3 pl-[76px]">
//                   <button className="bg-[#ef4444] text-white px-6 py-2.5 rounded text-[15px] hover:bg-[#dc2626] transition-colors">
//                     View Leads
//                   </button>
//                   <button className="bg-[#1e3a5f] text-white px-5 py-2.5 rounded text-[15px] hover:bg-[#152a45] transition-colors">
//                     Change Email ID
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* Mobile Layout (<768px) */}
//             <div className="block md:hidden">
//               <div className="space-y-4">
//                 {/* Profile Section */}
//                 <div className="flex items-start gap-3">
//                   <img
//                     src={person.image}
//                     alt={person.name}
//                     className="w-[50px] h-[50px] rounded-full object-cover flex-shrink-0"
//                   />
//                   <div className="flex-1 min-w-0">
//                     <h3 className="text-[18px] font-normal text-black mb-0.5">{person.name}</h3>
//                     <p className="text-[14px] text-[#6b7280]">{person.fullName}</p>
//                   </div>
//                   <div className="flex gap-2">
//                     <button className="text-[#9ca3af] hover:text-[#ef4444] transition-colors">
//                       <Trash2 size={20} />
//                     </button>
//                     <button className="text-[#9ca3af] hover:text-[#3b82f6] transition-colors">
//                       <Edit size={20} />
//                     </button>
//                   </div>
//                 </div>

//                 {/* Contact Info */}
//                 <div className="space-y-2.5 text-[14px]">
//                   <div className="flex items-start gap-2">
//                     <Mail size={16} className="text-[#3b82f6] flex-shrink-0 mt-0.5" />
//                     <a href={`mailto:${person.email}`} className="text-[#3b82f6] hover:underline break-all">
//                       {person.email}
//                     </a>
//                   </div>
                  
//                   <div className="flex items-center gap-2">
//                     <Briefcase size={16} className="text-[#6b7280] flex-shrink-0" />
//                     <span className="text-[#6b7280]">
//                       Designation : <span className="text-[#374151] font-medium">{person.designation}</span>
//                     </span>
//                   </div>
                  
//                   <div className="flex items-center gap-2">
//                     <Phone size={16} className="text-[#6b7280] flex-shrink-0" />
//                     <span className="text-[#6b7280]">
//                       Contact : <span className="text-[#374151] font-medium">{person.contact}</span>
//                     </span>
//                   </div>
//                 </div>

//                 {/* Buttons */}
//                 <div className="flex flex-col gap-2 pt-1">
//                   <button className="bg-[#ef4444] text-white px-4 py-2.5 rounded text-[14px] hover:bg-[#dc2626] transition-colors w-full">
//                     View Leads
//                   </button>
//                   <button className="bg-[#1e3a5f] text-white px-4 py-2.5 rounded text-[14px] hover:bg-[#152a45] transition-colors w-full">
//                     Change Email ID
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SalesmanCard;