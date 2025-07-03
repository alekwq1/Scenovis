import React, { useEffect, useRef, useState } from "react";
import "./Preloader.css";

const Preloader = ({ onComplete, fadeOut, onFadeOutEnd }) => {
  console.log("PRELOADER mounted");
  useEffect(() => {
    return () => console.log("PRELOADER UNmounted");
  }, []);

  const progressRef = useRef(null);
  const canvasRef = useRef(null);
  const wrapperRef = useRef(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    let progress = 0;
    let done = false;
    const interval = setInterval(() => {
      progress += Math.floor(Math.random() * 10);
      if (progress >= 100 && !done) {
        progress = 100;
        clearInterval(interval);
        done = true;
        setTimeout(() => {
          onComplete && onComplete();
        }, 300);
      }

      if (progressRef.current) {
        const progressText =
          progressRef.current.querySelector(".progress-text");
        const progressBar =
          progressRef.current.querySelector(".progress-bar-fill");
        if (progressText) progressText.textContent = `${progress}%`;
        if (progressBar) progressBar.style.width = `${progress}%`;
      }
    }, 80);

    return () => clearInterval(interval);
  }, [onComplete]);

  useEffect(() => {
    if (!imageLoaded) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrame;

    const tempCanvas = document.createElement("canvas");
    const tempCtx = tempCanvas.getContext("2d");
    const img = document.querySelector(".scenovis-logo");

    if (!img) return;

    tempCanvas.width = img.naturalWidth;
    tempCanvas.height = img.naturalHeight;
    tempCtx.drawImage(img, 0, 0, tempCanvas.width, tempCanvas.height);
    const imageData = tempCtx.getImageData(
      0,
      0,
      tempCanvas.width,
      tempCanvas.height
    );
    const pixelData = imageData.data;

    canvas.width = img.offsetWidth;
    canvas.height = img.offsetHeight;
    const scaleX = canvas.width / tempCanvas.width;
    const scaleY = canvas.height / tempCanvas.height;

    const points = [];
    const connections = [];
    const gridSize = 15;

    for (let y = 0; y < tempCanvas.height; y += gridSize) {
      for (let x = 0; x < tempCanvas.width; x += gridSize) {
        const index = (y * tempCanvas.width + x) * 4;
        const alpha = pixelData[index + 3];
        if (alpha > 128) {
          points.push({
            x: x * scaleX,
            y: y * scaleY,
            originX: x * scaleX,
            originY: y * scaleY,
            alpha: 0,
            active: false,
          });
        }
      }
    }

    const activatePoints = () => {
      points.forEach((point, i) => {
        setTimeout(() => {
          point.active = true;
        }, i * 5);
      });
    };

    points.forEach((point, i) => {
      if (i > 0 && points[i - 1].x === point.x - gridSize * scaleX) {
        connections.push({
          from: points[i - 1],
          to: point,
          alpha: 0,
        });
      }
      const pointAbove = points.find(
        (p) =>
          Math.abs(p.x - point.x) < 1 &&
          Math.abs(p.y - (point.y - gridSize * scaleY)) < 1
      );
      if (pointAbove) {
        connections.push({
          from: pointAbove,
          to: point,
          alpha: 0,
        });
      }
    });

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = "rgba(0, 198, 255, 0.7)";
      ctx.lineWidth = 1;
      connections.forEach((conn) => {
        if (conn.from.active && conn.to.active) {
          conn.alpha = Math.min(1, conn.alpha + 0.02);
          ctx.globalAlpha = conn.alpha;
          ctx.beginPath();
          ctx.moveTo(conn.from.x, conn.from.y);
          ctx.lineTo(conn.to.x, conn.to.y);
          ctx.stroke();
        }
      });

      ctx.fillStyle = "#00c6ff";
      points.forEach((point) => {
        if (point.active) {
          point.alpha = Math.min(1, point.alpha + 0.05);
          ctx.globalAlpha = point.alpha;
          point.x = point.originX + (Math.random() - 0.5) * 3;
          point.y = point.originY + (Math.random() - 0.5) * 3;
          ctx.beginPath();
          ctx.arc(point.x, point.y, 1.5, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      animationFrame = requestAnimationFrame(animate);
    };

    setTimeout(activatePoints, 500);
    animate();

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [imageLoaded]);

  useEffect(() => {
    if (!fadeOut) return;
    const handle = () => onFadeOutEnd && onFadeOutEnd();
    const el = wrapperRef.current;
    if (el) {
      el.addEventListener("transitionend", handle);
      return () => el.removeEventListener("transitionend", handle);
    }
  }, [fadeOut, onFadeOutEnd]);

  return (
    <div
      ref={(el) => {
        progressRef.current = el;
        wrapperRef.current = el;
      }}
      className={`preloader${fadeOut ? " fade-out" : ""}`}
    >
      <div className="logo-container">
        <div className="digital-construction">
          <canvas ref={canvasRef} className="digital-canvas" />
          <img
            src="/scenovis-logo.png"
            alt="SCENOVIS"
            className="scenovis-logo"
            onLoad={() => setImageLoaded(true)}
            style={{ opacity: 0 }}
          />
        </div>
        <div className="logo-glow"></div>
      </div>

      <div className="progress-container">
        <div className="progress-bar">
          <div className="progress-bar-fill"></div>
        </div>
        <div className="progress-text">0%</div>
      </div>

      <div className="loading-pulse">
        <div className="pulse-dot dot1"></div>
        <div className="pulse-dot dot2"></div>
        <div className="pulse-dot dot3"></div>
      </div>

      <div className="tech-grid">
        {Array.from({ length: 50 }).map((_, i) => (
          <div key={i} className="grid-item"></div>
        ))}
      </div>

      <div className="binary-rain">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="binary-digit"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random() * 0.3 + 0.1,
            }}
          >
            {Math.random() > 0.1 ? "1" : "0"}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Preloader;
