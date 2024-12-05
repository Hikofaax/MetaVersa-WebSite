// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import SupportPage from './pages/SupportPage';
import ContactPage from './components/ContactPage';
import FaqPage from './components/FaqPage';
import DocumentationPage from './components/DocumentationPage';
import SubmitTestimonialPage from './components/SubmitTestimonialPage';
import NotFound from './components/NotFound';
import AdminDashboard from './components/AdminDashboard';
import FAQManager from './components/FAQManager';

function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<LandingPage />} />
                <Route path="/support" element={<SupportPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/faq" element={<FaqPage />} />
                <Route path="/documentation" element={<DocumentationPage />} />
                <Route path="/submit-testimonial" element={<SubmitTestimonialPage />} />
                <Route path="/NotFound" element={<NotFound />} />
                <Route path="404" element={<NotFound />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/admin" element={<AdminDashboard />} />
                <Route path="/admin/faq" element={<FAQManager />} />
            </Routes>
        </AnimatePresence>
    );
}

const App = () => {
    return (
        <Router>
            <div className="flex flex-col min-h-screen">
                <Header />
                <main className="flex-grow">
                    <AnimatedRoutes />
                </main>
                <Footer />
            </div>
        </Router>
    );
};

export default App;