"use client";

import { useRef } from "react";
import ScrollyCanvas from "./ScrollyCanvas";
import Overlay from "./Overlay";

export default function ScrollWrapper() {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <div ref={containerRef} className="relative">
            <ScrollyCanvas containerRef={containerRef} />
            <Overlay containerRef={containerRef} />
        </div>
    );
}
