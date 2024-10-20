import './App.css';
import Testimonials from './components/Testimonials';
import reviews from './data';

function App() {
  return (
    <div className="parent">
      <div>
        <h1>Testimonials</h1>

        <div></div>

        <Testimonials reviews={reviews}/>
      </div>
    </div>
  );
}

export default App;
