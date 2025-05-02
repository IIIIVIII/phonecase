import React from 'react';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import WorkSection from './components/WorkSection';
import ManifestoSection from './components/ManifestoSection';
import ContactSection from './components/ContactSection';
import ReportSection from './components/ReportSection';

function App() {
    return (
        <>
            <NavBar />
            <HeroSection />
            <WorkSection />
            <ManifestoSection />
            <ReportSection />
            <ContactSection />
        </>
    );
}

export default App;
