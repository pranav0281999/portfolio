import React from 'react';
import {
  divHobbiesOuter,
  divHobby,
  divHobbies,
  imgHobby,
  pHobbyTitle,
  pHobbyDescription,
  pHeading,
} from "./hobbies.module.css";
import cyclingImage from "../images/cycling.jpg";
import codingImage from "../images/coding.jpg";
import heritageImage from "../images/heritage.jpg";

function Hobbies(props) {
  const hobbies = [
    {
      image: cyclingImage,
      title: "Cycling",
      description: "I like cycling, very fun, ummm hmmmm"
    },
    {
      image: heritageImage,
      title: "Exploring Heritage Sites",
      description: "I like visiting ans exploring heritage sites, very fun, hmmm ummm"
    },
    {
      image: codingImage,
      title: "Coding",
      description: "sdjhf ld asjkdew ew  a  a kjfndsakjf kjsf kjsdfn kjsdfn"
    },
  ];

  return (
    <div className={divHobbies}>
      <p className={pHeading}>Hobbies</p>

      <div className={divHobbiesOuter}>
        {hobbies.map(hobby => (
          <div className={divHobby}>
            <img
              src={hobby.image}
              alt={"Hobby"}
              className={imgHobby}
            />
            <p className={pHobbyTitle}>{hobby.title}</p>
            <p className={pHobbyDescription}>{hobby.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hobbies;
