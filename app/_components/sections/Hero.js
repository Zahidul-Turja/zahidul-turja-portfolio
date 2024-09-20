import CardNavigation from "../CardNavigation";
import HeroDescription from "../HeroDescription";

function Hero() {
  return (
    <div className="mx-auto flex min-h-[100vh] w-full items-center justify-center md:min-h-[80vh] md:min-w-[90vw] lg:min-h-[100vh] lg:gap-20">
      <HeroDescription />
      <CardNavigation />
    </div>
  );
}

export default Hero;
