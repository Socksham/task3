'use client'

import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "@react-three/drei";
import Card from "@/components/Card";

export default function Home() {
  return (
    <div className="h-screen">
      <Card type="BLACK"/>
    </div>
  );
}