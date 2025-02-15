import React from "react";
import confetti from "canvas-confetti";
import "@/styles/confetti-canvas.css";

function Confetti(props) {
  const canvasRef = React.useRef(null);

  const { particleCount, runs, frequency } = props;
  const [isConfettiActive, setIsConfettiActive] = React.useState(true);

  /**
   * Resizes the canvas DOM element where the confetti will be displayed.
   * The canvas-confetti library does come with an option to handle this automatically,
   * but it didn't work for some reason, so it needs to be done manually.
   *
   * This causes some performance issues as well as some weird bugs
   * if this gets called on window resizing events,
   * so currently the canvas is set to a fixed size of 2400 wide and 1350 tall.
   */
  function resizeCanvas() {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const ctx = canvas.getContext("2d");
    const dpr = window.devicePixelRatio || 1; // Get device pixel ratio
    const width = 2400;
    const height = 1350;

    // Set canvas width and height in CSS
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    // Scale the canvas for higher resolution displays
    canvas.width = width * dpr;
    canvas.height = height * dpr;

    // Apply scaling to the context to prevent pixelation
    ctx.scale(dpr, dpr);
  }

  /**
   * Prevents the screen from being spammed with too much confetti,
   * which would've happened otherwise when the user switches to another tab.
   */
  function handleVisibilityChange() {
    setIsConfettiActive(!document.hidden);
  }

  // Resizing the canvas to the window size automatically
  React.useEffect(() => {
    resizeCanvas();
    // window.addEventListener("resize", resizeCanvas);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      // window.removeEventListener("resize", resizeCanvas);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  // Confetti sprayer
  React.useEffect(() => {
    if (!canvasRef.current || !isConfettiActive) {
      return;
    }

    const myConfetti = confetti.create(canvasRef.current);

    function launchConfetti() {
      myConfetti({
        spread: 26,
        startVelocity: 55,
        origin: { y: 0.7 },
        particleCount: Math.floor(particleCount * 0.25),
      });
      myConfetti({
        spread: 60,
        origin: { y: 0.7 },
        particleCount: Math.floor(particleCount * 0.2),
      });
      myConfetti({
        spread: 100,
        decay: 0.91,
        scalar: 0.8,
        origin: { y: 0.7 },
        particleCount: Math.floor(particleCount * 0.35),
      });
      myConfetti({
        spread: 120,
        startVelocity: 25,
        decay: 0.92,
        scalar: 1.2,
        origin: { y: 0.7 },
        particleCount: Math.floor(particleCount * 0.1),
      });
      myConfetti({
        spread: 120,
        startVelocity: 45,
        origin: { y: 0.7 },
        particleCount: Math.floor(particleCount * 0.1),
      });
    }

    // Initial confetti spray (otherwise there will be a delay of `frequency` milliseconds)
    launchConfetti();

    // Recurring confetti
    let runCount = 1;
    const intervalId = setInterval(() => {
      if (runs === -1) {
        launchConfetti();
      } else if (runCount < runs) {
        launchConfetti();
        runCount++;
      } else {
        clearInterval(intervalId);
      }
    }, frequency);

    return () => {
      clearInterval(intervalId);
      myConfetti.reset();
    };
  }, [runs, frequency, isConfettiActive]);

  return <canvas className="confetti-canvas" ref={canvasRef} />;
}

export default Confetti;
