import * as THREE from 'three';
import { Cube } from '../components/cube';

export class MainScene {
    private scene: THREE.Scene;
    private camera: THREE.PerspectiveCamera;
    private renderer: THREE.WebGLRenderer;
    private cube: Cube;

    constructor() {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.camera.position.z = 5;

        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.renderer.domElement);

        this.cube = new Cube();
        this.scene.add(this.cube.mesh);
    }

    public init() {
        this.animate();
    }

    private animate() {
        requestAnimationFrame(() => this.animate());
        this.cube.mesh.rotation.x += 0.01;
        this.cube.mesh.rotation.y += 0.01;
        this.renderer.render(this.scene, this.camera);
    }
}
