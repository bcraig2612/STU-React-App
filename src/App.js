import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import CssBaseline from '@material-ui/core/CssBaseline';
import createTheme from "@material-ui/core/styles/createTheme";
import { ThemeProvider } from "@material-ui/core/styles";
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Dashboard from "./views/Dashboard";
import Reviews from "./views/Reviews/Reviews";
import Chat from "./views/Chat";
import { SnackbarProvider } from 'notistack';
import Settings from "./views/Settings/Settings";
import Reports from "./views/Reports";
import Referrals from "./views/Referrals/Referrals";
import SpecialOffers from "./views/SpecialOffers/SpecialOffers";
import Inbox from "./views/Inbox/Inbox";
import SignIn from "./views/SignIn";
import ForgotPassword from "./views/ForgotPassword";
import Setup from "./views/Setup/Setup";

function App() {
  let prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    let localStorageDarkMode = localStorage.getItem('dark-mode');
    if (localStorageDarkMode !== null) {
      setDarkMode(localStorageDarkMode === 'true');
    } else {
      setDarkMode(prefersDarkMode);
    }
  }, [darkMode, prefersDarkMode]);

  function getDarkModePreference() {
    prefersDarkMode = localStorage.getItem('dark-mode');
    setDarkMode(prefersDarkMode);
  }

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          type: darkMode ? 'dark' : 'light',
          primary: {
            main: "rgb(30, 136, 229)",
          },
        },
      }),
    [darkMode],
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SnackbarProvider maxSnack={1}>
        <Router>
          <div>
            <Switch>
              <Route path="/reviews">
                <Reviews getDarkModePreference={getDarkModePreference} darkMode={darkMode} />
              </Route>
              <Route path="/referrals">
                <Referrals getDarkModePreference={getDarkModePreference} darkMode={darkMode} />
              </Route>
              <Route path="/chat">
                <Chat getDarkModePreference={getDarkModePreference} darkMode={darkMode} />
              </Route>
              <Route path="/inbox">
                <Inbox />
              </Route>
              <Route path="/sign-in">
                <SignIn getDarkModePreference={getDarkModePreference} darkMode={darkMode} />
              </Route>
              <Route path="/forgot-password">
                <ForgotPassword getDarkModePreference={getDarkModePreference} darkMode={darkMode} />
              </Route>
              <Route path="/special-offers">
                <SpecialOffers getDarkModePreference={getDarkModePreference} darkMode={darkMode} />
              </Route>
              <Route path="/reports">
                <Reports getDarkModePreference={getDarkModePreference} darkMode={darkMode} />
              </Route>
              <Route path="/settings">
                <Settings getDarkModePreference={getDarkModePreference} darkMode={darkMode} />
              </Route>
              <Route path="/setup">
                <Setup getDarkModePreference={getDarkModePreference} darkMode={darkMode} />
              </Route>
              <Route exact path="/">
                <Dashboard getDarkModePreference={getDarkModePreference} darkMode={darkMode} />
              </Route>
            </Switch>
          </div>
        </Router>
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
