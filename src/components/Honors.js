import HonorCard from './HonorCard.js';
import hr from '../assets/curve-hr.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

export default function Honors() {
  return (
    <div id="honors" className="mt-4 text-white">
      <h1 className="text-2xl font-bold">Honors & Awards</h1>
      <p className="font-light text-gray-400">Here are some of my honors and awards</p>

      <div className="flex flex-col md:flex-row mt-4 gap-5">
        <HonorCard
          name="Won employee of the quarter"
          issued="Sproxil Inc."
          desc="For excellent work on rebuilding Sproxil informer (Track & Trace) from the ground"
          icon={
            <a
              href="https://www.linkedin.com/feed/update/urn:li:activity:6523536559822630912/"
              rel="noreferrer"
              target="_blank">
              <FontAwesomeIcon size="2xl" icon={faLinkedinIn} />
            </a>
          }
        />
        <HonorCard
          name="Bravo Team Awards"
          issued="Persistent Systems Limited"
          desc="Award for excellent contribution in the project"
          icon=""
        />
      </div>
      <img src={hr} className="w-full mt-8 md:h-2" alt="hr" />
    </div>
  );
}
