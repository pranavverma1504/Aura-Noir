'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, motion, MotionValue } from 'framer-motion';

interface ProductBottleScrollProps {
    folderPath: string;
    // We accept a function that receives scrollProgress, or just children
    children?: (scrollProgress: MotionValue<number>) => React.ReactNode;
}

export default function ProductBottleScroll({ folderPath, children }: ProductBottleScrollProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    // Setup scroll listener
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end'],
    });

    const frameIndex = useTransform(scrollYProgress, [0, 1], [0, 199]); // 0 to 199 for 200 frames

    // Preload images
    useEffect(() => {
        const loadImages = async () => {
            const loadedImages: HTMLImageElement[] = [];
            const frameCount = 200;

            for (let i = 1; i <= frameCount; i++) {
                const img = new Image();
                // Construct filename: ezgif-frame-001.jpg
                const filename = `ezgif-frame-${i.toString().padStart(3, '0')}.jpg`;
                img.src = `${folderPath}/${filename}`;
                await new Promise((resolve, reject) => {
                    img.onload = resolve;
                    img.onerror = (e) => {
                        console.error(`Failed to load image ${i}`, e);
                        resolve(null); // Continue even if one fails
                    };
                });
                loadedImages.push(img);
            }
            setImages(loadedImages);
            setIsLoaded(true);
        };

        loadImages();
    }, [folderPath]);

    // Render loop
    useEffect(() => {
        if (!isLoaded || images.length === 0) return;

        const render = (index: number) => {
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext('2d');
            if (!ctx) return;

            // Make canvas responsive
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            const img = images[Math.round(index)];
            if (!img) return;

            // responsive "cover" fit
            const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
            const x = (canvas.width / 2) - (img.width / 2) * scale;
            const y = (canvas.height / 2) - (img.height / 2) * scale;

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
        };

        const unsubscribe = frameIndex.on('change', (latest) => {
            requestAnimationFrame(() => render(latest));
        });

        // Initial render
        render(0);

        return () => unsubscribe();
    }, [isLoaded, images, frameIndex]);

    return (
        <div ref={containerRef} className="h-[500vh] relative">
            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
                <canvas ref={canvasRef} className="absolute inset-0 z-10" />
                {!isLoaded && (
                    <div className="text-white z-20 text-2xl animate-pulse">Loading Experience...</div>
                )}
            </div>

            {/* Scroll Overlay Content */}
            <div className="absolute top-0 left-0 w-full h-full z-20 pointer-events-none">
                {children && children(scrollYProgress)}
            </div>
        </div>
    );
}
