const Star = require('./Star')
const Anomaly = require('./Anomaly')
const _ = require('lodash')

function createScene() {

  global.camera = new THREE.PerspectiveCamera(
    70,
    window.innerWidth / window.innerHeight,
    0.01,
  )

  var controls = new THREE.OrbitControls(camera);
  camera.position.set(0, 0, 20);
  controls.update();

  let i = 1000

  while (i--) {
    instantiate(Star)
  }

  instantiate(Anomaly)
}

module.exports = {
  createScene
}