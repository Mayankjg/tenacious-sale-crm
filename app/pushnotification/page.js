"use client";
import { useState } from "react";
import "./pushnotification.css";

export default function Page() {
  const [deviceType, setDeviceType] = useState("android");
  const [androidMsg, setAndroidMsg] = useState("");
  const [iphoneMsg, setIphoneMsg] = useState("");
  const [selectAll, setSelectAll] = useState(false);
  const [salespersons, setSalespersons] = useState([
    { id: 1, name: "Mayank", checked: false },
  ]);

  const handleSelectAll = () => {
    const newValue = !selectAll;
    setSelectAll(newValue);
    setSalespersons((prev) =>
      prev.map((p) => ({ ...p, checked: newValue }))
    );
  };

  const handleIndividualCheck = (id) => {
    setSalespersons((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, checked: !p.checked } : p
      )
    );
  };

  const handleSend = () => {
    const selectedNames = salespersons
      .filter((p) => p.checked)
      .map((p) => p.name)
      .join(", ") || "None";

    if (deviceType === "android") {
      alert(`Android Notification Sent!\nTo: ${selectedNames}\nMessage: ${androidMsg}`);
    } else {
      alert(`iPhone Notification Sent!\nTo: ${selectedNames}\nMessage: ${iphoneMsg}`);
    }
  };

  return (
    <div className="page-container">
      <div className="push-container">
        <h3>
          Push <b>Notification</b>
        </h3>

        <div className="form-section">
          <label className="label">Sales Person</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="device"
                checked={deviceType === "android"}
                onChange={() => setDeviceType("android")}
              />{" "}
              With Android Device
            </label>
            <label>
              <input
                type="radio"
                name="device"
                checked={deviceType === "iphone"}
                onChange={() => setDeviceType("iphone")}
              />{" "}
              With iPhone Device
            </label>
          </div>
        </div>

        <div className="form-section">
          <div className="checkbox-group">
            <label>
              <input
                type="checkbox"
                checked={selectAll}
                onChange={handleSelectAll}
              />{" "}
              <b>Name</b>
            </label>
            <br />
            {salespersons.map((p) => (
              <label key={p.id}>
                <input
                  type="checkbox"
                  checked={p.checked}
                  onChange={() => handleIndividualCheck(p.id)}
                />{" "}
                {p.name}
              </label>
            ))}
          </div>
        </div>

        {deviceType === "android" ? (
          <div className="form-section">
            <label className="label">Message</label>
            <textarea
              placeholder="Your Android Message"
              value={androidMsg}
              onChange={(e) => setAndroidMsg(e.target.value)}
            ></textarea>
          </div>
        ) : (
          <div className="form-section">
            <label className="label">Message</label>
            <textarea
              placeholder="Your iPhone Message"
              value={iphoneMsg}
              onChange={(e) => setIphoneMsg(e.target.value)}
            ></textarea>
          </div>
        )}

        <div className="button-group">
          <button className="btn btn-send" onClick={handleSend}>
            Send
          </button>
          <button
            className="btn btn-cancel"
            onClick={() => {
              setAndroidMsg("");
              setIphoneMsg("");
              setSelectAll(false);
              setSalespersons((prev) => prev.map((p) => ({ ...p, checked: false })));
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
