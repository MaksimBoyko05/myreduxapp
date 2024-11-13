import React, { Suspense, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const Home = React.lazy(() => import('./components/Home'));
const UserProfile = React.lazy(() => import('./components/UserProfile'));
const Settings = React.lazy(() => import('./components/Settings'));
const UserDetails = React.lazy(() => import('./components/UserDetails'));
const HeavyComponent = React.lazy(() => import('./components/HeavyComponent'));

function App() {
  const [showHeavy, setShowHeavy] = useState(false);

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

      <div style={{ marginTop: '20px' }}>
        <button onClick={() => setShowHeavy(true)}>Завантажити важкий компонент</button>
        {showHeavy && (
          <Suspense fallback={<div>Завантаження важкого компоненту...</div>}>
            <HeavyComponent />
          </Suspense>
        )}
      </div>
    </Router>
  );
}

export default App;
