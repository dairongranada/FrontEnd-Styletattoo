import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"



export const Portafolio = ({key,image1,image2,image3,image4,image5 }) => {

  return (
    <>

      <motion.div className='slider-container'>
        <motion.div className='slider' drag='x'
          dragConstraints={{ right: 0, left: -1250 }} >
          <motion.div key={key} className='item'>
            <div className="PortafolioImg">
              <div className="card-img"><img className='item-image' src={image1} alt="Imagen producto" /></div>
            </div>
          </motion.div>

          <motion.div key={key} className='item'>
            <div className="PortafolioImg">
              <div className="card-img"><img className='item-image' src={image2} alt="Imagen producto" /></div>
            </div>
          </motion.div>

          <motion.div key={key} className='item'>
            <div className="PortafolioImg">
              <div className="card-img"><img className='item-image' src={image3} alt="Imagen producto" /></div>
            </div>
          </motion.div>


          <motion.div key={key} className='item'>
            <div className="PortafolioImg">
              <div className="card-img"><img className='item-image' src={image4} alt="Imagen producto" /></div>
            </div>
          </motion.div>

          <motion.div key={key} className='item'>
            <div className="PortafolioImg">
              <div className="card-img"><img className='item-image' src={image5} alt="Imagen producto" /></div>
            </div>
          </motion.div>


        </motion.div>
      </motion.div>
    </>
  )
}

