import './App.css';
import {GoogleSearch} from './components/GoogleSearch'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {SearchScreen} from './components/Pages/SearchScreen'
import {SearchResults} from './components/Pages/SearchResults'
import { useState } from 'react';

function App() {


   //-------------------------- Google Search Clone Project-----------------------------//

   const [googleSearchBarInput, SetGoogleSearchBarInput] = useState('');
   const [googleSearchResultData, setGoogleSearchResultData] = useState(null);
   const [isLoading, setIsLoading] = useState(true);
 
 
   const handleGoogleSearchSubmit = async () => {
 
     const trimmedGoogleSearchInput = googleSearchBarInput.trim();
 
     if (/^[a-zA-Z0-9].*/.test(trimmedGoogleSearchInput)) {
       try {
         setIsLoading(true); // Set loading state to true
         const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=<Your_Google_Custom_Search_JSON_API_Key>&cx=<Your_Search_Engine_ID>&q=${trimmed_Google_Search_Input}`);
         const searchData = await response.json();
         setGoogleSearchResultData(searchData);
         setIsLoading(false); // Set loading state to false
       } catch (error) {
         console.error('Error fetching data:', error);
         setIsLoading(false); // Set loading state to false in case of an error
       }
     }
 };

  return (
    <Router>
      <div className="App">

        <Routes>
          <Route path="/" element={<GoogleSearch/>}>
            <Route index element={<SearchScreen googleSearchBarInput={googleSearchBarInput} SetGoogleSearchBarInput={SetGoogleSearchBarInput} handleGoogleSearchSubmit={handleGoogleSearchSubmit} />} />
            <Route path="/results"  element={<SearchResults googleSearchBarInput={googleSearchBarInput} SetGoogleSearchBarInput={SetGoogleSearchBarInput} googleSearchResultData={googleSearchResultData} isLoading={isLoading} handleGoogleSearchSubmit={handleGoogleSearchSubmit}/>} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
 
