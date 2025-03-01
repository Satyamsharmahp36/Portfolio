import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  deployed
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />


          <div className='absolute inset-0 flex justify-between m-3 card-img_hover'>
            <div
              onClick={() => window.open(deployed, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src="data:image/png;base64,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"
                alt='source code'
                className='w-3/2 h-3/2 p-1 object-contain'
              />
            </div>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
