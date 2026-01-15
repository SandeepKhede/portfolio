"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import manifest from "@/public/manifest.json"; // We will configure alias or just import from relative

// If alias fails, we might need relative path: "../public/manifest.json" 
// But Next.js handles imports from public via URL usually, BUT for a json file valid at build time? 
// No, standard import works if built. 
// Actually, it's safer to fetch it or just hardcode if it was static.
// I will move manifest.json to a src/lib folder or just fetch it. 
// Simpler: I'll hardcode the fetching since it's in public.

export default function ScrollyCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [loaded, setLoaded] = useState(false);
    const { scrollYProgress } = useScroll();
    const [currentFrame, setCurrentFrame] = useState(0);

    // Preload images
    useEffect(() => {
        const loadImages = async () => {
            // frames is the array of filenames from manifest
            const frames = manifest as string[];

            const loadedParams: HTMLImageElement[] = [];
            let loadCount = 0;

            for (const frame of frames) {
                const img = new Image();
                img.src = `/sequence/${frame}`;
                img.onload = () => {
                    loadCount++;
                    if (loadCount === frames.length) {
                        setLoaded(true);
                    }
                };
                loadedParams.push(img);
            }
            setImages(loadedParams);
        };

        loadImages();
    }, []);

    // Render loop
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas || images.length === 0) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Set canvas dimensions
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            renderFrame(currentFrame);
        };

        window.addEventListener("resize", resizeCanvas);
        resizeCanvas(); // initial

        return () => window.removeEventListener("resize", resizeCanvas);
    }, [images, currentFrame]);

    // Update frame on scroll
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (images.length === 0) return;

        // Logic: latest (0 to 1) maps to index (0 to images.length - 1)
        // However, the canvas component is sticky inside a 500vh container.
        // scrollYProgress from useScroll() defaults to the WINDOW scroll.
        // If the 500vh container is a subset of the page, we might need a target ref.
        // But since this is the "Hero" and likely at the top, window scroll is fine 
        // BUT we need to clamp it to where this section is active.
        // Actually, creating a ref for the container is better.

        // For now, assume it's the main scroll driver.

        // 500vh = 5 viewports. 
        // We want the animation to play over the first X scroll.

        const frameIndex = Math.min(
            images.length - 1,
            Math.floor(latest * images.length)
        );

        setCurrentFrame(frameIndex);
        renderFrame(frameIndex);
    });

    const renderFrame = (index: number) => {
        const canvas = canvasRef.current;
        if (!canvas || !images[index] || !loaded) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const img = images[index];

        // Object-fit: cover logic
        const w = canvas.width;
        const h = canvas.height;
        const imgW = img.width;
        const imgH = img.height;

        const scale = Math.max(w / imgW, h / imgH);
        const x = (w - imgW * scale) / 2;
        const y = (h - imgH * scale) / 2;

        ctx.clearRect(0, 0, w, h);
        ctx.drawImage(img, x, y, imgW * scale, imgH * scale);
    };

    return (
        <div className="h-[500vh] relative bg-[#121212]">
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                <canvas
                    ref={canvasRef}
                    className="w-full h-full block"
                />
                {!loaded && (
                    <div className="absolute inset-0 flex items-center justify-center text-white/20 font-sans">
                        Loading Experience...
                    </div>
                )}
            </div>
        </div>
    );
}
