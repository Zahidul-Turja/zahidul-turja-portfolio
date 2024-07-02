import CardNavigation from "../CardNavigation";
import HeroDescription from "../HeroDescription";

function Hero() {
  return (
    <div className="w-full min-h-[100vh] flex justify-center items-center gap-20">
      <HeroDescription />
      <CardNavigation />
    </div>
  );
}

export default Hero;
