import { Physics } from "@react-three/cannon";
import { Canvas } from "@react-three/fiber";
import React, { useState } from "react";
import { OrbitControls } from "@react-three/drei";
import Floor from "./components/Floor";
import ConicalCreature3 from "./components/Conical-creature3";
import { useGesture } from "react-use-gesture";

function App() {

  const [controlsEnabled, setControls] = useState(true)

  const bind = useGesture({
    onDrag: ({ event }) => {
      
    }
  })

  return (
    <>
      <Canvas 
        onContextMenu={(e) => e.preventDefault()}
        {...bind()}
      >
        <OrbitControls enabled={controlsEnabled}/>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Physics>
          <Floor position={[0, -2, 0]} />
          <ConicalCreature3 setControls={setControls}/>
        </Physics>
      </Canvas>
    </>
  )
}

export default App