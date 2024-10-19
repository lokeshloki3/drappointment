const Home = () => {
    return (
      <div className="text-center p-6">
        <h2 className="text-3xl font-semibold mb-4">Welcome to Our Hospital</h2>
        <p className="text-lg mb-4">Your health is our priority. Schedule an appointment today!</p>
  
        {/* Image on the right side */}
        <div className="flex justify-center mb-4">
          <img
            src="https://via.placeholder.com/400x300.png?text=Hospital+Image" // Replace with your image URL
            alt="Hospital"
            className="rounded shadow-md"
          />
        </div>
  
        {/* Contact Us Section */}
        <div className="mt-8 p-4 bg-white rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-2">Contact Us</h3>
          <p>If you have any questions, please reach out to us:</p>
          <p>Email: <a href="mailto:support@hospital.com" className="text-blue-500">support@hospital.com</a></p>
          <p>Phone: <a href="tel:+11234567890" className="text-blue-500">(123) 456-7890</a></p>
          <p className="mt-4">Our team is here to assist you.</p>
        </div>
      </div>
    );
  };
  
  export default Home;
  