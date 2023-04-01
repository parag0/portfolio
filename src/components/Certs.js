import React, { useState, useCallback, useEffect } from 'react';
import ImageViewer from 'react-simple-image-viewer';

import CertCard from './CertCard.js';
import hr from '../assets/curve-hr.svg';
import aws from '../assets/certs/aws.svg';
import rhceLogo from '../assets/certs/rhceLogo.svg';
import rhceCert from '../assets/certs/rhceCert.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAws, faRedhat } from '@fortawesome/free-brands-svg-icons';

export default function Certs() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  let images;

  useEffect(() => {
    images = [rhceCert];
  }, []);

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <div id="certs" className="mt-4 text-white">
      <h1 className="text-2xl font-bold">Certifications</h1>
      <p className="font-light text-gray-400">Here are some of my Certifications</p>
      <div className="grid grid-cols-1 md:grid-cols-3 justify-center mt-4 gap-5">
        <CertCard
          name="AWS Certified Solutions Architect - Associate"
          img={aws}
          issued="AWS"
          date="Nov 2022"
          icon={
            <a
              href="https://www.credly.com/badges/acbf2942-f7a8-41ac-b888-c27d80fa6599/public_url"
              rel="noreferrer"
              target="_blank">
              <FontAwesomeIcon size="2xl" icon={faAws} />
            </a>
          }
        />

        <CertCard
          name="Red Hat Certified Engineer"
          img={rhceLogo}
          issued="Red Hat"
          date="Feb 2011"
          icon={
            <div>
              <a
                href={() => openImageViewer(0)}
                rel="noreferrer"
                target="_blank"
                onClick={() => openImageViewer(0)}>
                <FontAwesomeIcon size="2xl" icon={faRedhat} />
              </a>

              {isViewerOpen && (
                <ImageViewer
                  className="w-25 h-25 mx-auto object-cover"
                  src={images}
                  currentIndex={currentImage}
                  onClose={closeImageViewer}
                  disableScroll={false}
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
