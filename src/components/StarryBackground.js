"use client";
import React, { useRef, useEffect, useState } from "react";

const StarryBackground = () => {
    const canvasRef = useRef(null);
    const [isMounted, setIsMounted] = useState(false);

    // First, wait for the component to mount on the client
    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Second, run your animation logic ONLY after mounting
    useEffect(() => {
        if (!isMounted || !canvasRef.current) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        let width = window.innerWidth;
        let height = window.innerHeight;

        canvas.width = width;
        canvas.height = height;

        const starsCount = 150;
        const stars = [];

        for (let i = 0; i < starsCount; i++) {
            stars.push({
                x: Math.random() * width,
                y: Math.random() * height,
                radius: Math.random() * 1.2 + 0.3,
                speed: Math.random() * 0.05 + 0.01,
                alpha: Math.random(),
                alphaChange:
                    (Math.random() * 0.02 + 0.005) *
                    (Math.random() < 0.5 ? 1 : -1),
            });
        }

        let animationFrameId;

        function animate() {
            ctx.clearRect(0, 0, width, height);

            const gradient = ctx.createRadialGradient(
                width / 2,
                height / 2,
                width / 10,
                width / 2,
                height / 2,
                width
            );
            gradient.addColorStop(0, "#0a1128");
            gradient.addColorStop(1, "#000000");
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, width, height);

            stars.forEach((star) => {
                star.alpha += star.alphaChange;
                if (star.alpha <= 0) {
                    star.alpha = 0;
                    star.alphaChange *= -1;
                } else if (star.alpha >= 1) {
                    star.alpha = 1;
                    star.alphaChange *= -1;
                }

                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(192, 192, 192, ${star.alpha})`;
                ctx.shadowColor = "rgba(192, 192, 192, 0.7)";
                ctx.shadowBlur = 4;
                ctx.fill();
            });

            animationFrameId = requestAnimationFrame(animate);
        }

        animate();

        function handleResize() {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        }
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            cancelAnimationFrame(animationFrameId); // Properly stop the animation
        };
    }, [isMounted]); // Dependency on isMounted ensures this runs after render

    // If we are on the server, we render nothing.
    // This prevents the mismatch error.
    if (!isMounted) return null;

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                zIndex: -1,
                pointerEvents: "none",
                backgroundColor: "transparent",
            }}
        />
    );
};

export default StarryBackground;
