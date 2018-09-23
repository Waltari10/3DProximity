const _ = require('lodash')
const { initLoop } = require('./loop')
const THREE = require('three')
window.THREE = THREE
// Adds orbitcontrols to global Threes object
require('three/examples/js/controls/OrbitControls')
const Star = require('./Star')
const uniqid = require('uniqid')
const { createScene } = require('./StarScene')

global.gameObjects = {}
global.instantiate = function (classTemplate, args) {
  const id = uniqid()
  const instance = new classTemplate(Object.assign({ id }, args))
  gameObjects[id] = instance
  return instance
}
global.destroy = function (instance) {
  delete gameObjects[instance.id]
}

initScene()
initLoop()

function initScene() {
  window.scene = new THREE.Scene()
  createScene()
}
