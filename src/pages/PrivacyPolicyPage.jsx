import React from 'react';

const PrivacyPolicyPage = () => {
  return (
    <div>
      {/* Privacy Policy Title */}
      <div className="text-center mt-20 text-3xl pt-10 text-gray-500">
        <p>
          PRIVACY <span className="text-gray-700 font-medium">POLICY</span>
        </p>
      </div>

      {/* Privacy Policy Overview */}
      <div className="text-center mt-10">
        <strong className="text-2xl font-semibold text-gray-800 leading-tight">
          Privacy Protection at <span className="text-primary">XYZ Speech and Hearing Clinic</span> – 
          Your Trust, Our Commitment
        </strong>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-12">
        <div className="flex flex-col justify-center gap-3 md:w-3/4 mx-auto text-sm text-gray-600">

          <div className="my-6 text-sm text-gray-600">
            <p className="text-base md:text-lg">
              Cortihear Speech and Hearing Clinic is committed to safeguarding your privacy. This privacy policy outlines the types of personal information we collect, how we use it, and how we protect your information. Please read this privacy policy carefully to understand our views and practices regarding your personal data and how we treat it.
            </p>
            <p className="text-base md:text-lg">
              If you have any questions or concerns about this policy or your data, please contact us at <a href="mailto:cortihear@gmail.com" className="text-primary">cortihear@gmail.com</a>.
            </p>
          </div>

          <div className="my-6">
            <p className="text-xl md:text-2xl font-semibold text-gray-700">1. General Information</p>
          </div>

          <div className="my-6 text-sm text-gray-600">
            <p className="text-base md:text-lg"><strong>About the Privacy Policy:</strong> Cortihear's Privacy Policy (the “Privacy Policy”) governs the processing of personal data collected from natural persons (“you” and “your”) through the online platform available at https://www.cortihear.com, the related domain names, and services (collectively, “Cortihear Speech and Hearing Clinic”).</p>
            <p className="text-base md:text-lg"><strong>Owner of Cortihear:</strong> Cortihear Speech and Hearing Clinic is owned and operated by Lokesh (Sole Proprietor), located at GM-13, D.D. Nagar, Kushwah Market, Gwalior - 474020.</p>
            <p className="text-base md:text-lg"><strong>Amendments:</strong> This Privacy Policy may be updated from time to time. Please review this page periodically to stay informed. If any significant changes are made, we will notify you via the contact details provided, or by updating the "Last Updated" date at the bottom of the page.</p>
          </div>

          <div className="my-6">
            <p className="text-xl md:text-2xl font-semibold text-gray-700">2. Collection, Use, and Disclosure of Information</p>
          </div>

          <div className="my-6 text-sm text-gray-600">
            <p className="text-base md:text-lg"><strong>PERSONAL INFORMATION WE MAY COLLECT:</strong></p>
            <ul className="list-disc pl-6">
              <li className="text-base md:text-lg">Your name, email address, phone number, and billing/physical addresses</li>
              <li className="text-base md:text-lg">Demographic details like gender, age, zip code</li>
              <li className="text-base md:text-lg">Payment information (when applicable)</li>
              <li className="text-base md:text-lg">Online browsing behavior (cookies, IP addresses)</li>
              <li className="text-base md:text-lg">Other details provided by you when using our service (appointment scheduling, inquiries, etc.)</li>
            </ul>

            <p className="text-base md:text-lg"><strong>How We Use Your Information:</strong></p>
            <ul className="list-disc pl-6">
              <li className="text-base md:text-lg">To provide services, process your payments, and respond to your inquiries</li>
              <li className="text-base md:text-lg">To send marketing communications and updates, if consented</li>
              <li className="text-base md:text-lg">To enhance your experience on the platform through cookies and behavioral tracking</li>
              <li className="text-base md:text-lg">To comply with legal obligations and improve our services</li>
            </ul>
          </div>

          <div className="my-6">
            <p className="text-xl md:text-2xl font-semibold text-gray-700">3. Communication with You</p>
          </div>

          <div className="my-6 text-sm text-gray-600">
            <p className="text-base md:text-lg">We may communicate with you in various ways:</p>
            <ul className="list-disc pl-6">
              <li className="text-base md:text-lg"><strong>Newsletters:</strong> We send updates, promotional offers, and service information. You can opt out at any time.</li>
              <li className="text-base md:text-lg"><strong>Service-related Notices:</strong> You may receive transactional emails such as appointment confirmations or payment receipts.</li>
              <li className="text-base md:text-lg"><strong>Opting out:</strong> You may unsubscribe from marketing emails by clicking the unsubscribe link or contacting us directly.</li>
            </ul>
          </div>

          <div className="my-6">
            <p className="text-xl md:text-2xl font-semibold text-gray-700">4. Your Rights Regarding Personal Data</p>
          </div>

          <div className="my-6 text-sm text-gray-600">
            <p className="text-base md:text-lg">You have the right to access, correct, and delete your personal data. You may also withdraw consent or request restrictions on the processing of your data.</p>
            <ul className="list-disc pl-6">
              <li className="text-base md:text-lg">Right to access your data</li>
              <li className="text-base md:text-lg">Right to rectification of inaccurate data</li>
              <li className="text-base md:text-lg">Right to deletion (the right to be forgotten)</li>
              <li className="text-base md:text-lg">Right to object to or restrict processing</li>
            </ul>
          </div>

          <div className="my-6">
            <p className="text-xl md:text-2xl font-semibold text-gray-700">5. Security</p>
          </div>

          <div className="my-6 text-sm text-gray-600">
            <p className="text-base md:text-lg">We use appropriate technical and organizational measures to protect your personal data. However, please note that no data transmission over the internet can be guaranteed to be 100% secure.</p>
          </div>

          <div className="my-6">
            <p className="text-xl md:text-2xl font-semibold text-gray-700">6. Display Advertising and Behavioral Advertising</p>
          </div>

          <div className="my-6 text-sm text-gray-600">
            <p className="text-base md:text-lg">We use third-party advertising services like Google to deliver ads to you based on your browsing behavior. These ads may be targeted using cookies.</p>
          </div>

          <div className="my-6">
            <p className="text-xl md:text-2xl font-semibold text-gray-700">7. Contact Us</p>
          </div>

          <div className="my-6 text-sm text-gray-600">
            <p className="text-base md:text-lg">If you have any questions or concerns about this Privacy Policy, please contact us:</p>
            <ul className="list-disc pl-6">
              <li className="text-base md:text-lg">Email: <a href="mailto:xyz@example.com" className="text-primary">xyz@example.com</a></li>
              <li className="text-base md:text-lg">Phone: +91 99999 99999</li>
              <li className="text-base md:text-lg">Address: ABC, XYZ, Delhi - 110039</li>
            </ul>
          </div>

          <p className="mt-4 text-sm text-gray-500">Last updated: 14/11/2024</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
