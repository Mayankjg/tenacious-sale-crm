"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import "./addsalesperson.css";

export default function AddSalesperson() {
  const [profileImage, setProfileImage] = useState(null);
  const router = useRouter();

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setProfileImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <div className="addsalesperson-container">
      <div className="form-card">
        {/* Header */}
        <div className="form-header">
          <h2>
            Add <span>Salesperson</span>
          </h2>
        </div>

        {/* Form Section */}
        <div className="form-body">
          <form>
            <div className="form-row">
              <div className="form-group">
                <label>User Name</label>
                <input type="text" placeholder="User Name" />
              </div>

              <div className="form-group">
                <label>Profile Image</label>
                <div className="profile-upload">
                  <input type="file" onChange={handleImageChange} />
                  <div className="image-preview">
                    {profileImage ? (
                      <img src={profileImage} alt="Preview" />
                    ) : (
                      <div className="no-image">No file chosen</div>
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
          </form>
        </div>

        {/* Footer Buttons */}
        <div className="form-footer">
          <button type="submit" className="btn-save">
            Save
          </button>
          <button
            type="button"
            className="btn-cancel"
            onClick={() => router.push("/salespersons")}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
