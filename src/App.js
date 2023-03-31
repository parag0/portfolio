import './App.css';
import { useEffect, useState } from 'react';
import { Triangle } from 'react-loader-spinner';
import AOS from 'aos';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Skills from './components/Skills';
import Honors from './components/Honors';
import Certs from './components/Certs';
import Footer from './components/Footer';
import Background from './components/Background';
import 'aos/dist/aos.css';

const App = () => {
  const [loaded, setLoaded] = useState(true);

  useEffect(() => {
    document.title = 'Parag Jadhav';
    AOS.init();
    setTimeout(() => {
      setLoaded(false);
    }, 2000);
  }, []);

  return (
    <div className="px-6 lg:px-20 xl:px-36 bg-dark-500">
      {loaded ? (
        <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-black flex flex-col items-center justify-center">
          <Triangle
            height="80"
            width="80"
            ariaLabel="triangle-loading"
            color="#ec3d37"
            visible={loaded}
          />
        </div>
      ) : (
        <div>
          <Background />
          <Navbar />
          <Banner />
          <Skills />
          <Honors />
          <Certs />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default App;
