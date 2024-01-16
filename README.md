# Google Search Clone Project

## Overview
Welcome to the Google Search Clone project! This project is a ReactJS-based replica of Google Search integrated with Google's REST API for real-time search results.

## Table of Contents

- [Features](#features)
- [Dependencies](#dependencies)
- [Installation](#installation)
- [API Key Reference](#APIKeyReference)
- [Contributing](#contributing)


## Features

**Search Bar:** Responsive search bar with autocomplete

**Search Results:** Display search results using Google's REST API with Pagination for easy navigation through search results.

**Real-time Updates:** Real-time updates to search results as the user types.

**Mobile Responsiveness:** Fully responsive design for a seamless experience on various devices.



## Dependencies

Major dependencies for this project include:

- "react": "^18.2.0"
- "react-router-dom": "^6.21.1"
- "framer-motion": "^10.17.9"
- "sass": "^1.69.7"


## Installation

To install and run this project locally, follow these steps:

1. Clone the repository to your local machine:
```bash
git clone https://github.com/Jenil-Kunadiya/google-search-clone.git
```

2. Navigate to the project directory:
```bash
cd google-search-clone
```

3. Install project dependencies using npm:
```bash
npm install
```

4. Start the development server:
```bash
npm start
```

5. Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view the project.



## API Key Reference

To access Google Custom Search JSON API, you'll need to obtain an API key and a Search Engine ID. Follow the links below to get your API key and Search Engine ID:

| Required Type               | Website Link                                          | 
| :-------------------------- | :---------------------------------------------------- |
| Google Custom Search JSON API | [API Overview](https://developers.google.com/custom-search/v1/overview) |
| Search Engine ID             | [Search Engine Control Panel](https://programmablesearchengine.google.com/controlpanel/all) |


After obtaining your API key and Search Engine ID, you can make requests to the Google Custom Search API using the following URL:

```plaintext
https://www.googleapis.com/customsearch/v1?key=<Your_Google_Custom_Search_JSON_API_Key>&cx=<Your_Search_Engine_ID>&q={trimmed_Google_Search_Input}
```
**Note:** this API link was used in App.js Component



## Contributing

We welcome contributions! To contribute to this project:

    1. Fork the project

    2. Create your feature branch (git checkout -b feature/AmazingFeature)

    3. Commit your changes (git commit -m 'Add some amazing feature')

    4. Push to the branch (git push origin feature/AmazingFeature)

    5. Open a pull request
