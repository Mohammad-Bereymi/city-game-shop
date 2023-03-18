import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "https://janebi.com/janebi/9fd2/files/normal/293908.png",
  "https://www.technolife.ir/image/banner_SlideBanner_uicHnX_3a773997-4311-4a30-bc99-896d55378962.png",
  "https://www.technolife.ir/image/banner_SlideBanner_voD8r9_1007a7f5-6ebe-4f4e-a72e-df8b7aa8d8e2.png",
];

const settings = {
  dots: false,
  infinite: true,
  speed: 400,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
};

export default function Sliderr() {
  return (
    <Slider {...settings}>
      {images.map((image) => (
        <div key={image} className="w-full">
          <img src={image} alt="slide" className="w-full h-64 object-contain" />
        </div>
      ))}
    </Slider>
  );
}
