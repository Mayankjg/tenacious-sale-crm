"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const pageContainerStyle = {
  backgroundColor: '#eef1f4',
  padding: '20px',
  minHeight: '80vh',
  display: 'grid',
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
      <div className="bg-[#ffffff] h-[550px] w-[1000px] m-auto">
        <div className="w-[1000px] h-[550px] max-w-10xl bg-white border border-[#e0e0e0] rounded-md shadow-md">
          <div className="border-b border-[#bcbcbc] px-[] sm:px-[8]">
            <h2 className="text-[20px] font-normal text-[#333] mt-[10px] mb-[10px] ml-[10px]">
              Add <span className="font-semibold">Salesperson</span>
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="p-4 sm:p-[6px] lg:order-1">
            <div className="grid grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-10 mt-[2px] mb-[2px]">
              <div className="flex flex-col space-x-5">
                <label className="block text-sm text-gray-600 mt-[20px] mb-[5 px] ml-[10px]">
                  User Name
                </label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="User Name"
                  className="w-[400px] h-[30px] mt-[10px] mb-[10px] ml-[10px] flex space-x-[10px] space-y-[4px] border border-[#ccc] rounded-[5px] px-3 py-2 text-sm focus:outline-none"
                  style={{ textIndent: "10px" }}
                />
              </div>

              <div className="flex flex-col  mt-[4px] mb-[8px] lg:order-1">
                <label className="block text-sm text-gray-600 mt-[20px] mb-[10px] mr-[10px]">
                  Profile Image
                </label>
                <div className="flex flex-col-2 sm:flex-row sm:items-start gap-4 mt-1">
                  <input
                    type="file"
                    onChange={handleImageChange}
                    className="text-sm pt-1"
                  />
                  <div className="w-[80px] h-[80px] mt-[2px] mb-[2px] mr-[10px] border border-[#ccc] flex items-center justify-center bg-white sm:mt-0">
                    {profileImage ? (
                      <img
                        src={profileImage}
                        alt="preview"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-xs text-gray-400 text-center px-2">
                        {/* No file chosen */}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 gap-6 lg:gap-10 mt-[2px] mb-[2px] ">
              <div className="flex flex-col space-y-2">
                <label className="block text-sm text-gray-600 mb-[10px] ml-[10px] ">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                  placeholder="First Name"
                  className="w-[400px] h-[30px] mb-[10px] ml-[10px] flex border border-[#ccc] rounded-[5px] px-3 py-2 text-sm focus:outline-none "
                  style={{ textIndent: "10px" }}
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="block text-sm text-gray-600 mb-[10px] mr-[10px]">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                  placeholder="Last Name"
                  className="w-[400px] h-[30px] mr-[10px] border border-[#ccc] rounded-[5px] px-3 py-2 text-sm focus:outline-none"
                  style={{ textIndent: "10px" }}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-6 lg:gap-10 mb-8">
              <div>
                <label className="block text-sm text-gray-600 mb-[10px] ml-[10px]">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-[400px] h-[30px] ml-[10px] border border-[#ccc] rounded-[5px] px-3 py-2 text-sm focus:outline-none"
                  style={{ textIndent: "10px" }}
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-[10px] mr-[10px]">
                  Designation
                </label>
                <input
                  type="text"
                  name="designation"
                  value={formData.designation}
                  onChange={handleChange}
                  placeholder="Designation"
                  className="w-[400px] h-[30px] mr-[10px] border border-[#ccc] rounded-[5px] px-3 py-2 text-sm focus:outline-none"
                  style={{ textIndent: "10px" }}
                />
              </div>
            </div>


            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 mb-[20px]">
              <div>
                <label className="block text-sm text-gray-600 mt-[20px] mb-[10px] ml-[10px]">
                  Country
                </label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-[405px] h-[35px] ml-[10px] border border-[#ccc] rounded-[5px] px-3 py-2 text-sm focus:outline-none bg-white"
                  style={{ textIndent: "10px" }}
                >
                  <option value="">Select Country</option>
                  <option value="India">India</option>
                  <option value="USA">USA</option>
                  <option value="UK">UK</option>
                </select>
              </div>

              <div className="flex items-center gap-4 mt-[10px]">
                {/* Country Code */}
                <div className="flex flex-col">
                  <label className="block text-sm text-gray-600 mb-[8px]">
                    Country Code
                  </label>
                  <input
                    type="text"
                    name="code"
                    value={formData.code}
                    readOnly
                    placeholder="Code"
                    className="w-[150px] h-[35px] border border-[#ccc] rounded-[5px] px-3 py-2 text-sm bg-[#f7f7f7] text-gray-500 focus:outline-none"
                    style={{ textIndent: "10px" }}
                  />
                </div>

                {/* Contact No */}
                <div className="flex flex-col flex-1">
                  <label className="block text-sm text-gray-600 ml-[20px] mb-[8px]">
                    Contact No
                  </label>
                  <input
                    type="text"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    placeholder="Contact No"
                    className="w-[220px] h-[35px] ml-[20px] border border-[#ccc] rounded-[5px] px-3 py-2 text-sm focus:outline-none"
                    style={{ textIndent: "10px" }}
                  />
                </div>
              </div>

            </div>
            <div className="bg-[#f4f6f9] flex justify-end gap-[4] p-[19.5] sm:p-[5] mt-[50px]">
              <div className="bg-[#f4f6f9] w-full flex flex-col-1 px-4 py-4">
                <button
                  type="submit"
                  className="h-[35px] w-[120px] ml-[600px] border border-[#ffffff] flex items-center bg-[#00a7cf] text-[white] px-8 py-2 rounded-[5px] text-sm font-medium"
                  style={{ textIndent: "35px" }}
                >
                  Save
                </button>

                <button
                  type="button"
                  onClick={() => router.push("/managesalesperson")}
                  className=" bg-[#ffffff] text-[#757575] h-[35px] w-[120] mr-[70px] ml-[10px] flex items-center border border-[#ccc] bg-white text-gray-700 px-8 py-2 rounded-[5px] text-sm"
                  style={{ textIndent: "35px" }}
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}