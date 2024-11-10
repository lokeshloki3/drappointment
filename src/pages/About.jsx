import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-center mt-20 text-2xl pt-10 text-gray-500">
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
        <div className="flex flex-col justify-center gap-3 md:w-2/4 text-sm text-gray-600">
          <p>
            Ms. Sonam Sharma, an accomplished Audiologist and Speech-Language Pathologist, 
            is the founder and CEO of Cortihear Speech and Hearing Clinic, a premier facility 
            dedicated to innovative and inclusive care in speech and audiology services. 
            Her career is defined by a commitment to bridging the gap in accessible, high-quality 
            care for individuals across India who face challenges with hearing, speech, and language. 
            With a compassionate and client-focused approach, she has guided Cortihear to become a 
            trusted destination for comprehensive therapeutic services tailored to each client’s needs.
          </p>
          <p>
            The clinic operates with a dedication to neurodiversity, valuing and respecting the 
            unique ways in which neurodivergent children and adults experience the world. 
            Under her leadership, Cortihear upholds principles of inclusivity and empowerment, 
            ensuring that clients have an active voice in their therapy journey. Services span 
            a wide spectrum, from speech therapy and auditory rehabilitation to advanced language 
            and communication support, all grounded in evidence-based practices that prioritize 
            long-term progress and emotional well-being.
          </p>
          <b className="text-gray-800">Vision</b>
          <p>
            Her vision is supported by a multidisciplinary team of skilled professionals who share 
            a commitment to excellence and ethics. With a collaborative approach, the team fosters 
            a warm, supportive environment where clients and their families feel valued and understood. 
            As a leader, she emphasizes teamwork, rigorous standards, and continuous professional growth 
            to keep Cortihear at the forefront of audiology and speech therapy. Her work has helped 
            countless families discover new ways to connect, communicate, and thrive, making a lasting 
            impact on communities across India.
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
