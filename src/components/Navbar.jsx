//import React from 'react'
import { useState } from 'react';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToSection = (elementId) => {
        const element = document.getElementById(elementId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
        }
    };
    return (
        <nav className="sticky top-0 z-10 bg-white shadow-sm">
            <div className="flex justify-between items-center px-8 py-4">
            <div className="flex items-center gap-3 cursor-pointer" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}>
                <img src="/logo.jpeg" alt="Logo" className="h-10 w-10 rounded-full border-2 border-white" />
            <h1 className="text-xl md:text-2xl font-bold text-gray-900">Leo Eka Matra</h1>
            </div>
            <ul className="hidden md:flex gap-6 font-medium text-gray-600">
                <li><a className="cursor-pointer no-underline hover:text-gray-600 transition-colors" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}>Home</a></li>
                <li><a className="cursor-pointer no-underline hover:text-gray-600 transition-colors" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a></li>
                <li><a className="cursor-pointer no-underline hover:text-gray-600 transition-colors" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a></li>
            </ul>
            {/* ✅ Tombol hamburger - hanya muncul di HP */}
            <button className="md:hidden text-gray-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? '✕' : '☰'}
            </button>
            </div>

            {/* ✅ Menu dropdown HP */}
            {isMenuOpen && (
                <ul className="md:hidden flex flex-col gap-4 px-8 pb-4 font-medium text-gray-600">
                    <li><a className="block px-4 py-2 no-underline hover:text-gray-900" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); setIsMenuOpen(false); }}>Home</a></li>
                    <li><a className="block px-4 py-2 no-underline hover:text-gray-900" onClick={(e) => { e.preventDefault(); scrollToSection('about'); setIsMenuOpen(false); }}>About</a></li>
                    <li><a className="block px-4 py-2 no-underline hover:text-gray-900" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); setIsMenuOpen(false); }}>Contact</a></li>
                </ul>   
            )}
        </nav>
    );
}

export default Navbar;