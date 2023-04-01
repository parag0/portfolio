import { faLinkedinIn, faBuffer } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HonorCard from './HonorCard.js';
import hr from '../assets/curve-hr.svg';
import ImageViewer from 'react-simple-image-viewer';
import pslBravo from '../assets/awards/pslBravo.svg';
import React, { useState, useCallback, useEffect } from 'react';

export default function Honors() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  let images = [pslBravo];

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <div id="honors" className="mt-4 text-white">
      <h1 className="text-2xl font-bold themeColor">Honors & Awards</h1>

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
          icon={
            <div>
              <a
                href={() => openImageViewer(1)}
                rel="noreferrer"
                target="_blank"
                onClick={() => openImageViewer(1)}>
                <FontAwesomeIcon size="2xl" icon={faBuffer} />
              </a>

              {isViewerOpen && (
                <ImageViewer
                  src={images}
                  currentIndex={currentImage}
                  onClose={closeImageViewer}
                  disableScroll={true}
                  backgroundStyle={{
                    backgroundColor: 'rgba(0,0,0,0.9)'
                  }}
                  closeOnClickOutside={true}
                />
              )}
            </div>
          }
        />
      </div>
      <img src={hr} className="w-full mt-8 md:h-2" alt="hr" />
    </div>
  );
}
