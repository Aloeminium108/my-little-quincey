import { Debug, Physics } from "@react-three/cannon";
import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import { OrbitControls } from "@react-three/drei";
import Floor from "./components/Floor";
import ConicalCreature3 from "./components/Conical-creature3";
import ConicalCreature2 from "./components/Conical-creature2";

function App() {

  const [controlsEnabled, setControls] = useState(true)

  return (
    <>
      <Canvas onContextMenu={(e) => e.preventDefault()} >
        <OrbitControls enabled={controlsEnabled}/>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Physics>
          <Debug>
            <Floor position={[0, -2, 0]} />
            <ConicalCreature3 setControls={setControls} position={[-3, 0, 0]}/>
            <ConicalCreature3 setControls={setControls} position={[3, 0, 0]}/>
          </Debug>
        </Physics>
      </Canvas>
    </>
  )
}

export default App