import React from "react";
import Tilt from "react-tilt";
import { color, motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I am <span style={{ color: 'red' }}>a Software Engineer</span> proficient in a wide range of technologies and frameworks. On the <span style={{ color: 'green' }}>client-side</span>, I have a strong command of <span style={{ color: 'red' }}>HTML</span>, <span style={{ color: 'red' }}>CSS</span>, and <span style={{ color: 'red' }}>JavaScript</span>, and I specialize in utilizing powerful frameworks like <span style={{ color: 'red' }}>React</span> to create dynamic and responsive user interfaces. On the <span style={{ color: 'green' }}>server-side</span>, I am well-versed in <span style={{ color: 'red' }}>PHP</span> and <span style={{ color: 'red' }}>Spring Boot</span>, leveraging these frameworks to build robust and scalable server-side applications. 
        Additionally, I have expertise in developing <span style={{ color: 'red' }}>Web APIs using ASP.NET Core</span>, enabling seamless communication between front-end and back-end systems.
      </motion.p>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
       In addition to my web development skills, I have a deep interest and experience in the field of<span style={{ color: 'red' }}> Artificial Intelligence</span>. I have a strong foundation in neural networks and have developed AI applications using <span style={{ color: 'red' }}>Python</span>. This combination of skills allows me to integrate AI capabilities into my projects, bringing intelligence and automation to enhance user experiences.
      </motion.p>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
       As a Software Engineer with proficiency in <span style={{ color: 'red' }}>front-end and back-end technologies</span>, along with expertise in <span style={{ color: 'red' }}>AI and neural networks</span>, I am well-equipped to tackle diverse projects that require end-to-end development and innovative solution.
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-20'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
