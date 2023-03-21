import { Physics } from "@react-three/cannon";
import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import { OrbitControls } from "@react-three/drei";
import Floor from "./components/Floor";
import ConicalCreature3 from "./components/Conical-creature3";

function App() {

  const [controlsEnabled, setControls] = useState(true)

  return (
    <>
      <Canvas onContextMenu={(e) => e.preventDefault()} >
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