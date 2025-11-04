"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

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
    if (e.target.files && e.target.files[0]) {
      setProfileImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Saved successfully (UI only demo)");
  };

  return (
    <div className="bg-[#f4f6f9] min-h-screen p-4 sm:p-6 lg:p-8 font-sans">
      <div className="max-w-6xl mx-auto bg-white border border-[#e0e0e0] rounded-sm shadow-sm">
        <div className="border-b border-[#000000] p-4 sm:p-5">
          <h2 className="text-[20px] font-normal text-[#333] mt-[10px] mb-[10px] ml-[10px]">
            Add <span className="font-semibold">Salesperson</span>
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="p-4 sm:p-6 lg:p-8">
          <div className="grid grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-10 mt-[4px] mb-[8px]">
            <div className="flex flex-col space-x-5">
              <label className="block text-sm text-gray-600 mt-[40px] mb-[10px] ml-[10px]">
                User Name
              </label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="User Name"
                className="w-[500px] h-[50px] mt-[10px] mb-[10px] ml-[10px] flex space-x-[10px] space-y-[4px] border border-[#ccc] rounded-[5px] px-3 py-2 text-sm focus:outline-none"
                style={{textIndent: "10px"}}
              />
            </div>

            <div className="flex flex-col mt-[4px] mb-[8px] ">
              <label className="block text-sm text-gray-600 mt-[40px] mb-[10px] mr-[10px]">
                Profile Image
              </label>
              <div className="flex flex-col sm:flex-row sm:items-start gap-4 mt-1">
                <input
                  type="file"
                  onChange={handleImageChange}
                  className="text-sm pt-1"
                />
                <div className="w-[100px] h-[100px] mt-[10px] mb-[10px] mr-[10px] border border-[#ccc] flex items-center justify-center bg-white mt-3 sm:mt-0">
                  {profileImage ? (
                    <img
                      src={profileImage}
                      alt="preview"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-xs text-gray-400 text-center px-2">
                      No file chosen
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>


          <div className="grid grid-cols-2 sm:grid-cols-2 gap-6 lg:gap-10 mt-[4px] mb-[8px] ">
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
                className="w-[500px] h-[50px] mb-[10px] ml-[10px] flex border border-[#ccc] rounded-[5px] px-3 py-2 text-sm focus:outline-none "
                style={{textIndent: "10px"}}
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
                className="w-[500px] h-[50px] mr-[10px] border border-[#ccc] rounded-[5px] px-3 py-2 text-sm focus:outline-none"
              style={{textIndent: "10px"}}
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
                className="w-[500px] h-[50px] ml-[10px] border border-[#ccc] rounded-[5px] px-3 py-2 text-sm focus:outline-none"
              style={{textIndent: "10px"}}
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
                className="w-[500px] h-[50px] mr-[10px] border border-[#ccc] rounded-[5px] px-3 py-2 text-sm focus:outline-none"
             style={{textIndent: "10px"}}
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
              className="w-[505px] h-[23px] ml-[10px] border border-[#ccc] rounded-[5px] px-3 py-2 text-sm focus:outline-none bg-white"
              style={{textIndent: "10px"}}
              >
                <option value="">Select Country</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
              </select>
            </div>

            <div>
              <label className="block text-sm text-gray-600 mt-[20px] mb-[10px] ml-[r0px]">
                Country Code
              </label>
              <input
                type="text"
                name="code"
                value={formData.code}
                readOnly
                placeholder="Code"
                className="w-[500px] h-[20px] mr-[10px] border border-[#ccc] rounded-[5px] px-3 py-2 text-sm bg-[#f7f7f7] text-gray-500"
              style={{textIndent: "10px"}}
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mt-[20px] mb-[10px] ml-[10px]">
                Contact No
              </label>
              <input
                type="text"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                placeholder="Contact No"
                className="w-[500px] h-[30px] ml-[10px] border border-[#ccc] rounded-[5px] px-3 py-2 text-sm focus:outline-none"
              style={{textIndent: "10px"}}
              />
            </div>
          </div>


          <div className="border-t h-[30px] border-[#e0e0e0] bg-[#f4f6f9] flex flex-cols-2 sm:flex-row justify-end gap-3 p-4 sm:p-5 mt-[10px]">
            <button
              type="submit"
              className="bg-[#00a7cf] hover:bg-[#009ac0] mr-[10px] text-white px-8 py-2 rounded-[5px] text-sm font-medium w-[100px] sm:w-auto"
            >
              Save
            </button>
            <button
              type="button"
              onClick={() => router.push("/salespersons")}
              className="border border-[#ccc] bg-white text-gray-700 px-8 py-2 rounded-[5px] text-sm font-medium hover:bg-gray-50 w-[100px] sm:w-auto"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
