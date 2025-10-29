"use client";
import { useState } from "react";
import "./pushnotification.css";

export default function Page() {
  const [deviceType, setDeviceType] = useState("android");
  const [androidMsg, setAndroidMsg] = useState("");
  const [iphoneMsg, setIphoneMsg] = useState("");

  const handleSend = () => {
    if (deviceType === "android") {
      alert(`Android Notification Sent!\nMessage: ${androidMsg}`);
    } else {
      alert(`iPhone Notification Sent!\nMessage: ${iphoneMsg}`);
    }
  };

  return (
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
        {/* <label className="label">Name</label> */}
        <div className="checkbox-group">
          <label>
            <input type="checkbox" /> <b>Name</b>
          </label>
          <br />
          <label>
            <input type="checkbox" /> Mayank 
          </label>
        </div>
      </div>

      {/* Message Box changes based on device */}
      {deviceType === "android" ? (
        <div className="form-section">
          <label className="label">Android Message</label>
          <textarea
            placeholder="Your Android Message"
            value={androidMsg}
            onChange={(e) => setAndroidMsg(e.target.value)}
          ></textarea>
        </div>
      ) : (
        <div className="form-section">
          <label className="label">iPhone Message</label>
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
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
