// "use client";
// import React, { useState } from "react";
// import { useRouter } from "next/navigation";

// const pageContainerStyle = {
//   backgroundColor: '#eef1f4',
//   padding: '20px',
//   minHeight: '80vh',
//   display: 'grid',
//   justifyContent: 'center',
//   alignItems: 'flex-start',
//   fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'
// };

// export default function AddSalesperson() {
//   const router = useRouter();
//   const [profileImage, setProfileImage] = useState(null);
//   const [formData, setFormData] = useState({
//     username: "",
//     firstname: "",
//     lastname: "",
//     email: "",
//     designation: "",
//     country: "",
//     code: "",
//     contact: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     let code = formData.code;

//     if (name === "country") {
//       if (value === "India") code = "+91";
//       else if (value === "USA") code = "+1";
//       else if (value === "UK") code = "+44";
//       else code = "";
//     }

//     setFormData({ ...formData, [name]: value, code });
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setProfileImage(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };


//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const payload = {
//       ...formData,
//       profileImage,
//     };

//     const res = await fetch("/api/salespersons", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(payload),
//     });

//     if (res.ok) {
//       alert("Salesperson saved successfully!");
//       router.push("/managesalesperson");
//     } else {
//       alert("Failed to save data");
//     }
//   };

//   return (
//     <div style={pageContainerStyle}>
//       <div className="bg-[#ffffff] h-[550px] w-[1000px] m-auto">
//         <div className="w-[1000px] h-[550px] max-w-10xl bg-white border border-[#e0e0e0] rounded-md shadow-md">
//           <div className="border-b border-[#bcbcbc] px-[] sm:px-[8]">
//             <h2 className="text-[20px] font-normal text-[#333] mt-[10px] mb-[10px] ml-[10px]">
//               Add <span className="font-semibold">Salesperson</span>
//             </h2>
//           </div>

//           <form onSubmit={handleSubmit} className="p-4 sm:p-[6px] lg:order-1">
//             <div className="grid grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-10 mt-[2px] mb-[2px]">
//               <div className="flex flex-col space-x-5">
//                 <label className="block text-sm text-gray-600 mt-[20px] mb-[5 px] ml-[10px]">
//                   User Name
//                 </label>
//                 <input
//                   type="text"
//                   name="username"
//                   value={formData.username}
//                   onChange={handleChange}
//                   placeholder="User Name"
//                   className="w-[400px] h-[30px] mt-[10px] mb-[10px] ml-[10px] flex space-x-[10px] space-y-[4px] border border-[#ccc] rounded-[5px] px-3 py-2 text-sm focus:outline-none"
//                   style={{ textIndent: "10px" }}
//                 />
//               </div>

//               <div className="flex flex-col  mt-[4px] mb-[8px] lg:order-1">
//                 <label className="block text-sm text-gray-600 mt-[20px] mb-[10px] mr-[10px]">
//                   Profile Image
//                 </label>
//                 <div className="flex flex-col-2 sm:flex-row sm:items-start gap-4 mt-1">
//                   <input
//                     type="file"
//                     onChange={handleImageChange}
//                     className="text-sm pt-1"
//                   />
//                   <div className="w-[80px] h-[80px] mt-[2px] mb-[2px] mr-[10px] border border-[#ccc] flex items-center justify-center bg-white sm:mt-0">
//                     {profileImage ? (
//                       <img
//                         src={profileImage}
//                         alt="preview"
//                         className="w-full h-full object-cover"
//                       />
//                     ) : (
//                       <span className="text-xs text-gray-400 text-center px-2">
//                         {/* No file chosen */}
//                       </span>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="grid grid-cols-2 sm:grid-cols-2 gap-6 lg:gap-10 mt-[2px] mb-[2px] ">
//               <div className="flex flex-col space-y-2">
//                 <label className="block text-sm text-gray-600 mb-[10px] ml-[10px] ">
//                   First Name
//                 </label>
//                 <input
//                   type="text"
//                   name="firstname"
//                   value={formData.firstname}
//                   onChange={handleChange}
//                   placeholder="First Name"
//                   className="w-[400px] h-[30px] mb-[10px] ml-[10px] flex border border-[#ccc] rounded-[5px] px-3 py-2 text-sm focus:outline-none "
//                   style={{ textIndent: "10px" }}
//                 />
//               </div>
//               <div className="flex flex-col space-y-2">
//                 <label className="block text-sm text-gray-600 mb-[10px] mr-[10px]">
//                   Last Name
//                 </label>
//                 <input
//                   type="text"
//                   name="lastname"
//                   value={formData.lastname}
//                   onChange={handleChange}
//                   placeholder="Last Name"
//                   className="w-[400px] h-[30px] mr-[10px] border border-[#ccc] rounded-[5px] px-3 py-2 text-sm focus:outline-none"
//                   style={{ textIndent: "10px" }}
//                 />
//               </div>
//             </div>
//             <div className="grid grid-cols-2 sm:grid-cols-2 gap-6 lg:gap-10 mb-8">
//               <div>
//                 <label className="block text-sm text-gray-600 mb-[10px] ml-[10px]">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="Email"
//                   className="w-[400px] h-[30px] ml-[10px] border border-[#ccc] rounded-[5px] px-3 py-2 text-sm focus:outline-none"
//                   style={{ textIndent: "10px" }}
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm text-gray-600 mb-[10px] mr-[10px]">
//                   Designation
//                 </label>
//                 <input
//                   type="text"
//                   name="designation"
//                   value={formData.designation}
//                   onChange={handleChange}
//                   placeholder="Designation"
//                   className="w-[400px] h-[30px] mr-[10px] border border-[#ccc] rounded-[5px] px-3 py-2 text-sm focus:outline-none"
//                   style={{ textIndent: "10px" }}
//                 />
//               </div>
//             </div>


//             <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 mb-[20px]">
//               <div>
//                 <label className="block text-sm text-gray-600 mt-[20px] mb-[10px] ml-[10px]">
//                   Country
//                 </label>
//                 <select
//                   name="country"
//                   value={formData.country}
//                   onChange={handleChange}
//                   className="w-[405px] h-[35px] ml-[10px] border border-[#ccc] rounded-[5px] px-3 py-2 text-sm focus:outline-none bg-white"
//                   style={{ textIndent: "10px" }}
//                 >
//                   <option value="">Select Country</option>
//                   <option value="India">India</option>
//                   <option value="USA">USA</option>
//                   <option value="UK">UK</option>
//                 </select>
//               </div>

//               <div className="flex items-center gap-4 mt-[10px]">
//                 {/* Country Code */}
//                 <div className="flex flex-col">
//                   <label className="block text-sm text-gray-600 mb-[8px]">
//                     Country Code
//                   </label>
//                   <input
//                     type="text"
//                     name="code"
//                     value={formData.code}
//                     readOnly
//                     placeholder="Code"
//                     className="w-[150px] h-[35px] border border-[#ccc] rounded-[5px] px-3 py-2 text-sm bg-[#f7f7f7] text-gray-500 focus:outline-none"
//                     style={{ textIndent: "10px" }}
//                   />
//                 </div>

//                 {/* Contact No */}
//                 <div className="flex flex-col flex-1">
//                   <label className="block text-sm text-gray-600 ml-[20px] mb-[8px]">
//                     Contact No
//                   </label>
//                   <input
//                     type="text"
//                     name="contact"
//                     value={formData.contact}
//                     onChange={handleChange}
//                     placeholder="Contact No"
//                     className="w-[220px] h-[35px] ml-[20px] border border-[#ccc] rounded-[5px] px-3 py-2 text-sm focus:outline-none"
//                     style={{ textIndent: "10px" }}
//                   />
//                 </div>
//               </div>

//             </div>
//             <div className="bg-[#f4f6f9] flex justify-end gap-[4] p-[19.5] sm:p-[5] mt-[50px]">
//               <div className="bg-[#f4f6f9] w-full flex flex-col-1 px-4 py-4">
//                 <button
//                   type="submit"
//                   className="h-[35px] w-[120px] ml-[600px] border border-[#ffffff] flex items-center bg-[#00a7cf] text-[white] px-8 py-2 rounded-[5px] text-sm font-medium"
//                   style={{ textIndent: "35px" }}
//                 >
//                   Save
//                 </button>

//                 <button
//                   type="button"
//                   onClick={() => router.push("/managesalesperson")}
//                   className=" bg-[#ffffff] text-[#757575] h-[35px] w-[120] mr-[70px] ml-[10px] flex items-center border border-[#ccc] bg-white text-gray-700 px-8 py-2 rounded-[5px] text-sm"
//                   style={{ textIndent: "35px" }}
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }













// "use client";
// import React, { useState } from "react";
// import { useRouter } from "next/navigation";

// // Internal CSS for responsiveness
// const internalStyles = `
//   @media (max-width: 2000px) {
//     .add-page-container {
//       padding: 15px;
//     }
//     .add-form-wrapper {
//       width: 100%;
//       max-width: 1000px;
//       height: auto !important;
//     }
//   }

//   @media (max-width: 1024px) {
//     .add-form-wrapper {
//       max-width: 100%;
//       height: auto !important;
//     }
//     .form-grid {
//       grid-template-columns: 1fr !important;
//       gap: 20px !important;
//     }
//     .form-input {
//       width: 100% !important;
//       max-width: 100% !important;
//     }
//     .contact-grid {
//       grid-template-columns: 1fr !important;
//     }
//     .contact-flex {
//       flex-direction: column !important;
//       gap: 20px !important;
//     }
//     .code-contact-wrapper {
//       width: 100% !important;
//     }
//   }

//   @media (max-width: 768px) {
//     .add-form-wrapper {
//       padding: 15px !important;
//     }
//     .form-header h2 {
//       font-size: 1.25rem !important;
//     }
//     .profile-section {
//       flex-direction: column !important;
//       align-items: flex-start !important;
//     }
//     .profile-preview {
//       margin-top: 10px;
//       margin-right: 0 !important;
//     }
//     .button-container {
//       flex-direction: column !important;
//       gap: 10px !important;
//       align-items: stretch !important;
//     }
//     .submit-button, .cancel-button {
//       width: 100% !important;
//       margin-left: 0 !important;
//       margin-right: 0 !important;
//       text-indent: 0 !important;
//       justify-content: center !important;
//     }
//     .footer-actions {
//       padding: 15px !important;
//     }
//   }

//   @media (max-width: 480px) {
//     .add-page-container {
//       padding: 10px;
//     }
//     .add-form-wrapper {
//       padding: 10px !important;
//     }
//     .form-header {
//       padding: 10px !important;
//     }
//     .form-header h2 {
//       font-size: 1.1rem !important;
//       margin-left: 5px !important;
//     }
//     .form-content {
//       padding: 15px 10px !important;
//     }
//     label {
//       margin-left: 0 !important;
//       margin-right: 0 !important;
//     }
//     .form-input {
//       margin-left: 0 !important;
//       margin-right: 0 !important;
//     }
//   }
// `;

// const pageContainerStyle = {
//   backgroundColor: '#eef1f4',
//   padding: '20px',
//   minHeight: '80vh',
//   display: 'grid',
//   justifyContent: 'center',
//   alignItems: 'flex-start',
//   fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'
// };

// export default function AddSalesperson() {
//   const router = useRouter();
//   const [profileImage, setProfileImage] = useState(null);
//   const [formData, setFormData] = useState({
//     username: "",
//     firstname: "",
//     lastname: "",
//     email: "",
//     designation: "",
//     country: "",
//     code: "",
//     contact: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     let code = formData.code;

//     if (name === "country") {
//       if (value === "India") code = "+91";
//       else if (value === "USA") code = "+1";
//       else if (value === "UK") code = "+44";
//       else code = "";
//     }

//     setFormData({ ...formData, [name]: value, code });
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setProfileImage(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const payload = {
//       ...formData,
//       profileImage,
//     };

//     const res = await fetch("/api/salespersons", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(payload),
//     });

//     if (res.ok) {
//       alert("Salesperson saved successfully!");
//       router.push("/managesalesperson");
//     } else {
//       alert("Failed to save data");
//     }
//   };

//   return (
//     <>
//       <style>{internalStyles}</style>
//       <div className="add-page-container" style={pageContainerStyle}>
//         <div className="add-form-wrapper bg-[#ffffff] w-full max-w-[1000px] m-auto border border-[#e0e0e0] rounded-md shadow-md">
//           <div className="form-header border-b border-[#bcbcbc] px-4 py-3">
//             <h2 className="text-[20px] font-normal text-[#333] ml-[10px]">
//               Add <span className="font-semibold">Salesperson</span>
//             </h2>
//           </div>

//           <form onSubmit={handleSubmit} className="form-content p-6">
//             {/* Username and Profile Image Row */}
//             <div className="form-grid grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
//               <div className="flex flex-col">
//                 <label className="block text-sm text-gray-600 mb-2 ml-[10px]">
//                   User Name
//                 </label>
//                 <input
//                   type="text"
//                   name="username"
//                   value={formData.username}
//                   onChange={handleChange}
//                   placeholder="User Name"
//                   className="form-input w-full h-[35px] ml-[10px] border border-[#ccc] rounded-[5px] px-3 py-2 text-sm focus:outline-none"
//                   style={{ textIndent: "10px" }}
//                 />
//               </div>

//               <div className="flex flex-col">
//                 <label className="block text-sm text-gray-600 mb-2">
//                   Profile Image
//                 </label>
//                 <div className="profile-section flex flex-col sm:flex-row sm:items-start gap-4">
//                   <input
//                     type="file"
//                     onChange={handleImageChange}
//                     className="text-sm pt-1"
//                   />
//                   <div className="profile-preview w-[80px] h-[80px] border border-[#ccc] flex items-center justify-center bg-white">
//                     {profileImage ? (
//                       <img
//                         src={profileImage}
//                         alt="preview"
//                         className="w-full h-full object-cover"
//                       />
//                     ) : (
//                       <span className="text-xs text-gray-400 text-center px-2">
//                         {/* No preview */}
//                       </span>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* First Name and Last Name Row */}
//             <div className="form-grid grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
//               <div className="flex flex-col">
//                 <label className="block text-sm text-gray-600 mb-2 ml-[10px]">
//                   First Name
//                 </label>
//                 <input
//                   type="text"
//                   name="firstname"
//                   value={formData.firstname}
//                   onChange={handleChange}
//                   placeholder="First Name"
//                   className="form-input w-full h-[35px] ml-[10px] border border-[#ccc] rounded-[5px] px-3 py-2 text-sm focus:outline-none"
//                   style={{ textIndent: "10px" }}
//                 />
//               </div>
//               <div className="flex flex-col">
//                 <label className="block text-sm text-gray-600 mb-2">
//                   Last Name
//                 </label>
//                 <input
//                   type="text"
//                   name="lastname"
//                   value={formData.lastname}
//                   onChange={handleChange}
//                   placeholder="Last Name"
//                   className="form-input w-full h-[35px] border border-[#ccc] rounded-[5px] px-3 py-2 text-sm focus:outline-none"
//                   style={{ textIndent: "10px" }}
//                 />
//               </div>
//             </div>

//             {/* Email and Designation Row */}
//             <div className="form-grid grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
//               <div className="flex flex-col">
//                 <label className="block text-sm text-gray-600 mb-2 ml-[10px]">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="Email"
//                   className="form-input w-full h-[35px] ml-[10px] border border-[#ccc] rounded-[5px] px-3 py-2 text-sm focus:outline-none"
//                   style={{ textIndent: "10px" }}
//                 />
//               </div>
//               <div className="flex flex-col">
//                 <label className="block text-sm text-gray-600 mb-2">
//                   Designation
//                 </label>
//                 <input
//                   type="text"
//                   name="designation"
//                   value={formData.designation}
//                   onChange={handleChange}
//                   placeholder="Designation"
//                   className="form-input w-full h-[35px] border border-[#ccc] rounded-[5px] px-3 py-2 text-sm focus:outline-none"
//                   style={{ textIndent: "10px" }}
//                 />
//               </div>
//             </div>

//             {/* Country, Code, and Contact Row */}
//             <div className="contact-grid grid grid-cols-1 gap-6 mb-6">
//               <div className="flex flex-col">
//                 <label className="block text-sm text-gray-600 mb-2 ml-[10px]">
//                   Country
//                 </label>
//                 <select
//                   name="country"
//                   value={formData.country}
//                   onChange={handleChange}
//                   className="form-input w-full h-[35px] ml-[10px] border border-[#ccc] rounded-[5px] px-3 py-2 text-sm focus:outline-none bg-white"
//                   style={{ textIndent: "10px" }}
//                 >
//                   <option value="">Select Country</option>
//                   <option value="India">India</option>
//                   <option value="USA">USA</option>
//                   <option value="UK">UK</option>
//                 </select>
//               </div>

//               <div className="contact-flex flex flex-col sm:flex-row gap-4">
//                 {/* Country Code */}
//                 <div className="flex flex-col flex-1">
//                   <label className="block text-sm text-gray-600 mb-2 ml-[10px]">
//                     Country Code
//                   </label>
//                   <input
//                     type="text"
//                     name="code"
//                     value={formData.code}
//                     readOnly
//                     placeholder="Code"
//                     className="code-contact-wrapper form-input w-full h-[35px] ml-[10px] border border-[#ccc] rounded-[5px] px-3 py-2 text-sm bg-[#f7f7f7] text-gray-500 focus:outline-none"
//                     style={{ textIndent: "10px" }}
//                   />
//                 </div>

//                 {/* Contact No */}
//                 <div className="flex flex-col flex-1">
//                   <label className="block text-sm text-gray-600 mb-2">
//                     Contact No
//                   </label>
//                   <input
//                     type="text"
//                     name="contact"
//                     value={formData.contact}
//                     onChange={handleChange}
//                     placeholder="Contact No"
//                     className="code-contact-wrapper form-input w-full h-[35px] border border-[#ccc] rounded-[5px] px-3 py-2 text-sm focus:outline-none"
//                     style={{ textIndent: "10px" }}
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Footer with Buttons */}
//             <div className="footer-actions bg-[#f4f6f9] flex justify-end gap-4 p-5 mt-8 rounded-md">
//               <div className="button-container w-full flex flex-row justify-end gap-4">
//                 <button
//                   type="submit"
//                   className="submit-button h-[35px] w-[120px] bg-[#00a7cf] text-[white] px-8 py-2 rounded-[5px] text-sm font-medium hover:bg-[#0094b8] transition"
//                 >
//                   Save
//                 </button>

//                 <button
//                   type="button"
//                   onClick={() => router.push("/managesalesperson")}
//                   className="cancel-button bg-[#ffffff] text-[#757575] h-[35px] w-[120px] border border-[#ccc] px-8 py-2 rounded-[5px] text-sm hover:bg-gray-100 transition"
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }








"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

// Internal CSS for responsiveness
const internalStyles = `
  @media (max-width: 1280px) {
    .form-wrapper-main {
      width: 95% !important;
      max-width: 950px !important;
    }
  }

  @media (max-width: 1024px) {
    .form-wrapper-main {
      width: 100% !important;
      height: auto !important;
    }
    .two-col-grid {
      grid-template-columns: 1fr !important;
    }
    .input-field {
      width: 40% !important;
      margin-left: 10px !important;
      margin-right: 10px !important;
    }
    .three-col-grid {
      grid-template-columns: 1fr !important;
    }
    .contact-row {
      flex-direction: column !important;
      gap: 0 !important;
    }
    .contact-row > div {
      width: 100% !important;
    }
    .contact-input {
      width: 40% !important;
      margin-left: 10px !important;
    }
  }

  @media (max-width: 768px) {
    .page-wrapper {
      padding: 10px !important;
    }
    .form-wrapper-main {
      width: 100% !important;
      margin: 0 !important;
    }
    .form-title {
      font-size: 18px !important;
      margin-left: 5px !important;
    }
    .profile-upload-section {
      flex-direction: column !important;
      align-items: flex-start !important;
    }
    .profile-preview-box {
      margin-right: 0 !important;
      margin-top: 10px;
    }
    .button-wrapper {
      flex-direction: column !important;
      width: 100% !important;
    }
    .save-button, .cancel-button {
      width: 40% !important;
      margin-bottom: 10px;
      margin-left: 0 !important;
      margin-right: 0 !important;
      text-indent: 0 !important;
      display: flex !important;
      justify-content: center !important;
      align-items: center !important;
    }
    .footer-section {
      margin-top: 30px !important;
    }
  }

  @media (max-width: 480px) {
    .input-field {
      height: 35px !important;
    }
    label {
      margin-left: 5px !important;
      margin-right: 5px !important;
    }
  }
`;

const pageContainerStyle = {
  backgroundColor: '#eef1f4',
  padding: '20px',
  minHeight: '80vh',
  display: 'grid',
  justifyContent: 'center',
  alignItems: 'flex-start',
  fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'
};

export default function AddSalesperson() {
  const router = useRouter();
  const [profileImage, setProfileImage] = useState(null);
  const [formData, setFormData] = useState({
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    designation: "",
    country: "",
    code: "",
    contact: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    let code = formData.code;

    if (name === "country") {
      if (value === "India") code = "+91";
      else if (value === "USA") code = "+1";
      else if (value === "UK") code = "+44";
      else code = "";
    }

    setFormData({ ...formData, [name]: value, code });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...formData,
      profileImage,
    };

    const res = await fetch("/api/salespersons", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      alert("Salesperson saved successfully!");
      router.push("/managesalesperson");
    } else {
      alert("Failed to save data");
    }
  };

  return (
    <>
      <style>{internalStyles}</style>
      <div className="page-wrapper" style={pageContainerStyle}>
        <div className="bg-[#ffffff] h-auto w-[1000px] m-auto">
          <div className="form-wrapper-main w-[1000px] h-auto max-w-10xl bg-white border border-[#e0e0e0] rounded-md shadow-md">
            <div className="border-b border-[#bcbcbc] px-4 sm:px-8">
              <h2 className="form-title text-[20px] font-normal text-[#333] mt-[10px] mb-[10px] ml-[10px]">
                Add <span className="font-semibold">Salesperson</span>
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="p-4 sm:p-[6px] lg:order-1">
              <div className="two-col-grid grid grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-10 mt-[2px] mb-[2px]">
                <div className="flex flex-col space-x-5">
                  <label className="block text-sm text-gray-600 mt-[20px] mb-[5px] ml-[10px]">
                    User Name
                  </label>
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="User Name"
                    className="input-field w-[350px] h-[30px] mt-[10px] mb-[10px] ml-[10px] flex space-x-[10px] space-y-[4px] border border-[#ccc] rounded-[5px] px-3 py-2 text-xs focus:outline-none"
                    style={{ textIndent: "10px" }}
                  />
                </div>

                <div className="flex flex-col mt-[4px] mb-[8px] lg:order-1">
                  <label className="block text-sm text-gray-600 mt-[20px] mb-[10px] mr-[10px]">
                    Profile Image
                  </label>
                  <div className="profile-upload-section flex flex-col-2 sm:flex-row sm:items-start gap-4 mt-1">
                    <input
                      type="file"
                      onChange={handleImageChange}
                      className="text-sm pt-1"
                    />
                    <div className="profile-preview-box w-[80px] h-[80px] mt-[2px] mb-[2px] mr-[10px] border border-[#ccc] flex items-center justify-center bg-white sm:mt-0">
                      {profileImage ? (
                        <img
                          src={profileImage}
                          alt="preview"
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="text-xs text-gray-400 text-center px-2">
                          {/* No file chosen */}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="two-col-grid grid grid-cols-2 sm:grid-cols-2 gap-6 lg:gap-10 mt-[2px] mb-[2px]">
                <div className="flex flex-col space-y-2">
                  <label className="block text-sm text-gray-600 mb-[10px] ml-[10px]">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstname"
                    value={formData.firstname}
                    onChange={handleChange}
                    placeholder="First Name"
                    className="input-field w-[350px] h-[30px] mb-[10px] ml-[10px] flex border border-[#ccc] rounded-[5px] px-3 py-2 text-xs focus:outline-none"
                    style={{ textIndent: "10px" }}
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="block text-sm text-gray-600 mb-[10px] mr-[10px]">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastname"
                    value={formData.lastname}
                    onChange={handleChange}
                    placeholder="Last Name"
                    className="input-field w-[350px] h-[30px] mr-[10px] border border-[#ccc] rounded-[5px] px-3 py-2 text-xs focus:outline-none"
                    style={{ textIndent: "10px" }}
                  />
                </div>
              </div>

              <div className="two-col-grid grid grid-cols-2 sm:grid-cols-2 gap-6 lg:gap-10 mb-8">
                <div>
                  <label className="block text-sm text-gray-600 mb-[10px] ml-[10px]">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="input-field w-[350px] h-[30px] ml-[10px] border border-[#ccc] rounded-[5px] px-3 py-2 text-xs focus:outline-none"
                    style={{ textIndent: "10px" }}
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-[10px] mr-[10px]">
                    Designation
                  </label>
                  <input
                    type="text"
                    name="designation"
                    value={formData.designation}
                    onChange={handleChange}
                    placeholder="Designation"
                    className="input-field w-[350px] h-[30px] mr-[10px] border border-[#ccc] rounded-[5px] px-3 py-2 text-xs focus:outline-none"
                    style={{ textIndent: "10px" }}
                  />
                </div>
              </div>

              <div className="three-col-grid grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 mb-[20px]">
                <div>
                  <label className="block text-sm text-gray-600 mt-[20px] mb-[10px] ml-[10px]">
                    Country
                  </label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="input-field w-[355px] h-[30px] ml-[10px] border border-[#ccc] rounded-[5px] px-3 py-2 text-xs focus:outline-none bg-white"
                    style={{ textIndent: "10px" }}
                  >
                    <option value="">Select Country</option>
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>
                  </select>
                </div>

                <div className="contact-row flex items-center gap-4 mt-[10px]">
                  <div className="flex flex-col">
                    <label className="block text-sm text-gray-600 mb-[8px]">
                      Country Code
                    </label>
                    <input
                      type="text"
                      name="code"
                      value={formData.code}
                      readOnly
                      placeholder="Code"
                      className="contact-input w-[120px] h-[30px] border border-[#ccc] rounded-[5px] px-3 py-2 text-xs bg-[#f7f7f7] text-gray-500 focus:outline-none"
                      style={{ textIndent: "10px" }}
                    />
                  </div>

                  <div className="flex flex-col flex-1">
                    <label className="block text-sm text-gray-600 ml-[20px] mb-[8px]">
                      Contact No
                    </label>
                    <input
                      type="text"
                      name="contact"
                      value={formData.contact}
                      onChange={handleChange}
                      placeholder="Contact No"
                      className="contact-input w-[200px] h-[30px] ml-[20px] border border-[#ccc] rounded-[5px] px-3 py-2 text-xs focus:outline-none"
                      style={{ textIndent: "10px" }}
                    />
                  </div>
                </div>
              </div>

              <div className="footer-section bg-[#f4f6f9] flex justify-end gap-[4] p-[19.5] sm:p-[5] mt-[50px]">
                <div className="button-wrapper bg-[#f4f6f9] w-full flex flex-col-1 px-4 py-4">
                  <button
                    type="submit"
                    className="save-button h-[30px] w-[100px] ml-[600px] border border-[#ffffff] flex items-center bg-[#00a7cf] text-[white] px-6 py-1 rounded-[5px] text-xs font-medium"
                    style={{ textIndent: "30px" }}
                  >
                    Save
                  </button>

                  <button
                    type="button"
                    onClick={() => router.push("/managesalesperson")}
                    className="cancel-button bg-[#ffffff] text-[#757575] h-[30px] w-[100px] mr-[70px] ml-[10px] flex items-center border border-[#ccc] bg-white text-gray-700 px-6 py-1 rounded-[5px] text-xs"
                    style={{ textIndent: "25px" }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}