import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
function App() {
 

  const boxRef = useRef(null);

  // jab animation ho jae to memory smartly manage karne ke liye contextSafe use karenge ....
  const { contextSafe } = useGSAP();

  const rotateBox = contextSafe(
    function () {
      gsap.to(boxRef.current, {
        rotate: 360,
        duration:1,
      })
    }
  )

  return (
    <>
      <main>
        <button onClick={ rotateBox}>Animate</button>
        <div className="box" ref={boxRef}></div>
      </main>
    </>
  );
}

export default App;
