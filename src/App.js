/** @jsxImportSource @emotion/react */
import { Router, LocationProvider } from '@reach/router'
import AuthContextProvider from './contexts/AuthContext';
import Featured from './views/Featured';
import Login from './views/Login';
import Callback from './views/Callback';
import Categories from './views/Categories';
import { ThemeProvider } from '@emotion/react'
import GlobalStyles from './components/GlobalStyles'
import useDarkMode from './customhooks/useDarkMode';
import Footer from './components/Footer'
import NewReleases from './views/NewReleases';
import NewReleaseDatails from './views/NewReleasesDetails';
import Playlist from './views/Playlist'
import Player from './views/Player';

const lightTheme = {
  body: "#ffffff",
  text: "#341931",
  login: "#ffffff",
  fingerprint: "#FF1168"
}

const darkTheme = {
  body: "#341931",
  text: "#ffffff",
  login: "#FF1168",
  fingerprint: "#ffffff"
}

function App() {

  const [darkMode, toggleDarkMode] = useDarkMode()

  return (
    <LocationProvider>
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
    <AuthContextProvider>
      <GlobalStyles />
      
      <Router>
        <Login path="/" />
        <Featured path="featured" />
        <Callback path="callback" />
        <Categories path="categories" />
        <NewReleases path="newreleases" />
        <NewReleaseDatails path="details/:id" />
        <Playlist path="playlist/:id" />
        <Player path="player/:id" />
      </Router>
      <Footer toggleDarkMode={toggleDarkMode} />
    </AuthContextProvider>
    </ThemeProvider>
    </LocationProvider>
  );
}

export default App;
