"use client";
import React, { useRef, useEffect } from "react";

const StarryBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    // Star properties
    const starsCount = 150;
    const stars = [];

    // Create stars with random positions, sizes, and speeds
    for (let i = 0; i < starsCount; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.2 + 0.3,
        speed: Math.random() * 0.05 + 0.01,
        alpha: Math.random(),
        alphaChange: (Math.random() * 0.02 + 0.005) * (Math.random() < 0.5 ? 1 : -1),
      });
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);

      // Background gradient dark blue to black
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

      // Draw stars
      stars.forEach((star) => {
        // Twinkle logic
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
        ctx.fillStyle = `rgba(192, 192, 192, ${star.alpha})`; // silver-ish
        ctx.shadowColor = "rgba(192, 192, 192, 0.7)";
        ctx.shadowBlur = 4;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    }

    animate();

    // Handle resizing
    function handleResize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    }
    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
