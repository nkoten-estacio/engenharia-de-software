// index.jsx
import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';

// --- layouts --- --- ---
import AppBar from './src/components/layout/AppBar.jsx';
import SideBar from './src/components/layout/SideBar.jsx';

// --- pages --- --- ---
import Login from './src/pages/SavaLogin.jsx';
import Semestre2026_1 from './src/pages/Semestre2026_1.jsx';

/**
 * --- Prototype Application ---
 * Buildless ESM React Component (N-Koten Pattern)
 */
function App() {
  return (
    <HashRouter>
      <Frame>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/2026-1" element={<Semestre2026_1 />} />
          {/* <Route path="/sobre" element={<Sobre />} /> */}
        </Routes>
      </Frame>
    </HashRouter>
  );
}

const Frame = ({ children }) => {
  const location = useLocation();
  const [showES, setShowES] = useState(false);

  useEffect(() => {
    setShowES(location.pathname === '/2026-1');
  }, [location]);

  return (
    <>
      {showES && <SideBar />}
      <main
        className={
          showES
            ? `bg-slate-800 flex flex-col w-[calc(100%_-_72px)] ml-[71px]`
            : `bg-indigo-600`
        }
      >
        {showES && <AppBar />}
        {children}
      </main>
    </>
  );
};

createRoot(document.getElementById('app_root')).render(<App />);
