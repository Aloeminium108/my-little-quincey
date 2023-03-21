import { Physics } from "@react-three/cannon";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { OrbitControls } from "@react-three/drei";
import Floor from "./components/Floor";
import ConicalCreature3 from "./components/Conical-creature3";

class App extends React.Component {
  render() {
    return (
      <>
        <Canvas onContextMenu={(e) => e.preventDefault()}>
          <OrbitControls />
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Physics>
            <Floor position={[0, -2, 0]} />
            <ConicalCreature3 />
          </Physics>
        </Canvas>
      </>
    )
  }
}

export default App