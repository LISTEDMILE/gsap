import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
function App() {
  // to use gsap in react we simply have to run gsap install command in terminal
  // then use the hook useGSAP like below...
  useGSAP(() => {
    gsap.to(".box", {
      x: 100,
      duration: 2,
      dalay: 1,
    });
  });

  // right method...
  // use use ref hook for reference and use its current ...

  // agar hm chahte h ki ref aur class ya id ya kuch bhi same hone ke bad bhi ek scope me hi animation chle to hm gsap. wale object ke bad , lgake { scope: reference ya class jiske andar hi chlega sirf}

  const reference = useRef();
  useGSAP(() => {
    gsap.to(reference.current, {
      x: 100,
      delay: 1,
      duration: 2,
    });
  });

  return (
    <>
      <main>
        <div className="box"></div>
        <div ref={reference} className="box1"></div>
      </main>
    </>
  );
}

export default App;
