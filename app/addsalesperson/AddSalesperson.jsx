/* .page-container {
  background: #fff;
  padding: 20px;
  min-height: 100vh;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  border: 1px solid #e0e0e0;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header h2 {
  font-weight: 500;
  font-size: 1.6rem;
  color: #000000;
}

.bold-text {
  font-weight: 600;
}

.divider {
  border: 0;
  border-top: 1px solid #ddd;
  margin: 20px 0;
}

.form-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-row {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
}

.form-group {
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 220px;
}

.form-group label {
  margin-bottom: 5px;
  color: #444;
  font-size: 1rem;
}

.form-group input,
.form-group select {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  outline: none;
}

.form-group input:focus,
.form-group select:focus {
  border-color: #00a0d2;
  box-shadow: 0 0 0 2px rgba(0, 160, 210, 0.2);
}

.image-upload {
  max-width: 500px;
}

.upload-section {
  display: flex;
  align-items: center;
  gap: 20px;
}

.image-preview {
  width: 100px;
  height: 100px;
  border: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f8f8f8;
}

.image-preview img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.no-image {
  width: 60px;
  height: 60px;
  opacity: 0.4;
}

.button-section {
  margin-top: 30px;
  display: flex;
  justify-content: center;
  gap: 15px;
  background: #f4f6f8;
  padding: 20px 0;
  border-top: 1px solid #ddd;
}

.save-btn {
  background-color: #00a0d2;
  color: white;
  border: none;
  padding: 10px 40px;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s;
}

.save-btn:hover {
  background-color: #008dbf;
}

.cancel-btn {
  background-color: white;
  color: #444;
  border: 1px solid #ddd;
  padding: 10px 35px;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;
}

.cancel-btn:hover {
  background-color: #f4f4f4;
} */


"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

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
    if (file) setPreview(URL.createObjectURL(file));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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

    if (res.ok) router.push("/managesalesperson");
    else setError("❌ Failed to save salesperson. Try again.");
  };

  const handleCancel = () => router.push("/managesalesperson");

  return (
    <div className="bg-white min-h-screen border border-gray-200 p-6 font-[Segoe_UI]">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-medium text-black">
          Add <span className="font-semibold">Salesperson</span>
        </h2>
      </div>

      <hr className="border-t border-gray-300 my-5" />

      {error && <p className="text-red-600 font-medium">{error}</p>}

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        {/* Username + Image */}
        <div className="flex flex-wrap gap-8">
          <div className="flex flex-col flex-1 min-w-[220px]">
            <label className="mb-1 text-gray-700 text-base">User Name *</label>
            <input
              type="text"
              name="username"
              placeholder="User Name"
              value={formData.username}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-sky-400 focus:outline-none"
            />
          </div>

          <div className="flex flex-col max-w-md">
            <label className="mb-1 text-gray-700 text-base">Profile Image</label>
            <div className="flex items-center gap-4">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="text-sm"
              />
              <div className="w-24 h-24 border border-gray-300 bg-gray-100 flex items-center justify-center">
                {preview ? (
                  <img
                    src={preview}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-14 h-14 opacity-30 bg-gray-300 rounded"></div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Name fields */}
        <div className="flex flex-wrap gap-8">
          <div className="flex flex-col flex-1 min-w-[220px]">
            <label className="mb-1 text-gray-700">First Name *</label>
            <input
              type="text"
              name="firstname"
              placeholder="First Name"
              value={formData.firstname}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-sky-400 focus:outline-none"
            />
          </div>

          <div className="flex flex-col flex-1 min-w-[220px]">
            <label className="mb-1 text-gray-700">Last Name *</label>
            <input
              type="text"
              name="lastname"
              placeholder="Last Name"
              value={formData.lastname}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-sky-400 focus:outline-none"
            />
          </div>
        </div>

        {/* Email + Designation */}
        <div className="flex flex-wrap gap-8">
          <div className="flex flex-col flex-1 min-w-[220px]">
            <label className="mb-1 text-gray-700">Email *</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-sky-400 focus:outline-none"
            />
          </div>

          <div className="flex flex-col flex-1 min-w-[220px]">
            <label className="mb-1 text-gray-700">Designation *</label>
            <input
              type="text"
              name="designation"
              placeholder="Designation"
              value={formData.designation}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-sky-400 focus:outline-none"
            />
          </div>
        </div>

        {/* Country + Contact */}
        <div className="flex flex-wrap gap-8">
          <div className="flex flex-col flex-1 min-w-[220px]">
            <label className="mb-1 text-gray-700">Country *</label>
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-sky-400 focus:outline-none"
            >
              <option value="">Select Country</option>
              <option>India</option>
              <option>USA</option>
              <option>UK</option>
            </select>
          </div>

          <div className="flex flex-col flex-1 min-w-[220px]">
            <label className="mb-1 text-gray-700">Contact No *</label>
            <input
              type="text"
              name="contact"
              placeholder="Contact No"
              value={formData.contact}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-sky-400 focus:outline-none"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex justify-center gap-5 bg-gray-100 py-5 border-t border-gray-300">
          <button
            type="submit"
            className="bg-sky-500 text-white px-10 py-2 rounded-md hover:bg-sky-600 transition"
          >
            Save
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className="bg-white border border-gray-300 text-gray-700 px-9 py-2 rounded-md hover:bg-gray-100 transition"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
