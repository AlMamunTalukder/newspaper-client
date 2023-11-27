import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img1 from "../../assets/home/s1.webp";
import img2 from "../../assets/home/s2.webp";
import img3 from "../../assets/home/s3.webp";
import img4 from "../../assets/home/s4.webp";
import img5 from "../../assets/home/05.png";
import img6 from "../../assets/home/06.png";
const Slider = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      showStatus={false}
      showThumbs={false}
      className="text-center "
    >
      <div className="h-[600px]">
        <img src={img1} />
      </div>
      <div className="h-[600px]">
        <img src={img2} />
      </div>
      <div className="h-[600px]">
        <img src={img3} />
      </div>
      <div className="h-[600px]">
        <img src={img4} />
      </div>
      <div className="h-[600px]">
        <img src="https://i.ibb.co/XZfgV00/slide1.png" />
      </div>
      <div className="h-[600px]">
        <img src="https://i.ibb.co/vCWDLSZ/slide1.png" />
      </div>
    </Carousel>
  );
};

export default Slider;
