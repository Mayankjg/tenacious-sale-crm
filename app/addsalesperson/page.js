"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import "./AddSalesperson.css";

export default function AddSalesperson() {
  const [preview, setPreview] = useState(null);
  const [formData, setFormData] = useState({
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    designation: "",
    country: "",
    contact: "",
  });
  const [error, setError] = useState("");
  const router = useRouter();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.username.trim() ||
      !formData.firstname.trim() ||
      !formData.lastname.trim() ||
      !formData.email.trim() ||
      !formData.designation.trim() ||
      !formData.country.trim() ||
      !formData.contact.trim()
    ) {
      setError("⚠️ Please fill all required fields before saving.");
      return;
    }

    setError("");

    const res = await fetch("/api/salespersons", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      router.push("/managesalesperson");
    } else {
      setError("❌ Failed to save salesperson. Try again.");
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

      {error && <p className="error-text">{error}</p>}

      <form className="form-container" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label>User Name *</label>
            <input
              type="text"
              name="username"
              placeholder="User Name"
              value={formData.username}
              onChange={handleChange}
            />
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
            <label>First Name *</label>
            <input
              type="text"
              name="firstname"
              placeholder="First Name"
              value={formData.firstname}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Last Name *</label>
            <input
              type="text"
              name="lastname"
              placeholder="Last Name"
              value={formData.lastname}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Email *</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Designation *</label>
            <input
              type="text"
              name="designation"
              placeholder="Designation"
              value={formData.designation}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Country *</label>
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
            >
              <option value="">Select Country</option>
              <option>India</option>
              <option>USA</option>
              <option>UK</option>
            </select>
          </div>

          <div className="form-group">
            <label>Contact No *</label>
            <input
              type="text"
              name="contact"
              placeholder="Contact No"
              value={formData.contact}
              onChange={handleChange}
            />
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
