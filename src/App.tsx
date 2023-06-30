import { useRef, useState } from "react";
import "./App.css";
import { useScroll } from "framer-motion";

function App() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress, scrollY } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  });

  return (
    <div
      ref={targetRef}
      style={{ height: "200vh", width: "100%", backgroundColor: "coral" }}
    >
      
    </div>
  );
}

export default App;
