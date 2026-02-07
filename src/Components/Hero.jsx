import image from "../assets/crud.png";

const Hero = () => {
  return (
    <div className="h-[92vh] md:h-[80vh] lg:h-[90vh] 2xl:h-[89vh] w-full bg-[#fcf0e4] flex items-center justify-center">
      <img className="h-[60vh]" src={image} alt="image" />
    </div>
  );
};

export default Hero;
