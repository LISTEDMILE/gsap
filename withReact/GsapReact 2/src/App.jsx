import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
function App() {
 
  const [valueX, setValueX] = useState(0);


  // gsap se koi random value lene ke liye....
  const rand  = gsap.utils.random(-500, 500, 100);

  const boxRef = useRef();
  
  // useGSAP me bhi dependecies dal skte h jaise yha valueX ke change hone pe ye change hoga..

  useGSAP(() => {
    gsap.to(boxRef.current, {
      x: valueX,
      duration: 2,
    })
  },[valueX])
  return (
    <>
      <main>
        <button onClick={() => {
          setValueX(rand);
        }}>Animate</button>
        <div className="box" ref={boxRef}></div>
      </main>
    </>
  );
}

export default App;
