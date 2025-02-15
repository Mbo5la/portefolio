import { useGLTF } from '@react-three/drei';
import React from 'react';
import skyScrene from '../assets/3d/sky.glb';
const Sky = () => {

    const sky = useGLTF(skyScrene)
  return (
   <mesh>
    <primitive object={sky.scene}/>
   </mesh>
  )
}

export default Sky
