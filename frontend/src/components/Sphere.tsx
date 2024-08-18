import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { AsciiEffect } from 'three/examples/jsm/effects/AsciiEffect.js';

interface AsciiEffectComponentProps {
  width?: string;
  height?: string;
}

const AsciiEffectComponent: React.FC<AsciiEffectComponentProps> = ({
  width = '450px',
  height = '300px',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let camera: THREE.OrthographicCamera;
    let scene: THREE.Scene;
    let renderer: THREE.WebGLRenderer;
    let effect: AsciiEffect;
    let sphere: THREE.Mesh;
    let plane: THREE.Mesh;
    const start = Date.now();

    function init() {
      const aspect = parseInt(width) / parseInt(height);
      const d = 200;
      camera = new THREE.OrthographicCamera(-d * aspect, d * aspect, d, -d, 1, 1000);
      camera.position.z = 500;

      scene = new THREE.Scene();
      scene.background = new THREE.Color(0xF8F9FA); // Background color set to #F8F9FA

      const pointLight1 = new THREE.PointLight(0xffffff, 1.5, 0, 0);
      pointLight1.position.set(500, 500, 500);
      scene.add(pointLight1);

      const pointLight2 = new THREE.PointLight(0xffffff, 0.5, 0, 0);
      pointLight2.position.set(-500, -500, -500);
      scene.add(pointLight2);

      // Increased sphere size slightly
      sphere = new THREE.Mesh(
        new THREE.SphereGeometry(140, 20, 10), // Increased size from 100 to 120
        new THREE.MeshPhongMaterial({ flatShading: true })
      );
      sphere.position.y = -50; // Start the sphere lower, closer to the platform
      scene.add(sphere);

      // Enhanced the platform visibility and size
      plane = new THREE.Mesh(
        new THREE.PlaneGeometry(300, 300), // Increased the platform size for visibility
        new THREE.MeshBasicMaterial({ color: 0x212529 }) // Darker color for better contrast
      );
      plane.position.y = -130; // Adjusted position to be slightly below the sphere's initial position
      plane.rotation.x = -Math.PI / 2;
      scene.add(plane);

      renderer = new THREE.WebGLRenderer();
      renderer.setSize(parseInt(width), parseInt(height));
      renderer.setAnimationLoop(animate);

      effect = new AsciiEffect(renderer, ' .:-+*=%@#', { invert: false }); // Invert set to false for black text
      effect.setSize(parseInt(width), parseInt(height));
      effect.domElement.style.color = '#212529'; // Text color set to #212529
      effect.domElement.style.backgroundColor = '#F8F9FA'; // Background color set to #F8F9FA

      containerRef.current?.appendChild(effect.domElement);

      window.addEventListener('resize', onWindowResize);
    }

    function onWindowResize() {
      const aspect = parseInt(width) / parseInt(height);
      const d = 200;

      camera.left = -d * aspect;
      camera.right = d * aspect;
      camera.top = d;
      camera.bottom = -d;

      camera.updateProjectionMatrix();

      renderer.setSize(parseInt(width), parseInt(height));
      effect.setSize(parseInt(width), parseInt(height));
    }

    function animate() {
      const timer = Date.now() - start;

      sphere.position.y = -50 + Math.abs(Math.sin(timer * 0.002)) * 100;
      sphere.rotation.y = timer * 0.0005;

      effect.render(scene, camera);
    }

    init();

    return () => {
      window.removeEventListener('resize', onWindowResize);
      renderer.dispose();
      containerRef.current?.removeChild(effect.domElement);
    };
  }, [width, height]);

  return <div ref={containerRef} style={{ width, height }} />;
};

export default AsciiEffectComponent;
