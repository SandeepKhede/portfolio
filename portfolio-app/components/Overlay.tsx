"use client";

import { motion, useScroll, useTransform } from "framer-motion";

interface OverlayProps {
    containerRef: React.RefObject<HTMLElement | null>;
}

export default function Overlay({ containerRef }: OverlayProps) {
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Section 1: 0% - 15%
    const opacity1 = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
    const y1 = useTransform(scrollYProgress, [0, 0.15], [0, -50]);

    // Section 2: 25% - 45% (Adjusted for better pacing)
    const opacity2 = useTransform(scrollYProgress, [0.25, 0.35, 0.45], [0, 1, 0]);
    const y2 = useTransform(scrollYProgress, [0.25, 0.45], [50, -50]);

    // Section 3: 55% - 75%
    const opacity3 = useTransform(scrollYProgress, [0.55, 0.65, 0.75], [0, 1, 0]);
    const y3 = useTransform(scrollYProgress, [0.55, 0.75], [50, -50]);

    return (
        <div className="absolute inset-0 pointer-events-none z-10 h-full">
            {/* Container is 500vh tall essentially, but we need sticky behavior for the text? 
          No, if this overlay is inside the 500vh relative container, we can use 
          absolute positioning with TOP percentages matching the scroll points.
          BUT, the canvas is sticky.
          If we want text to separate from the background, we can make the text sticky too 
          OR just place them at absolute positions down the long scroll.
      */}

            {/* Text 1: Centered at top (Initial view) */}
            <div className="sticky top-0 h-screen flex items-center justify-center">
                <motion.div style={{ opacity: opacity1, y: y1 }} className="text-center">
                    <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-4 text-white">
                        Sandeep Khede
                    </h1>
                    <p className="text-xl md:text-2xl text-white/80 font-light">
                        Full Stack AI Application Developer.
                    </p>
                </motion.div>
            </div>

            {/* Since we want to display other texts later in the scroll, 
          we can't easily use a SINGLE sticky container unless we change state. 
          Alternatively, we can position them absolutely down the page. 
          30% of 500vh = 150vh. 
      */}

            {/* Text 2: Left aligned at 30% */}
            <motion.div
                className="absolute top-[30%] left-0 w-full px-12 md:px-24"
                style={{ opacity: opacity2, y: y2 }}
            >
                <div className="max-w-2xl bg-black/30 backdrop-blur-md p-8 rounded-2xl border border-white/10">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Engineering scalable, <br />
                        high-performance <br />
                        web applications.
                    </h2>
                </div>
            </motion.div>

            {/* Text 3: Right aligned at 60% */}
            <motion.div
                className="absolute top-[60%] right-0 w-full px-12 md:px-24 flex justify-end"
                style={{ opacity: opacity3, y: y3 }}
            >
                <div className="max-w-2xl bg-black/30 backdrop-blur-md p-8 rounded-2xl border border-white/10 text-right">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Integrating AI <br />
                        into real-world <br />
                        web applications.
                    </h2>
                </div>
            </motion.div>
        </div>
    );
}
