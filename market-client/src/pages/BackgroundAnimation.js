import { useRef, useEffect } from 'react';
import * as THREE from 'three';

const BackgroundAnimation = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x000000, 0.001);
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000);
    mountRef.current.appendChild(renderer.domElement);

    // Create dynamic star field
    const createStars = () => {
      const geometry = new THREE.BufferGeometry();
      const vertices = [];
      const velocities = [];
      const colors = [];
      const sizes = [];

      for(let i = 0; i < 15000; i++) {
        vertices.push(
          (Math.random() - 0.5) * 2000,
          (Math.random() - 0.5) * 2000,
          (Math.random() - 0.5) * 2000
        );
        velocities.push(
          (Math.random() - 0.5) * 0.2,
          (Math.random() - 0.5) * 0.2,
          (Math.random() - 0.5) * 0.2
        );
        const color = new THREE.Color();
        color.setHSL(Math.random(), 0.8, 0.8);
        colors.push(color.r, color.g, color.b);
        sizes.push(Math.random() * 2);
      }

      geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
      geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
      geometry.setAttribute('size', new THREE.Float32BufferAttribute(sizes, 1));
      geometry.velocities = velocities;

      const material = new THREE.ShaderMaterial({
        uniforms: {
          time: { value: 0 }
        },
        vertexShader: `
          attribute float size;
          varying vec3 vColor;
          uniform float time;
          void main() {
            vColor = color;
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            gl_PointSize = size * (300.0 / -mvPosition.z);
            gl_Position = projectionMatrix * mvPosition;
          }
        `,
        fragmentShader: `
          varying vec3 vColor;
          void main() {
            float r = distance(gl_PointCoord, vec2(0.5));
            if (r > 0.5) discard;
            gl_FragColor = vec4(vColor, 1.0 - (r * 2.0));
          }
        `,
        blending: THREE.AdditiveBlending,
        depthTest: false,
        transparent: true,
        vertexColors: true
      });

      return new THREE.Points(geometry, material);
    };

    // Create energy waves
    const createEnergyWaves = () => {
      const geometry = new THREE.TorusGeometry(30, 0.5, 16, 100);
      const material = new THREE.ShaderMaterial({
        uniforms: {
          time: { value: 0 },
          color: { value: new THREE.Color(0x00ffff) }
        },
        vertexShader: `
          varying vec2 vUv;
          uniform float time;
          void main() {
            vUv = uv;
            vec3 pos = position;
            pos.z += sin(pos.x * 2.0 + time) * 2.0;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          }
        `,
        fragmentShader: `
          uniform vec3 color;
          uniform float time;
          varying vec2 vUv;
          void main() {
            float alpha = 0.5 * (sin(vUv.x * 50.0 + time) * 0.5 + 0.5);
            gl_FragColor = vec4(color, alpha);
          }
        `,
        transparent: true,
        blending: THREE.AdditiveBlending
      });

      return new THREE.Mesh(geometry, material);
    };

    // Create holographic grid
    const createGrid = () => {
      const group = new THREE.Group();
      const size = 100;
      const divisions = 10;
      const centerColor = new THREE.Color(0x00ffff);
      const edgeColor = new THREE.Color(0x000000);

      for(let i = -size; i <= size; i += size/divisions) {
        const lineGeometry = new THREE.BufferGeometry();
        const linePositions = [];
        const lineColors = [];

        for(let j = -size; j <= size; j += size/100) {
          linePositions.push(i, j, 0);
          const color = centerColor.clone().lerp(edgeColor, Math.abs(j)/size);
          lineColors.push(color.r, color.g, color.b);
        }

        lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
        lineGeometry.setAttribute('color', new THREE.Float32BufferAttribute(lineColors, 3));

        const material = new THREE.LineBasicMaterial({
          vertexColors: true,
          transparent: true,
          opacity: 0.1,
          blending: THREE.AdditiveBlending
        });

        group.add(new THREE.Line(lineGeometry, material));
      }

      return group;
    };

    const stars = createStars();
    const energyWaves = createEnergyWaves();
    const grid = createGrid();

    scene.add(stars);
    scene.add(energyWaves);
    scene.add(grid);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
    const pointLight = new THREE.PointLight(0xffffff, 2);
    pointLight.position.set(50, 50, 50);
    scene.add(ambientLight);
    scene.add(pointLight);

    camera.position.z = 100;

    let time = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.005;

      // Animate stars
      const positions = stars.geometry.attributes.position.array;
      const velocities = stars.geometry.velocities;
      for(let i = 0; i < positions.length; i += 3) {
        positions[i] += velocities[i];
        positions[i + 1] += velocities[i + 1];
        positions[i + 2] += velocities[i + 2];

        if (Math.abs(positions[i]) > 1000) velocities[i] *= -1;
        if (Math.abs(positions[i + 1]) > 1000) velocities[i + 1] *= -1;
        if (Math.abs(positions[i + 2]) > 1000) velocities[i + 2] *= -1;
      }
      stars.geometry.attributes.position.needsUpdate = true;

      // Animate energy waves
      energyWaves.material.uniforms.time.value = time;
      energyWaves.rotation.z += 0.001;

      // Animate grid
      grid.rotation.z += 0.0001;
      grid.position.z = Math.sin(time) * 5;

      // Camera movement
      camera.position.x = Math.cos(time * 0.1) * 20;
      camera.position.y = Math.sin(time * 0.1) * 20;
      camera.lookAt(0, 0, 0);

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
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div ref={mountRef} style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      width: '100%', 
      height: '100%', 
      zIndex: -1,
      background: 'radial-gradient(circle at center, #0a0a2a 0%, #000000 100%)'
    }} />
  );
};

export default BackgroundAnimation;