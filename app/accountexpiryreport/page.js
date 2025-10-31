// "use client";
// import { useEffect, useState } from "react";
// import "./accountexpiryreport.css";

// export default function accountexpiryreport() {
//     const [data, setData] = useState([]);

//     useEffect(() => {
//         const reportData = [
//             { id: 1, name: "Mayank", email: "abc@gmail.com", expiry: "29-10-2025" },
//             { id: 2, name: "Jay", email: "pqr@gmail.com", expiry: "20-09-2025" },
//             { id: 3, name: "Parth", email: "xyz@gmail.com", expiry: "10-04-2024" }
//         ];
//         setData(reportData);
//     }, []);

//     return (
//         <div className="page-container">
//             <div className="report-card">
//                 <h2>
//                     Account Expiry <span className="highlight">Report</span>
//                 </h2>

//                 <table className="expiry-table">
//                     <thead>
//                         <tr>
//                             <th> SR. No.</th>
//                             <th> NAME </th>
//                             <th> EMAIL </th>
//                             <th> EXPIRY DATE </th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {data.map((item, index) => (
//                             <tr key={item.id}>
//                                 <td>{index + 1}</td>
//                                 <td>{item.name}</td>
//                                 <td>{item.email}</td>
//                                 <td>{item.expiry}</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     )
// }


"use client";
import { useEffect, useState } from "react";
import "./accountexpiryreport.css";

export default function AccountExpiryReport() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const reportData = [
      { id: 1, name: "Mayank", email: "abc@gmail.com", expiry: "29-10-2025" },
      { id: 2, name: "Jay", email: "pqr@gmail.com", expiry: "20-09-2025" },
      { id: 3, name: "Parth", email: "xyz@gmail.com", expiry: "10-04-2024" },
    ];
    setData(reportData);
  }, []);

  return (
    <div className="page-container">
      <div className="report-card">
        <h2>
          Account Expiry <span className="highlight">Report</span>
        </h2>

        <div className="table-wrapper">
          <table className="expiry-table">
            <thead>
              <tr>
                <th>SR. NO.</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>EXPIRY DATE</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={item.id}>
                  <td data-label="SR NO">{index + 1}</td>
                  <td data-label="Name">{item.name}</td>
                  <td data-label="Email">{item.email}</td>
                  <td data-label="Expiry Date">{item.expiry}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

