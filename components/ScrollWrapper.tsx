"use client";

import { useRef, useState, useEffect } from "react";
import ScrollyCanvas from "./ScrollyCanvas";
import Overlay from "./Overlay";
import Loader from "./Loader";

export default function ScrollWrapper() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (loading) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [loading]);

    return (
        <div ref={containerRef} className="relative">
            <ScrollyCanvas containerRef={containerRef} onLoaded={() => setLoading(false)} />
            <Overlay containerRef={containerRef} />
            {loading && <Loader />}
        </div>
    );
}
