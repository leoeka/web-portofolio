//import React from 'react'

function Navbar() {
    const scrollToSection = (elementId) => {
        const element = document.getElementById(elementId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <nav className="sticky top-0 z-10 flex justify-between items-center px-8 py-4 bg-white shadow-sm">
            <div className="flex items-center gap-3 cursor-pointer" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}>
                <img src="/logo.png" alt="Logo" className="h-10 w-10 rounded-full border-2 border-white" />
            <h1 className="text-xl md:text-2xl font-bold text-gray-900">Leo Eka Matra</h1>
            </div>
            <ul className="hidden md:flex gap-6 font-medium text-gray-600">
                <li><a className="cursor-pointer no-underline hover:text-gray-600 transition-colors" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}>Home</a></li>
                <li><a className="cursor-pointer no-underline hover:text-gray-600 transition-colors" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a></li>
                <li><a className="cursor-pointer no-underline hover:text-gray-600 transition-colors" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;