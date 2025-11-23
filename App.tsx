import React from 'react';
import { HashRouter, Routes, Route, ScrollRestoration } from 'react-router-dom';
import Home from './pages/Home';
import Admin from './pages/Admin';
import { StoreProvider } from './context/StoreContext';

function App() {
  return (
    <StoreProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </HashRouter>
    </StoreProvider>
  );
}

export default App;