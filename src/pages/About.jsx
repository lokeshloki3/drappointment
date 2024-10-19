import whatsapp from '../assets/WhatsApp.png';

const About = () => {
  return (
    <div>
      <div className="my-10 flex flex-col md:flex-row gap-12">
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
          <h1 className="text-5xl mb-0 ">Sonam Sharma</h1>
          <p className="mt-0">Speech Therapist</p>
          <p>
          Sonam has completed her Bachelors & Masters in Audiology and Speech Language Pathology from AYJNISHD(D), Mumbai. She is certified in tele-therapy, specialising in Dysphagia, Autism communication, and bedside speech therapy for Neurological speech disorders.Extensive experience with children in special education settings for Autism, Cerebral Palsy, and Learning disabilities. Also, a seasoned professional in private practice, specialising in diverse speech & hearing disorders among adults.She has a keen interest in research & has presented papers at national conferences.
          </p>
          <p>
          </p>
          <b className="text-gray-800">Our Vision</b>
          <p>
            To create a seamless healthcare
            experience for every user. We aim to bridge the gap between patients
            and healthcare providers, making it easier for you to access the
            care you need, when you need it.
          </p>
        </div>
      </div>
      <img
          className="w-full md:max-w-[360px]"
          src=''
          alt=""
        />
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
