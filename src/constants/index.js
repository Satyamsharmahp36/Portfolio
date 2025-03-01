import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Mobile App Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "AI Driven Application's",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Learning Web Development",
    company_name: "Kalvium",
    icon: "data:image/png;base64,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",
    iconBg: "#383E56",
    date: "September 2023 -  August 2024",
    points: [
      "Started leaning about HTML , CSS , JS in the starting of my Web Development Journey",
      "Continued my DSA journey in C++ and Java",
      "Learned about React and Tailwind hence improving my Frontend Skills",
      "Completed my Backend Learning and continued with Databases like MongoDb",
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "Lowes",
    icon: "data:image/png;base64,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",
    iconBg: "#E6DEDD",
    date: "August 2024 - Still Working",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Learing and building application using Kafka as a streaming platfrom",
      "Tensoflow learning for creating of models for OCR",
      "Exploring AI integration in application using Landchain",
    ],
  },

];

const testimonials = [
  {
    testimonial:
      "200 + Subscriber on youtube , helping others by creating content related to coding . 50+ Videos over different topics covering from DSA to Web-Development to Automation",
    name: "Youtube",
    designation: "Coding Channed with 200+ Subscribers",
    company: "",
    image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAbFBMVEX/AAD/////6en/VFT/LS3/+vr/2Nj/9/f/v7//ExP/qKj/8PD/7e3/ICD/lpb/oqL/dHT/YWH/nJz/trb/ysr/4+P/i4v/aWn/f3//09P/Jyf/srL/UFD/Ghr/Cwv/NTX/QUH/W1v/SUn/hYWjH7CLAAADxElEQVR4nO2c65KiMBBGAyJykXC/iAio7/+OG1fdUVd3amJD3K7v/HSwxlOQdKdJWggAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8Jvej73vf93S6K2rZ1HlAfRdFupy5Ql6mLPwo/cobxsE/ruk6SpqkqKbM4DoI8zz3PK4qNe8emKNTH6o9BEMeZlFXVNEmivpzuD+PgRL4Jh37o0qSSWbBVP9gtw9WZ5R+sb/i68vLVsHSV6DbIZJWk3TDXPRsbZaAEvv3BuixPYt62GScW6VvpriezeHBal3LKOzTIcB6RK+FkOlHizqtyokyiKVycuW/LmTBz6F2i2IiLsolbchm5MuNiWauM2mVvzEXZ7IllSnMulmXTulQmXSxLksqszcqsKV3kTFH/FUvKW+OZdbEsj85lNBD673FHMpnE8JBRgyYhkzE9ZEgHTWBeJqByGYyPfzUDDEQynfHxr2aAjkimtk2rqIymJpIxP5kRTmeNoZXMLWFD49KbWWI+yEiaYkAUGFzLXFkFNLUAJzceZlSgyWlKAVphZlkS306iQDNuNP633Uja6LQZSWQOOr/K7vx9QDmluwcSGa0EwF4I0daEeRBRCrDXKWacZE5FULJCiLsgkUn1ZRQZ0URQpiQy9VsyovVIYm5Jk5wlOnmmffNU1AXB3bFpkrNGZ1K6lRFOtXlbZ02SnPXHt2VUrMrejTrrI0Vy1lc6z7z9OPl0b0adsCKR0ar//yWjxp73zrO2Ikmbfa3J9YmMcJqNfsq6ykhkYioZlRlJ7SC6iik2CfhahabnMsLfbzWjzjKgkNltdf73CxmlUxd6NtsdhUxOKiM08yMrp5CJtFLff8kIofOy16NYN08hoxK2H0edz5U5RZ0f7lv5ZBnhHH82dCAzkwyjx4zTBGBsamYVNFmlM9SJpuaihibR5LUE4LQ4Y7Vs5lXQ4FRqYlUE5FWeZVU4Z/VKY6H75uwTXzaxeg3I6gUtq1fnrDY1sNpuwmojEKstWqw2z/Ha1shqwymrrcCsNmmz2j7P62CD+emM8MgJq8NArI5piYrTATpWRxtNHzqtSGXMHgcuaV3EgtNBbWFuUUN/hF5EmbHmBhM0njDVdkJO0HbiVJ7UqTm9iTtNQxBhplXLRCpi7iY6rmynbnPEpr3RlZvGU97TxlPfmC6fNp7y5m88dce5JViX/u4J1jTHa0uw4NISrLhvCVZcWoIF15Zgx3NLsDTtzLUEe81Xs7Zn3douvdo+tFkbAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIDX/AI1U2TEwcxKZQAAAABJRU5ErkJggg==",
    link:"https://www.youtube.com/@Code_Zilla"
    
  },
  {
    testimonial:
      "Right now I am working as Intern at Lowe's . One of the MNC among the Fortune top 50 companies all over the world . I was great opportunity for me as before turning 20 , I grabed this opportunity",
    name: "Lowes",
    designation: "Software Developer Intern",
    company: "",
    image: "data:image/png;base64,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",
    link: "https://www.lowes.com/"
  },
  {
    testimonial:
      "I earned the Microsoft Applied Skills Certificate for Natural Language Processing (NLP), showcasing my proficiency in leveraging advanced NLP techniques. I scored 95% in this test",
    name: "Microsoft",
    designation: "Microsoft Applied Skills Certificate",
    company: "",
    image: "data:image/png;base64,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",
    link:"https://learn.microsoft.com/en-gb/users/satyamsharmahp36/credentials/9ff731d5b6a4603f"
  },

  {
    testimonial:
      "Ranked among the top 10 futuristic project makers (Under-16) by CSIR a Govt Org . In which I developed a Portable Energy Regenerator Fridge using a pioneering technology.",
    name: "CSIR",
    designation: "Council of Scientific & Industrial Research",
    company: "",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0zkZ2k4q6xXMJdIFGh-oUx4spmiXyIIXOCg&s",
    link:"https://www.csir.res.in/"
  },
  {
    testimonial:
      "Finalist of SIH 2024 Hackathon . Me with my team have pasticipated in SIH 2024 , and after completing all the zonal rounds , we qualified amoung the top 5 teams across the country for our problem statement",
    name: "SIH",
    designation: "Smart India Hackathon",
    company: "",
    image: "data:image/png;base64,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",
    link: "https://youtu.be/hEvjJF9KZFM?si=-RuhbAP0w3WuF5jf"
  },


  {
    testimonial:
      "I served as Captain of my District cricket team (Under-16), managed by the Himachal Pradesh Cricket Association (HPCA). My 5-year cricketing journey fostered my growth as a team player and leader",
    name: "HPCA",
    designation: "Himachal Pradesh Cricket Association",
    company: "",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv9Yt1OX9xhjPuZbQdsNT8r9_XdSXx9WvdSw&s",
    link: "https://www.hpcricket.org/"
  },


  {
    testimonial:
      "I have worked on over 120+ projects and assignments over Github , including some of my open source contribution's also among them . These project include different variety of projects like FrontEnd , Backend App Dev etc .",
    name: "Github",
    designation: "Worked on 120+ repo's",
    company: "",
    image:"data:image/png;base64,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",
    link: "https://github.com/Satyamsharmahp36"
  },
  {
    testimonial:
      "Solved 200+ DSA problem over the online competitive platforms like Coding Ninjas , Gfg , Leetcode . With 120+ problem solved on all along on Leetcode showcasing my exelience in problem solving",
    name: "Leetcode",
    designation: "120+ Problem's Solved",
    company: "",
    image: "data:image/png;base64,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",
    link:"https://leetcode.com/u/satyamsharma36/"
  },
  {
    testimonial:
      "Secured 10 CGPA in all 3 semesters at Chitkara University while persuing my BE-CSE degree . Also scoring above 90% in my CBSE higher school examinations . Showcasing exelience in my academic journey",
    name: "Academics",
    designation: "Chitkara University (H.P)",
    company: "",
    image: "data:image/jpeg;base64,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",
    link: "https://www.chitkara.edu.in/"
  },
];

const projects = [
  {
    name: "Kafka StockMarket Stimulation",
    description:
      "This is the backend service for the real-time stock market simulation system. It processes stock updates from the operator panel, publishes them to Kafka, and distributes them to the user dashboard",
    tags: [
      {
        name: "Kafka",
        color: "blue-text-gradient",
      },
      {
        name: "Spring Boot",
        color: "green-text-gradient",
      },
      {
        name: "My Sql",
        color: "pink-text-gradient",
      },
      {
        name: "React",
        color: "blue-text-gradient",
      },
    ],
    image: "https://firebasestorage.googleapis.com/v0/b/start-it-up-421905.appspot.com/o/Leonardo_Phoenix_09_A_hightech_futuristic_digital_poster_featu_3.jpg?alt=media&token=191d37a8-3dd1-484d-aa07-81588a8ffeb9",
    source_code_link: "https://github.com/Satyamsharmahp36/Kafka_StockMarket",
    deployed: "https://www.youtube.com/@Code_Zilla",
  },
  {
    name: "Saral Nutrition Analyzer",
    description:
      "This a nutrition label scanner application , the name SARAL means Simplified , so it will simplify all the info written behind a packed food item. Also you can track all your searched items in history section",
    tags: [
      {
        name: "TypeScript",
        color: "blue-text-gradient",
      },
      {
        name: "Next.js",
        color: "green-text-gradient",
      },
      {
        name: "Landchain",
        color: "pink-text-gradient",
      },
      {
        name: "Tessaract",
        color: "blue-text-gradient",
      },
      {
        name: "OCR",
        color: "green-text-gradient",
      },
    ],
    image: "https://firebasestorage.googleapis.com/v0/b/start-it-up-421905.appspot.com/o/Leonardo_Phoenix_09_Create_a_modern_and_visually_appealing_pos_2.jpg?alt=media&token=6c3302d1-1428-4c93-a9f3-ccfc0d3c6b52",
    source_code_link: "https://github.com/Satyamsharmahp36/Saral_Nutrition_Scanner",
    deployed: "https://dazzling-lily-b02b12.netlify.app/",
  },
  {
    name: "Situational Comebacks",
    description:
      "This project provides a comprehensive collection of witty comebacks and effective statements for various situations, from trending discussions to personal interactions. Whether you're navigating debates , or adding charm to romantic encounters.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "node.js",
        color: "blue-text-gradient",
      },
    ],
    image: "https://firebasestorage.googleapis.com/v0/b/start-it-up-421905.appspot.com/o/Leonardo_Phoenix_09_A_visually_engaging_and_dynamic_poster_for_3.jpg?alt=media&token=1500451c-0f96-42c9-9dcc-cc7e5cf89d69",
    source_code_link: "https://github.com/kalviumcommunity/S59_situational_comebacks",
    deployed:"https://situationalcomeback.netlify.app/"
  },
  {
    name: "Start-It-Up",
    description:
      "This platform connects startup founders with investors and public. Founders can publish their business ideas, allowing investors to explore and invest in promising startups. The public can engage with innovative pitches, fostering a dynamic startup ecosystem.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongoDb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "node.js",
        color: "blue-text-gradient",
      },
      {
        name: "twilo",
        color: "green-text-gradient",
      },

    ],
    image: "https://firebasestorage.googleapis.com/v0/b/start-it-up-421905.appspot.com/o/Leonardo_Phoenix_09_A_modern_and_professional_poster_showcasin_2.jpg?alt=media&token=35b4505e-d060-42ce-bf00-ad562d671817",
    source_code_link: "https://github.com/kalviumcommunity/S59_SatyamSharma_StartItUp",
    deployed:"https://start-it-up.netlify.app/"
  },
  {
    name: "Cosmocook",
    description:
      "A culinary companion on a flavor odyssey! Every time you visit COSMOCOOK, you're in for a delightful surprise as we present you with a randomly selected recipe. Dive into a world of diverse flavors and culinary masterpieces with each refresh.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JS",
        color: "pink-text-gradient",
      },
    ],
    image: "https://firebasestorage.googleapis.com/v0/b/start-it-up-421905.appspot.com/o/WhatsApp%20Image%202025-02-24%20at%2013.52.16_ccbaa156.jpg?alt=media&token=a3834fc5-b8e6-41b1-b361-3d073e21ff6f",
    source_code_link: "https://github.com/Satyamsharmahp36/CosmoCook",
    deployed:"https://satyamsharmahp36.github.io/CosmoCook/"
  },
  {
    name: "Deliver Ji",
    description:
      "This Expo-based delivery application eliminates the need for brokers, allowing users to connect directly with delivery partners. Whether for parcels, food, or goods, this app ensures faster, cost-effective, and transparent deliveries.",
    tags: [
      {
        name: "Expo",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
    ],
    image: "https://firebasestorage.googleapis.com/v0/b/start-it-up-421905.appspot.com/o/Leonardo_Phoenix_09_A_clean_and_modern_poster_representing_a_s_1.jpg?alt=media&token=b7b68648-0158-4bd9-ad89-234497e0cfde",
    source_code_link: "https://github.com/Satyamsharmahp36/Deliver_Ji",
    deployed:"https://github.com/Satyamsharmahp36/Deliver_Ji"
  },


  {
    name: "Sahayog Mobile Application",
    description:
    "Sahayog Mobile Application is a disaster information app built with Expo. It provides real-time alerts, safety tips, emergency contacts, and relief center locations to help users stay informed and prepared during natural disasters. 🚀",
    tags: [
      {
        name: "Expo",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "MySql",
        color: "pink-text-gradient",
      },
    ],
    image: "https://firebasestorage.googleapis.com/v0/b/start-it-up-421905.appspot.com/o/Leonardo_Phoenix_10_A_clean_and_professional_poster_featuring_0.jpg?alt=media&token=7e8e8987-58a8-4040-8c73-11d0ef0952a3",
    source_code_link: "https://github.com/Satyamsharmahp36/Sahayog_Mobile_Application",
    deployed:"https://youtu.be/hEvjJF9KZFM?si=WNlUKF1stExtKreJ"
  },
  {
    name: "Ninja Warriors",
    description:
      "In Ninja Warriors, your speed, precision, and reflexes are put to the ultimate test! Slice through colorful shapes to score points while dodging deadly black-colored explosive obstacles. But beware—cutting a bomb will reduce your score and lives",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JS",
        color: "pink-text-gradient",
      },
      {
        name: "Canvas",
        color: "blue-text-gradient",
      },
    ],
    image: "https://firebasestorage.googleapis.com/v0/b/start-it-up-421905.appspot.com/o/Leonardo_Phoenix_09_A_dynamic_and_actionpacked_poster_featurin_3.jpg?alt=media&token=a74189ce-65da-41d7-bb5e-5f035e93f75c",
    source_code_link: "https://github.com/Satyamsharmahp36/Ninja_Warriors_Game?tab=readme-ov-file",
    deployed:"https://satyamsharmahp36.github.io/Ninja_Warriors_Game/"
  },
  {
    name: "TypeForm Automation",
    description:
      "This project automates the process of filling out Typeform surveys using Node.js, Puppeteer, and Cron. It’s a powerful tool to streamline repetitive form-filling tasks, featuring advanced browser automation and task scheduling.",
    tags: [
      {
        name: "Node.js",
        color: "blue-text-gradient",
      },
      {
        name: "puppeteer",
        color: "green-text-gradient",
      },
      {
        name: "Cron",
        color: "pink-text-gradient",
      },
    ],
    image: "https://firebasestorage.googleapis.com/v0/b/start-it-up-421905.appspot.com/o/Leonardo_Phoenix_10_A_modern_and_minimalistic_poster_showcasin_0.jpg?alt=media&token=c12ecc47-91fe-4c05-b881-a54b8c48be07",
    source_code_link: "https://github.com/Satyamsharmahp36/TypeForm_Auto",
    deployed:"https://youtu.be/HW0_dna9e3s?si=k3LBjU17wQ7COnaM"
  },


];

export { services, technologies, experiences, testimonials, projects };
