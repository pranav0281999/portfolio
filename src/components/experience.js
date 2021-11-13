import React from 'react';
import cavistaImage from "../images/cavista.jpeg";
import raxaImage from "../images/raxa.jpg";
import aximindImage from "../images/aximind.png";
import kilobyteImage from "../images/kilobyte.jpeg";
import {
  divExperiences,
  divExperiencesOuter,
  divExperienceDetails,
  divExperience,
  pDateRange,
  pDescription,
  pTitle,
  pHeading,
  imgCompanyLogo
} from "./experience.module.css";

function Experience(props) {
  const experiences = [
    {
      image: cavistaImage,
      title: "Engineer I",
      dateRange: "Aug 2021 - Present",
      description: "Using Aurelia to something something and something more. " +
        "Some more description and doing something of something."
    },
    {
      image: aximindImage,
      title: "Product Strategist",
      dateRange: "Feb 2021 - Aug 2021",
      description: "Using Three.js and WebXR to develop an AR application. Using " +
        "React.js to develop the desktop UI that interacts with the mobile " +
        "AR web app"
    },
    {
      image: raxaImage,
      title: "Software Engineer",
      dateRange: "Sep 2019 - Sep 2020",
      description: "Using Java, React Native, and Flutter to develop and maintain and main product"
    },
    {
      image: kilobyteImage,
      title: "Front-end Developer",
      dateRange: "June 2019 - Aug 2019",
      description: "Using React Native to develop hybrid mobile apps for " +
        "company and clients."
    },
  ];

  return (
    <div className={divExperiences}>
      <p className={pHeading}>Experiences</p>

      <div className={divExperiencesOuter}>
        {experiences.map(experience => (
          <div className={divExperience}>
            <img
              src={experience.image}
              alt={"Company Logo"}
              className={imgCompanyLogo}
            />
            <div className={divExperienceDetails}>
              <p className={pDateRange}>{experience.dateRange}</p>
              <p className={pTitle}>{experience.title}</p>
              <p className={pDescription}>{experience.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
