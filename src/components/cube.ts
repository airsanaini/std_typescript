import * as THREE from 'three';

export class Cube {
    public mesh: THREE.Mesh;

    constructor() {
        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        this.mesh = new THREE.Mesh(geometry, material);
    }
}