import React from "react";

const FeatureTable = () => {
  return (
    <div className="container mx-auto my-12 px-4">
      <h2 className="text-center text-2xl sm:text-3xl mb-6">Why Choose XYZ Clinic?</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full text-left border-collapse text-xs md:text-base">
          <thead>
            <tr>
              <th className="px-0 py-1 md:px-4 md:py-2 border-b font-semibold">Feature</th>
              <th className="px-0 py-1 md:px-4 md:py-2 border-b font-semibold">XYZ Speech and Hearing Clinic</th>
              <th className="px-0 py-1 md:px-4 md:py-2 border-b font-semibold">Traditional Clinics</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-0 py-1 md:px-4 md:py-2 border-b">Convenient Online Services</td>
              <td className="px-0 py-1 md:px-4 md:py-2 border-b">Yes – Our online hearing testing, remote hearing aid fitting, and virtual speech therapy allow you to access care from anywhere, anytime.</td>
              <td className="px-0 py-1 md:px-4 md:py-2 border-b">Limited – Most clinics require in-person visits, making scheduling and travel necessary.</td>
            </tr>
            <tr>
              <td className="px-0 py-1 md:px-4 md:py-2 border-b">Personalized, Family-Centered Approach</td>
              <td className="px-0 py-1 md:px-4 md:py-2 border-b">Yes – We take time to understand each client’s unique needs, including family goals and dynamics, for customized, family-centered care.</td>
              <td className="px-0 py-1 md:px-4 md:py-2 border-b">Varies – Some clinics may offer personalized care, but it often lacks a comprehensive family-focused approach.</td>
            </tr>
            <tr>
              <td className="px-0 py-1 md:px-4 md:py-2 border-b">Flexible Appointment Scheduling</td>
              <td className="px-0 py-1 md:px-4 md:py-2 border-b">Yes – Flexible virtual appointments let you choose times that fit your lifestyle, reducing the need for rescheduling and wait times.</td>
              <td className="px-0 py-1 md:px-4 md:py-2 border-b">Often Limited – Appointments are usually fixed to clinic hours, with longer waiting periods for rescheduling.</td>
            </tr>
            <tr>
              <td className="px-0 py-1 md:px-4 md:py-2 border-b">Advanced Remote Technology</td>
              <td className="px-0 py-1 md:px-4 md:py-2 border-b">Yes – Our online services use advanced technology for accurate remote hearing tests, real-time hearing aid adjustments, and effective therapy.</td>
              <td className="px-0 py-1 md:px-4 md:py-2 border-b">Limited – In-person clinics may not always offer advanced remote services or equipment for telehealth.</td>
            </tr>
            <tr>
              <td className="px-0 py-1 md:px-4 md:py-2 border-b">Comprehensive Audiology & Speech Services</td>
              <td className="px-0 py-1 md:px-4 md:py-2 border-b">Yes – From cochlear implant rehabilitation to neurological speech disorder programs, our services are fully accessible online.</td>
              <td className="px-0 py-1 md:px-4 md:py-2 border-b">Varies – Not all clinics offer a full range of services, and online options are often limited or unavailable.</td>
            </tr>
            <tr>
              <td className="px-0 py-1 md:px-4 md:py-2 border-b">Expert-Led, Client-Focused Care</td>
              <td className="px-0 py-1 md:px-4 md:py-2 border-b">Yes – Led by Lokesh, an experienced Audiologist and Speech Language Pathologist, XYZ Clinic provides expert, client-centered services.</td>
              <td className="px-0 py-1 md:px-4 md:py-2 border-b">Depends on Clinic – Many clinics offer skilled professionals but may lack a client-centered, personalized focus.</td>
            </tr>
            <tr>
              <td className="px-0 py-1 md:px-4 md:py-2 border-b">No Need for Travel</td>
              <td className="px-0 py-1 md:px-4 md:py-2 border-b">Yes – All sessions can be done from the comfort of your home, saving you time and avoiding travel costs.</td>
              <td className="px-0 py-1 md:px-4 md:py-2 border-b">No – Most clinics require in-person visits, which can be time-consuming and costly, especially for regular appointments.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FeatureTable;
