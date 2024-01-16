import React, { useEffect } from 'react'
import { motion } from 'framer-motion';
import nine_dots_nav_icon from '../images/nine_dots_nav_iocn.svg'
import google_mike from '../images/google mike.svg'
import google_search_by_image from '../images/Google search by image.svg'
import google_gif from '../images/Google Logo Animation.gif'
import profile from '../images/profile.jpeg'
import {useNavigate} from 'react-router-dom'
import '../GoogleSearch.scss'

export const SearchScreen = ({ googleSearchBarInput, SetGoogleSearchBarInput, handleGoogleSearchSubmit }) => {

    useEffect(()=>{
        SetGoogleSearchBarInput('');
    },[SetGoogleSearchBarInput])


    const navigate = useNavigate();


    const handleGoogleSearchSubmitHome = () =>{

        const trimmedGoogleSearchInput = googleSearchBarInput.trim();

        if(/^[a-zA-Z0-9].*/.test(trimmedGoogleSearchInput)){
            navigate('results')
            handleGoogleSearchSubmit();
        }
    }


  return (
    <>


        {/*----------------------------------------------- Navbar -----------------------------------------------------*/}

    
        <motion.div 
            initial={{ top: -60}}
            animate={{ top: 0}}
            transition={{ duration: 0.3, delay:0.6 }}
            className='google_search_navbar'
        >
            <div className='google_search_nav_right_side_div'>
            <div className='google_search_nav_right_side_links_div'>
                <li className='google_search_nav_right_side_links'>Gmail</li>
                <li className='google_search_nav_right_side_links'>Images</li>
            </div>
            <div className='google_search_nav_right_side_more_apps_div'><img className='google_search_nav_right_side_more_apps_icon' src={nine_dots_nav_icon} alt='More Apps'/></div>
            <div className='google_search_nav_right_side_profile_div'><img src={profile} alt='profile' className='google_search_nav_right_side_profile'/></div>
            </div>


        </motion.div>

        


        {/*---------------------------------------- Google Search Content ----------------------------------------------*/}

        <div className='google_search_content_main_container'>

            <motion.div 
            animate={{ marginTop: '15vh'}}
            transition={{ duration: 0.6 }}
            className='google_search_content_div'
            >

            <motion.div 
                animate={{ height:100, overflow: 'hidden' }}
                transition={{ duration: 0.6 }}
                className='google_logo_image_div'
            >

                <motion.img
                initial={{ top: 0,scale:1 }}
                animate={{ top:-250, scale:0.8 }}
                transition={{ duration: 0.6 }}
                className='google_logo_image'
                src={google_gif}
                alt="Loading..."
                />


            </motion.div>

            <motion.div 
                initial={{ display: 'none', y:10 }}
                animate={{ display: 'block', y:0}}
                transition={{ duration: 0.3, delay: 0.5 }}
                className="google_search_input_container"
            >
                <input 
                    type="text" 
                    className="google_search_input" 
                    placeholder="Search..." 
                    onChange={(event) => SetGoogleSearchBarInput(event.target.value)}
                    onKeyDown={(event) => {
                        if (event.key === 'Enter') {
                            handleGoogleSearchSubmitHome()
                        }
                    }}
                />
                <div className="google_search_left_icon"><i class="fa-solid fa-magnifying-glass"></i></div>
                <div className="google_search_right_icons"><img src={google_mike} className='google_search_right_icons_mike' alt='mike' /><img src={google_search_by_image} className='google_search_right_icons_lens' alt='lens' /></div>
            </motion.div>

            <motion.div 
                initial={{ display: 'none', y:10 }}
                animate={{ display: 'flex', y:0}}
                transition={{ duration: 0.3, delay: 0.8 }}
                className='google_search_input_search_btn_div'
            >
                <div onClick={handleGoogleSearchSubmitHome} className='google_search_input_search_btn'>Google Search</div>
                <div className='google_search_input_search_btn'>I'm Feeling Lucky</div>
            </motion.div>



            </motion.div>

            <motion.div 
            initial={{ display: 'none', y:110 }}
            animate={{ display: 'flex', y:0}}
            transition={{ duration: 0.3, delay: 1 }}
            className='google_search_footer'
            >
            <div className='google_search_footer_location'>India</div>

            <div className='google_search_footer_about_links_main_div'>
                <div className='google_search_footer_about_links_div'>
                <li className='google_search_footer_about_link'>About</li>
                <li className='google_search_footer_about_link'>Advertising</li>
                <li className='google_search_footer_about_link'>Business</li>
                <li className='google_search_footer_about_link'>How Search Works</li>
                </div>
                <div className='google_search_footer_about_links_div'>
                <li className='google_search_footer_about_link'>Privacy</li>
                <li className='google_search_footer_about_link'>Terms</li>
                <li className='google_search_footer_about_link'>Settings</li>
                </div>
            </div>

            </motion.div>

         </div>
    
    
    
    </>
  )
}
