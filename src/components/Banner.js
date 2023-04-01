import profile from '../assets/profile-pic/profile.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import hr from '../assets/curve-hr.svg';

const Banner = () => {
  return (
    <div
      id="home"
      className="flex w-full h-screen flex-col md:flex-row gap-5 items-center justify-center text-white relative">
      <div className="md:w-2/5 md:p-4">
        <img
          data-aos="flip-right"
          data-aos-duration="1500"
          data-aos-offset="200"
          src={profile}
          alt="profile"
        />
      </div>
      <div
        className="md:w-3/6"
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-offset="100">
        <div className="flex flex-col w-full mt-8">
          <b className="text-3xl text-gray-400 my-1 themeColor">Parag Jadhav</b>

          <br />
          <code className="text-xl my-1 text-gray-400">
            I&apos;m a &lt;AWS Solutions Architect/&gt; &amp; <br /> &lt;Software Engineer/&gt;
          </code>
          <br />

          <p className="text-md font-light text-gray-400 my-1">
            Full Stack developer having a total experience of 8 years (and some change) in
            developing backend and front-end applications.
          </p>
          <p className="text-md font-light text-gray-400 my-1">
            I have worked on widely used cloud platforms - AWS, GCP, Azure. Experienced in agile
            development.
          </p>
        </div>
        <br />
        <ul className="flex mt-2 gap-4 items-center">
          <li>
            <a href="https://github.com/parag0" rel="noreferrer" target="_blank">
              <FontAwesomeIcon size="2xl" icon={faGithub} />
            </a>
          </li>
          <li>
            <a
              href="https://stackoverflow.com/users/3157062/parag-jadhav"
              rel="noreferrer"
              target="_blank">
              <FontAwesomeIcon size="2xl" icon={faStackOverflow} />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/parag0" rel="noreferrer" target="_blank">
              <FontAwesomeIcon size="2xl" icon={faLinkedinIn} />
            </a>
          </li>
        </ul>
      </div>
      <img src={hr} className="w-full md:h-2 absolute bottom-0" alt="hr" />
    </div>
  );
};

export default Banner;
