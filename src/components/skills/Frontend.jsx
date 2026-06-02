
import { motion } from 'framer-motion';

const Frontend = () => {
  return (
    <motion.div 
      className="skills__content"
      whileHover={{ y: -8, scale: 1.02, boxShadow: "0 10px 30px rgba(139, 92, 246, 0.15)", borderColor: "rgba(139, 92, 246, 0.4)" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <h3 className="skills__title">Frontend Technologies</h3>

      <div className="skills__box">
        <div className="skills__group">

          <div className="skills__data">
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className="skills__name">JavaScript</h3>
            </div>
          </div>

          <div className="skills__data">
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className="skills__name">React</h3>
            </div>
          </div>

          <div className="skills__data">
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className="skills__name">HTML5</h3>
            </div>
          </div>

          <div className="skills__data">
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className="skills__name">CSS3</h3>
            </div>
          </div>

        </div>

        <div className="skills__group">
          <div className="skills__data">
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className="skills__name">TailwindCSS</h3>
            </div>
          </div>


          <div className="skills__data">
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className="skills__name">jQuary</h3>
            </div>
          </div>

          <div className="skills__data">
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className="skills__name">Framer Motion</h3>
            </div>
          </div>


        </div>
      </div>
    </motion.div>
  )
}

export default Frontend
