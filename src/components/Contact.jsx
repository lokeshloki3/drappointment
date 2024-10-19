const Contact = () => {
    return (
      <div className="flex flex-col items-center justify-start min-h-screen pt-20 p-6">
        <h2 className="text-2xl font-semibold text-center mb-4">Contact Us</h2>
        <p className="text-center mb-2">If you have any questions, please reach out to us:</p>
        <p className="text-center mb-2">
          Email: <a href="mailto:support@hospital.com" className="text-blue-500">support@hospital.com</a>
        </p>
        <p className="text-center mb-2">
          Phone: <a href="tel:+11234567890" className="text-blue-500">(123) 456-7890</a>
        </p>
        <p className="text-center">Our team is here to assist you.</p>
      </div>
    );
  };
  
  export default Contact;
  