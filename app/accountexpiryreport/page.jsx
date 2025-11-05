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







// "use client";
// import { useEffect, useState } from "react";
// import "./accountexpiryreport.css";

// export default function AccountExpiryReport() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const reportData = [
//       { id: 1, name: "Mayank", email: "abc@gmail.com", expiry: "29-10-2025" },
//       { id: 2, name: "Jay", email: "pqr@gmail.com", expiry: "20-09-2025" },
//       { id: 3, name: "Parth", email: "xyz@gmail.com", expiry: "10-04-2024" },
//     ];
//     setData(reportData);
//   }, []);

//   return (
//     <div className="page-container">
//       <div className="report-card">
//         <h2>
//           Account Expiry <span className="highlight">Report</span>
//         </h2>

//         <div className="table-wrapper">
//           <table className="expiry-table">
//             <thead>
//               <tr>
//                 <th>SR. NO.</th>
//                 <th>NAME</th>
//                 <th>EMAIL</th>
//                 <th>EXPIRY DATE</th>
//               </tr>
//             </thead>
//             <tbody>
//               {data.map((item, index) => (
//                 <tr key={item.id}>
//                   <td data-label="SR NO">{index + 1}</td>
//                   <td data-label="Name">{item.name}</td>
//                   <td data-label="Email">{item.email}</td>
//                   <td data-label="Expiry Date">{item.expiry}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";
import React, { useEffect, useState } from "react";
// lucide-react માંથી Calendar આઇકન ઉમેર્યું
import { Calendar } from "lucide-react"; 

export default function AccountExpiryReport() {
  const [data, setData] = useState([]);

  // Mock data fetch
  useEffect(() => {
    // Current date for comparison (Nov 5, 2025 IST)
    const currentDate = new Date('2025-11-05'); 

    const reportData = [
      { id: 1, name: "Mayank", email: "mayank@gmail.com", expiry: "29-10-2025" }, // Expired (past date)
      { id: 2, name: "Jay", email: "jay@gmail.com", expiry: "20-11-2025" }, // Upcoming expiry
      { id: 3, name: "Parth", email: "parth@gmail.com", expiry: "10-04-2026" }, // Far future expiry
      { id: 4, name: "Kunal", email: "kunal@gmail.com", expiry: "01-11-2025" }, // Recently Expired
    ];

    const sortedData = reportData.sort((a, b) => {
      const dateA = new Date(a.expiry.split('-').reverse().join('-'));
      const dateB = new Date(b.expiry.split('-').reverse().join('-'));
      return dateA - dateB;
    });

    setData(sortedData);
  }, []);

  const getExpiryClass = (expiryDateStr) => {
    const today = new Date();
  
    const [day, month, year] = expiryDateStr.split('-');
    const expiryDate = new Date(`${year}-${month}-${day}`); 
  
    const diffTime = expiryDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 0) {
      return "bg-red-50 hover:bg-red-100 text-red-800 border-l-4 border-red-500"; 
    } else if (diffDays <= 30) {
      return "bg-yellow-50 hover:bg-yellow-100 text-yellow-800 border-l-4 border-yellow-500";
    }
    return "hover:bg-gray-50 text-gray-800"; 
  };

  return (

    <div className="bg-[#eef1f4] p-8 min-h-screen flex justify-center items-start font-sans">
      
      <div className="bg-white border border-gray-200 rounded-lg p-6 w-full max-w-5xl shadow-md">
        
        <div className="border-b border-gray-300 pb-3 mb-5 flex items-center gap-3">
            <Calendar className="w-6 h-6 text-gray-600" />
            <h2 className="text-xl font-normal text-gray-800">
              Account Expiry <span className="font-semibold text-black">Report</span>
            </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-300 expiry-table">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-700 border border-gray-300">
                  SR. NO.
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-700 border border-gray-300">
                  NAME
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-700 border border-gray-300">
                  EMAIL
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-700 border border-gray-300">
                  EXPIRY DATE
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {data.map((item, index) => (
                <tr 
                  key={item.id} 
                  className={getExpiryClass(item.expiry)}
                >
                  <td className="px-6 py-3 whitespace-nowrap text-sm font-medium border border-gray-300" data-label="SR NO">
                    {index + 1}
                  </td>
                  <td className="px-6 py-3 whitespace-nowrap text-sm border border-gray-300" data-label="Name">
                    {item.name}
                  </td>
                  <td className="px-6 py-3 whitespace-nowrap text-sm border border-gray-300" data-label="Email">
                    {item.email}
                  </td>
                  <td className="px-6 py-3 whitespace-nowrap text-sm font-semibold border border-gray-300" data-label="Expiry Date">
                    {item.expiry}
                    
                    {getExpiryClass(item.expiry).includes('red') && (
                        <span className="ml-2 px-2 py-0.5 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-200 text-red-800">
                            Expired
                        </span>
                    )}
                    {getExpiryClass(item.expiry).includes('yellow') && (
                        <span className="ml-2 px-2 py-0.5 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-200 text-yellow-800">
                            Expiring Soon
                        </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {data.length === 0 && (
            <p className="text-center text-gray-500 py-10">No account expiry data found.</p>
        )}
      </div>
    </div>
  );
}

