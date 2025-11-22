import { useEffect, useRef } from "react";
import "./Cursor.css";

const Cursor = () => {
  const dotRef = useRef(null);
  const outlineRef = useRef(null);

  useEffect(() => {
    const cursorDot = dotRef.current;
    const cursorOutline = outlineRef.current;

    // Check if elements exist
    if (!cursorDot || !cursorOutline) return;

    // Logic to move cursor
    const moveCursor = (e) => {
      const { clientX, clientY } = e;

      // Move the dot instantly
      cursorDot.style.left = `${clientX}px`;
      cursorDot.style.top = `${clientY}px`;

      // Move the outline with a standard animation (CSS handles the lag/smoothing)
      cursorOutline.animate(
        {
          left: `${clientX}px`,
          top: `${clientY}px`,
        },
        { duration: 500, fill: "forwards" } // This duration creates the "lag" effect
      );
    };

    // Logic for hover effects (clicking or hovering links)
    const handleMouseDown = () => {
        cursorOutline.classList.add("cursor-click");
    };
    const handleMouseUp = () => {
        cursorOutline.classList.remove("cursor-click");
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <>
      <div className="cursor-outline" ref={outlineRef}></div>
      <div className="cursor-dot" ref={dotRef}></div>
    </>
  );
};

export default Cursor;