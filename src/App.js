import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Navbar = React.lazy(() => import('./components/Navbar'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Home = React.lazy(() => import('./pages/Home'));
const Audio = React.lazy(() => import('./pages/Audio'));
const About = React.lazy(() => import('./pages/About'));
const FollowMeSection = React.lazy(() => import('./components/FollowMe'));
const LoadingScreen = React.lazy(() => import('./components/LoadingScreen'));


function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
      <LoadingScreen />
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/azido" element={<Home />} />
      <Route path="/Audio" element={< Audio />} />
        <Route path="/Contact" element={< Contact />} />
        <Route path="/About" element={< About />} />
        </Routes>
        <FollowMeSection />

      </Suspense>
      </Router>
  );
}

export default App;

