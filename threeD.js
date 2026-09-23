//Import the THREE.js library
import * as THREE from "./sources/vendor/three/build/three.module.js";
// To allow for the camera to move around the scene
import { OrbitControls } from "./sources/vendor/three/examples/jsm/controls/OrbitControls.js";
// To allow for importing the .gltf file
import { GLTFLoader } from "./sources/vendor/three/examples/jsm/loaders/GLTFLoader.js";

const container = document.getElementById("container3D");

if (!container) {
  throw new Error("Three.js container not found");
}

//Create a Three.JS Scene
const scene = new THREE.Scene();
//create a new camera with positions and angles
const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 1000);

//Keep the 3D object on a global variable so we can access it later
let object;
let isDragging = false;
let previousPointerX = 0;
let rotationVelocityY = 0;
let userRotationY = 0;
let sceneVisible = true;
new IntersectionObserver(([entry]) => { sceneVisible = entry.isIntersecting; }, {rootMargin:'200px 0px'}).observe(container);

//OrbitControls allow the camera to move around the scene
let controls;

//Set which object to render
let objToRender = 'eye';

//Instantiate a loader for the .gltf file
const loader = new GLTFLoader();

//Load the file
loader.load(
  `./sources/laptop (1)/laptop.gltf`,
  function (gltf) {
    //If the file is loaded, add it to the scene
    object = gltf.scene;
    const bounds = new THREE.Box3().setFromObject(object);
    const center = bounds.getCenter(new THREE.Vector3());
    const size = bounds.getSize(new THREE.Vector3());
    const scale = 4.5 / Math.max(size.x, size.y, size.z);
    object.scale.setScalar(scale);
    object.position.sub(center.multiplyScalar(scale));
    object.traverse((child) => {
      if (child.isMesh && child.material.map) {
        child.material.map.anisotropy = renderer.capabilities.getMaxAnisotropy();
      }
    });
    scene.add(object);
  },
  function (xhr) {
    //While it is loading, log the progress
    console.log((xhr.loaded / xhr.total * 100) + '% loaded');
  },
  function (error) {
    //If there is an error, log it
    console.error(error);
  }
);

//Instantiate a new renderer and set its size
const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true }); //Alpha: true allows for the transparent background
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.6));
renderer.setClearColor(0x000000, 0);
renderer.outputEncoding = THREE.sRGBEncoding;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.35;

//Add the renderer to the DOM
container.appendChild(renderer.domElement);

//Set how far the camera will be from the 3D model
camera.position.set(0, 0.2, objToRender === "dino" ? 25 : 10.5);
// View the laptop straight on from above, retaining the original camera distance.
if (objToRender !== "dino") {
  const viewingAngle = THREE.MathUtils.degToRad(27);
  const distance = camera.position.length();
  camera.position.set(0, distance * Math.sin(viewingAngle), distance * Math.cos(viewingAngle));
  camera.lookAt(0, 0, 0);
}

//Add lights to the scene, so we can actually see the 3D model
const topLight = new THREE.DirectionalLight(0xffffff, 1); // (color, intensity)
topLight.position.set(500, 500, 500) //top-left-ish
topLight.castShadow = true;
scene.add(topLight);

const ambientLight = new THREE.AmbientLight(0x665248, objToRender === "dino" ? 5 : 3.2);
scene.add(ambientLight);

//This adds controls to the camera, so we can rotate / zoom it with the mouse
if (objToRender === "dino") {
  controls = new OrbitControls(camera, renderer.domElement);
}

//Render the scene
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
function animate(time = 0) {
  requestAnimationFrame(animate);
  if (!sceneVisible || document.hidden) return;
  //Here we could add some code to update the scene, adding some automatic movement

  if (object) {
    if (!reducedMotion && !isDragging) object.rotation.x = -.03 + .025 * Math.sin(time * .00046);
    userRotationY += rotationVelocityY;
    object.rotation.y = userRotationY + (reducedMotion ? 0 : .1 * Math.sin(time * .0006));
    rotationVelocityY *= isDragging ? 0.82 : 0.94;
  }

  renderer.render(scene, camera);
}

//Add a listener to the window, so we can resize the window and the camera
let renderWidth = 0;
let renderHeight = 0;
function resizeRenderer() {
  const width = container.clientWidth;
  const height = container.clientHeight;
  if (!width || !height || (width === renderWidth && height === renderHeight)) return;
  renderWidth = width;
  renderHeight = height;
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height, false);
}

new ResizeObserver(resizeRenderer).observe(container);
resizeRenderer();

renderer.domElement.addEventListener("pointerdown", (event) => {
  if (!object || (event.pointerType === 'mouse' && event.button !== 0)) return;
  event.preventDefault();
  isDragging = true;
  previousPointerX = event.clientX;
  rotationVelocityY = 0;
  renderer.domElement.setPointerCapture(event.pointerId);
});

renderer.domElement.addEventListener("pointermove", (event) => {
  if (!isDragging || !object) return;
  const horizontalMovement = event.clientX - previousPointerX;
  rotationVelocityY = horizontalMovement * (event.pointerType === 'mouse' ? 0.005 : 0.02);
  userRotationY += rotationVelocityY;
  previousPointerX = event.clientX;
});

function stopDragging(event) {
  if (!isDragging) return;
  isDragging = false;
  if (renderer.domElement.hasPointerCapture(event.pointerId)) {
    renderer.domElement.releasePointerCapture(event.pointerId);
  }
}

renderer.domElement.addEventListener("pointerup", stopDragging);
renderer.domElement.addEventListener("pointercancel", stopDragging);

//Start the 3D rendering
animate();
