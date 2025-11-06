

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














"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Mail, Phone, Briefcase, Trash2, Key } from "lucide-react";

export default function SalespersonList() {
  const router = useRouter();
  const [salespersons, setSalespersons] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch("/api/salespersons");
    const data = await res.json();
    setSalespersons(data);
  };

  // DELETE salesperson
  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this salesperson?")) return;
    try {
      const res = await fetch(`/api/salespersons/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        alert("Salesperson deleted successfully");
        fetchData(); // refresh list
      } else {
        alert("Failed to delete salesperson");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  };

  // CHANGE PASSWORD
  const handleChangePassword = async (id) => {
    const newPassword = prompt("Enter new password:");
    if (!newPassword) return;

    try {
      const res = await fetch(`/api/salespersons/${id}/change-password`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: newPassword }),
      });

      if (res.ok) {
        alert("Password updated successfully!");
      } else {
        alert("Failed to update password");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  };

  // Filter by search query
  const filteredSalespersons = salespersons.filter(
    (sp) =>
      sp.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sp.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6 bg-[#f4f6f9] rounded-[5px] w-[1200px] min-h-screen font-sans">
      {/* Header */}
      {/* Header Section */}
      <div className="bg-[#f4f6f9] w-full px-6 py-4">
  <div className="flex justify-between items-center">
    <h2 className="text-2xl ml-[20px] font-semibold text-gray-900">
      Salesperson List</h2>
    <button
      onClick={() => router.push("/managesalesperson/add")}
      className="bg-[#1a1a3d] hover:bg-[#111132] text-[white] mr-[20px] text-[20px] px-4 py-2 rounded-[6px]"
    >
      Add Sales Person
    </button>
  </div>
  <hr className="border border-black mt-2 mb-6" />
</div>


      <div className="flex items-center gap-2 mb-6">
        <input
          type="text"
          placeholder="Search by name or email"
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-[200px] ml-[875px] mr-[10px] h-[35px] mt-[10px] border border-gray-300 rounded-[5px] mb-[40px] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00a7cf]"
        />
        <button className="bg-[#00a7cf] w-[70px] h-[40px] text-[white] mr-[4px] mb-[40px] mt-[10px] px-5 py-2 text-sm font-medium rounded-[5px] hover:bg-[#0094b8]">
          Search
        </button>
      </div>

      {/* Cards Section */}
      {salespersons.length > 0 ? (
        <div className="w-[1150px] ml-[10px] grid grid-cols-1 gap-[20px]">
          {salespersons.map((sp, index) => (
            <div
              key={index}
              className="flex items-center mb-[10px] justify-between bg-white border border-gray-200 rounded-[10px] p-4 shadow-sm hover:shadow-md transition-all duration-200"
            >
              {/* Left Section - Info */}
              <div className="flex items-start gap-4">
                <img
                  src={sp.profileImage || "/default-avatar.png"}
                  alt="Profile"
                  className="w-[70px] h-[70px] ml-[40px] rounded-[40px] mt-[20px] border border-gray-300 object-cover"
                />
                <div>
                  <h3 className="text-[16px] ml-[50px] mt-[20px] font-semibold text-gray-800 leading-tight">
                    {sp.username}
                  </h3>
                  <p className="text-gray-600 ml-[50px] text-sm capitalize leading-tight">
                    {sp.firstname} {sp.lastname}
                  </p>

                  <div className="flex flex-col mb-[10px] text-sm text-gray-700 mt-1">
                    <div className="flex ml-[50px] mb-[10px] items-center gap-[10px] mr-4">
                      <Briefcase className="w-[20px] h-[20px] text-gray-500" />
                      <span>
                        Designation:{" "}
                        <span className="font-semibold">{sp.designation}</span>
                      </span>
                    </div>
                    <div className="flex mb-[20px] ml-[50px] items-center gap-[10px]">
                      <Phone className="w-[20px] h-[20px] text-gray-500" />
                      <span>
                        Contact Number:{" "}
                        <span className="font-semibold">
                          {sp.code} {sp.contact}
                        </span>
                      </span>
                    </div>
                  </div>

                  <p className="flex items-center ml-[50px] mb-[10px] gap-[10px] text-sm text-gray-700 mt-[1px]">
                    <Mail className="w-4 h-4 text-gray-500" />
                    <a
                      href={`mailto:${sp.email}`}
                      className="text-[#007bff] hover:underline break-all"
                    >
                      {sp.email}
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-end gap-2 mr-[20px]">
                {/* Delete Icon */}
                <div
                  className="relative group flex flex-col items-center"
                  onClick={() => handleDelete(sp.id)}
                >
                  <Trash2
                    className="w-[20px] h-5 text-gray-600 mb-[15px] cursor-pointer hover:text-red-600 transition"
                    title="Delete"
                  />
                  <span className="absolute -left-[40px] bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                    Delete
                  </span>
                </div>

                {/* Change Password Icon */}
                <div className="relative group flex flex-col items-center mt-2">
                  <Key
                    className="w-[20px] h-5 text-gray-600 ml-[600px] cursor-pointer hover:text-[#133b74] transition"
                    title="Change Password"
                  />
                  <span className="absolute -left-[55px] ml-[600px] bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                    Change Password
                  </span>
                </div>
              </div>

              {/* Right Section - Buttons */}
              <div className="flex flex-col items-end gap-2">
                <button className="bg-[#dc3545] mb-[10px] mr-[20px] h-[30px] w-[150px] rounded-[5px] text-[white] hover:bg-[#c82333] text-sm font-medium px-4 py-2 rounded-md">
                  View Leads
                </button>
                <button className="bg-[#133b74] mb-[10px] mr-[20px] h-[30px] w-[150px] rounded-[5px] text-[white] hover:bg-[#0f2f5a] text-sm font-medium px-4 py-2 rounded-md flex items-center gap-1">
                  <Key className="w-4 h-4" /> Change Email ID
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500 text-[18px] font-medium mt-10">
          No Salespersons Found
        </div>
      )}
    </div>
  );
}




"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Mail, Phone, Briefcase, Trash2, Key } from "lucide-react";

const pageContainerStyle = {
  backgroundColor: '#eef1f4',
  padding: '20px',
  minHeight: '80vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
  fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'
};

export default function SalespersonList() {
  const router = useRouter();
  const [salespersons, setSalespersons] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

   useEffect(() => {
    const storedData = localStorage.getItem("salespersons");
    if (storedData) {
      setSalespersons(JSON.parse(storedData));
    }
  }, []);

  // ✅ Update localStorage whenever salespersons change
  useEffect(() => {
    localStorage.setItem("salespersons", JSON.stringify(salespersons));
  }, [salespersons]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch("/api/salespersons");
    const data = await res.json();
    setSalespersons(data);
  };

  const handleDelete = async (id) => {
  if (!confirm("Are you sure you want to delete this salesperson?")) return;

  try {
    const res = await fetch(`/api/salespersons/${id}`, { method: "DELETE" });

    if (res.ok) {
      setSalespersons((prev) => prev.filter((sp) => sp.id !== id));
      alert("Salesperson deleted successfully");
    } else {
      const data = await res.json();
      alert(data.message || "Failed to delete salesperson");
    }
  } catch (error) {
    console.error("Error deleting salesperson:", error);
    alert("Something went wrong");
  }
};


  const handleChangePassword = async (id) => {
    const newPassword = prompt("Enter new password:");
    if (!newPassword) return;

    try {
      const res = await fetch(`/api/salespersons/${id}/change-password`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: newPassword }),
      });

      if (res.ok) {
        alert("Password updated successfully!");
      } else {
        alert("Failed to update password");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  };

  const filteredSalespersons = salespersons.filter(
    (sp) =>
      sp.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sp.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={pageContainerStyle}>

      <div className="bg-[#ffffff] h-[550px] w-[1000px] m-auto">
        <div className="w-[1000px] h-[550px] max-w-10xl bg-white border border-[#e0e0e0] rounded-md shadow-md">
          <div className="border-b border-[#bcbcbc] p-4 sm:p-5">
            <h2 className="text-2xl ml-[20px] font-semibold text-gray-900">
              Salesperson List
            </h2>
            <button
              onClick={() => router.push("/managesalesperson/add")}
              className="bg-[#1a1a3d] hover:bg-[#111132] text-[white] mr-[20px] text-[20px] px-4 py-2 rounded-[6px]"
            >
              Add Sales Person
            </button>
          </div>
          <hr className="border border-black mt-2 mb-6" />
        </div>

        <div className="flex items-center ml-[15px] gap-2 mb-6">
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-[200px] ml-[875px] mr-[10px] h-[35px] mt-[10px] border border-gray-300 rounded-[5px] mb-[40px] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00a7cf]"
            style={{ textIndent: "10px" }}
          />
          <button className="bg-[#00a7cf] w-[70px] h-[40px] text-[white] mr-[4px] mb-[200px] mt-[50px] px-5 py-2 text-sm font-medium rounded-[5px] hover:bg-[#0094b8]">
            Search
          </button>
        </div>

        {salespersons.length > 0 ? (
          <div className="w-[1150px] ml-[25px] grid grid-cols-1 gap-[20px]">
            {salespersons.map((sp, index) => (
              <div
                key={index}
                className="flex items-center mb-[10px] justify-between bg-[white] border border-gray-200 rounded-[10px] p-4 shadow-sm hover:shadow-md transition-all duration-200"
              >

                <div className="flex items-start gap-4">
                  <img
                    src={sp.profileImage || "/default-avatar.png"}
                    alt="Profile"
                    className="w-[70px] h-[150px] ml-[20px] rounded-[10px] mt-[20px] border border-gray-300 object-cover"
                  />
                  <div>
                    <h3 className="text-[16px] ml-[30px] mt-[20px] font-semibold text-gray-800 leading-tight">
                      {sp.username}
                    </h3>
                    <p className="text-gray-600 ml-[30px] text-sm capitalize leading-tight">
                      {sp.firstname} {sp.lastname}
                    </p>

                    <div className="flex flex-col mb-[10px] text-sm text-gray-700 mt-1">
                      <div className="flex ml-[30px] mb-[10px] items-center gap-[10px] mr-4">
                        <Briefcase className="w-[20px] h-[20px] text-gray-500" />
                        <span>
                          Designation:{" "}
                          <span className="font-semibold">{sp.designation}</span>
                        </span>
                      </div>
                      <div className="flex mb-[20px] ml-[30px] items-center gap-[10px]">
                        <Phone className="w-[20px] h-[20px] text-gray-500" />
                        <span>
                          Contact Number:{" "}
                          <span className="font-semibold">
                            {sp.code} {sp.contact}
                          </span>
                        </span>
                      </div>
                    </div>

                    <p className="flex items-center ml-[30px] mb-[5px] gap-[10px] text-sm text-gray-700 mt-[1px]">
                      <Mail className="w-4 h-4 text-gray-500" />
                      <a
                        href={`mailto:${sp.email}`}
                        className="text-[#007bff] hover:underline"
                      >
                        {sp.email}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-2 mr-[20px]">

                  <div
                    className="relative group flex flex-col items-center"
                    onClick={() => handleDelete(sp.id)}
                  >
                    <Trash2
                      className="w-[20px] h-5 text-gray-600 mb-[15px] cursor-pointer hover:text-red-600 transition"
                      title="Delete"
                    />
                    <span className="absolute -left-[40px] bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                      Delete
                    </span>
                  </div>

                  <div className="relative group flex flex-col items-center">
                    <Key
                      className="w-[20px] h-5 text-gray-600 ml-[500px] cursor-pointer hover:text-[#133b74] transition"
                      title="Change Password"
                    />
                    <span className="absolute -left-[40px] ml-[500px] bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                      Change Password
                    </span>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-2">
                  <button className="bg-[#dc3545] mb-[10px] mr-[70px] h-[30px] w-[150px] rounded-[5px] text-[white] hover:bg-[#c82333] text-sm font-medium px-4 py-2 rounded-md">
                    View Leads
                  </button>
                  <button className="bg-[#133b74] mb-[10px] mr-[70px] h-[30px] w-[150px] rounded-[5px] text-[white] hover:bg-[#0f2f5a] text-sm font-medium px-4 py-2 rounded-md flex items-center gap-1"
                  style={{ textIndent: "20px" }}
                  >
                    Change Email ID
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 text-[18px] font-medium mt-10">
            No Salespersons Found
          </div>
        )}
      </div>
    </div>
  );
}










-------    page container layout   ---------------------



"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Mail, Phone, Briefcase, Trash2, Key } from "lucide-react";

const pageContainerStyle = {
  backgroundColor: '#eef1f4',
  padding: '20px',
  minHeight: '80vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
  fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'
};

export default function SalespersonList() {
  const router = useRouter();
  const [salespersons, setSalespersons] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Load from localStorage
  useEffect(() => {
    const storedData = localStorage.getItem("salespersons");
    if (storedData) setSalespersons(JSON.parse(storedData));
  }, []);

  // Save to localStorage when changed
  useEffect(() => {
    localStorage.setItem("salespersons", JSON.stringify(salespersons));
  }, [salespersons]);

  const handleDelete = (id) => {
    if (!confirm("Are you sure you want to delete this salesperson?")) return;
    const updated = salespersons.filter((sp) => sp.id !== id);
    setSalespersons(updated);
    localStorage.setItem("salespersons", JSON.stringify(updated));
    alert("Salesperson deleted successfully");
  };

  const filteredSalespersons = salespersons.filter(
    (sp) =>
      sp.username?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sp.email?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={pageContainerStyle}>
      <div className="bg-[#ffffff] h-[600px] w-[1000px] m-auto">
        <div className="w-[1000px] h-[550px] max-w-10xl bg-[white] rounded-md shadow-md">
          <div className=" ml-[20px] mt-[20px] text-[20px] p-4 sm:p-5">
              Salesperson List
            <button
              onClick={() => router.push("/managesalesperson/add")}
              className="bg-[#1a1a3d] text-[20px] mr-[5px] hover:bg-[#111132] ml-[70px] text-[white] text-[16px] px-6 py-2 rounded-[6px] shadow-sm"
            >
              Add Sales Person
            </button>
          </div>

          <hr className="border-gray-400 mb-6" />

          {/* Search Bar */}
          <div className="flex justify-end items-center mb-8">
            <input
              type="text"
              placeholder="Search"
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-[200px] h-[35px] mr-[10px] border border-gray-300 rounded-[4px] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00a7cf]"
              style={{ textIndent: "10px" }}
            />
            <button className="bg-[#00a7cf] hover:bg-[#0094b8] text-[white] w-[90px] h-[35px] mr-[20px] text-sm font-medium px-5 py-2 h-[40px] rounded-[4px]">
              Search
            </button>
          </div>

          {/* Salesperson List */}
          {filteredSalespersons.length > 0 ? (
            <div className="grid grid-cols-1 gap-6">
              {filteredSalespersons.map((sp, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center bg-[#fafafa] border border-gray-300 rounded-lg p-5 shadow-sm hover:shadow-md transition-all duration-200"
                >
                  {/* Profile Info */}
                  <div className="flex items-start gap-6">
                    <img
                      src={sp.profileImage || "/default-avatar.png"}
                      alt="Profile"
                      className="w-[100px] h-[100px] rounded-lg border border-gray-300 object-cover"
                    />

                    <div className="flex flex-col">
                      <h3 className="text-lg font-semibold text-gray-800">
                        {sp.username}
                      </h3>
                      <p className="text-gray-600 text-sm capitalize">
                        {sp.firstname} {sp.lastname}
                      </p>

                      <div className="mt-2 space-y-1 text-sm text-gray-700">
                        <p className="flex items-center gap-2">
                          <Briefcase className="w-[18px] h-[18px] text-gray-500" />
                          <span>
                            <b>Designation:</b> {sp.designation}
                          </span>
                        </p>
                        <p className="flex items-center gap-2">
                          <Phone className="w-[18px] h-[18px] text-gray-500" />
                          <span>
                            <b>Contact:</b> {sp.code} {sp.contact}
                          </span>
                        </p>
                        <p className="flex items-center gap-2">
                          <Mail className="w-[18px] h-[18px] text-gray-500" />
                          <a
                            href={`mailto:${sp.email}`}
                            className="text-[#007bff] hover:underline"
                          >
                            {sp.email}
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col items-end gap-3">
                    <button
                      onClick={() => handleDelete(sp.id)}
                      className="flex items-center gap-2 bg-[#dc3545] hover:bg-[#c82333] text-white text-sm font-medium px-4 py-2 rounded-md shadow-sm"
                    >
                      <Trash2 className="w-4 h-4" /> Delete
                    </button>

                    <button className="flex items-center gap-2 bg-[#133b74] hover:bg-[#0f2f5a] text-white text-sm font-medium px-4 py-2 rounded-md shadow-sm">
                      <Key className="w-4 h-4" /> Change Password
                    </button>

                    <button className="flex items-center gap-2 bg-[#00a7cf] hover:bg-[#0094b8] text-white text-sm font-medium px-4 py-2 rounded-md shadow-sm">
                      View Leads
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-500 text-[18px] mt-[30px] font-medium mt-10">
              No Salespersons Found
            </div>
          )}
        </div>
      </div>
    </div>
  );
}




-------   responsive     -----------------








"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const pageContainerStyle = {
  backgroundColor: '#eef1f4',
  padding: '20px',
  minHeight: '100vh', 
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
  fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'
};

export default function AddSalesperson() {
  const router = useRouter();
  const [profileImage, setProfileImage] = useState(null);
  const [formData, setFormData] = useState({
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    designation: "",
    country: "",
    code: "",
    contact: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    let code = formData.code;

    if (name === "country") {
      if (value === "India") code = "+91";
      else if (value === "USA") code = "+1";
      else if (value === "UK") code = "+44";
      else code = "";
    }

    setFormData({ ...formData, [name]: value, code });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...formData,
      profileImage,
    };

    const res = await fetch("/api/salespersons", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      alert("Salesperson saved successfully!");
      router.push("/managesalesperson");
    } else {
      alert("Failed to save data");
    }
  };

  return (
    <div style={pageContainerStyle}>
      <div className="bg-[#ffffff] w-full max-w-4xl m-auto">
        <div className="w-full bg-white border border-[#e0e0e0] rounded-md shadow-md">
          
          <div className="border-b border-[#bcbcbc] p-4">
            <h2 className="text-xl font-normal text-[#333]">
              Add <span className="font-semibold">Salesperson</span>
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="p-4 sm:p-6 lg:p-8">
            
            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 mb-4">
              <div className="flex flex-col">
                <label className="block mt-[20px] ml-[20px] text-sm text-gray-600 mb-2">
                  User Name
                </label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="User Name"
                  className="w-[350px] mt-[10px] mb-[20px] ml-[20px] h-[35px] border border-[#ccc] rounded-[5px] px-3 py-2 text-sm focus:outline-none"
                />
              </div> */}

              <div class="col-md-5">
								<div class="form-group">
									<label class="form-label">User Name</label>
									<div class="input-with-icon  right">                                       
									<i class=""></i>
									<input name="userName" type="text" class="form-control" value="" placeholder="User Name" fdprocessedid="lslh9j" />
									</div>
								</div>
							</div>
              </form>

              <div className="flex flex-col">
                <label className="block mt-[20px] ml-[20px] text-sm text-gray-600 mb-2">
                  Profile Image
                </label>
                <div className="flex items-start gap-4">
                  <input
                    type="file"
                    onChange={handleImageChange}
                    className="text-sm pt-1"
                  />
                  <div className="w-[80px] h-[80px] mt-[10px] mb-[20px] ml-[20px] border border-[#ccc] flex items-center justify-center bg-white flex-shrink-0">
                    {profileImage ? (
                      <img
                        src={profileImage}
                        alt="preview"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-xs text-gray-400 text-center px-2">
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 mt-4 mb-4">
              <div className="flex flex-col">
                <label className="block text-sm mt-[20px] ml-[20px] text-gray-600 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                  placeholder="First Name"
                  className="w-[350px] h-[35px] mt-[10px] mb-[20px] ml-[20px] border border-[#ccc] rounded-[5px] px-3 py-2 text-sm focus:outline-none"
                />
              </div>
              <div className="flex flex-col">
                <label className="block text-sm mt-[20px] ml-[20px] text-gray-600 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                  placeholder="Last Name"
                  className="w-[350px] h-[35px] mt-[10px] mb-[20px] ml-[20px] border border-[#ccc] rounded-[5px] px-3 py-2 text-sm focus:outline-none"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 mt-4 mb-4">
              <div className="flex flex-col">
                <label className="block text-sm mt-[20px] ml-[20px] text-gray-600 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-[350px] h-[35px] mt-[10px] mb-[20px] ml-[20px] border border-[#ccc] rounded-[5px] px-3 py-2 text-sm focus:outline-none"
                />
              </div>
              <div className="flex flex-col">
                <label className="block text-sm mt-[20px] ml-[20px] text-gray-600 mb-2">
                  Designation
                </label>
                <input
                  type="text"
                  name="designation"
                  value={formData.designation}
                  onChange={handleChange}
                  placeholder="Designation"
                  // Use w-full for fluid width
                  className="w-[350px] h-[35px] mt-[10px] mb-[20px] ml-[20px] border border-[#ccc] rounded-[5px] px-3 py-2 text-sm focus:outline-none"
                />
              </div>
            </div>

            {/* 5. Grid for Country, Code, Contact No: Use lg:grid-cols-3 */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10 mt-4 mb-4">
              {/* Country */}
              <div className="flex flex-col">
                <label className="block text-sm mt-[20px] ml-[20px] text-gray-600 mb-2">
                  Country
                </label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  // Use w-full for fluid width
                  className="w-[350px] h-[35px] mt-[10px] mb-[20px] ml-[20px] border border-[#ccc] rounded-[5px] px-3 py-2 text-sm focus:outline-none bg-white"
                >
                  <option value="">Select Country</option>
                  <option value="India">India</option>
                  <option value="USA">USA</option>
                  <option value="UK">UK</option>
                </select>
              </div>

              {/* Country Code & Contact No - Combined for a better flow on small screens */}
              <div className="flex gap-4 lg:col-span-2">
                {/* Country Code */}
                <div className="flex flex-col w-[120px] sm:w-[150px] flex-shrink-0"> {/* Adjusted width for better fit */}
                  <label className="block text-sm mt-[20px] ml-[20px] text-gray-600 mb-2">
                    Code
                  </label>
                  <input
                    type="text"
                    name="code"
                    value={formData.code}
                    readOnly
                    placeholder="Code"
                    className="w-[350px] h-[35px] mt-[10px] mb-[20px] ml-[20px] border border-[#ccc] rounded-[5px] px-3 py-2 text-sm bg-[#f7f7f7] text-gray-500 focus:outline-none"
                  />
                </div>

                {/* Contact No */}
                <div className="flex flex-col flex-1">
                  <label className="block text-sm mt-[20px] ml-[20px] text-gray-600 mb-2">
                    Contact No
                  </label>
                  <input
                    type="text"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    placeholder="Contact No"
                    // Use w-full for fluid width
                    className="w-[350px] h-[35px] mt-[10px] mb-[20px] ml-[20px] border border-[#ccc] rounded-[5px] px-3 py-2 text-sm focus:outline-none"
                  />
                </div>
              </div>
            </div>
            
            {/* 6. Footer/Buttons: Use flex justify-end for responsiveness */}
            <div className="bg-[#f4f6f9] border-t border-[#e0e0e0] mt-8 p-4 flex justify-end">
              <div className="flex gap-4">
                <button
                  type="submit"
                  className="h-[35px] px-6 border border-transparent bg-[#00a7cf] text-white rounded-[5px] text-sm font-medium hover:bg-cyan-700 transition duration-150"
                  // Removed fixed width and textIndent style
                >
                  Save
                </button>

                <button
                  type="button"
                  onClick={() => router.push("/managesalesperson")} // Corrected path to align with successful submission
                  className="h-[35px] px-6 bg-[#ffffff] text-[#757575] border border-[#ccc] rounded-[5px] text-sm hover:bg-gray-100 transition duration-150"
                  // Removed fixed width and margin styles
                >
                  Cancel
                </button>
              </div>
            </div>
        </div>
        </div>
  );
}