import React, { useEffect, useRef } from 'react';

const StarsBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Star properties
    const stars: Array<{
      x: number;
      y: number;
      size: number;
      speed: number;
      brightness: number;
    }> = [];

    // Create stars
    for (let i = 0; i < 200; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5,
        speed: Math.random() * 0.5,
        brightness: Math.random(),
      });
    }

    // Animation
    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        // Update star position
        star.y += star.speed;
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }

        // Draw star
        const gradient = ctx.createRadialGradient(
          star.x,
          star.y,
          0,
          star.x,
          star.y,
          star.size * 2
        );
        
        // Create gradient colors based on star brightness
        if (star.brightness > 0.7) {
          // Bright stars - gold to purple
          gradient.addColorStop(0, 'rgba(255, 215, 0, 1)');
          gradient.addColorStop(0.5, 'rgba(192, 75, 255, 0.7)');
          gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        } else if (star.brightness > 0.4) {
          // Medium stars - purple to blue
          gradient.addColorStop(0, 'rgba(147, 51, 234, 1)');
          gradient.addColorStop(0.5, 'rgba(59, 130, 246, 0.7)');
          gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        } else {
          // Dim stars - blue
          gradient.addColorStop(0, 'rgba(59, 130, 246, 1)');
          gradient.addColorStop(0.5, 'rgba(30, 64, 175, 0.7)');
          gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        }

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  );
};

export default StarsBackground;