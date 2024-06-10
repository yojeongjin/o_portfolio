import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';

// styles
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/theme';
// components
import Header from './Header/Header';
import Home from './Home/Home';

function App() {
  function setScreenSize() {
    // 100vh 스크롤
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  useEffect(() => {
    setScreenSize();
  });

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {/* Header */}
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
