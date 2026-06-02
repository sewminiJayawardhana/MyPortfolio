import React from 'react';
import { motion } from 'framer-motion';

const WorkItems = ({ item }) => {
  return (
    <motion.div
      layout
      className="work__card"
      key={item.id}
      initial={{ opacity: 0, y: 30 }} 
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      whileHover={{ y: -8, scale: 1.02, boxShadow: "0 12px 30px rgba(139, 92, 246, 0.15)", borderColor: "rgba(139, 92, 246, 0.4)" }}
      transition={{ duration: 0.5, ease: 'easeOut' }} 
    >
      <div style={{ overflow: 'hidden', borderRadius: '1rem', marginBottom: 'var(--mb-1)' }}>
        <motion.img 
          src={item.image} 
          alt={item.title} 
          className="work__img" 
          style={{ marginBottom: 0, display: 'block' }}
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        />
      </div>
      <h3 className="work__title">{item.title}</h3>
      <a 
        href={item.link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="work__button"
      >
        See More <i className="uil uil-arrow-right work__button-icon"> </i>
      </a>
    </motion.div>
  );
};

export default WorkItems;
