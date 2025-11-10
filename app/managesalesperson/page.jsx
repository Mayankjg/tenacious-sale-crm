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
        className="bg-white p-8 rounded-lg w-full max-w-md shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-xl font-semibold mb-4 text-gray-900">Change Password</h3>
        <form onSubmit={handleSubmit}>
          {error && <p className="text-red-500 mb-3 text-sm">{error}</p>}

          <label className="block mb-2 text-sm font-medium text-gray-700">New Password</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full p-2.5 mb-4 border border-gray-300 rounded-md pl-5"
            placeholder="Enter new password"
            required
            minLength="6"
          />

          <label className="block mb-2 text-sm font-medium text-gray-700">Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full p-2.5 mb-4 border border-gray-300 rounded-md pl-5"
            placeholder="Confirm password"
            required
          />

          <div className="flex justify-end gap-3 mt-4">
            <button
              type="submit"
              className="bg-[#00a7cf] hover:bg-[#0094b8] text-white px-4 py-2.5 rounded-md font-bold ml-5 transition-colors"
            >
              Update Password
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2.5 rounded-md font-bold ml-2.5 transition-colors"
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
        className="bg-white p-8 rounded-lg w-full max-w-md shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-xl font-semibold mb-4 text-gray-900">Change Email ID</h3>
        <form onSubmit={handleSubmit}>
          {error && <p className="text-red-500 mb-3 text-sm">{error}</p>}

          <label className="block mb-2 text-sm font-medium text-gray-700">New Email ID</label>
          <input
            type="email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
            className="w-full p-2.5 mb-4 border border-gray-300 rounded-md pl-5"
            placeholder="Enter new email address"
            required
          />

          <div className="flex justify-end gap-3 mt-4">
            <button
              type="submit"
              className="bg-[#133b74] hover:bg-[#0f2f5a] text-white px-4 py-2.5 rounded-md font-bold ml-5 transition-colors"
            >
              Update Email
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2.5 rounded-md font-bold ml-2.5 transition-colors"
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
    <div className="bg-[#eef1f4] p-5 sm:p-3 min-h-[80vh] flex justify-center items-start font-['Segoe_UI',Tahoma,Geneva,Verdana,sans-serif]">
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

      <div className="p-1.5 rounded-[5px] h-auto w-full max-w-[1200px] xl:w-[95%] xl:max-w-[1100px]">
        <div className="bg-white w-full px-4 py-4 sm:px-3 sm:py-3">
          <div className="flex justify-between items-center lg:flex-col lg:items-start lg:gap-4 sm:flex-col sm:items-start sm:gap-3">
            <h2 className="text-2xl ml-5 lg:ml-2.5 sm:ml-0 sm:text-xl font-semibold text-gray-900">
              Salesperson <strong>List</strong>
            </h2>
            <button
              onClick={() => router.push("/managesalesperson/add")}
              className="bg-[#1f3853] hover:bg-[#111132] text-[white] mr-5 lg:mr-2.5 lg:w-full sm:mr-0 sm:w-full text-[18px] sm:text-base px-4 py-2 rounded-[5px] transition-colors"
            >
              Add Sales Person
            </button>
          </div>
          <hr className="border-t border-black mt-2 mb-6" />
        </div>

        <div className="flex items-center ml-4 gap-2 mb-6 lg:flex-col lg:ml-0 lg:items-stretch sm:flex-col sm:ml-0 sm:items-stretch sm:gap-2">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-[200px] ml-auto lg:ml-0 lg:w-full sm:ml-0 sm:w-full mr-2.5 lg:mr-0 sm:mr-0 h-9 mt-2.5 sm:mt-0 border border-gray-300 rounded-[5px] mb-10 lg:mb-2.5 sm:mb-2 px-3 py-2 text-[18px] sm:text-base focus:outline-none focus:ring-2 focus:ring-[#00a7cf] pl-5"
          />
          <button className="bg-[#0baad1] w-[70px] lg:w-full sm:w-full h-10 text-white mr-1 lg:mr-0 sm:mr-0 mb-10 lg:mb-0 sm:mb-0 mt-2.5 lg:mt-0 sm:mt-0 px-5 py-2 text-[18px] sm:text-base font-medium rounded-[5px] hover:bg-[#0094b8] transition-colors">
            Search
          </button>
        </div>

        {displayList.length > 0 ? (
          <div className="w-full max-w-[1150px] lg:w-full lg:ml-0 sm:w-full sm:ml-0 ml-6 lg:ml-0 sm:ml-0 mt-[20px] sm:mt-2 grid grid-cols-1 gap-2.5">
            {displayList.map((sp, index) => (
              <div
                key={sp.id || index}
                className="flex items-start h-auto min-h-[200px] bg-[#ffffff] mt-[20px] sm:mt-3 hover:bg-[#f6f6f6] mb-2.5 bg-white border border-gray-200 rounded-[10px] p-4 sm:p-3 shadow-sm hover:shadow-md transition-all duration-200 md:flex-col"
              >
                <div className="flex items-start gap-4 sm:gap-3 flex-1 w-full">
                  <img
                    src={sp.profileImage || "/default-avatar.png"}
                    alt="Profile"
                    className="w-[70px] h-[100px] ml-[10px] md:ml-2.5 sm:ml-0 sm:w-[60px] sm:h-20 rounded-[10px] mt-5 sm:mt-2 border border-gray-300 object-cover"
                  />
                  
                  <div className="flex-1 w-full">
                    {/* Username */}
                    <h3 className="text-xl ml-8 md:ml-4 sm:ml-0 sm:text-lg mt-5 sm:mt-2 font-bold text-gray-800 leading-tight">
                      {sp.username}
                    </h3>

                    {/* First Name, Last Name */}
                    <p className="text-gray-600 text-base sm:text-sm capitalize ml-8 md:ml-4 sm:ml-0 mt-2">
                      {sp.firstname} {sp.lastname}
                    </p>

                    {/* Designation */}
                    <div className="flex items-center gap-2.5 ml-8 md:ml-4 sm:ml-0 mt-2">
                      <Briefcase className="w-[18px] h-[18px] text-gray-500" />
                      <span className="text-base sm:text-sm text-gray-700">
                        Designation: <span className="font-semibold">{sp.designation}</span>
                      </span>
                    </div>

                    {/* Delete and View Leads */}
                    <div className="flex items-center gap-3 ml-8 md:ml-4 sm:ml-0 mt-3 sm:flex-wrap">
                      <div
                        className="relative group flex items-center cursor-pointer"
                        onClick={() => handleDelete(sp.id)}
                      >
                        <Trash2
                          className="w-5 h-5 text-gray-600 hover:text-red-600 transition"
                          title="Delete"
                        />
                        <span className="absolute bottom-6 -left-2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap pointer-events-none">
                          Delete
                        </span>
                      </div>

                      <button className="bg-[#dc3545] h-9 px-4 sm:flex-1 rounded-[5px] text-[white] hover:bg-[#c82333] text-[15px] sm:text-sm font-medium transition-colors">
                        View Leads
                      </button>
                    </div>

                    {/* Email */}
                    <div className="flex items-center gap-2.5 ml-8 md:ml-4 sm:ml-0 mt-3">
                      <Mail className="w-[18px] h-[18px] text-gray-500" />
                      <a
                        href={`mailto:${sp.email}`}
                        className="text-[#007bff] text-base sm:text-sm hover:underline break-all"
                      >
                        {sp.email}
                      </a>
                    </div>

                    {/* Contact Number */}
                    <div className="flex items-center gap-2.5 ml-8 md:ml-4 sm:ml-0 mt-2">
                      <Phone className="w-[18px] h-[18px] text-gray-500" />
                      <span className="text-base sm:text-sm text-gray-700">
                        Contact Number: <span className="font-semibold">{sp.contact}</span>
                      </span>
                    </div>

                    {/* Change Password and Change Email ID */}
                    <div className="flex items-center gap-3 ml-8 md:ml-4 sm:ml-0 mt-3 mb-2 sm:flex-wrap">
                      <div
                        className="relative group flex items-center cursor-pointer"
                        onClick={() => handleOpenChangePassword(sp.id)}
                      >
                        <Key
                          className="w-5 h-5 text-gray-600 hover:text-[#133b74] transition"
                          title="Change Password"
                        />
                        <span className="absolute bottom-6 -left-12 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap pointer-events-none">
                          Change Password
                        </span>
                      </div>

                      <button
                        className="bg-[#2b3342] h-9 px-4 sm:flex-1 rounded-[5px] text-[white] hover:bg-[#0f2f5a] text-[15px] sm:text-sm font-medium transition-colors"
                        onClick={() => handleOpenChangeEmail(sp.id)}
                      >
                        Change Email ID
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 text-lg sm:text-base font-medium mt-10 sm:mt-5">
            No Salespersons Found
          </div>
        )}
      </div>
    </div>
  );
}