"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import manifest from "@/public/manifest.json";

interface ScrollyCanvasProps {
    containerRef: React.RefObject<HTMLElement | null>;
}

export default function ScrollyCanvas({ containerRef }: ScrollyCanvasProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const imagesRef = useRef<HTMLImageElement[]>([]); // ⭐ avoid re-renders
    const [loaded, setLoaded] = useState(false);
    const currentFrameRef = useRef(0); // ⭐ avoid state redraw

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    /* ---------------- IMAGE PRELOAD ---------------- */

    useEffect(() => {
        const frames = manifest as string[];
        let loadedCount = 0;

        imagesRef.current = frames.map((frame) => {
            const img = new Image();
            img.src = `/sequence1/${frame}`;
            img.decoding = "async"; // ⭐ better decoding
            img.onload = () => {
                loadedCount++;
                if (loadedCount === frames.length) setLoaded(true);
            };
            return img;
        });
    }, []);

    /* ---------------- CANVAS SETUP ---------------- */

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas || !loaded) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const resizeCanvas = () => {
            const dpr = window.devicePixelRatio || 1; // ⭐ KEY FIX
            const width = window.innerWidth;
            const height = window.innerHeight;

            canvas.width = width * dpr;
            canvas.height = height * dpr;

            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;

            ctx.setTransform(dpr, 0, 0, dpr, 0, 0); // ⭐ crisp scaling
            renderFrame(currentFrameRef.current);
        };

        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);
        return () => window.removeEventListener("resize", resizeCanvas);
    }, [loaded]);

    /* ---------------- SCROLL → FRAME ---------------- */

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (!loaded) return;

        const frameIndex = Math.min(
            imagesRef.current.length - 1,
            Math.floor(latest * imagesRef.current.length)
        );

        if (frameIndex !== currentFrameRef.current) {
            currentFrameRef.current = frameIndex;
            renderFrame(frameIndex);
        }
    });

    /* ---------------- RENDER FRAME ---------------- */

    const renderFrame = (index: number) => {
        const canvas = canvasRef.current;
        const img = imagesRef.current[index];
        if (!canvas || !img) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const w = canvas.width / (window.devicePixelRatio || 1);
        const h = canvas.height / (window.devicePixelRatio || 1);

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
                <canvas ref={canvasRef} className="block" />
                {!loaded && (
                    <div className="absolute inset-0 flex items-center justify-center text-white/20">
                        Loading Experience...
                    </div>
                )}
            </div>
        </div>
    );
}
