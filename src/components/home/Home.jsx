import { useState, useEffect } from 'react';
import "./home.css";
import Social from './Social';
import Data from './Data';
import { motion } from 'framer-motion';

const Home = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const opacity = scrollY < 300 ? 1 - scrollY / 300 : 0; 
  const scale = scrollY < 100 ? 1 - scrollY / 1000 : 0.7; 

  return (
    <section className="home section" id="home">
      <div className="home__container container">
        <Social />

        <motion.div
          className="home__content"
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity, scale }}
          transition={{ ease: "easeOut", duration: 1 }}
          style={{ transformOrigin: 'center top' }}
        >
          <Data />
          
          <motion.div 
            className="home__img"
            initial={{ scale: 0, rotate: -180, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 85, damping: 15, delay: 0.2 }}
            whileHover={{ scale: 1.05, rotate: 3, boxShadow: "0 0 25px rgba(168, 85, 247, 0.6)" }}
          ></motion.div>
        </motion.div>


      </div>
    </section>
  );
};

export default Home;
