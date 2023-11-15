import { Suspense, useEffect, useState } from "react";
import CanvasLoader from "../components/Loader";
import { Canvas } from "@react-three/fiber";

const ComputersCanvas = () => {
  return (
    <Canvas>
      <Suspense fallback={<CanvasLoader />}>
        
      </Suspense>
    </Canvas>
  );
};

export default ComputersCanvas;
