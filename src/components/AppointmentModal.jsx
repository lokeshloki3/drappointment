import React, { useState } from 'react';

const AppointmentModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    Name: '',
    Age: '',
    Gender: '',
    Problem: '',
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

    const formDatab = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDatab.append(key, value);
    });

    try {
      console.log("Form Data:", formData); // Log form data
      const response = await fetch(scriptURL, {
        method: 'POST',
        body: formDatab, // Use FormData to match what doPost expects
      });

      // console.log("Response Status:", response.status); // Log response status
      // const responseData = await response.json(); // Get response JSON
      // console.log("Response Data:", responseData); // Log response data

      if (response.ok) {
        alert("Thanks for contacting us! We will contact you soon...");
        onClose(); // Close the modal after submission
        handleReset(); // Reset the form data
      } else {
        alert("There was a problem with your submission.");
      }
    } catch (error) {
      console.error('Error!', error.message);
      alert("There was an error. Please try again.");
    }
  };

  const handleReset = () => {
    setFormData({
      Name: '',
      Age: '',
      Gender: '',
      Problem: '',
      Mobile: '',
      Email: '',
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-xl shadow-lg p-6 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Book Appointment</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2 text-gray-600">Name</label>
            <input
              type="text"
              name="Name"
              value={formData.Name}
              onChange={handleChange}
              required
              className="border border-gray-300 p-2 w-full rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-gray-600">Age</label>
            <input
              type="number"
              name="Age"
              value={formData.Age}
              onChange={handleChange}
              required
              className="border border-gray-300 p-2 w-full rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-gray-600">Gender</label>
            <select
              name="Gender"
              value={formData.Gender}
              onChange={handleChange}
              required
              className="border border-gray-300 p-2 w-full rounded"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-gray-600">Problem</label>
            <select
              name="Problem"
              value={formData.Problem}
              onChange={handleChange}
              required
              className="border border-gray-300 p-2 w-full rounded"
            >
              <option value="">Select Problem</option>
              <option value="hearing">Hearing</option>
              <option value="speech">Speech</option>
              {/* Add more problems as needed */}
            </select>
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-gray-600">Mobile Number</label>
            <input
              type="tel"
              name="Mobile"
              value={formData.Mobile}
              onChange={handleChange}
              required
              className="border border-gray-300 p-2 w-full rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-gray-600">Email Address</label>
            <input
              type="email"
              name="Email"
              value={formData.Email}
              onChange={handleChange}
              required
              className="border border-gray-300 p-2 w-full rounded"
            />
          </div>
          <div className="flex justify-between">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200">Submit</button>
            <button type="button" onClick={handleReset} className="border border-gray-300 px-4 py-2 rounded hover:bg-gray-200 transition duration-200">Reset</button>
            <button type="button" onClick={onClose} className="border border-gray-300 px-4 py-2 rounded hover:bg-gray-200 transition duration-200">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AppointmentModal;
