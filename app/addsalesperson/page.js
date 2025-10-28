// "use client";
// import React, { useState } from "react";
// import { useRouter } from "next/navigation";
// import "./AddSalesperson.css";

// export default function AddSalesperson() {
//   const [preview, setPreview] = useState(null);
//   const router = useRouter();

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setPreview(URL.createObjectURL(file));
//     }
//   };

//   const handleCancel = () => {
//     router.push("/managesalesperson");
//   };

//   return (
//     <div className="page-container">
//       <div className="header">
//         <h2>
//           Add <span className="bold-text">Salesperson</span>
//         </h2>
//       </div>

//       <hr className="divider" />

//       <form className="form-container">

//         <div className="form-row">
//           <div className="form-group">
//             <label>User Name</label>
//             <input type="text" placeholder="User Name" />
//           </div>

//           <div className="form-group image-upload">
//             <label>Profile Image</label>
//             <div className="upload-section">
//               <input type="file" accept="image/*" onChange={handleImageChange} />
//               <div className="image-preview">
//                 {preview ? (
//                   <img src={preview} alt="Preview" />
//                 ) : (
//                   <div className="no-image"></div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="form-row">
//           <div className="form-group">
//             <label>First Name</label>
//             <input type="text" placeholder="First Name" />
//           </div>

//           <div className="form-group">
//             <label>Last Name</label>
//             <input type="text" placeholder="Last Name" />
//           </div>
//         </div>

//         <div className="form-row">
//           <div className="form-group">
//             <label>Email</label>
//             <input type="email" placeholder="Email" />
//           </div>

//           <div className="form-group">
//             <label>Designation</label>
//             <input type="text" placeholder="Designation" />
//           </div>
//         </div>

//         <div className="form-row">
//           <div className="form-group">
//             <label>Country</label>
//             <select>
//               <option>Select Country</option>
//               <option>India</option>
//               <option>USA</option>
//               <option>UK</option>
//             </select>
//           </div>

//           <div className="form-group">
//             <label>Country Code</label>
//             <input type="text" placeholder="Code" disabled />
//           </div>

//           <div className="form-group">
//             <label>Contact No</label>
//             <input type="text" placeholder="Contact No" />
//           </div>
//         </div>

//         <div className="button-section">
//           <button type="submit" className="save-btn">
//             Save
//           </button>
//           <button
//             type="button"
//             className="cancel-btn"
//             onClick={handleCancel}
//           >
//             Cancel
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import "./AddSalesperson.css";

export default function AddSalesperson() {
  const [form, setForm] = useState({
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    designation: "",
    country: "",
    contact: "",
  });
  const [preview, setPreview] = useState(null);
  const router = useRouter();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/salespersons", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    if (data.success) {
      alert("Salesperson added successfully!");
      router.push("/managesalesperson");
    } else {
      alert("Error adding salesperson");
    }
  };

  const handleCancel = () => router.push("/managesalesperson");

  return (
    <div className="page-container">
      <div className="header">
        <h2>
          Add <span className="bold-text">Salesperson</span>
        </h2>
      </div>

      <hr className="divider" />

      <form className="form-container" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label>User Name</label>
            <input
              name="username"
              type="text"
              placeholder="User Name"
              onChange={handleChange}
            />
          </div>

          <div className="form-group image-upload">
            <label>Profile Image</label>
            <div className="upload-section">
              <input type="file" accept="image/*" onChange={handleImageChange} />
              <div className="image-preview">
                {preview ? <img src={preview} alt="Preview" /> : <div className="no-image"></div>}
              </div>
            </div>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>First Name</label>
            <input name="firstname" type="text" placeholder="First Name" onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input name="lastname" type="text" placeholder="Last Name" onChange={handleChange} />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Email</label>
            <input name="email" type="email" placeholder="Email" onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>Designation</label>
            <input name="designation" type="text" placeholder="Designation" onChange={handleChange} />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Country</label>
            <input name="country" type="text" placeholder="Country" onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>Contact No</label>
            <input name="contact" type="text" placeholder="Contact No" onChange={handleChange} />
          </div>
        </div>

        <div className="button-section">
          <button type="submit" className="save-btn">
            Save
          </button>
          <button type="button" className="cancel-btn" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
