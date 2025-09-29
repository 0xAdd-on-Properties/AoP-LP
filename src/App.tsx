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
        <Route path="/earthships" element={<><Navbar /><Earthships /><Footer /></>} />
        <Route path="/mandala-homes" element={<><Navbar /><MandalaHomes /><Footer /></>} />
        <Route path="/eco-communes" element={<><Navbar /><EcoCommunes /><Footer /></>} />
        
                {/* Marketplace Routes */}
                <Route path="/property-marketplace" element={<PropertyMarketplace />} />
                <Route path="/ecoprops" element={<EcoProps />} />
                <Route path="/aopmarkets" element={<AoPmarkets />} />
                <Route path="/sustainify-market" element={<><Navbar /><SustainifyMarket /><Footer /></>} />
                <Route path="/materials-marketplace" element={<><Navbar /><MaterialsMarketplace /><Footer /></>} />
                <Route path="/furnishings-marketplace" element={<><Navbar /><FurnishingsMarketplace /><Footer /></>} />
                <Route path="/sustainable-systems-marketplace" element={<><Navbar /><SustainableSystemsMarketplace /><Footer /></>} />
                <Route path="/sustainable-technologies-marketplace" element={<><Navbar /><SustainableTechnologiesMarketplace /><Footer /></>} />
        
        {/* 3D Property Routes */}
        <Route path="/simple-3d-modelling" element={<><Navbar /><Simple3DModelling /><Footer /></>} />
        <Route path="/virtual-tours" element={<><Navbar /><VirtualTours /><Footer /></>} />
        <Route path="/asset-tokenization" element={<><Navbar /><AssetTokenization /><Footer /></>} />
        <Route path="/web3" element={<><Navbar /><Web3 /><Footer /></>} />
        <Route path="/metaverse" element={<><Navbar /><Metaverse /><Footer /></>} />
        
        {/* Company Pages */}
        <Route path="/about-us" element={<><Navbar /><AboutUs /><Footer /></>} />
        <Route path="/vision" element={<><Navbar /><Vision /><Footer /></>} />
        <Route path="/careers" element={<><Navbar /><Careers /><Footer /></>} />
      </Routes>
    </Router>
  );
}

export default App;