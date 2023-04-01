import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import aws from '../assets/skills/aws.svg';
import azure from '../assets/skills/azure.svg';
import docker from '../assets/skills/docker.svg';
import express from '../assets/skills/express.svg';
import firebase from '../assets/skills/firebase.svg';
import gcp from '../assets/skills/gcp.svg';
import git from '../assets/skills/git.svg';
import hr from '../assets/curve-hr.svg';
import mongodb from '../assets/skills/mongodb.svg';
import nodejs from '../assets/skills/nodejs.svg';
import reactIcon from '../assets/skills/react.svg';
import redis from '../assets/skills/redis.svg';
import SkillCard from './SkillCard.js';
import Slider from 'react-slick';
import sql from '../assets/skills/sql.svg';
import microservice from '../assets/skills/microservice.svg';
import serverless from '../assets/skills/serverless.svg';

export default function Skills() {
  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1
  };

  return (
    <div id="skills" className="mt-4 text-white">
      <h1 className="text-2xl font-bold">Skills</h1>
      <p className="font-light text-gray-400">Here are some of my skills</p>

      <div className="mt-4">
        <Slider {...settings}>
          <SkillCard name="NodeJs" experience="6 years" img={nodejs} />
          <SkillCard name="ExpressJs" experience="6 years" img={express} />
          <SkillCard name="MongoDB" experience="6 years" img={mongodb} />
          <SkillCard name="Redis" experience="4 years" img={redis} />
          <SkillCard name="AWS" experience="6 years" img={aws} />
          <SkillCard name="GCP" experience="3 years" img={gcp} />
          <SkillCard name="Azure" experience="2 years" img={azure} />
          <SkillCard name="Firebase" experience="3 years" img={firebase} />
          <SkillCard name="MySQL" experience="5 years" img={sql} />
          <SkillCard name="Microservices" experience="4 years" img={microservice} />
          <SkillCard name="Serverless" experience="6 years" img={serverless} />
          <SkillCard name="React" experience="3 years" img={reactIcon} />
          <SkillCard name="Docker" experience="2 years" img={docker} />
          <SkillCard name="Git" experience="7 years" img={git} />
        </Slider>
      </div>
      <img src={hr} className="w-full mt-8 md:h-3" alt="hr" />
      <br />
    </div>
  );
}
