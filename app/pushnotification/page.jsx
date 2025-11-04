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
    <div className="min-h-screen bg-[#e9edf0] flex justify-center items-start py-10">
      <div className="w-full max-w-6xl bg-white border border-[#dfe3e8] rounded-sm">
        {/* Header */}
        <div className="border-b border-[#000000] px-8 py-4">
          <h3 className="text-[22px] font-normal text-gray-800">
            Push <span className="font-semibold">Notification</span>
          </h3>
        </div>

        {/* Body */}
        <div className="px-10 py-8">
          <div>
            {/* Sales Person */}
            <label className="block text-gray-700 text-[18px] mb-4 font-medium">
              Sales Person
            </label>

            {/* Device Selection */}
            <div className="flex items-center gap-24 mb-6">
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

            {/* User Checkboxes */}
            <div className="flex flex-col gap-3 mb-8">
              {users.map((user) => (
                <label
                  key={user}
                  className="flex items-center gap-3 text-gray-700 text-[15px]"
                >
                  <input
                    type="checkbox"
                    checked={selectedUsers.includes(user)}
                    onChange={() => handleUserSelect(user)}
                    className="w-[18px] h-[18px] accent-[#00a7cf]"
                  />
                  <span
                    className={`${user === "Name" ? "font-semibold" : "font-normal"
                      }`}
                  >
                    {user}
                  </span>
                </label>
              ))}
            </div>

            {/* Message Box */}
            <div>
              <label className="block text-gray-700 text-[16px] mb-3 font-medium">
                Message
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows="5"
                placeholder="Your Message"
                className="w-[500px] border border-[#dfe3e8] rounded-sm text-[15px] text-gray-500 p-3 outline-none focus:ring-2 focus:ring-[#00a7cf]"
              ></textarea>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#f3f5f7] border-t border-[#dfe3e8] gap-40">
          <button
            onClick={handleSend}
            className="bg-[#00a7cf] hover:bg-[#0097ba] text-white text-[17px] font-medium px-8 py-2 rounded-[3px]"
          >
            Send
          </button>
          <button
            onClick={() => setMessage("")}
            className="bg-white border border-[#000000] hover:bg-gray-50 text-gray-700 text-[17px] font-medium px-8 py-2 rounded-[3px]"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}


