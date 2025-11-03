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
  const [device, setDevice] = useState("android");
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [message, setMessage] = useState("");

  const users = ["Name", "suku chauhan"];

  const handleUserSelect = (user) => {
    if (selectedUsers.includes(user)) {
      setSelectedUsers(selectedUsers.filter((u) => u !== user));
    } else {
      setSelectedUsers([...selectedUsers, user]);
    }
  };

  const handleSend = () => {
    if (!message.trim()) return alert("Please enter a message");
    alert(`Notification sent to ${selectedUsers.join(", ")} on ${device} device`);
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-[#f5f7f9] flex justify-center items-start py-10">
      <div className="w-full max-w-6xl bg-white border border-[#dfe3e8] rounded-sm">
        {/* Header */}
        <div className="border-b border-[#dfe3e8] px-6 py-4">
          <h3 className="text-[18px] font-normal text-gray-800">
            Push <span className="font-semibold">Notification</span>
          </h3>
        </div>

        {/* Body */}
        <div className="px-8 py-8">
          <div>
            <label className="block text-gray-700 text-[15px] mb-3 font-normal">
              Sales Person
            </label>

            {/* Device Selection */}
            <div className="flex items-center gap-10 mb-6">
              <label className="flex items-center gap-2 text-gray-700 text-[15px]">
                <input
                  type="radio"
                  name="device"
                  value="android"
                  checked={device === "android"}
                  onChange={() => setDevice("android")}
                  className="w-[18px] h-[18px] accent-[#00a7cf]"
                />
                With Android Device
              </label>

              <label className="flex items-center gap-2 text-gray-700 text-[15px]">
                <input
                  type="radio"
                  name="device"
                  value="iphone"
                  checked={device === "iphone"}
                  onChange={() => setDevice("iphone")}
                  className="w-[18px] h-[18px] accent-[#00a7cf]"
                />
                With iPhone Device
              </label>
            </div>

            {/* Checkboxes */}
            <div className="flex flex-col gap-2 mb-8">
              {users.map((user) => (
                <label
                  key={user}
                  className="flex items-center gap-2 text-gray-700 text-[15px]"
                >
                  <input
                    type="checkbox"
                    checked={selectedUsers.includes(user)}
                    onChange={() => handleUserSelect(user)}
                    className="w-[18px] h-[18px] accent-[#00a7cf]"
                  />
                  <span
                    className={`${
                      user === "Name" ? "font-semibold" : "font-normal"
                    }`}
                  >
                    {user}
                  </span>
                </label>
              ))}
            </div>

            {/* Message */}
            <div className="mb-6">
              <label className="block text-gray-700 text-[15px] mb-3 font-normal">
                Message
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows="5"
                placeholder="Your Message"
                className="w-full border border-[#dfe3e8] rounded-sm text-[15px] text-gray-700 p-3 outline-none focus:ring-2 focus:ring-[#00a7cf]"
              ></textarea>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#f3f5f7] border-t border-[#dfe3e8] px-8 py-4 flex gap-4">
          <button
            onClick={handleSend}
            className="bg-[#00a7cf] hover:bg-[#0097ba] text-white text-[15px] font-medium px-6 py-2 rounded-sm"
          >
            Send
          </button>
          <button
            onClick={() => setMessage("")}
            className="bg-white border border-[#dfe3e8] hover:bg-gray-50 text-gray-700 text-[15px] font-medium px-6 py-2 rounded-sm"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

