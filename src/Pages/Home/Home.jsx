import { Helmet } from "react-helmet";
import Slider from "../../Components/Slider/Slider";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Global Times | Home</title>
      </Helmet>
      <Slider />
    </div>
  );
};

export default Home;
