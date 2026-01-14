'use client';

import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { products } from '@/data/products';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductBottleScroll from '@/components/ProductBottleScroll';
import ProductTextOverlays from '@/components/ProductTextOverlays';
import dynamic from 'next/dynamic';

const DetailsSection = dynamic(() => import('@/components/ProductSections').then(mod => mod.DetailsSection), {
    loading: () => <div className="h-96 flex items-center justify-center text-white/20">Loading Details...</div>
});
const FreshnessSection = dynamic(() => import('@/components/ProductSections').then(mod => mod.FreshnessSection), {
    loading: () => <div className="h-96 flex items-center justify-center text-white/20">Loading...</div>
});
const BuyNowSection = dynamic(() => import('@/components/ProductSections').then(mod => mod.BuyNowSection), {
    loading: () => <div className="h-96 flex items-center justify-center text-white/20">Loading Offer...</div>
});

export default function Home() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const currentProduct = products[currentIndex];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [currentIndex]);

    const nextProduct = () => setCurrentIndex((prev) => (prev + 1) % products.length);
    const prevProduct = () => setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);

    return (
        <main className="font-sans text-white bg-black min-h-screen">
            <Navbar />

            <AnimatePresence mode="wait">
                <motion.div
                    key={currentProduct.id + "-container"}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="relative"
                >
                    {/* Background - Fixed for this view */}
                    <div
                        className="fixed inset-0 -z-10"
                        style={{ background: currentProduct.gradient }}
                    />

                    {/* The Scroll Journey */}
                    <ProductBottleScroll folderPath={currentProduct.folderPath}>
                        {(scrollYProgress) => (
                            <ProductTextOverlays product={currentProduct} scrollYProgress={scrollYProgress} />
                        )}
                    </ProductBottleScroll>

                    {/* Content Below */}
                    <div className="relative z-30 bg-neutral-950 rounded-t-[40px] shadow-[0_-20px_50px_rgba(0,0,0,0.5)] -mt-[10vh] overflow-hidden border-t border-white/10">
                        <DetailsSection product={currentProduct} />
                        <FreshnessSection product={currentProduct} />
                        <BuyNowSection product={currentProduct} />

                        {/* Next Flavor CTA */}
                        <div className="bg-neutral-900 py-20 flex justify-center border-t border-white/5">
                            <button
                                onClick={nextProduct}
                                className="group relative text-black px-12 py-6 text-2xl font-bold overflow-hidden rounded-none -skew-x-12 hover:text-white transition-colors duration-300"
                                style={{ backgroundColor: 'white' }}
                            >
                                <div className="absolute inset-0 w-full h-full bg-black scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out -z-10"></div>
                                <span className="inline-block skew-x-12 group-hover:scale-110 transition-transform">
                                    Next Scent: {products[(currentIndex + 1) % products.length].name} →
                                </span>
                            </button>
                        </div>

                        <Footer />
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* HUD Navigation */}
            <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 bg-black/80 backdrop-blur-md rounded-full px-6 py-3 flex gap-4 border border-white/10 text-white shadow-2xl">
                {products.map((p, i) => (
                    <button
                        key={p.id}
                        onClick={() => setCurrentIndex(i)}
                        className={`text-sm font-medium px-3 py-1 rounded-full transition-all ${currentIndex === i ? 'bg-orange-500 text-white' : 'hover:bg-white/10 text-gray-400'}`}
                    >
                        {p.name}
                    </button>
                ))}
            </div>

            <button onClick={prevProduct} className="fixed left-4 top-1/2 -translate-y-1/2 z-40 bg-white/10 hover:bg-white/20 p-4 rounded-full backdrop-blur-md text-white border border-white/20 transition-all hidden md:block">
                ←
            </button>
            <button onClick={nextProduct} className="fixed right-4 top-1/2 -translate-y-1/2 z-40 bg-white/10 hover:bg-white/20 p-4 rounded-full backdrop-blur-md text-white border border-white/20 transition-all hidden md:block">
                →
            </button>
        </main>
    );
}
