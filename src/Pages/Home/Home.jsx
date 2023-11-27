import { Helmet } from "react-helmet";
import Slider from "../../Components/Slider/Slider";
import Articles from "../../Components/Articles/Articles";
import DownloadApp from "../DownloadApp/DownloadApp";
import Profile from "../Profile/Profile";
import Statics from "../Statics/Statics";
import Plans from "../Plans/Plans";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Global Times | Home</title>
      </Helmet>
      <Slider />
      <Articles />
      <Profile />
      <Statics />
      <Plans />
      <DownloadApp />
    </div>
  );
};

export default Home;
