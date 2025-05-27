"use client"; // This is the key!

import dynamic from "next/dynamic";

// We move the dynamic import here, where 'use client' is allowed
const StarryBackground = dynamic(() => import("./StarryBackground"), {
    ssr: false,
});

export default function ClientBackground() {
    return <StarryBackground />;
}
