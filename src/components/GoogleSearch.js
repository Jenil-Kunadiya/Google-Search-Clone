import React, { useEffect, useState } from 'react'
import './GoogleSearch.scss'
import { motion } from 'framer-motion';
import google_gif from './images/Google Logo Animation.gif'
import {Outlet} from 'react-router-dom';


export const GoogleSearch = () => {

  const [loading, setLoading] = useState(true);

  // eslint-disable-next-line 
  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 3600);

    return () => clearTimeout(timer);
  });

  return (
    <>

      <motion.div 

      initial={{justifyContent:"center"}}
      animate={{justifyContent:"flex-start"}}
      transition={{duration:0.6, delay:3.6}}
      
      className='google_search_component'>

        {loading ? (
          <div className='google_search_preloader_div'>
            <motion.img
                initial={{ top: 0 }}
                animate={{ top:-250}}
                transition={{ duration: 0.6, delay: 3.6 }}
                className='google_logo_image'
                src={google_gif}
                alt="Loading..."
              />
          </div>
        ) : (
          <>
            <Outlet />
          </>
        )}
      </motion.div>
    </>

    
  )
}
