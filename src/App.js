import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const Home = React.lazy(() => import('./components/Home'));
const UserProfile = React.lazy(() => import('./components/UserProfile'));
const Settings = React.lazy(() => import('./components/Settings'));
const UserDetails = React.lazy(() => import('./components/UserDetails'));

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Головна</Link> |{' '}
        <Link to="/profile">Профіль</Link> |{' '}
        <Link to="/settings">Налаштування</Link> |{' '}
        <Link to="/details">Деталі</Link>
      </nav>
      <Suspense fallback={<div>Завантаження...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/details" element={<UserDetails />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
