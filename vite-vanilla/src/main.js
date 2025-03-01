import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

const canvas = document.getElementById('canvas')

//Create a scene
const scene = new THREE.Scene()
scene.background = new THREE.Color(0xF0F0F0)

//Add a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.z = 5

//Create and add a cube object
const geometry = new THREE.TorusGeometry()
const material = new THREE.MeshLambertMaterial({ color: '#468585', emissive: '#468585' })
const mesh = new THREE.Mesh(geometry, material)

const boxGeometry = new THREE.BoxGeometry( 2, 0.1, 2);
const boxMaterial = new THREE.MeshLambertMaterial({ color: '#B4B4B3', emissive: '#B4B4B3' })
const box = new THREE.Mesh(boxGeometry, boxMaterial)
box.position.y = -1.5
scene.add(mesh)
scene.add(box)

//Add a light
const light = new THREE.SpotLight(0x006769, 100)
light.position.set(1, 1, 1)
scene.add(light)

//Set up the renderer
const renderer = new THREE.WebGLRenderer({ canvas })
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(window.devicePixelRatio);

//Add OrbitControls
const controls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = true;
controls.dampingFactor = 0.25;
controls.enableZoom = true;
controls.enablePan = true;

//Animate 
function animate() {
    requestAnimationFrame(animate)
    mesh.rotation.x += 0.01
    mesh.rotation.y += 0.01

    controls.update()
    renderer.render(scene, camera)
}

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
}
)

animate()
