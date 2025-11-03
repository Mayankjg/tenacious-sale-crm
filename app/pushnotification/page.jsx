// "use client";
// import { useState } from "react";
// import "./pushnotification.css";

// export default function Page() {
//   const [deviceType, setDeviceType] = useState("android");
//   const [androidMsg, setAndroidMsg] = useState("");
//   const [iphoneMsg, setIphoneMsg] = useState("");
//   const [selectAll, setSelectAll] = useState(false);
//   const [salespersons, setSalespersons] = useState([
//     { id: 1, name: "Mayank", checked: false },
//   ]);

//   const handleSelectAll = () => {
//     const newValue = !selectAll;
//     setSelectAll(newValue);
//     setSalespersons((prev) =>
//       prev.map((p) => ({ ...p, checked: newValue }))
//     );
//   };

//   const handleIndividualCheck = (id) => {
//     setSalespersons((prev) =>
//       prev.map((p) =>
//         p.id === id ? { ...p, checked: !p.checked } : p
//       )
//     );
//   };

//   const handleSend = () => {
//     const selectedNames = salespersons
//       .filter((p) => p.checked)
//       .map((p) => p.name)
//       .join(", ") || "None";

//     if (deviceType === "android") {
//       alert(`Android Notification Sent!\nTo: ${selectedNames}\nMessage: ${androidMsg}`);
//     } else {
//       alert(`iPhone Notification Sent!\nTo: ${selectedNames}\nMessage: ${iphoneMsg}`);
//     }
//   };

//   return (
//     <div className="page-container">
//       <div className="push-container">
//         <h3>
//           Push <b>Notification</b>
//         </h3>

//         <div className="form-section">
//           <label className="label">Sales Person</label>
//           <div className="radio-group">
//             <label>
//               <input
//                 type="radio"
//                 name="device"
//                 checked={deviceType === "android"}
//                 onChange={() => setDeviceType("android")}
//               />{" "}
//               With Android Device
//             </label>
//             <label>
//               <input
//                 type="radio"
//                 name="device"
//                 checked={deviceType === "iphone"}
//                 onChange={() => setDeviceType("iphone")}
//               />{" "}
//               With iPhone Device
//             </label>
//           </div>
//         </div>

//         <div className="form-section">
//           <div className="checkbox-group">
//             <label>
//               <input
//                 type="checkbox"
//                 checked={selectAll}
//                 onChange={handleSelectAll}
//               />{" "}
//               <b>Name</b>
//             </label>
//             <br />
//             {salespersons.map((p) => (
//               <label key={p.id}>
//                 <input
//                   type="checkbox"
//                   checked={p.checked}
//                   onChange={() => handleIndividualCheck(p.id)}
//                 />{" "}
//                 {p.name}
//               </label>
//             ))}
//           </div>
//         </div>

//         {deviceType === "android" ? (
//           <div className="form-section">
//             <label className="label">Message</label>
//             <textarea
//               placeholder="Your Android Message"
//               value={androidMsg}
//               onChange={(e) => setAndroidMsg(e.target.value)}
//             ></textarea>
//           </div>
//         ) : (
//           <div className="form-section">
//             <label className="label">Message</label>
//             <textarea
//               placeholder="Your iPhone Message"
//               value={iphoneMsg}
//               onChange={(e) => setIphoneMsg(e.target.value)}
//             ></textarea>
//           </div>
//         )}

//         <div className="button-group">
//           <button className="btn btn-send" onClick={handleSend}>
//             Send
//           </button>
//           <button
//             className="btn btn-cancel"
//             onClick={() => {
//               setAndroidMsg("");
//               setIphoneMsg("");
//               setSelectAll(false);
//               setSalespersons((prev) => prev.map((p) => ({ ...p, checked: false })));
//             }}
//           >
//             Cancel
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import { useState } from "react";

export default function PushNotification() {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!message.trim()) return alert("Please enter a message");
    alert(`Push notification sent: ${message}`);
    setMessage("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="bg-white border border-gray-200 shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Push Notification
        </h2>

        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows="4"
          placeholder="Enter your message..."
          className="w-full border border-gray-300 rounded-lg p-3 resize-none focus:ring-2 focus:ring-blue-400 outline-none"
        ></textarea>

        <button
          onClick={handleSend}
          className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Send Notification
        </button>
      </div>
    </div>
  );
}
