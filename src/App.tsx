import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import StandardNavbar from './components/StandardNavbar';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';

// Pages
import Home from './bases/aeco/pages/Home';
import Earthships from './bases/aopeco/pages/Earthships';
import MandalaHomes from './bases/aopeco/pages/MandalaHomes';
import EcoCommunes from './bases/aopeco/pages/EcoCommunes';
import SmartApartments from './bases/aopeco/pages/SmartApartments';
import AboutUs from './bases/aop/pages/AboutUs';
import Vision from './bases/aop/pages/Vision';
import Careers from './bases/aop/pages/Careers';

// Marketplace Pages
import PropertyMarketplace from './bases/aop/pages/PropertyMarketplace';
import SustainifyMarket from './bases/aopm/pages/SustainifyMarket';
import MaterialsMarketplace from './bases/aopm/pages/MaterialsMarketplace';
import FurnishingsMarketplace from './bases/aopm/pages/FurnishingsMarketplace';
import SustainableSystemsMarketplace from './bases/aopm/pages/SustainableSystemsMarketplace';
import SustainableTechnologiesMarketplace from './bases/aopm/pages/SustainableTechnologiesMarketplace';

// 3D Property Pages
import Simple3DModelling from './pages/Simple3DModelling';
import VirtualTours from './pages/VirtualTours';
import AssetTokenization from './pages/AssetTokenization';
import Web3 from './pages/Web3';
import Metaverse from './pages/Metaverse';

// Property Detail Page
import PropertyDetail from './pages/PropertyDetail';

// New Pages
import EcoProps from './bases/aopeco/pages/EcoProps';
import AoPmarkets from './bases/aopm/pages/AoPmarkets';

function App() {
  return (
    <Router>
      <ThemeToggle />
      <Routes>
                <Route path="/" element={<><StandardNavbar /><Home /><Footer /></>} />
                <Route path="/aop" element={<PropertyMarketplace />} />
                <Route path="/eco" element={<><StandardNavbar /><Home /><Footer /></>} />
                <Route path="/addonprop.xyz" element={<><StandardNavbar /><Home /><Footer /></>} />
        
        {/* EcoProps Routes */}
        <Route path="/earthships" element={<><StandardNavbar /><Earthships /><Footer /></>} />
        <Route path="/mandala-homes" element={<><StandardNavbar /><MandalaHomes /><Footer /></>} />
        <Route path="/eco-communes" element={<><StandardNavbar /><EcoCommunes /><Footer /></>} />
        <Route path="/smart-apartments" element={<><StandardNavbar /><SmartApartments /><Footer /></>} />
        
        {/* Marketplace Routes */}
        <Route path="/property-marketplace" element={<PropertyMarketplace />} />
        <Route path="/ecoprops" element={<EcoProps />} />
        <Route path="/aopmarkets" element={<AoPmarkets />} />
        <Route path="/sustainify-market" element={<><StandardNavbar /><SustainifyMarket /><Footer /></>} />
        <Route path="/materials-marketplace" element={<><StandardNavbar /><MaterialsMarketplace /><Footer /></>} />
        <Route path="/furnishings-marketplace" element={<><StandardNavbar /><FurnishingsMarketplace /><Footer /></>} />
        <Route path="/sustainable-systems-marketplace" element={<><StandardNavbar /><SustainableSystemsMarketplace /><Footer /></>} />
        <Route path="/sustainable-technologies-marketplace" element={<><StandardNavbar /><SustainableTechnologiesMarketplace /><Footer /></>} />
        
        {/* 3D Property Routes */}
        <Route path="/simple-3d-modelling" element={<><StandardNavbar /><Simple3DModelling /><Footer /></>} />
        <Route path="/virtual-tours" element={<><StandardNavbar /><VirtualTours /><Footer /></>} />
        <Route path="/asset-tokenization" element={<><StandardNavbar /><AssetTokenization /><Footer /></>} />
        <Route path="/web3" element={<><StandardNavbar /><Web3 /><Footer /></>} />
        <Route path="/metaverse" element={<><StandardNavbar /><Metaverse /><Footer /></>} />
        
        {/* Property Detail Page */}
        <Route path="/property/:id" element={<PropertyDetail />} />
        
        {/* Company Pages */}
        <Route path="/about-us" element={<><StandardNavbar /><AboutUs /><Footer /></>} />
        <Route path="/vision" element={<><StandardNavbar /><Vision /><Footer /></>} />
        <Route path="/careers" element={<><StandardNavbar /><Careers /><Footer /></>} />
      </Routes>
    </Router>
  );
}

export default App;