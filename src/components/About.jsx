import React from "react";
import { motion } from "framer-motion";

import { styles } from "../global";
import SectionWrapper from "../hoc/SectionWrapper";
import { fadeIn, textVariant } from "../utils/motion";
import { about_avatar } from "../assets";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
      <div>
        <img src={about_avatar} alt="about_avatar" className="w-96 h-96" />
      </div>
      <div>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>About Me.</h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Experienced Frontend Web Developer with over 2 years of hands-on
          experience in JavaScript, TypeScript, and React.js. committed to
          staying updated with the latest technologies and best practices in the
          industry.
        </motion.p>
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
