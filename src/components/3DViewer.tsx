import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three"; // Import THREE

const Model = () => {
  const { scene } = useGLTF("../public/resource/coding3d.glb");
  const modelRef = useRef<THREE.Object3D>(); // Tentukan tipe sebagai THREE.Object3D

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.005; // Rotasi saat hover
    }
  });

  return (
    <primitive
      object={scene}
      ref={modelRef}
      scale={2.5}
      position={[1, -3, 1]}
    />
  );
};

export default Model;