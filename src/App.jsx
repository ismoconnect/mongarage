import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Layout from './components/Layout';
import Home from './pages/Home';
import Vehicles from './pages/Vehicles';
import VehicleDetail from './pages/VehicleDetail';
import Services from './pages/Services';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import About from './pages/About';
import Garanties from './pages/Garanties';
import Engagements from './pages/Engagements';
import PointsVente from './pages/PointsVente';
import CommentAcheter from './pages/CommentAcheter';
import Encheres from './pages/Encheres';
import Provenance from './pages/Provenance';
import Expertises from './pages/Expertises';
import VisiterVehicule from './pages/VisiterVehicule';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Routes publiques avec Layout (Header + Footer) */}
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/vehicules" element={<Vehicles />} />
            <Route path="/vehicules/:id" element={<VehicleDetail />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/about" element={<About />} />
            <Route path="/visiter-vehicule" element={<VisiterVehicule />} />
            <Route path="/provenance" element={<Provenance />} />
            <Route path="/expertises" element={<Expertises />} />
            <Route path="/garanties" element={<Garanties />} />
            <Route path="/comment-acheter" element={<CommentAcheter />} />
            <Route path="/encheres" element={<Encheres />} />
            <Route path="/engagements" element={<Engagements />} />
            <Route path="/points-vente" element={<PointsVente />} />
            <Route path="/login" element={<Login />} />
          </Route>

          {/* Routes privées sans Layout public */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
