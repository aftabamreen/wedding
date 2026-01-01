import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LandingPage } from './components/LandingPage';
import { WeddingDetails } from './components/WeddingDetails';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/wedding" element={<WeddingDetails />} />
        </Routes>
      </div>
    </Router>
  );
}
