import React, { useRef, useState } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from '@react-three/drei';

const Model = ({ card_glb, initialRotation, setRotation }) => {
  const cardRef = useRef();
  const gltf = useLoader(GLTFLoader, card_glb);

  useFrame(() => {
    if (cardRef.current) {
      cardRef.current.rotation.x += 0.005;
      setRotation({
        x: cardRef.current.rotation.x,
        y: cardRef.current.rotation.y,
        z: cardRef.current.rotation.z
      });
    }
  });

  return (
    gltf ? (
      <primitive 
        ref={cardRef} 
        object={gltf.scene} 
        rotation={initialRotation} 
      />
    ) : null
  );
};

const Card = ({ type }) => {
  const card_glb = type === 'BLACK' ? '/black_card.glb' : '/black_card.glb';
  const initialRotation = [0, 0, 0]; // Initial rotation in radians [x, y, z]
  const [rotation, setRotation] = useState({ x: 0, y: 0, z: 0 });

  return (
    <div className="w-full h-full">
      <Canvas
        camera={{
          position: [-6, 7, 7],
          fov: 60,
          near: 0.1,
          far: 1000,
        }}
      >
        <color attach="background" args={['#f5efe6']} />
        <ambientLight intensity={1} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <Model card_glb={card_glb} initialRotation={initialRotation} setRotation={setRotation} />
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default Card;
