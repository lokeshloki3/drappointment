import React, { useState } from 'react';

const AppointmentModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    problem: '',
    mobile: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    onClose(); // Close the modal after submission
  };

  const handleReset = () => {
    setFormData({
      name: '',
      age: '',
      gender: '',
      problem: '',
      mobile: '',
      email: '',
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
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="border border-gray-300 p-2 w-full rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-gray-600">Age</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
              className="border border-gray-300 p-2 w-full rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-gray-600">Gender</label>
            <select
              name="gender"
              value={formData.gender}
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
              name="problem"
              value={formData.problem}
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
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
              className="border border-gray-300 p-2 w-full rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-gray-600">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
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
