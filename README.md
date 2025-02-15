# Netflix-GPT

# Features to build
- Login/Sign Ip
    - Sign In/Sign Up form
    - Redirect to Browse Page
- Browse (when authenticated)
    - Header 
    - Main Movie
        - Trailer in background
        - Title and Description
        - Movie Suggestions
            - MovieLists * N
- Netflix GPT
    - Search Bar
    - Movie Suggestions

- Create react app
- Install TailwindCss and configure it
- Run CMD - "npm i -D react-router-dom"
- Header, Body, BrowsePage
- Login Form
- Sign Up Form
- Routing
- Form Validation
- useRef Hook
- Firebase Setup
- Create signUp, signIn User Account with Firebase
- Created Redux Store with UserSlice
- Calling the addUser and removeUser in top of the app to save the current User
- Implemented Sign Out
- Update Profile
- Unsubscribe to onAuthStateChanged when component unmount
- Fetch from TMDB Movies
- Register TMDB API and create an application
- Get data from TMDB for the Browse Page
- Get data for the Trailer using all the videos belonged to particular movie
- Created custom hook for the trailer movie and updated the store MoviesSlice as well
- Embedded the youtube video and make it auto-play and mute
- Build Secondary Component
- Build Movie list & movie card
- TMDB image CDN URL
- Use custom hooks like usePopularMovies and others
- GPT Search PlugIn
- GPT Search results on search page
- Multi-language feature in the app
- Get results from TMDB for the movie resulted from Search Query with GPT
- Showing the resulted movies on the UI using MovieList Component
- Saved all the keys on .env file and kept the file in the .gitignore file to keep it private
- Memoization (avail calling APis if the data is already present in the store) implemented in useUpcomingMovies and other custom hooks
- Make app responsive using the Tailwind.css (only for Browse page and Search page)
- 


// Using firebase for the data base
- Goto console.firebase.com
- Create the project (Add Project) and give name of the project (NetflixGPT)
- Enable the Google analytics for your firebase project
- Select default Project from the dropdown
- Click on Continue
- Goto Web Project </>
- Give name to your App (NetflixGPT) 
- Enable (set up Firebase Hoisting for the app)
- Register the App
- Install the package as given on the page
- Copy the given config and paste it in the Firebase.js (you have to create the file in project) to connect project with Firebase
- Install the other package as given on the page 
- Click continue and move further for the setup
- Goto Authentication and click on Get Started
- Goto Sign-in method and select the Email/Password option and enable that.
- We can also select the options from the Provider (like Google, Microsoft, Apple and more from the given options) and enable them
- Whatever user will be registered on the app wil reflect under the Users tab

- To deploy the app on firebase, follow the below steps -
- firebase login

