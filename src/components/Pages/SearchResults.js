import React, { useEffect } from 'react'
// import {useNavigate} from 'react-router-dom'
import './searchResult.scss'
import {motion} from 'framer-motion'
import profile from '../images/profile.jpeg'
import nine_dots_nav_icon from '../images/nine_dots_nav_iocn.svg'
// import {useNavigate} from 'react-router-dom'
import google_mike from '../images/google mike.svg'
import google_search_by_image from '../images/Google search by image.svg'
import google_text_logo from '../images/google text logo.svg'
import {useNavigate} from 'react-router-dom'

export const SearchResults = ({ isSidebarOpen, setIsSidebarOpen, googleSearchBarInput, SetGoogleSearchBarInput, googleSearchResultData, isLoading , handleGoogleSearchSubmit}) => {

  
  const handleSidebarToggle =() =>{
    setIsSidebarOpen(!isSidebarOpen);
  }

  const navigate = useNavigate();
  
  useEffect(() => {
    if(googleSearchBarInput === ''){
      navigate('/My_Projects/google_search');
    }
    // eslint-disable-next-line
  },[])

  console.log(googleSearchResultData)

  const handleClear = () => {
    SetGoogleSearchBarInput('');
  };

  return (
    <div className='google_search_result_container'>


      {/*----------------------------------------------- Navbar -----------------------------------------------------*/}

    
      <motion.div 
        initial={{ top: -60}}
        animate={{ top: 0}}
        transition={{ duration: 0.2 }}
        className='google_search_result_navbar'
      >

        <div className='google_search_nav_left_side_div'>

          <div className='google_search_nav_sidebar_toggle' onClick={handleSidebarToggle}><i class="fa-solid fa-bars-staggered"></i></div>

          <div className='google_search_result_nav_logo_div'> 
            <img className="google_search_result_nav_logo" src={google_text_logo} alt='google'/>
          </div>

          <div className='google_search_nav_right_side_profile_div'><img src={profile} alt='profile' className='google_search_nav_right_side_profile'/></div>


          <div className="google_search_input_container">
            <input 
                type="text" 
                value={googleSearchBarInput}
                className="google_search_input" 
                placeholder="Search..." 
                onChange={(event) => SetGoogleSearchBarInput(event.target.value)}
                onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                        handleGoogleSearchSubmit()
                    }
                }}
            />

            <div className="google_search_right_icons">
              {googleSearchBarInput && (<div className="google_search_input_clear_icon" onClick={handleClear}>&#10006;</div>)}
              <img src={google_mike} className='google_search_right_icons_mike' alt='mike' />
              <img src={google_search_by_image} className='google_search_right_icons_lens' alt='lens' />
              <i class="fa-solid fa-magnifying-glass google_search_right_icons_search" onClick={handleGoogleSearchSubmit}></i>
            </div>

          </div>
        </div>

        <div className='google_search_nav_right_side_div'>
          <div className='google_search_nav_right_side_links_div'>
              <li className='google_search_nav_right_side_links'>Gmail</li>
              <li className='google_search_nav_right_side_links'>Images</li>
          </div>
          <div className='google_search_nav_right_side_more_apps_div'><img className='google_search_nav_right_side_more_apps_icon' src={nine_dots_nav_icon} alt='More Apps'/></div>
          <div className='google_search_nav_right_side_profile_div'><img src={profile} alt='profile' className='google_search_nav_right_side_profile'/></div>

          <div className="google_search_input_container">
            
            <i class="fa-solid fa-magnifying-glass google_search_right_icons_search" onClick={handleGoogleSearchSubmit}></i>

            <input 
                type="text" 
                value={googleSearchBarInput}
                className="google_search_input" 
                placeholder="Search..." 
                onChange={(event) => SetGoogleSearchBarInput(event.target.value)}
                onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                        handleGoogleSearchSubmit()
                    }
                }}
            />

            <div className="google_search_right_icons">
              {googleSearchBarInput && (<div className="google_search_input_clear_icon" onClick={handleClear}>&#10006;</div>)}
              <img src={google_mike} className='google_search_right_icons_mike' alt='mike' />
              <img src={google_search_by_image} className='google_search_right_icons_lens' alt='lens' />
            </div>

          </div>
        </div>


      


      </motion.div>
      

      <div className='google_search_result_content_div'>

        {isLoading? (
          <div class="google_search_result_loader_div">
            <div className='google_search_result_loader'></div>
          </div>
        
        ) : (
          <div className='google_search_result_content'>
            {googleSearchResultData && googleSearchResultData.items ? (
              googleSearchResultData.items.map((result, index) => (
                <div className='google_search_result_content_child_div' key={index}>
                  <div className='google_search_result_div'>
                    <div className='google_search_result'>
                    <h3 className='google_search_result_title_link'>
                      <a
                        href={result.link}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        {result.title}
                      </a>
                    </h3>
                    <p className='google_search_result_title_description'>{result.snippet}</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              // Check for API error
              googleSearchResultData?.error ? (
                <div className='google_search_error_message_main_container'>
                  <div className='google_search_error_message_div'>
                    <div className='google_search_error_message_heading'>Request Limit of API is Exceeded</div>
                    <div className='google_search_error_message m_2'> We appreciate your interest! However, due to high demand or maintenance activities, we kindly request you to try again after 24 hours.</div>
                  </div>
                  <div className='google_search_error_message_div'>
                    <div className='google_search_error_message'> We sincerely apologize for any inconvenience caused by the recent error. Thank you for your understanding and patience.</div>
                    <div className='google_search_error_message'>~ Jenil Kunadiya</div>
                  </div>
                </div>
              ) : (
                <p>No results found.</p>
              )
            )}
          </div>
        )}
      </div>
    </div>
  )
}
