// "use client";
// import React, { useState } from "react";
// import { useRouter } from "next/navigation";
// import "./addsalesperson.css";

// export default function AddSalesperson() {
//   const [profileImage, setProfileImage] = useState(null);
//   const router = useRouter();

//   const handleImageChange = (e) => {
//     if (e.target.files && e.target.files[0]) {
//       setProfileImage(URL.createObjectURL(e.target.files[0]));
//     }
//   };

//   return (
//     <div className="addsalesperson-container">
//       <div className="form-card">
//         {/* Header */}
//         <div className="form-header">
//           <h2>
//             Add <span>Salesperson</span>
//           </h2>
//         </div>

//         {/* Form Section */}
//         <div className="form-body">
//           <form>
//             <div className="form-row">
//               <div className="form-group">
//                 <label>User Name</label>
//                 <input type="text" placeholder="User Name" />
//               </div>

//               <div className="form-group">
//                 <label>Profile Image</label>
//                 <div className="profile-upload">
//                   <input type="file" onChange={handleImageChange} />
//                   <div className="image-preview">
//                     {profileImage ? (
//                       <img src={profileImage} alt="Preview" />
//                     ) : (
//                       <div className="no-image">No file chosen</div>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="form-row">
//               <div className="form-group">
//                 <label>First Name</label>
//                 <input type="text" placeholder="First Name" />
//               </div>
//               <div className="form-group">
//                 <label>Last Name</label>
//                 <input type="text" placeholder="Last Name" />
//               </div>
//             </div>

//             <div className="form-row">
//               <div className="form-group">
//                 <label>Email</label>
//                 <input type="email" placeholder="Email" />
//               </div>
//               <div className="form-group">
//                 <label>Designation</label>
//                 <input type="text" placeholder="Designation" />
//               </div>
//             </div>

//             <div className="form-row">
//               <div className="form-group">
//                 <label>Country</label>
//                 <select>
//                   <option>Select Country</option>
//                   <option>India</option>
//                   <option>USA</option>
//                   <option>UK</option>
//                 </select>
//               </div>
//               <div className="form-group">
//                 <label>Country Code</label>
//                 <input type="text" placeholder="Code" disabled />
//               </div>
//               <div className="form-group">
//                 <label>Contact No</label>
//                 <input type="text" placeholder="Contact No" />
//               </div>
//             </div>
//           </form>
//         </div>

//         {/* Footer Buttons */}
//         <div className="form-footer">
//           <button type="submit" className="btn-save">
//             Save
//           </button>
//           <button
//             type="button"
//             className="btn-cancel"
//             onClick={() => router.push("/salespersons")}
//           >
//             Cancel
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddSalesperson() {
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
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setProfileImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Saved Data:", formData);
    alert("Salesperson added successfully!");
    router.push("/salespersons");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start p-10 font-sans">
      <div className="w-full max-w-7xl bg-white rounded-lg shadow-lg border border-gray-200">
        {/* Header */}
        <div className="border-b border-gray-200 p-6 bg-gray-50 rounded-t-lg">
          <h2 className="text-xl font-semibold text-gray-800">
            Add <span className="text-blue-600">Salesperson</span>
          </h2>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-8 space-y-8">
          {/* User Name + Profile */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[30]">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                User Name
              </label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="User Name"
                className="w-[500px] border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Profile Image
              </label>
              <div className="flex items-center gap-4">
                <input
                  type="file"
                  onChange={handleImageChange}
                  className="text-sm text-gray-700"
                />
                <div className="w-28 h-28 border border-gray-300 rounded-md flex items-center justify-center overflow-hidden bg-gray-50">
                  {profileImage ? (
                    <img
                      src={profileImage}
                      alt="Preview"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-xs text-gray-400">No image</span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* First & Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[30]">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                First Name
              </label>
              <input
                type="text"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
                placeholder="First Name"
                className="w-[500px] border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 gap-[30]">
                Last Name
              </label>
              <input
                type="text"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                placeholder="Last Name"
                className="w-[500px] border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Email & Designation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-[500px] border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Designation
              </label>
              <input
                type="text"
                name="designation"
                value={formData.designation}
                onChange={handleChange}
                placeholder="Designation"
                className="w-[500px] border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Country, Code, Contact */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Country
              </label>
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-[505px] border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Country</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Country Code
              </label>
              <input
                type="text"
                name="code"
                value={formData.code}
                placeholder="Code"
                disabled
                className="w-[500px] border border-gray-200 rounded-md px-4 py-2 bg-gray-100 text-gray-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Contact No
              </label>
              <input
                type="text"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                placeholder="Contact No"
                className="w-[500px] border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-4 pt-6 border-t border-gray-200">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-2 rounded-md shadow-sm"
            >
              Save    
              
            </button>
            <button
              type="button"
              onClick={() => router.push("/salespersons")}
              className="bg-white border border-gray-300 text-gray-700 font-medium px-8 py-2 rounded-md hover:bg-gray-100"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

