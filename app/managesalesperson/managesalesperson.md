

----------    Managesalesperson/ Add/ Page.jsx    --------------


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





--------------  1.  Managesalesperson/ Page.jsx     -------------------




"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "./salesperson.css";

export default function ManageSalesperson() {
  const router = useRouter();
  const [salespersons, setSalespersons] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [newEmail, setNewEmail] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch("/api/salespersons")
      .then((res) => res.json())
      .then((data) => setSalespersons(data))
      .catch((err) => console.error(err));
  }, []);

  const filteredSalespersons = salespersons.filter(
    (p) =>
      p.username?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.firstname?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.lastname?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddSalesperson = () => {
    router.push("/addsalesperson");
  };

  const openModal = (person) => {
    setSelectedPerson(person);
    setNewEmail(person.email || "");
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedPerson(null);
    setNewEmail("");
  };

  const handleEmailChange = () => {
    if (!newEmail) return alert("Please enter an email ID");
    // API call for update (example)
    console.log("Updating email for:", selectedPerson.username, "to:", newEmail);
    closeModal();
  };

  return (
    <div className="salesperson-page">
      <div className="salesperson-header">
        <h2>
          Salesperson <b>List</b>
        </h2>
        <button className="add-btn" onClick={handleAddSalesperson}>
          Add Sales Person
        </button>
      </div>

      <hr className="divider" />

      <div className="search-section">
        <input
          type="text"
          placeholder="Search"
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="search-btn">Search</button>
      </div>

      <div className="salesperson-list">
        {filteredSalespersons.length === 0 ? (
          <p className="no-data">No Salespersons Found</p>
        ) : (
          filteredSalespersons.map((p) => (
            <div key={p.id} className="sales-card">
              <div className="sales-left">
                <img
                  src={p.imageUrl || "/default-user.png"}
                  alt="profile"
                  className="profile-img"
                />
                <div className="sales-info">
                  <h3 className="sales-name">{p.username}</h3>
                  <p className="sales-fullname">
                    {p.firstname} {p.lastname}
                  </p>
                  <p className="sales-email">
                    📧 <a href={`mailto:${p.email}`}>{p.email}</a>
                  </p>

                  <div className="sales-details-row">
                    <p className="sales-contact">📞 <strong>{p.contact}</strong></p>
                    <p className="sales-designation">
                      💼 Designation: <strong>{p.designation}</strong>
                    </p>
                  </div>

                  <p className="sales-country">{p.country}</p>
                </div>
              </div>

              <div className="sales-right">
                <button className="view-btn">View Leads</button>
                <button className="change-btn" onClick={() => openModal(p)}>
                  Change Email ID
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* ---------- Email Change Modal ---------- */}
      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Change Email ID</h3>
              <span className="close-btn" onClick={closeModal}>
                close or <b>Esc</b> Key
              </span>
            </div>

            <div className="modal-body">
              <label>New Email ID</label>
              <input
                type="email"
                placeholder="Email ID"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
              />
              <button className="update-btn" onClick={handleEmailChange}>
                Change Email-Id
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}






--------------  2.  Managesalesperson/ Page.jsx     -----------------------


"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ManageSalesperson() {
  const router = useRouter();
  const [salespersons, setSalespersons] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [newEmail, setNewEmail] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch("/api/salespersons")
      .then((res) => res.json())
      .then((data) => setSalespersons(data))
      .catch((err) => console.error(err));
  }, []);

  const filteredSalespersons = salespersons.filter(
    (p) =>
      p.username?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.firstname?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.lastname?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddSalesperson = () => {
    router.push("/addsalesperson");
  };

  const openModal = (person) => {
    setSelectedPerson(person);
    setNewEmail(person.email || "");
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedPerson(null);
    setNewEmail("");
  };

  const handleEmailChange = () => {
    if (!newEmail) return alert("Please enter an email ID");
    console.log("Updating email for:", selectedPerson.username, "to:", newEmail);
    closeModal();
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 sm:mb-0">
          Salesperson <span className="font-bold text-blue-600">List</span>
        </h2>
        <button
          onClick={handleAddSalesperson}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg shadow transition"
        >
          + Add Salesperson
        </button>
      </div>

      <hr className="border-gray-200 mb-6" />

      {/* Search */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <input
          type="text"
          placeholder="Search by name, email, etc..."
          className="flex-1 border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-lg transition">
          Search
        </button>
      </div>

      {/* Salesperson Cards */}
      <div className="space-y-4">
        {filteredSalespersons.length === 0 ? (
          <p className="text-center text-gray-500 py-10 text-lg">
            No Salespersons Found 😕
          </p>
        ) : (
          filteredSalespersons.map((p) => (
            <div
              key={p.id}
              className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-white shadow-md rounded-2xl p-5 border border-gray-200 hover:shadow-lg transition"
            >
              <div className="flex items-start sm:items-center gap-4 w-full sm:w-auto">
                <img
                  src={p.imageUrl || "/default-user.png"}
                  alt="profile"
                  className="w-20 h-20 rounded-full border border-gray-300 object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {p.username}
                  </h3>
                  <p className="text-gray-600">
                    {p.firstname} {p.lastname}
                  </p>
                  <p className="text-sm text-blue-600 mt-1">
                    📧{" "}
                    <a
                      href={`mailto:${p.email}`}
                      className="hover:underline break-all"
                    >
                      {p.email}
                    </a>
                  </p>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-2 text-sm text-gray-700">
                    <p>📞 <strong>{p.contact || "N/A"}</strong></p>
                    <p>
                      💼 Designation:{" "}
                      <strong>{p.designation || "Not specified"}</strong>
                    </p>
                  </div>

                  <p className="text-sm text-gray-500 mt-1">{p.country}</p>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-3 mt-4 sm:mt-0">
                <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm shadow transition">
                  View Leads
                </button>
                <button
                  onClick={() => openModal(p)}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg text-sm shadow transition"
                >
                  Change Email
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Email Change Modal */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-2xl shadow-lg w-[90%] max-w-md p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-800">
                Change Email ID
              </h3>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 text-sm"
              >
                ✖ Close
              </button>
            </div>

            {/* Body */}
            <div>
              <label className="block text-gray-700 mb-2 text-sm">
                New Email ID
              </label>
              <input
                type="email"
                placeholder="Enter new email"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 outline-none mb-4"
              />
              <button
                onClick={handleEmailChange}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition shadow"
              >
                Update Email
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
