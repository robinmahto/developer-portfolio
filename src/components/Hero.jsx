import { styles } from "../global";
import ComputersCanvas from "../canvas/ComputersCanvas";
import { motion } from "framer-motion";
import { linkedin, githubs, hashnode, instagram } from "../assets";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 `}
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

          <div className={`flex my-6 items-center gap-8`}>
            <a href="https://robinmahto.hashnode.dev/" target="blank" title="hashnode" className="bg-[#915EFF] ease-in duration-200 hover:bg-tertiary p-2 rounded-full">
              <img src={hashnode} alt="hashnode" />
            </a>
            <a href="https://www.linkedin.com/in/robinmahto/" target="blank" title="linkedin" className="bg-[#915EFF] ease-in duration-200 hover:bg-tertiary p-2 rounded-full">
              <img src={linkedin} alt="linkedin" className="cursor-pointer text-white" />
            </a>
            <a href="https://github.com/robinmahto" target="blank" title="github" className="bg-[#915EFF] ease-in duration-200 hover:bg-tertiary  p-2 rounded-full">
              <img src={githubs} alt="githubs" />
            </a>
            <a href="https://www.instagram.com/robin_mahto/" target="blank" title="instagram" className="bg-[#915EFF] ease-in duration-200 hover:bg-tertiary p-2 rounded-full">
              <img src={instagram} alt="instagram" />
            </a>
          </div>
        </div>
      </div>
      {/* <ComputersCanvas /> */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
