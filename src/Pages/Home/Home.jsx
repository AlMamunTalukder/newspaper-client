import { Helmet } from "react-helmet";
import Slider from "../../Components/Slider/Slider";
import Articles from "../../Components/Articles/Articles";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Global Times | Home</title>
      </Helmet>
      <Slider />
      <Articles />
    </div>
  );
};

export default Home;
