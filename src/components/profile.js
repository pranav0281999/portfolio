import * as React from "react";
import {
  divProfile,
  divProfileDetails,
  pContent,
  pName,
  pTitle,
  imgProfile,
  divProfileDetailsInner,
  divProfileDetailsName,
  divProfileDetailsContact,
  divContact,
  aContact,
  pContactIcon
} from "./profile.module.css";
import profileImage from "../images/profile.png";
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Profile = () => {
  return (
    <div className={divProfile}>
      <img src={profileImage} alt={"Profile"} className={imgProfile}/>
      <div className={divProfileDetails}>
        <div className={divProfileDetailsInner}>
          <div className={divProfileDetailsName}>
            <p className={pName}>Pranav Bhardwaj</p>
            <p className={pTitle}> Front-end developer</p>
          </div>
          <div className={divProfileDetailsContact}>
            <div className={divContact}>
              <EmailIcon className={pContactIcon}/>
              <a
                className={aContact}
                href={"mailto:pranavbhardwaj1999@gmail.com"}
                target={"_blank"}
              >
                &nbsp;Email
              </a>
            </div>
            <div className={divContact}>
              <GitHubIcon className={pContactIcon}/>
              <a
                className={aContact}
                href={"https://github.com/pranav0281999/"}
                target={"_blank"}
              >
                &nbsp;Github
              </a>
            </div>
            <div className={divContact}>
              <LinkedInIcon className={pContactIcon}/>
              <a
                className={aContact}
                href={"https://www.linkedin.com/in/pranav0281999/"}
                target={"_blank"}
              >
                &nbsp;LinkedIn
              </a>
            </div>
          </div>
        </div>
        <p className={pContent}>
          Software developer working mainly on website development using React.js with a serious interest in web based
          AR/VR technologies.
        </p>
      </div>
    </div>
  )
};

export default Profile;
