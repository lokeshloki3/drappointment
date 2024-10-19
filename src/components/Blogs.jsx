import React, { useState } from 'react';

const Blogs = () => {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (name && date && time) {
        addAppointment({ name, date, time });
        alert("Appointment booked successfully!");
        setName('');
        setDate('');
        setTime('');
      }
    };
  
    return (
      <div className="flex flex-col items-center justify-start min-h-screen pt-20 p-6">
        <h2 className="text-2xl font-semibold mb-4">Book an Appointment</h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4 bg-white p-6 rounded-lg shadow-md w-full max-w-md">
          <input
            type="text"
            placeholder="Patient Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition duration-200"
          >
            Book Appointment
          </button>
        </form>
      </div>
    );
  };
  
  export default Blogs;
  