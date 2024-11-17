// AppointmentModal.js
import React, { useState } from 'react';

const AppointmentModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    Name: '',
    Age: '',
    Gender: '',
    Problem: '',
    City: '',
    Mobile: '',
    Email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const scriptURL = import.meta.env.VITE_API_URL;

    if (!scriptURL) {
      alert("API URL is not defined. Please check your .env file.");
      return;
    }

    // Validate mobile number
    const mobileRegex = /^[0-9]{10}$/;
    if (!mobileRegex.test(formData.Mobile)) {
      alert("Please enter a valid mobile number (10 digits).");
      return;
    }

    const formDatab = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDatab.append(key, value);
    });

    try {
      const response = await fetch(scriptURL, {
        method: 'POST',
        body: formDatab, // Use FormData to match what doPost expects
      });

      if (response.ok) {
        alert("Thanks for contacting us! We will contact you soon...");
        onClose(); // Close the modal after submission
        handleReset(); // Reset the form data
      } else {
        alert("There was a problem with your submission.");
      }
    } catch (error) {
      alert("There was an error. Please try again.");
    }
  };

  const handleReset = () => {
    setFormData({
      Name: '',
      Age: '',
      Gender: '',
      Problem: '',
      City: '',
      Mobile: '',
      Email: '',
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-xl shadow-lg pb-3 pt-3 pr-6 pl-6 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-2 text-center text-gray-800">Book Appointment</h2>
        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="mb-2">
            <label className="block text-gray-600">Name</label>
            <input
              type="text"
              name="Name"
              value={formData.Name}
              onChange={handleChange}
              required
              className="border border-gray-300 p-2 w-full rounded"
            />
          </div>

          {/* Age Field */}
          <div className="mb-2">
            <label className="block text-gray-600">Age</label>
            <input
              type="number"
              name="Age"
              value={formData.Age}
              onChange={handleChange}
              required
              className="border border-gray-300 p-2 w-full rounded"
            />
          </div>

          {/* Gender Field */}
          <div className="mb-2">
            <label className="block text-gray-600">Gender</label>
            <select
              name="Gender"
              value={formData.Gender}
              onChange={handleChange}
              required
              className="border border-gray-300 p-2 w-full rounded"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Areas of Concern Field */}
          <div className="mb-2">
            <label className="block text-gray-600">Areas of Concern</label>
            <select
              name="Problem"
              value={formData.Problem}
              onChange={handleChange}
              required
              className="border border-gray-300 p-2 w-full rounded"
            >
              <option value="">Select Concern</option>
              <option value="Hearing">Hearing</option>
              <option value="Speech">Speech</option>
              <option value="Both Hearing & Speech">Both Hearing & Speech</option>
              <option value="Others">Others</option>
            </select>
          </div>

          {/* City Field */}
          <div className="mb-2">
            <label className="block text-gray-600">City</label>
            <input
              type="text"
              name="City"
              value={formData.City}
              onChange={handleChange}
              required
              className="border border-gray-300 p-2 w-full rounded"
            />
          </div>

          {/* Mobile Number Field */}
          <div className="mb-2">
            <label className="block text-gray-600">Mobile Number</label>
            <input
              type="tel"
              name="Mobile"
              value={formData.Mobile}
              onChange={handleChange}
              required
              inputMode="numeric"
              className="border border-gray-300 p-2 w-full rounded"
            />
          </div>

          {/* Email Address Field */}
          <div className="mb-2">
            <label className="block text-gray-600">Email Address</label>
            <input
              type="email"
              name="Email"
              value={formData.Email}
              onChange={handleChange}
              required
              className="border border-gray-300 p-2 w-full rounded"
            />
          </div>

          {/* Form Buttons */}
          <div className="flex justify-between mt-3">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="border border-gray-300 px-4 py-2 rounded hover:bg-gray-200 transition duration-200"
            >
              Reset
            </button>
            <button
              type="button"
              onClick={onClose}
              className="border border-gray-300 px-4 py-2 rounded hover:bg-gray-200 transition duration-200"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AppointmentModal;
