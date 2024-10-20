import Testimonials from "../components/Testimonials";
import Header from "../components/Header";
import SpecialityMenu from "../components/SpecialityMenu";
import reviews from "../assets/data";

const Home = () => {
  return (
    <div>
      <Header />
      <SpecialityMenu />
      <Testimonials reviews={reviews}/>
    </div>
  );
};

export default Home;