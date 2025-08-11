import React, { useRef, useEffect } from "react";

export const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let particles = [];
    const particleCount = 60;
    const colors = ["#00bcd4", "#2196f3", "#fff"];

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = 400;
    }
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    function createParticles() {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          r: Math.random() * 3 + 2,
          dx: (Math.random() - 0.5) * 1.2,
          dy: (Math.random() - 0.5) * 1.2,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
    }
    createParticles();

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = 0.7;
        ctx.fill();
        ctx.globalAlpha = 1;
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });
      requestAnimationFrame(animate);
    }
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ position: "absolute", top: 0, left: 0, width: "100%", height: 400, zIndex: 0 }} />;
};
