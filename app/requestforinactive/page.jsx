"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Mail, Phone, Briefcase, Trash2, Key } from "lucide-react";

// Internal CSS - Add this to your global CSS or component CSS module
const internalStyles = `
  @media (max-width: 1280px) {
    .page-container {
      padding: 15px;
    }
    .content-wrapper {
      width: 100% !important;
      max-width: 1000px;
    }
  }

  @media (max-width: 1024px) {
    .content-wrapper {
      max-width: 900px;
    }
    .search-container {
      flex-direction: column;
      align-items: flex-start !important;
      margin-left: 0 !important;
    }
    .search-input {
      margin-left: 0 !important;
      width: 100% !important;
      max-width: 300px;
    }
  }

  @media (max-width: 768px) {
    .header-section {
      flex-direction: column;
      gap: 15px;
      align-items: flex-start !important;
    }
    .header-section h2 {
      margin-left: 0 !important;
      font-size: 1.5rem !important;
    }
    .header-section button {
      margin-right: 0 !important;
      width: 100%;
    }
    .card-grid {
      margin-left: 0 !important;
      width: 100% !important;
    }
    .salesperson-card {
      flex-direction: column;
      align-items: flex-start !important;
    }
    .card-content {
      width: 100%;
    }
    .info-row {
      flex-direction: column !important;
      align-items: flex-start !important;
      gap: 15px !important;
    }
    .info-left {
      flex-direction: column !important;
      gap: 10px !important;
      align-items: flex-start !important;
    }
    .info-right {
      width: 100%;
      justify-content: flex-start !important;
      gap: 10px !important;
    }
    .profile-image {
      margin-left: 0 !important;
    }
    .card-header {
      margin-left: 0 !important;
      margin-top: 10px !important;
    }
    .action-button {
      width: 100% !important;
      margin-right: 0 !important;
    }
    .delete-icon, .password-icon {
      margin-right: 0 !important;
    }
  }

  @media (max-width: 480px) {
    .page-container {
      padding: 10px;
    }
    .content-wrapper {
      padding: 10px !important;
    }
    .header-section h2 {
      font-size: 1.25rem !important;
    }
    .search-input {
      max-width: 100%;
    }
    .modal-content {
      width: 90% !important;
      padding: 20px !important;
    }
  }
`;

const NewPasswordModal = ({ salespersonId, onClose, onPasswordChange }) => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (newPassword.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("New password and confirm password do not match.");
      return;
    }

    onPasswordChange(salespersonId, newPassword);
    onClose();
  };

  // Responsive inline styles
  const modalStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
    padding: '20px' // Added for mobile spacing
  };

  const modalContentStyle = {
    backgroundColor: 'white',
    padding: '30px',
    borderRadius: '10px',
    width: '100%',
    maxWidth: '400px', // Changed to max-width for responsiveness
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxSizing: 'border-box',
    textIndent: '10px'
  };

  const buttonStyle = {
    padding: '10px 15px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'background-color 0.2s'
  };

  return (
    <div style={modalStyle} onClick={onClose}>
      <div style={modalContentStyle} onClick={(e) => e.stopPropagation()}>
        <h3 className="text-xl font-semibold mb-4 text-gray-900">Change Password</h3>
        <form onSubmit={handleSubmit}>
          {error && <p className="text-red-500 mb-3 text-sm">{error}</p>}

          <label className="block mb-2 text-sm font-medium mb-[10px] text-gray-700">New Password</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            style={inputStyle}
            placeholder="Enter new password"
            required
            minLength="6"
          />

          <label className="block mb-2 text-sm font-medium mb-[10px] text-gray-700">Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            style={inputStyle}
            placeholder="Confirm password"
            required
          />

          <div className="flex justify-end gap-3 mt-4">
            <button
              type="submit"
              style={{ ...buttonStyle, backgroundColor: '#00a7cf', color: 'white' }}
              className="hover:bg-[#0094b8] ml-[20px]"
            >
              Update Password
            </button>
            <button
              type="button"
              onClick={onClose}
              style={{ ...buttonStyle, backgroundColor: '#f0f0f0', color: '#333' }}
              className="hover:bg-gray-200 ml-[10px]"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};


const ChangeEmailModal = ({ salespersonId, onClose, onEmailChange }) => {
  const [newEmail, setNewEmail] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!validateEmail(newEmail)) {
      setError("Please enter a valid email address.");
      return;
    }

    onEmailChange(salespersonId, newEmail);
    onClose();
  };

  // Responsive inline styles
  const modalStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
    padding: '20px'
  };

  const modalContentStyle = {
    backgroundColor: 'white',
    padding: '30px',
    borderRadius: '10px',
    width: '100%',
    maxWidth: '400px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxSizing: 'border-box',
    textIndent: '10px'
  };

  const buttonStyle = {
    padding: '10px 15px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'background-color 0.2s'
  };

  return (
    <div style={modalStyle} onClick={onClose}>
      <div className="modal-content" style={modalContentStyle} onClick={(e) => e.stopPropagation()}>
        <h3 className="text-xl font-semibold mb-4 text-gray-900">Change Email ID</h3>
        <form onSubmit={handleSubmit}>
          {error && <p className="text-red-500 mb-3 text-sm">{error}</p>}

          <label className="block mb-2 text-sm font-medium mb-[10px] text-gray-700">New Email ID</label>
          <input
            type="email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
            style={inputStyle}
            placeholder="Enter new email address"
            required
          />

          <div className="flex flex-wrap justify-end gap-3 mt-4">
            <button
              type="submit"
              style={{ ...buttonStyle, backgroundColor: '#133b74', color: 'white' }}
              className="hover:bg-[#0f2f5a]"
            >
              Update Email
            </button>
            <button
              type="button"
              onClick={onClose}
              style={{ ...buttonStyle, backgroundColor: '#f0f0f0', color: '#333' }}
              className="hover:bg-gray-200"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Responsive inline styles
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [salespersonToChange, setSalespersonToChange] = useState(null);
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [salespersonToChangeEmail, setSalespersonToChangeEmail] = useState(null);

  useEffect(() => {
    const storedData = localStorage.getItem("salespersons");
    if (storedData) {
      setSalespersons(JSON.parse(storedData));
    }
    fetchData();
  }, []);

  useEffect(() => {
    localStorage.setItem("salespersons", JSON.stringify(salespersons));
  }, [salespersons]);

  const fetchData = async () => {
    try {
      const res = await fetch("/api/salespersons");
      const data = await res.json();
      setSalespersons(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleDelete = (id) => {
    if (!confirm("Are you sure you want to delete this salesperson?")) return;

    try {
      setSalespersons((prev) => prev.filter((sp) => sp.id !== id));
      alert("Salesperson deleted successfully!");
    } catch (error) {
      console.error("Error during local delete:", error);
      alert("Local deletion failed.");
    }
  };

  const handleOpenChangePassword = (id) => {
    setSalespersonToChange(id);
    setIsModalOpen(true);
  };

  const handleCloseChangePassword = () => {
    setIsModalOpen(false);
    setSalespersonToChange(null);
  };

  const handleChangePassword = async (id, newPassword) => {
    await new Promise(resolve => setTimeout(resolve, 500));

    try {
      alert("Password updated successfully!");
    } catch (error) {
      console.error("Error during password simulation:", error);
      alert("Something went wrong");
    }
  };

  const handleOpenChangeEmail = (id) => {
    setSalespersonToChangeEmail(id);
    setIsEmailModalOpen(true);
  };

  const handleCloseChangeEmail = () => {
    setIsEmailModalOpen(false);
    setSalespersonToChangeEmail(null);
  };

  const handleChangeEmail = async (id, newEmail) => {
    await new Promise(resolve => setTimeout(resolve, 500));

    try {
      setSalespersons(prev => prev.map(sp =>
        sp.id === id ? { ...sp, email: newEmail } : sp
      ));

      alert("Email ID updated successfully!");
    } catch (error) {
      console.error("Error during local email change:", error);
      alert("Local Email ID update failed.");
    }
  };

  const filteredSalespersons = salespersons.filter(
    (sp) =>
      sp.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sp.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const displayList = searchQuery ? filteredSalespersons : salespersons;

  return (
    <>
      <style>{internalStyles}</style>
      <div className="page-container" style={pageContainerStyle}>
        {isModalOpen && (
          <NewPasswordModal
            salespersonId={salespersonToChange}
            onClose={handleCloseChangePassword}
            onPasswordChange={handleChangePassword}
          />
        )}

        {isEmailModalOpen && (
          <ChangeEmailModal
            salespersonId={salespersonToChangeEmail}
            onClose={handleCloseChangeEmail}
            onEmailChange={handleChangeEmail}
          />
        )}

        <div className="content-wrapper p-4 bg-white rounded-lg w-full max-w-[1200px]">
          <div className="bg-white w-full px-4 py-4">
            <div className="header-section flex justify-between items-center">
              <h2 className="text-2xl md:ml-5 font-semibold text-gray-900">
                Salesperson <strong>List</strong>
              </h2>
              <button
                onClick={() => router.push("/managesalesperson/add")}
                className="bg-[#1f3853] h-[35px] w-[150px] hover:bg-[#111132] text-[white] md:mr-5 text-lg px-4 py-2 rounded-[5px]"
              >
                Add Sales Person
              </button>
            </div>
            <hr className="border border-black mt-2 mb-6" />
          </div>

          <div className="search-container flex flex-wrap items-center gap-2 mb-6 px-4 justify-end">
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input w-[190px] sm:w-[200px] h-[30px] mr-[20px] border border-gray-300 rounded-[5px] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00a7cf]"
              style={{ textIndent: "10px" }}
            />
            <button className="bg-[#0baad1] search-input w-[200px] sm:w-[200px] mt-[5px] h-[35px] mr-[20px] border border-gray-300 rounded-[5px] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00a7cf]">
              Search
            </button>
          </div>

          {displayList.length > 0 ? (
            <div className="card-grid w-full h-full px-4 md:px-[6px] grid grid-cols-1 gap-3">
              {displayList.map((sp, index) => (
                <div
                  key={sp.id || index}
                  className="flex items-center hover:bg-[#f6f6f6] mt-[10px] justify-between bg-[white] border border-gray-200 rounded-[10px] p-4 shadow-sm hover:shadow-md transition-all duration-200"
                >
                  <div className="flex flex-col ml-[5px] md:flex-row items-start gap-4 flex-1 w-full">
                    <img
                      src={sp.profileImage || "/default-avatar.png"}
                      alt="Profile"
                      className="profile-image mt-[20px] w-[70px] h-[100px] rounded-[5px] border border-gray-300 object-cover"
                    />
                    <div className="card-content mb-[10px] flex-1 w-full">
                      <h3 className="card-header text-lg md:text-xl ml-[110px] mb-[10px] font-bold text-gray-800 leading-tight mb-3">
                        {sp.username}
                      </h3>

                      {/* First row */}
                      <div className="info-row flex flex-wrap items-start justify-between gap-4 mb-4">
                        <div className="info-left flex ml-[40px] flex-wrap items-center gap-4 md:gap-10">
                          <p className="text-gray-600 ml-[70px] mb-[10px] text-sm md:text-base capitalize">
                            {sp.firstname} {sp.lastname}
                          </p>
                          <div className="flex items-center gap-2">
                            <Briefcase className="w-4 h-4 ml-[120px] text-gray-500 flex-shrink-0" />
                            <span className="text-sm md:text-base text-gray-700">
                              Designation: <span className="font-semibold">{sp.designation}</span>
                            </span>
                          </div>
                        </div>

                        <div className="info-right flex flex-wrap items-center gap-3">
                          <div
                            className="relative group flex items-center cursor-pointer"
                            onClick={() => handleDelete(sp.id)}
                          >
                            <Trash2
                              className="delete-icon w-5 h-5 mr-[90px] text-gray-600 hover:text-red-600 transition"
                              title="Delete"
                            />
                            <span className="absolute bottom-[25px] -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                              Delete
                            </span>
                          </div>

                          <button className="action-button bg-[#dc3545] mr-[110px] h-[30px] px-4 rounded-[5px] text-[white] hover:bg-[#c82333] text-sm font-medium">
                            View Leads
                          </button>
                        </div>
                      </div>

                      {/* Second row */}
                      <div className="info-row flex flex-wrap items-start justify-between gap-4">
                        <div className="info-left flex flex-wrap items-center gap-4 md:gap-10">
                          <div className="flex items-center gap-2">
                            <Mail className="w-4 h-4 ml-[110px] text-gray-500 flex-shrink-0" />
                            <a
                              href={`mailto:${sp.email}`}
                              className="text-[#007bff] text-sm md:text-base hover:underline break-all"
                            >
                              {sp.email}
                            </a>
                          </div>
                          <div className="flex items-center gap-2">
                            <Phone className="w-4 h-4 ml-[70px] text-gray-500 flex-shrink-0" />
                            <span className="text-sm md:text-base text-gray-700">
                              Contact: <span className="font-semibold">{sp.contact}</span>
                            </span>
                          </div>
                        </div>

                        <div className="info-right flex flex-wrap items-center gap-3">
                          <div
                            className="relative group flex items-center cursor-pointer"
                            onClick={() => handleOpenChangePassword(sp.id)}
                          >
                            <Key
                              className="password-icon w-5 h-5 mr-[90px] text-gray-600 hover:text-[#133b74] transition"
                              title="Change Password"
                            />
                            <span className="absolute top-[15] mr-[100px] -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                              Change Password
                            </span>
                          </div>

                          <button
                            className="action-button bg-[#2b3342] mr-[95px] h-[30px] px-4 rounded-[5px] text-[white] hover:bg-[#0f2f5a] text-sm font-medium"
                            onClick={() => handleOpenChangeEmail(sp.id)}
                          >
                            Change Email
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-500 text-lg font-medium mt-10">
              No Salespersons Found
            </div>
          )}
        </div>
      </div>
    </>
  );
}