import { Debug, Physics } from "@react-three/cannon";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { OrbitControls } from "@react-three/drei";
import Box from "./components/Box";
import Floor from "./components/Floor";
import Quincey from "./components/Quincey";
import ConicalCreature from "./components/Conical-creature";
import ConicalCreature2 from "./components/Conical-creature2";

class App extends React.Component {
  render() {
    return (
      <>
        <Canvas onContextMenu={(e) => e.preventDefault()}>
          <OrbitControls />
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Physics>
            <Debug color="green" >
              <Floor position={[0, -2, 0]} />
              <ConicalCreature position={[-3, 0, 0]} />
              <ConicalCreature2 />
            </Debug>
          </Physics>
        </Canvas>
      </>
    )
  }
}

export default App