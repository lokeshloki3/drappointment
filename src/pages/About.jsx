import { assets } from "../assets/assets";
import "../index.css";

const About = () => {
  return (
    <div>
      <div className="text-center mt-16 text-3xl pt-10 text-gray-500">
        <p>
          ABOUT <span className="text-gray-700 font-medium">US</span>
        </p>
      </div>

      <div className="text-center mt-10">
        <strong className="text-2xl font-semibold text-gray-800 leading-tight">
          Welcome to <span className="text-primary">XYZ Speech and Hearing Clinic</span> – 
          Where <span className="text-primary">Every Voice is Heard</span> and <span className="text-primary">Every Sound is Cherished</span>
        </strong>
      </div>

      <div>
        <div className="my-10 flex flex-col md:flex-row gap-12">
          <img
            className="w-full md:max-w-[280px] md:h-auto"
            src={assets.about_image}
            alt="About XYZ Clinic"
          />
          <p className="text-base md:text-lg md:mt-10">
              Mr. Loki, an accomplished Audiologist and Speech-Language Pathologist, 
              is the founder and CEO of XYZ Clinic Speech and Hearing Clinic, a premier facility 
              dedicated to innovative and inclusive care in speech and audiology services. 
              His career is defined by a commitment to bridging the gap in accessible, high-quality 
              care for individuals across India who face challenges with hearing, speech, and language. 
              With a compassionate and client-focused approach, he has guided XYZ Clinic to become a 
              trusted destination for comprehensive therapeutic services tailored to each client’s needs.
          </p>
        </div>
        <div className="flex flex-col justify-center gap-3 md:w-3/4 mx-auto text-sm text-gray-600">
          <p className="text-base md:text-lg">
            XYZ Clinic Speech and Hearing Clinic is here to make exceptional audiology and 
            speech-language services accessible to you—wherever you are. We believe in breaking 
            down barriers to communication and hearing health, bringing expertise right to your 
            screen. With the guidance of Loki, a dedicated Audiologist and Speech Language 
            Pathologist, our clinic is committed to providing convenient, high-quality care for 
            individuals of all ages.
          </p>
          <p className="text-base md:text-lg">
            The clinic operates with a dedication to neurodiversity, valuing and respecting the 
            unique ways in which neurodivergent children and adults experience the world. 
            Under his leadership, XYZ Clinic upholds principles of inclusivity and empowerment, 
            ensuring that clients have an active voice in their therapy journey. Services span 
            a wide spectrum, from speech therapy and auditory rehabilitation to advanced language 
            and communication support, all grounded in evidence-based practices that prioritize 
            long-term progress and emotional well-being.
          </p>
          <b className="text-gray-800 text-base md:text-lg">Our Vision</b>
          <p className="text-base md:text-lg">
            Our mission at XYZ Clinic is to deliver accessible, personalized care in audiology 
            and speech therapy that improves lives. Through online and remote services, we empower 
            individuals to connect more deeply with the world around them, from the comfort of their 
            own spaces. Whether you’re seeking improved hearing, clearer speech, or both, XYZ Clinic 
            is ready to help you on your journey.
          </p>
        </div>
      </div>

      <div className="text-xl my-4">
        <p>
          WHY <span className="text-gray-700 font-semibold">CHOOSE US</span>
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 mb-20">
        <div className="border px-10 md:px-6 py-8 sm:py-6 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Exceptional Online Services</b>
          <p>
            We specialize in remote audiology and speech therapy, allowing clients to access crucial 
            care without the need for travel. From online hearing tests to remote hearing aid fittings 
            and virtual speech therapy sessions, XYZ Clinic brings comprehensive services directly to 
            you—making it easier than ever to prioritize your hearing and communication health.
          </p>
        </div>
        <div className="border px-10 md:px-8 py-8 sm:py-8 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Personalized, Family-Centered Approach</b>
          <p>
            At XYZ Clinic, we understand that hearing and speech challenges impact the whole family. 
            We take a personalized, family-centered approach that involves creating customized 
            treatment plans to meet your specific needs, ensuring supportive, compassionate care.
          </p>
        </div>
        <div className="border px-10 md:px-8 py-8 sm:py-8 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Convenient, Flexible Care</b>
          <p>
            Life is busy, and we believe that therapy should work around your schedule. Our online 
            platform is designed to be flexible and accessible, allowing you to receive quality care 
            on your terms. With remote appointments, you have the freedom to prioritize your health 
            from anywhere.
          </p>
        </div>
        <div className="border px-10 md:px-8 py-8 sm:py-8 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Advanced Technology for Optimal Outcomes</b>
          <p>
            We use the latest advancements in audiology and speech therapy to achieve remarkable 
            results. Our team integrates cutting-edge tools for online assessments, virtual hearing 
            aid adjustments, and real-time speech therapy, ensuring effective, engaging experiences 
            for every client.
          </p>
        </div>
      </div>
      <div className="text-xl my-4">
        <p>
          <span className="text-gray-700 font-semibold">Online Services Include :</span>
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 mb-20">
        <div className="border px-10 md:px-8 py-8 sm:py-8 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Hearing Testing and Remote Hearing Aid Fitting</b>
          <p>
            Experience convenient, professional hearing assessments and hearing aid fittings online, 
            with personalized guidance every step of the way.
          </p>
        </div>
        <div className="border px-10 md:px-8 py-8 sm:py-8 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Virtual Speech Therapy for Children and Adults</b>
          <p>
            Our speech therapy sessions are designed to help clients of all ages improve their 
            communication skills from the comfort of their homes.
          </p>
        </div>
        <div className="border px-10 md:px-8 py-8 sm:py-8 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Cochlear Implant Rehabilitation</b>
          <p>
            For cochlear implant users, we provide remote support and rehabilitation to ensure that 
            you’re getting the most out of your device.
          </p>
        </div>
        <div className="border px-10 md:px-8 py-8 sm:py-8 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Voice Therapy and Vocal Health</b>
          <p>
            Our online voice therapy sessions focus on strengthening vocal health, helping clients 
            find their strongest, most confident voice.
          </p>
        </div>
        <div className="border px-10 md:px-8 py-8 sm:py-8 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Specialized Programs for Neurological Speech Disorders</b>
          <p>
            We provide expert-led, individualized therapy programs for clients with neurological 
            speech challenges, all delivered online for maximum convenience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
