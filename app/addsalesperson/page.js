"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import "./AddSalesperson.css";

export default function AddSalesperson() {
  const [preview, setPreview] = useState(null);
  const router = useRouter();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleCancel = () => {
    router.push("/managesalesperson");
  };

  return (
    <div className="page-container">
      <div className="header">
        <h2>
          Add <span className="bold-text">Salesperson</span>
        </h2>
      </div>

      <hr className="divider" />

      <form className="form-container">

        <div className="form-row">
          <div className="form-group">
            <label>User Name</label>
            <input type="text" placeholder="User Name" />
          </div>

          <div className="form-group image-upload">
            <label>Profile Image</label>
            <div className="upload-section">
              <input type="file" accept="image/*" onChange={handleImageChange} />
              <div className="image-preview">
                {preview ? (
                  <img src={preview} alt="Preview" />
                ) : (
                  <div className="no-image"></div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>First Name</label>
            <input type="text" placeholder="First Name" />
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input type="text" placeholder="Last Name" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Email" />
          </div>

          <div className="form-group">
            <label>Designation</label>
            <input type="text" placeholder="Designation" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Country</label>
            <select>
              <option>Select Country</option>
              <option>India</option>
              <option>USA</option>
              <option>UK</option>
            </select>
          </div>

          <div className="form-group">
            <label>Country Code</label>
            <input type="text" placeholder="Code" disabled />
          </div>

          <div className="form-group">
            <label>Contact No</label>
            <input type="text" placeholder="Contact No" />
          </div>
        </div>

        <div className="button-section">
          <button type="submit" className="save-btn">
            Save
          </button>
          <button
            type="button"
            className="cancel-btn"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
