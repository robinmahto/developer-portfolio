import { styles } from "../global";
import ComputersCanvas from "../canvas/ComputersCanvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 bg-[#915EFF] rounded-full"></div>
          <div className="w-1 h-40 bg-[#915EFF] sm:h-80"></div>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Robin</span>
          </h1>
          <p>
            A Passionate Frontend Web Developer,
            <br className="sm:block hidden" /> and Software Engineer
          </p>
        </div>
      </div>
      <ComputersCanvas />
    </section>
  );
};

export default Hero;
