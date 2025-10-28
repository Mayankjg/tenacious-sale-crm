// "use client";
// import { useState } from "react";
// import "./salesperson.css";

// export default function ManageSalesperson() {
//   const [search, setSearch] = useState("");
//   const [formVisible, setFormVisible] = useState(false);
//   const [formData, setFormData] = useState({
//     username: "",
//     firstname: "",
//     lastname: "",
//     email: "",
//     designation: "",
//     country: "",
//     contact: "",
//   });

//   const handleChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Salesperson Added Successfully!");
//     console.log("Salesperson Data:", formData);

//     setFormData({
//       username: "",
//       firstname: "",
//       lastname: "",
//       email: "",
//       designation: "",
//       country: "",
//       contact: "",
//     });
//     setFormVisible(false);
//   };

//   return (
//     <div className="page-container">
//       <div className="header">
//         <h2>Salesperson List</h2>
//         <div className="header-actions">
//           <input
//             type="text"
//             placeholder="Search Salesperson..."
//             className="search-box"
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//           />
//           <button
//             className="add-btn"
//             onClick={() => setFormVisible(!formVisible)}
//           >
//             {formVisible ? "Close" : "Add Salesperson"}
//           </button>
//         </div>
//       </div>

//       {formVisible && (
//         <form onSubmit={handleSubmit} className="form">
//           <div className="form-grid">
//             <label>
//               Username
//               <input
//                 name="username"
//                 value={formData.username}
//                 onChange={handleChange}
//                 required
//               />
//             </label>

//             <label>
//               First Name
//               <input
//                 name="firstname"
//                 value={formData.firstname}
//                 onChange={handleChange}
//                 required
//               />
//             </label>

//             <label>
//               Last Name
//               <input
//                 name="lastname"
//                 value={formData.lastname}
//                 onChange={handleChange}
//               />
//             </label>

//             <label>
//               Email
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//             </label>

//             <label>
//               Designation
//               <input
//                 name="designation"
//                 value={formData.designation}
//                 onChange={handleChange}
//               />
//             </label>

//             <label>
//               Country
//               <input
//                 name="country"
//                 value={formData.country}
//                 onChange={handleChange}
//               />
//             </label>

//             <label>
//               Contact No
//               <input
//                 name="contact"
//                 value={formData.contact}
//                 onChange={handleChange}
//               />
//             </label>
//           </div>

//           <div className="form-actions">
//             <button type="submit" className="save-btn">
//               Save
//             </button>
//             <button
//               type="button"
//               className="cancel-btn"
//               onClick={() => setFormVisible(false)}
//             >
//               Cancel
//             </button>
//           </div>
//         </form>
//       )}
//     </div>
//   );
// }

"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import "./salesperson.css";

export default function SalespersonList() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Searching for: ${search}`);
  };

  return (
    <div className="page-container">
      {/* Header */}
      <div className="header">
        <h2>
          Salesperson <b>List</b>
        </h2>
        <button
          className="add-sales-btn"
          onClick={() => router.push("/salesperson/add")}
        >
          Add Sales Person
        </button>
      </div>

      <hr className="divider" />

      {/* Search Section */}
      <form className="search-section" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search"
          className="search-input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit" className="search-btn">
          Search
        </button>
      </form>
    </div>
  );
}
