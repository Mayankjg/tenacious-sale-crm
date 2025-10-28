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

"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "./salesperson.css";

export default function ManageSalesperson() {
  const router = useRouter();
  const [salespersons, setSalespersons] = useState([]);

  useEffect(() => {
    fetch("/api/salespersons")
      .then((res) => res.json())
      .then((data) => setSalespersons(data))
      .catch((err) => console.error(err));
  }, []);

  const handleAddSalesperson = () => {
    router.push("/addsalesperson");
  };

  return (
    <div className="page-container">
      <div className="header">
        <h2>
          Salesperson <span className="bold-text">List</span>
        </h2>
        <button className="add-sales-btn" onClick={handleAddSalesperson}>
          Add Sales Person
        </button>
      </div>

      <hr className="divider" />

      <div className="search-section">
        <input type="text" placeholder="Search" className="search-input" />
        <button className="search-btn">Search</button>
      </div>

      <div className="table-container">
        {salespersons.length === 0 ? (
          <p className="no-data">No Salespersons Found</p>
        ) : (
          <table className="salesperson-table">
            <thead>
              <tr>
                <th>User Name</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Designation</th>
                <th>Country</th>
                <th>Contact</th>
              </tr>
            </thead>
            <tbody>
              {salespersons.map((p) => (
                <tr key={p.id}>
                  <td>{p.username}</td>
                  <td>{p.firstname}</td>
                  <td>{p.lastname}</td>
                  <td>{p.email}</td>
                  <td>{p.designation}</td>
                  <td>{p.country}</td>
                  <td>{p.contact}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}




