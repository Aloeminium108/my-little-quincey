import { Canvas } from "@react-three/fiber";
import React from "react";
import Box from "./components/Box";
import Floor from "./components/Floor";

class App extends React.Component {
  render() {
    return (
      <>
        <Canvas onContextMenu={(e) => e.preventDefault()}>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Box position={[-1.2, 0, 0]} />
          <Box position={[1.2, 0, 0]} />
          <Floor position={[0, -2, 0]}/>
        </Canvas>
      </>
    )
  }
}

export default App