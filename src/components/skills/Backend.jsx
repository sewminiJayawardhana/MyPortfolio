

import { motion } from 'framer-motion';

const Backend = () => {
  return (
    <motion.div 
      className="skills__content"
      whileHover={{ y: -8, scale: 1.02, boxShadow: "0 10px 30px rgba(139, 92, 246, 0.15)", borderColor: "rgba(139, 92, 246, 0.4)" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <h3 className="skills__title">Backend Technologies</h3>

      <div className="skills__box">
        <div className="skills__group">

          <div className="skills__data">
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className="skills__name">Java</h3>
            </div>
          </div>

          <div className="skills__data">
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className="skills__name">Python</h3>
            </div>
          </div>

          <div className="skills__data">
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className="skills__name">Express.js</h3>
            </div>
          </div>

          <div className="skills__data">
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className="skills__name">SpringBoot</h3>
            </div>
          </div>


        </div>

        <div className="skills__group">

          <div className="skills__data">
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className="skills__name">JavaEE</h3>
            </div>
          </div>


          <div className="skills__data">
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className="skills__name">Node.js</h3>
            </div>
          </div>

          <div className="skills__data">
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className="skills__name">MySQL</h3>
            </div>
          </div>

          <div className="skills__data">
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className="skills__name">MongoDB</h3>
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  )
}

export default Backend
