import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const BackgroundAnimation = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Custom figure: Tetrahedron with glowing effect
    const tetrahedronGeometry = new THREE.TetrahedronGeometry(2, 0);
    const customMaterial = new THREE.ShaderMaterial({
      uniforms: {
        color1: { value: new THREE.Color(0x8000ff) }, // Neon purple
        color2: { value: new THREE.Color(0x00ffff) }, // Neon cyan
      },
      vertexShader: `
        varying vec3 vUv;
        void main() {
          vUv = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vUv;
        uniform vec3 color1;
        uniform vec3 color2;
        void main() {
          float intensity = abs(sin(vUv.y * 3.1415));
          gl_FragColor = vec4(mix(color1, color2, intensity), 1.0);
        }
      `,
      wireframe: true,
      transparent: true,
    });
    const tetrahedron = new THREE.Mesh(tetrahedronGeometry, customMaterial);

    // Add smaller particles with vibrant colors
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 800;
    const positions = new Float32Array(particlesCount * 3);
    const colors = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 20;
      positions[i + 1] = (Math.random() - 0.5) * 20;
      positions[i + 2] = (Math.random() - 0.5) * 20;

      colors[i] = 0.5 + Math.random() * 0.5; // Vibrant random colors
      colors[i + 1] = 0.2 + Math.random() * 0.8;
      colors[i + 2] = 0.5 + Math.random() * 0.5;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.8
    });
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);

    // Lighting
    const light = new THREE.PointLight(0xffffff, 1);
    light.position.set(5, 5, 5);
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);

    // Add everything to the scene
    scene.add(tetrahedron);
    scene.add(particles);
    scene.add(light);
    scene.add(ambientLight);

    // Position camera
    camera.position.z = 10;

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      tetrahedron.rotation.x += 0.005;
      tetrahedron.rotation.y += 0.01;
      particles.rotation.y += 0.002;

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
      if (container) {
        container.removeChild(renderer.domElement);
      }
      tetrahedronGeometry.dispose();
      customMaterial.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
      }}
    />
  );
};

export default BackgroundAnimation;
