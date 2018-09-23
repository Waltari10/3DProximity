const GameObject = require('./GameObject')
const _ = require('lodash')

module.exports = class Star extends GameObject {
  constructor(args) {
    super(args)

    const material = new THREE.MeshNormalMaterial()
    const geometry = new THREE.SphereGeometry(0.05, 1, 1)
    this.mesh = new THREE.Mesh(geometry, material)

    scene.add(this.mesh)

    this.mesh.position.x = _.random(-20, 20, true)
    this.mesh.position.y = _.random(-15, 15, true)
    this.mesh.position.z = _.random(-15, 15, true)

    this.tag = 'star'
  }
  update() { }
  render() { }
}