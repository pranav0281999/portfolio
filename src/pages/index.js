import * as React from "react"
import Profile from "../components/profile"
import Skills from "../components/skills";
import Experience from "../components/experience";
import Hobbies from "../components/hobbies";
import {
  divMain
} from "./index.module.css";
import ProjectList from "../components/projectList";
import Footer from "../components/footer";

const IndexPage = () => {
  return (
    <div className={divMain}>
      <Profile/>
      <Skills/>
      <Experience/>
      <ProjectList/>
      <Hobbies/>
      <Footer/>
    </div>
  )
};

export default IndexPage;
