import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import Link from 'next/link';

export default function Navbar() {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false); 

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    return (
        <motion.nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/20 backdrop-blur-xl border-b border-white/10 py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link href="/" className="flex items-center gap-2 group">
                    {/* Abstract Icon */}
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-yellow-500 group-hover:rotate-12 transition-transform">
                        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
                        Aura Noir
                    </span>
                </Link>

                <div className="hidden md:flex gap-8 text-white/80 font-medium">
                    <Link href="#" className="hover:text-yellow-400 transition-colors">Collection</Link>
                    <Link href="#" className="hover:text-yellow-400 transition-colors">Our Story</Link>
                    <Link href="#" className="hover:text-yellow-400 transition-colors">Craftsmanship</Link>
                </div>

                <button className="px-6 py-2 bg-white text-black font-bold rounded-full hover:bg-yellow-400 transition-all hover:scale-105 active:scale-95">
                    Shop Now
                </button>
            </div>
        </motion.nav>
    );
}
