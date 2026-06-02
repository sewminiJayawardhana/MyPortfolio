import React from 'react';
import AnimatedCursor from "react-animated-cursor";

function AnimCursor() {
  return (
    <AnimatedCursor 
      innerSize={8}
      outerSize={35}
      color="124, 58, 237"
      outerAlpha={0.3}
      innerScale={0.7}
      outerScale={4}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link',
        '.services__button',
        '.work__item',
      ]}
    />
  )
}

export default AnimCursor
