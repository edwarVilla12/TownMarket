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

    // Keep existing tetrahedron code
    const tetrahedronGeometry = new THREE.TetrahedronGeometry(2, 0);
    const customMaterial = new THREE.ShaderMaterial({
      uniforms: {
        color1: { value: new THREE.Color(0x8000ff) },
        color2: { value: new THREE.Color(0x00ffff) },
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

    // Modified particle system for galaxy effect
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 2000; // Increased count
    const positions = new Float32Array(particlesCount * 3);
    const colors = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i += 3) {
      // Spiral distribution
      const angle = Math.random() * Math.PI * 2;
      const radius = Math.random() * 30;
      
      positions[i] = Math.cos(angle) * radius;
      positions[i + 1] = (Math.random() - 0.5) * 10;
      positions[i + 2] = Math.sin(angle) * radius;

      // Enhanced star colors
      const starType = Math.random();
      if (starType < 0.3) {
        colors[i] = 0.8 + Math.random() * 0.2; // Red
        colors[i + 1] = 0.3 + Math.random() * 0.3; // Green
        colors[i + 2] = 0.3; // Blue
      } else if (starType < 0.6) {
        colors[i] = 0.3; // Red
        colors[i + 1] = 0.3; // Green
        colors[i + 2] = 0.8 + Math.random() * 0.2; // Blue
      } else {
        colors[i] = 0.8; // White stars
        colors[i + 1] = 0.8;
        colors[i + 2] = 0.8;
      }
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.1,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });
    
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);

    // Existing lighting setup
    const light = new THREE.PointLight(0xffffff, 1);
    light.position.set(5, 5, 5);
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);

    scene.add(tetrahedron);
    scene.add(particles);
    scene.add(light);
    scene.add(ambientLight);

    camera.position.z = 30; // Adjusted camera position

    const animate = () => {
      requestAnimationFrame(animate);

      tetrahedron.rotation.x += 0.005;
      tetrahedron.rotation.y += 0.01;
      particles.rotation.y += 0.0005; // Slower rotation for galaxy effect

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

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
        background: 'radial-gradient(circle at center, #000020 0%, #000000 100%)',
      }}
    />
  );
};

export default BackgroundAnimation;