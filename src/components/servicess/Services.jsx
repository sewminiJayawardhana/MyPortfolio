import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import "./services.css";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I offer</span>

      <motion.div
        className="services__container container grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {/* Service card 1 */}
        <motion.div 
          className="services__content" 
          variants={cardVariants}
          whileHover={{ y: -8, scale: 1.02, boxShadow: "0 10px 30px rgba(139, 92, 246, 0.15)", borderColor: "rgba(139, 92, 246, 0.4)" }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">Web <br /> Designs</h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(1)}>
            View More <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <AnimatePresence>
            {toggleState === 1 && (
              <motion.div 
                className="services__modal active-modal"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="services__modal-content"
                  initial={{ scale: 0.85, y: 30 }}
                  animate={{ scale: 1, y: 0 }}
                  exit={{ scale: 0.85, y: 30 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                >
                  <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                  <h3 className="services__modal-title">Web Designs</h3>
                  <p className="services__modal-description">
                    Crafting responsive and aesthetically pleasing websites that deliver seamless user experiences.
                  </p>
                  <ul className="services__modal-services grid">
                    <li className="services__modal-service">
                      <i className="uil uil-check-circle services__modal-icon"></i>
                      <p className="services__modal-info">Web Page development.</p>
                    </li>
                    <li className="services__modal-service">
                      <i className="uil uil-check-circle services__modal-icon"></i>
                      <p className="services__modal-info">I develop the user interfaces.</p>
                    </li>
                    <li className="services__modal-service">
                      <i className="uil uil-check-circle services__modal-icon"></i>
                      <p className="services__modal-info">I create UX element interactions.</p>
                    </li>
                    <li className="services__modal-service">
                      <i className="uil uil-check-circle services__modal-icon"></i>
                      <p className="services__modal-info">Portfolio & showcase Design</p>
                    </li>
                  </ul>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Service card 2 */}
        <motion.div 
          className="services__content" 
          variants={cardVariants}
          whileHover={{ y: -8, scale: 1.02, boxShadow: "0 10px 30px rgba(139, 92, 246, 0.15)", borderColor: "rgba(139, 92, 246, 0.4)" }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <div>
            <i className="uil uil-edit services__icon"></i>
            <h3 className="services__title">UI/UX <br /> Designs</h3>
          </div>
          <span onClick={() => toggleTab(2)} className="services__button">
            View More <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <AnimatePresence>
            {toggleState === 2 && (
              <motion.div 
                className="services__modal active-modal"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="services__modal-content"
                  initial={{ scale: 0.85, y: 30 }}
                  animate={{ scale: 1, y: 0 }}
                  exit={{ scale: 0.85, y: 30 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                >
                  <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                  <h3 className="services__modal-title">UI/UX Designs</h3>
                  <p className="services__modal-description">
                    Creating user-centered designs that are visually appealing and intuitive to interact with.
                  </p>
                  <ul className="services__modal-services grid">
                    <li className="services__modal-service">
                      <i className="uil uil-check-circle services__modal-icon"></i>
                      <p className="services__modal-info">I create Wireframe and Prototypes</p>
                    </li>
                    <li className="services__modal-service">
                      <i className="uil uil-check-circle services__modal-icon"></i>
                      <p className="services__modal-info">I design User Interfaces.</p>
                    </li>
                    <li className="services__modal-service">
                      <i className="uil uil-check-circle services__modal-icon"></i>
                      <p className="services__modal-info">I create UX element interactions.</p>
                    </li>
                  </ul>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Service card 3 */}
        <motion.div 
          className="services__content" 
          variants={cardVariants}
          whileHover={{ y: -8, scale: 1.02, boxShadow: "0 10px 30px rgba(139, 92, 246, 0.15)", borderColor: "rgba(139, 92, 246, 0.4)" }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">Software <br /> Development</h3>
          </div>
          <span onClick={() => toggleTab(3)} className="services__button">
            View More <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <AnimatePresence>
            {toggleState === 3 && (
              <motion.div 
                className="services__modal active-modal"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="services__modal-content"
                  initial={{ scale: 0.85, y: 30 }}
                  animate={{ scale: 1, y: 0 }}
                  exit={{ scale: 0.85, y: 30 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                >
                  <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                  <h3 className="services__modal-title">Software Development</h3>
                  <p className="services__modal-description">
                    The process of designing, creating, deploying, and maintaining software solutions to address specific user needs or business challenges.
                  </p>
                  <ul className="services__modal-services grid">
                    <li className="services__modal-service">
                      <i className="uil uil-check-circle services__modal-icon"></i>
                      <p className="services__modal-info">Create REST API.</p>
                    </li>
                    <li className="services__modal-service">
                      <i className="uil uil-check-circle services__modal-icon"></i>
                      <p className="services__modal-info">Full-Cycle Software Development.</p>
                    </li>
                    <li className="services__modal-service">
                      <i className="uil uil-check-circle services__modal-icon"></i>
                      <p className="services__modal-info">Enterprise Software Development.</p>
                    </li>
                    <li className="services__modal-service">
                      <i className="uil uil-check-circle services__modal-icon"></i>
                      <p className="services__modal-info">Security Software Development.</p>
                    </li>
                  </ul>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Services;
