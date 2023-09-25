import THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';

import { Suspense } from 'react';
import { OrbitControls, PerspectiveCamera, Preload } from '@react-three/drei';

import { Logo } from '../../../public/0800logo';
import useCheckMobileScreen from '../../../utils/checkMoblieScreen';
import { Flex } from '@chakra-ui/react';

function RenderLogo(props) {
  const ref = useRef();
  useFrame(state => {
    const t = state.clock.getElapsedTime();
    const mesh = ref.current as THREE.Mesh | undefined;
    if (mesh) {
      mesh.rotation.z = (5 * Math.sin(t / 1.5)) / 20;
      mesh.rotation.x = 8 + Math.cos(t / 4) / 8;
      mesh.rotation.y = Math.sin(t / 4) / 8;
      mesh.rotation.y = Math.sin(t / 1.5) / 10;
    }
  });
  const scaleMobile = useCheckMobileScreen() ? 0.5 : 1;
  return (
    <mesh {...props} ref={ref} scale={scaleMobile}>
      <Logo position={[0, 0, 0]} dispose={null} />
    </mesh>
  );
}
const LogoScene = () => {
  return (
    <Flex maxHeight={'300px'}>
      <Canvas
        camera={{ position: [-0.5, 0, 10], fov: 55 }}
        gl={{ preserveDrawingBuffer: true }}
        style={{ height: '300px' }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 0, -10]} intensity={15} color={'white'} />
        <pointLight position={[-5, 0, -10]} intensity={15} color={'white'} />
        <Suspense fallback={'Loading Model'}>
          <RenderLogo position={[0, 0, 0]} />
          <Preload all />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </Flex>
  );
};

export default LogoScene;
