"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Mail, Phone, Briefcase, Trash2, Key } from "lucide-react";

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

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[1000] p-5"
      onClick={onClose}
    >
      <div
        className="bg-[white] mt-[120px] border border-gray-300 p-[30px] rounded-[10px] w-[400px] max-w-[400px] shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-xl font-semibold mb-4 text-gray-900">Change Password</h3>
        <form onSubmit={handleSubmit}>
          {error && <p className="text-red-500 mb-3 text-sm">{error}</p>}

          <label className="block mb-[10px] text-sm font-medium text-gray-700">New Password</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full p-[10px] mb-[15px] border border-gray-300 rounded-[5px] pl-[10px]"
            placeholder="Enter new password"
            required
            minLength="6"
          />

          <label className="block mb-[10px] text-sm font-medium text-gray-700">Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full p-[10px] mb-[15px] border border-gray-300 rounded-[5px] pl-[10px]"
            placeholder="Confirm password"
            required
          />

          <div className="flex justify-end gap-3 mt-4">
            <button
              type="submit"
              className="bg-[#00a7cf] hover:bg-[#0094b8] text-white px-[15px] py-[10px] rounded-[5px] font-bold ml-[20px] transition-colors"
            >
              Update Password
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-[#f0f0f0] hover:bg-gray-200 text-[#333] px-[15px] py-[10px] rounded-[5px] font-bold ml-[10px] transition-colors"
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

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[1000] p-5"
      onClick={onClose}
    >
      <div
        className="bg-[white] mt-[120px] p-[70px] border border-gray-200 rounded-[10px] w-[300px] max-w-[400px] shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-xl font-semibold mb-4 text-gray-900">Change Email ID</h3>
        <form onSubmit={handleSubmit}>
          {error && <p className="text-red-500 mb-3 text-sm">{error}</p>}

          <label className="block mb-[10px] text-sm font-medium text-gray-700">New Email ID</label>
          <input
            type="email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
            className="w-full p-[10px] mb-[15px] border border-gray-300 rounded-[5px] pl-[10px]"
            placeholder="Enter new email address"
            required
          />

          <div className="flex justify-end gap-3 mt-4">
            <button
              type="submit"
              className="bg-[#133b74] hover:bg-[#0f2f5a] text-white px-[15px] py-[10px] rounded-[5px] font-bold ml-[20px] transition-colors"
            >
              Update Email
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-[#f0f0f0] hover:bg-gray-200 text-[#333] px-[15px] py-[10px] rounded-[5px] font-bold ml-[10px] transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
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
    if (!confirm("Are you sure you want to delete this salesperson ?")) return;

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
    <div className="bg-[#eef1f4] p-5 min-h-[80vh] flex justify-center items-start font-['Segoe_UI',Tahoma,Geneva,Verdana,sans-serif]">
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

      <div className="p-[6px] bg-[white] mt-[20px] h-[2000px] rounded-[5px] w-full max-w-[1200px] xl:w-[95%] xl:max-w-[1100px]">
        {/* Header Section */}
        <div className="bg-white w-full px-4 py-4">
          <div className="flex justify-between items-center flex-wrap gap-4">
            <h2 className="text-2xl ml-5 font-semibold text-gray-900 max-[768px]:ml-0 max-[768px]:text-xl">
              Salesperson <strong>List</strong>
            </h2>
            <button
              onClick={() => router.push("/managesalesperson/add")}
              className="bg-[#1f3853] hover:bg-[#111132] text-[white] mr-5 text-[20px] px-4 py-2 rounded-[6px] transition-colors max-[768px]:mr-0 max-[768px]:w-full max-[768px]:text-base"
            >
              Add Sales Person
            </button>
          </div>
          <hr className="border-t border-black mt-2 mb-6" />
        </div>

        {/* Search Section */}
        <div className="flex items-center ml-[15px] gap-2 mb-6 max-[768px]:flex-col max-[768px]:ml-0 max-[768px]:px-4">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-[200px] ml-auto mr-[30px] h-[35px] mt-[10px] border border-gray-300 rounded-[5px] mb-10 px-3 py-2 text-[18px] focus:outline-none focus:ring-2 focus:ring-[#00a7cf] pl-[10px] max-[768px]:w-full max-[768px]:ml-0 max-[768px]:mr-0 max-[768px]:mt-0 max-[768px]:mb-0 max-[768px]:text-base"
          />
          <button className="bg-[#0baad1] w-[100px] h-[40px] mr-[20px] text-[white] mr-1 mb-10 mt-[10px] px-5 py-2 text-[18px] font-medium rounded-[5px] hover:bg-[#0094b8] transition-colors max-[768px]:w-full max-[768px]:mr-0 max-[768px]:mb-0 max-[768px]:mt-0 max-[768px]:text-base">
            Search
          </button>
        </div>

        {/* Cards List */}
        {displayList.length > 0 ? (
          <div className="w-[1150px] mr-[25px] grid grid-cols-1 gap-[10px] max-[1280px]:w-full max-[1280px]:ml-0 max-[1280px]:px-4">
            {displayList.map((sp, index) => (
              <div
                key={sp.id || index}
                className="flex items-center mt-[20px] bg-[white] ml-[20px] hover:bg-[#f6f6f6] mb-[10px] justify-between border border-gray-200 rounded-[10px] p-4 shadow-sm hover:shadow-md transition-all duration-200 max-[768px]:flex-col max-[768px]:items-start max-[768px]:mt-3"
              >
                <div className="flex items-start gap-4 flex-1 w-full max-[768px]:flex-col">
                  <img
                    src={sp.profileImage || "/default-avatar.png"}
                    alt="Profile"
                    className="w-[70px] h-[100px] ml-[10px] mt-[10px] rounded-[10px] mt-5 border border-gray-300 object-cover max-[768px]:ml-0 max-[768px]:mt-0 max-[768px]:w-[60px] max-[768px]:h-[80px]"
                  />
                  <div className="flex-1 w-full">
                    <h3 className="text-xl ml-[30px] mt-5 font-bold text-gray-800 leading-tight max-[768px]:ml-0 max-[768px]:mt-2 max-[768px]:text-lg">
                      {sp.username}
                    </h3>

                    {/* First Row */}
                    <div className="flex items-center justify-between ml-[30px] mt-[10px] max-[768px]:flex-col max-[768px]:items-start max-[768px]:ml-0 max-[768px]:gap-3">
                     <div className="flex items-center gap-10 max-[768px]:flex-col max-[768px]:items-start max-[768px]:gap-2">
                       <p className="text-gray-600 text-base capitalize max-w-[200px] truncate max-[768px]:text-sm max-[768px]:max-w-full">
                        {sp.firstname} {sp.lastname}
                       </p>
                     <div className="flex items-center gap-[10px] ml-[110px] max-[768px]:ml-0">
                      <Briefcase className="w-[18px] h-[18px] text-gray-500 flex-shrink-0" />
                      <span className="text-base text-gray-700 ml-[5px] max-[768px]:text-sm max-[768px]:mr-0">
                         Designation: <span className="font-semibold max-w-[150px] inline-block truncate align-bottom">{sp.designation}</span>
                      </span>
                    </div>
                   </div>
                   <div className="flex items-center gap-3 max-[768px]:flex-col max-[768px]:w-full max-[768px]:mt-2">
                   <div
                     className="relative group flex items-center cursor-pointer"
                     onClick={() => handleDelete(sp.id)}
                   >
                  <Trash2
                    className="w-5 h-5 mr-[100px] text-gray-600 hover:text-red-600 transition max-[768px]:mr-0"
                    title="Delete"
                  />
                  <span className="absolute -top-[20px] -left-[10px] bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap pointer-events-none max-[768px]:left-1/2 max-[768px]:-translate-x-1/2">
                   Delete
               </span>
                </div>

                    <button className="bg-[#dc3545] h-[35px] w-[120px] mt-[10px] mr-[50px] rounded-[5px] text-[white] hover:bg-[#c82333] text-[15px] font-medium transition-colors max-[768px]:w-full max-[768px]:mt-0 max-[768px]:mr-0 max-[768px]:text-sm">
                    View Leads
                      </button>
                    </div>
                    </div> 
                    
                    {/* Second Row */}
                    <div className="flex items-center justify-between ml-[30px] mt-[15px] mb-5 max-[768px]:flex-col max-[768px]:items-start max-[768px]:ml-0 max-[768px]:gap-3 max-[768px]:mb-3">
                      <div className="flex items-center gap-10 max-[768px]:flex-col max-[768px]:items-start max-[768px]:gap-2 max-[768px]:w-full">
                       <div className="flex items-center gap-[10px]">
                       <Mail className="w-[18px] h-[18px] mb-[10px] text-gray-500 flex-shrink-0 max-[768px]:mb-0" />
                          <a
                            href={`mailto:${sp.email}`}
                            className="text-[#007bff] mb-[10px] text-base hover:underline break-all max-w-[250px] max-[768px]:mb-0 max-[768px]:text-sm max-[768px]:max-w-full"
                          >
                            {sp.email}
                          </a>
                        </div>
                       <div className="flex items-center mb-[10px] ml-[60px] gap-[10px] max-[768px]:mb-0 max-[768px]:ml-0 max-[768px]:w-full">
                      <Phone className="w-[18px] h-[18px] text-gray-500 flex-shrink-0" />
                    <span className="text-base text-gray-700 max-[768px]:text-sm">
                   Contact Number:{" "}
                  <span className="font-semibold max-w-[150px] inline-block truncate align-bottom">
                   {sp.contact}
                   </span>
                 </span>
              </div>
            </div>

  <div className="flex items-center gap-3 max-[768px]:flex-col max-[768px]:w-full max-[768px]:mt-2">
    <div
      className="relative group flex items-center cursor-pointer"
      onClick={() => handleOpenChangePassword(sp.id)}
    >
      <Key
        className="w-5 h-5 mr-[100px] mb-[10px] text-gray-600 hover:text-[#133b74] transition max-[768px]:mr-0 max-[768px]:mb-0"
        title="Change Password"
      />
      <span className="absolute -top-[20px] right-[40px] bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap pointer-events-none max-[768px]:top-[-30px] max-[768px]:bottom-auto max-[768px]:left-1/2 max-[768px]:-translate-x-1/2 max-[768px]:right-auto">
        Change Password
      </span>
    </div>

    <button
      className="bg-[#2b3342] h-[35px] w-[140px] mb-[10px] mr-[30px] rounded-[5px] text-[white] hover:bg-[#0f2f5a] text-[15px] font-medium transition-colors max-[768px]:w-full max-[768px]:mb-0 max-[768px]:mr-0 max-[768px]:text-sm"
      onClick={() => handleOpenChangeEmail(sp.id)}
    >
      Change Email ID
    </button>
  </div>
</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 text-lg font-medium mt-10 max-[768px]:text-base max-[768px]:mt-5 max-[768px]:px-4">
            No Salespersons Found
          </div>
        )}
      </div>
    </div>
  );
}