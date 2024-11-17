import Testimonials from "../components/Testimonials";
import Header from "../components/Header";
import SpecialityMenu from "../components/SpecialityMenu";
import reviews from "../assets/testimonialsData";
import FeatureTable from "../components/FeatureTable";
import { assets } from "../assets/assets";
import ActionButton from "../components/ActionButton";
import ImageSection from "../components/ImageSection";

const Home = ({ setIsModalOpen }) => {
  return (
    <div>
      <h1 className="text-center m-8 text-3xl mt-24 font-medium md:text-5xl">Welcome to XYZ Clinic</h1>
      {/* Passing down setIsModalOpen */}
      <Header setIsModalOpen={setIsModalOpen}/>
      <SpecialityMenu />

      <ActionButton 
        onClick={() => setIsModalOpen(true)} 
        label="Click to book your online appointment" 
      />
      
      <FeatureTable />

      <ActionButton 
        onClick={() => setIsModalOpen(true)} 
        label="Click to book your online appointment" 
      />

      <ImageSection src={assets.book} alt="Book" />
      
      <ImageSection src={assets.whycorti} alt="Why Cortihear" />

      <ActionButton 
        onClick={() => setIsModalOpen(true)} 
        label="Click to book your online appointment" 
      />

      <Testimonials reviews={reviews}/>
    </div>
  );
};

export default Home;