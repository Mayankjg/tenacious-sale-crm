// "use client";
// import React from "react";
// import { useRouter } from "next/navigation";
// import "./salesperson.css";

// export default function ManageSalesperson() {
//   const router = useRouter();

//   const handleAddSalesperson = () => {
//     router.push("/addsalesperson");
//   };

//   return (
//     <div className="page-container">
//       <div className="header">
//         <h2>
//           Salesperson <span className="bold-text">List</span>
//         </h2>
//         <button className="add-sales-btn" onClick={handleAddSalesperson}>
//           Add Sales Person
//         </button>
//       </div>

//       <hr className="divider" />

//       <div className="search-section">
//         <input type="text" placeholder="Search" className="search-input" />
//         <button className="search-btn">Search</button>
//       </div>
//     </div>
//   );
// }

// "use client";
// import React, { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import "./salesperson.css";

// export default function ManageSalesperson() {
//   const router = useRouter();
//   const [salespersons, setSalespersons] = useState([]);

//   useEffect(() => {
//     fetch("/api/salespersons")
//       .then((res) => res.json())
//       .then((data) => setSalespersons(data))
//       .catch((err) => console.error(err));
//   }, []);

//   const handleAddSalesperson = () => {
//     router.push("/addsalesperson");
//   };

//   return (
//     <div className="page-container">
//       <div className="header">
//         <h2>
//           Salesperson <span className="bold-text">List</span>
//         </h2>
//         <button className="add-sales-btn" onClick={handleAddSalesperson}>
//           Add Sales Person
//         </button>
//       </div>

//       <hr className="divider" />

//       <div className="search-section">
//         <input type="text" placeholder="Search" className="search-input" />
//         <button className="search-btn">Search</button>
//       </div>

//       <div className="card-container">
//         {salespersons.length === 0 ? (
//           <p className="no-data">No Salespersons Found</p>
//         ) : (
//           salespersons.map((p) => (
//             <div key={p.id} className="sales-card">
//               <div className="sales-info">
//                 <img
//                   src="/default-user.png"
//                   alt="profile"
//                   className="sales-img"
//                 />
//                 <div>
//                   <h3 className="sales-name">{p.username}</h3>
//                   <p className="sales-fullname">
//                     {p.firstname} {p.lastname}
//                   </p>
//                   <p className="sales-email">
//                     📧 <a href={`mailto:${p.email}`}>{p.email}</a>
//                   </p>
//                   <p className="sales-contact">
//                     📞 <strong>{p.contact}</strong>
//                   </p>
//                   <p className="sales-designation">
//                     💼 Designation: <strong>{p.designation}</strong>
//                   </p>
//                   <p className="sales-country">🌍 {p.country}</p>
//                 </div>
//               </div>

//               <div className="sales-actions">
//                 <button className="view-btn">View Leads</button>
//                 <button className="change-btn">Change Email ID</button>
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// }


"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "./salesperson.css";

export default function ManageSalesperson() {
  const router = useRouter();
  const [salespersons, setSalespersons] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch salesperson data
  useEffect(() => {
    fetch("/api/salespersons")
      .then((res) => res.json())
      .then((data) => setSalespersons(data))
      .catch((err) => console.error(err));
  }, []);

  // Filtered list based on search
  const filteredSalespersons = salespersons.filter(
    (p) =>
      p.username?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.firstname?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.lastname?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddSalesperson = () => {
    router.push("/addsalesperson");
  };

  return (
    <div className="salesperson-page">
      {/* Header Section */}
      <div className="salesperson-header">
        <h2>
          Salesperson <span className="highlight">List</span>
        </h2>
        <button className="add-btn" onClick={handleAddSalesperson}>
          Add Sales Person
        </button>
      </div>

      <hr className="divider" />

      {/* Search Section */}
      <div className="search-section">
        <input
          type="text"
          placeholder="Search"
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="search-btn">Search</button>
      </div>

      {/* Salesperson Cards */}
      <div className="salesperson-list">
        {filteredSalespersons.length === 0 ? (
          <p className="no-data">No Salespersons Found</p>
        ) : (
          filteredSalespersons.map((p) => (
            <div key={p.id} className="sales-card">
              <div className="sales-left">
                <img
                  src={p.imageUrl || "/default-user.png"}
                  alt="profile"
                  className="profile-img"
                />
                <div className="sales-info">
                  <h3 className="sales-name">{p.username}</h3>
                  <p className="sales-fullname">
                    {p.firstname} {p.lastname}
                  </p>
                  <p className="sales-email">
                    📧 <a href={`mailto:${p.email}`}>{p.email}</a>
                  </p>
                  <p className="sales-contact">
                    📞 <strong>{p.contact}</strong>
                  </p>
                  <p className="sales-designation">
                    💼 Designation: <strong>{p.designation}</strong>
                  </p>
                  <p className="sales-country">🌍 {p.country}</p>
                </div>
              </div>

              <div className="sales-right">
                <button className="view-btn">View Leads</button>
                <button className="change-btn">Change Email ID</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}



