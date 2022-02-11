import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Header from "../components/Header";
import Footer from "../components/Footer";
import {ThemeProvider, createTheme} from "@mui/material";
import { useSelector } from "react-redux";
import theme from "../utils/theme";

export default function RouterComponent() {
  const ui = useSelector((state) => state.ui);
  const THEME = createTheme(theme(ui.isDarkMode));
  return (
    <ThemeProvider theme={THEME}>
        <Router>
          <Switch>
            <Route path='/' exact>
              <Header />
              <Home />
              <Footer />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
  )
}