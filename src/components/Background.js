import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const Background = () => {
  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = {
    particles: {
      color: {
        value: '#FF0000',
        animation: {
          enable: true,
          speed: 10
        }
      },
      move: {
        attract: {
          enable: false,
          distance: 100,
          rotate: {
            x: 2000,
            y: 2000
          }
        },
        direction: 'none',
        enable: true,
        outModes: {
          default: 'destroy'
        },
        path: {
          clamp: false,
          enable: true,
          delay: {
            value: 0
          },
          generator: 'polygonPathGenerator',
          options: {
            sides: 6,
            turnSteps: 30,
            angle: 30
          }
        },
        random: false,
        speed: 3,
        straight: false,
        trail: {
          fillColor: '#000',
          length: 20,
          enable: true
        }
      },
      number: {
        density: {
          enable: true,
          area: 800
        },
        value: 0
      },
      opacity: {
        value: 1
      },
      shape: {
        type: 'circle'
      },
      size: {
        value: 2
      }
    },
    background: {
      color: '#000'
    },
    fullScreen: {
      zIndex: -1
    },
    emitters: {
      direction: 'none',
      rate: {
        quantity: 1,
        delay: 0.25
      },
      size: {
        width: 0,
        height: 0
      },
      position: {
        x: 50,
        y: 50
      }
    }
  };

  return (
    <div className="github">
      <Particles id="tsparticles" init={particlesInit} loaded={particlesLoaded} options={options} />
    </div>
  );
};

export default Background;
