'use client';

import { motion, MotionValue, useTransform } from 'framer-motion';
import { Product } from '@/data/products';

interface Props {
    product: Product;
    scrollYProgress: MotionValue<number>;
}

export default function ProductTextOverlays({ product, scrollYProgress }: Props) {
    // Section 1: 0.05 - 0.2
    const opacity1 = useTransform(scrollYProgress, [0.05, 0.1, 0.15, 0.2], [0, 1, 1, 0]);
    const y1 = useTransform(scrollYProgress, [0.05, 0.2], [50, -50]);

    // Section 2: 0.25 - 0.4
    const opacity2 = useTransform(scrollYProgress, [0.25, 0.3, 0.35, 0.4], [0, 1, 1, 0]);
    const y2 = useTransform(scrollYProgress, [0.25, 0.4], [50, -50]);

    // Section 3: 0.55 - 0.7
    const opacity3 = useTransform(scrollYProgress, [0.55, 0.6, 0.65, 0.7], [0, 1, 1, 0]);
    const y3 = useTransform(scrollYProgress, [0.55, 0.7], [50, -50]);

    // Section 4: 0.8 - 0.95
    const opacity4 = useTransform(scrollYProgress, [0.8, 0.85, 0.9, 0.95], [0, 1, 1, 0]);
    const y4 = useTransform(scrollYProgress, [0.8, 0.95], [50, -50]);

    return (
        <div className="w-full h-full relative">
            {/* Section 1 */}
            <div className="absolute top-[10%] w-full flex justify-center items-center pointer-events-auto">
                <motion.div style={{ opacity: opacity1, y: y1 }} className="text-center p-8">
                    <h1 className="text-6xl md:text-8xl font-bold mb-4 drop-shadow-lg tracking-tighter">{product.section1.title}</h1>
                    <p className="text-xl md:text-3xl text-white/90 font-light tracking-[0.2em] uppercase">{product.section1.subtitle}</p>
                </motion.div>
            </div>

            {/* Section 2 */}
            <div className="absolute top-[30%] w-full flex justify-end px-8 md:px-20 pointer-events-auto">
                <motion.div style={{ opacity: opacity2, y: y2 }} className="text-right max-w-2xl">
                    <h2 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg tracking-tight">{product.section2.title}</h2>
                    <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-light">{product.section2.subtitle}</p>
                </motion.div>
            </div>

            {/* Section 3 */}
            <div className="absolute top-[60%] w-full flex justify-start px-8 md:px-20 pointer-events-auto">
                <motion.div style={{ opacity: opacity3, y: y3 }} className="text-left max-w-2xl">
                    <h2 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg tracking-tight">{product.section3.title}</h2>
                    <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-light">{product.section3.subtitle}</p>
                </motion.div>
            </div>

            {/* Section 4 */}
            <div className="absolute top-[85%] w-full flex justify-center items-center pointer-events-auto">
                <motion.div style={{ opacity: opacity4, y: y4 }} className="text-center p-8">
                    <h2 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg tracking-tight">{product.section4.title}</h2>
                    <p className="text-lg md:text-xl text-white/80 tracking-widest uppercase">{product.section4.subtitle}</p>
                </motion.div>
            </div>
        </div>
    );
}
