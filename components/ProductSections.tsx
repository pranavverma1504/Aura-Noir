'use client';

import { Product } from "@/data/products";
import { motion } from "framer-motion";

export function DetailsSection({ product }: { product: Product }) {
    return (
        <section className="py-20 px-6 container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl h-[400px] w-full flex items-center justify-center overflow-hidden relative">
                    <div className="absolute inset-0 opacity-20" style={{ background: product.gradient }}></div>
                    <span className="text-white/20 font-bold text-xl">{product.detailsSection.imageAlt}</span>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-6"
            >
                <span style={{ color: product.themeColor }} className="font-bold tracking-widest uppercase text-sm">Deep Dive</span>
                <h2 className="text-4xl md:text-5xl font-bold text-white">{product.detailsSection.title}</h2>
                <p className="text-lg text-gray-400 leading-relaxed">{product.detailsSection.description}</p>

                <div className="grid grid-cols-3 gap-4 pt-6">
                    {product.stats.map((stat, i) => (
                        <div key={i} className="bg-white/5 border border-white/10 p-4 rounded-2xl text-center hover:bg-white/10 transition-colors">
                            <div className="text-3xl font-bold text-white mb-1">{stat.val}</div>
                            <div className="text-xs text-gray-500 uppercase tracking-widest">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}

export function FreshnessSection({ product }: { product: Product }) {
    return (
        <section className="py-20 px-6 bg-black text-white relative overflow-hidden border-y border-white/5">
            {/* Background accent */}
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 blur-3xl rounded-full translate-x-1/3" style={{ background: product.themeColor }}></div>

            <div className="container mx-auto text-center max-w-4xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">{product.freshnessSection.title}</h2>
                    <p className="text-xl md:text-2xl text-gray-400 leading-relaxed font-light">{product.freshnessSection.description}</p>
                </motion.div>
            </div>
        </section>
    );
}

export function BuyNowSection({ product }: { product: Product }) {
    return (
        <section className="py-24 px-6 container mx-auto text-center" id="buy-now">
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                className="bg-neutral-900/50 backdrop-blur-md rounded-[3rem] p-12 shadow-2xl border border-white/10 max-w-5xl mx-auto"
            >
                <div className="flex flex-col md:flex-row justify-between items-center gap-12">
                    <div className="text-left space-y-6 flex-1">
                        <h2 className="text-4xl font-bold text-white">Acquire the Essence</h2>
                        <div className="flex flex-wrap gap-2">
                            {product.buyNowSection.processingParams.map((param, i) => (
                                <span key={i} className="px-4 py-1 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-gray-400">{param}</span>
                            ))}
                        </div>
                        <p className="text-gray-400 text-sm border-l-4 pl-4" style={{ borderColor: product.themeColor }}>{product.buyNowSection.deliveryPromise}</p>
                        <p className="text-gray-500 text-xs italic">{product.buyNowSection.returnPolicy}</p>
                    </div>

                    <div className="flex-1 bg-black/40 rounded-3xl p-8 w-full md:w-auto border border-white/5">
                        <div className="flex justify-between items-end mb-6">
                            <div className="text-left">
                                <span className="text-sm text-gray-500">Retail Price</span>
                                <div className="text-5xl font-bold text-white">{product.buyNowSection.price}</div>
                            </div>
                            <span className="text-gray-500 mb-2">{product.buyNowSection.unit}</span>
                        </div>
                        <button
                            className="w-full py-4 text-black rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:scale-[1.02]"
                            style={{ backgroundColor: 'white' }}
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
