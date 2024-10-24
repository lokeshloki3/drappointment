import Testimonials from "../components/Testimonials";
import Header from "../components/Header";
import SpecialityMenu from "../components/SpecialityMenu";
import reviews from "../assets/data";

const Home = () => {
  return (
    <div>
      <h1 className="text-center m-8 text-3xl mt-24 font-medium md:text-5xl">Welcome to Cortihear</h1>
      <Header />
      <SpecialityMenu />
      <Testimonials reviews={reviews}/>
    </div>
  );
};

export default Home;