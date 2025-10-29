import React, { useState } from "react";
import { Provider } from "react-redux";
import { ThemeProvider, CssBaseline, IconButton } from "@mui/material";
import Home from "./pages/Home";
import store from "./app/store";
import { lightTheme, darkTheme } from "./theme/muiTheme";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const App = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <Provider store={store}>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <CssBaseline />

        <IconButton
          onClick={toggleTheme}
          sx={{ position: "fixed", top: 16, right: 16, zIndex: 1000 }}
          color="inherit"
        >
          {isDark ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>

        <Home />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
