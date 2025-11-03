"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import "./addsalesperson.css";

export default function AddSalesperson() {
  const [profileImage, setProfileImage] = useState(null);
  const router = useRouter();

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setProfileImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <div className="addsalesperson-container">
      <div className="form-card">
        {/* Header */}
        <div className="form-header">
          <h2>
            Add <span>Salesperson</span>
          </h2>
        </div>

        {/* Form Section */}
        <div className="form-body">
          <form>
            <div className="form-row">
              <div className="form-group">
                <label>User Name</label>
                <input type="text" placeholder="User Name" />
              </div>

              <div className="form-group">
                <label>Profile Image</label>
                <div className="profile-upload">
                  <input type="file" onChange={handleImageChange} />
                  <div className="image-preview">
                    {profileImage ? (
                      <img src={profileImage} alt="Preview" />
                    ) : (
                      <div className="no-image">No file chosen</div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>First Name</label>
                <input type="text" placeholder="First Name" />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input type="text" placeholder="Last Name" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="Email" />
              </div>
              <div className="form-group">
                <label>Designation</label>
                <input type="text" placeholder="Designation" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Country</label>
                <select>
                  <option>Select Country</option>
                  <option>India</option>
                  <option>USA</option>
                  <option>UK</option>
                </select>
              </div>
              <div className="form-group">
                <label>Country Code</label>
                <input type="text" placeholder="Code" disabled />
              </div>
              <div className="form-group">
                <label>Contact No</label>
                <input type="text" placeholder="Contact No" />
              </div>
            </div>
          </form>
        </div>

        {/* Footer Buttons */}
        <div className="form-footer">
          <button type="submit" className="btn-save">
            Save
          </button>
          <button
            type="button"
            className="btn-cancel"
            onClick={() => router.push("/salespersons")}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}


// "use client";
// import React, { useState } from "react";

// export default function AddSalesperson() {
//   const [profileImage, setProfileImage] = useState(null);

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
//       <div className="bg-white w-full max-w-4xl rounded-md shadow border"> {/* Adjusted max-w-4xl for a good default */}
//         <div className="p-8 border-b"> {/* Reduced padding from p-10 to p-8 to match image */}
//           {/* CHANGE: Removed bold span to match image */}
//           <h2 className="text-xl font-semibold">
//             Add Salesperson
//           </h2>
//         </div>

//         {/* CHANGE: Adjusted grid gap for a more accurate layout */}
//         <form className="p-8 grid grid-cols-2 gap-x-10 gap-y-6">
//           {/* User Name */}
//           <div>
//             <label className="block text-gray-700 mb-1">User Name</label>
//             <input
//               type="text"
//               placeholder="User Name"
//               className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-300"
//             />
//           </div>

//           {/* Profile Image */}
//           <div>
//             <label className="block text-gray-700 mb-1">Profile Image</label>
//             <div className="flex items-center space-x-4">
//               {/* CHANGE: Removed custom classes to use the browser default, which matches the image */}
//               <input
//                 type="file"
//                 onChange={(e) =>
//                   setProfileImage(e.target.files ? e.target.files[0] : null)
//                 }
//               />
//               {/* CHANGE: Adjusted w-32 h-40 (128x160px) to be rectangular, matching the image */}
//               <div className="w-32 h-40 border flex items-center justify-center bg-gray-50 flex-shrink-0">
//                 {profileImage ? (
//                   <img
//                     src={URL.createObjectURL(profileImage)}
//                     alt="Preview"
//                     className="w-full h-full object-cover"
//                   />
//                 ) : (
//                   // Using a simple placeholder, but your placeholder URL is also fine
//                   <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
//                 )}
//               </div>
//             </div>
//           </div>

//           {/* First Name */}
//           <div>
//             <label className="block text-gray-700 mb-1">First Name</label>
//             <input
//               type="text"
//               placeholder="First Name"
//               className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-300"
//             />
//           </div>

//           {/* Last Name */}
//           <div>
//             <label className="block text-gray-700 mb-1">Last Name</label>
//             <input
//               type="text"
//               placeholder="Last Name"
//               className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-300"
//             />
//           </div>

//           {/* Email */}
//           <div>
//             <label className="block text-gray-700 mb-1">Email</label>
//             <input
//               type="email"
//               placeholder="Email"
//               className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-300"
//             />
//           </div>

//           {/* Designation */}
//           <div>
//             <label className="block text-gray-700 mb-1">Designation</label>
//             <input
//               type="text"
//               placeholder="Designation"
//               className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-300"
//             />
//           </div>

//           {/* Country */}
//           <div>
//             <label className="block text-gray-700 mb-1">Country</label>
//             {/* CHANGE: Added bg-white to ensure it's not gray */}
//             <select className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-300 bg-white">
//               <option value="">Select Country</option>
//               <option value="India">India</option>
//               <option value="USA">USA</option>
//               <option value="UK">UK</option>
//             </select>
//           </div>

//           {/* --- CHANGE: WRAPPED COUNTRY CODE AND CONTACT IN A DIV TO FIX LAYOUT --- */}
//           <div>
//             <div className="flex space-x-4">
//               {/* Country Code */}
//               <div className="w-1/3"> {/* Occupies 1/3 of the space */}
//                 <label className="block text-gray-700 mb-1">Country Code</label>
//                 <input
//                   type="text"
//                   placeholder="Code"
//                   className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-300"
//                 />
//               </div>
//               {/* Contact No */}
//               <div className="w-2/3"> {/* Occupies 2/3 of the space */}
//                 <label className="block text-gray-700 mb-1">Contact No</label>
//                 <input
//                   type="text"
//                   placeholder="Contact No"
//                   className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-300"
//                 />
//               </div>
//             </div>
//           </div>
//           {/* --- END OF CHANGE --- */}

//           {/* Buttons */}
//           <div className="col-span-2 flex justify-end space-x-4 mt-6 border-t pt-6">
//             <button
//               type="button"
//               className="px-6 py-2 bg-[#00afd7] text-white rounded hover:bg-[#009fc7] transition"
//             >
//               Save
//             </button>
//             <button
//               type="button"
//               className="px-6 py-2 bg-white border rounded text-gray-700 hover:bg-gray-100 transition"
//             >
//               Cancel
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }
