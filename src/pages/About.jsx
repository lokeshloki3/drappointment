import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          ABOUT <span className="text-gray-700 font-medium">US</span>
        </p>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.about_image}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
          <p>
            Welcome to CortiHear Clinic, your trusted partner in managing your
            healthcare needs conveniently and efficiently. At CortiHear Clinic, we
            understand the challenges individuals face when it comes to
            scheduling doctor appointments and managing their health records.
          </p>
          <p>
            At CortiHear Clinic, we specialize in providing comprehensive services 
            in speech and hearing, language development, and swallowing disorders. 
            Our dedicated team of experienced professionals is committed to enhancing 
            the quality of life for individuals of all ages through personalized assessments 
            and tailored therapy programs. We believe that effective communication is 
            essential for connection and understanding, and we strive to empower our 
            clients with the tools they need to thrive.
          </p>
          <b className="text-gray-800">Our Vision</b>
          <p>
            Our aim at CortiHear Clinic is to deliver exceptional care and support to our 
            clients, fostering their communication skills and overall well-being. We focus 
            on individualized treatment plans that address the unique needs of each person, 
            ensuring that they achieve their fullest potential. With a compassionate approach 
            and evidence-based practices, we are here to guide you on your journey to improved 
            speech, hearing, and swallowing health.
          </p>
        </div>
      </div>
      <div className="text-xl my-4">
        <p>
          WHY <span className="text-gray-700 font-semibold">CHOOSE US</span>
        </p>
      </div>
      <div className="flex flex-col md:flex-row mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>EFFICIENCY:</b>
          <p>
            Streamlined appointment scheduling that fits into your busy
            lifestyle.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>CONVENIENCE:</b>
          <p>
            Access to a network of trusted healthcare professionals in your
            area.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>PERSONALIZATION:</b>
          <p>
            Tailored recommendations and reminders to help you stay on top of
            your health.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
