const GameObject = require('./GameObject')
const _ = require('lodash')

module.exports = class Anomaly extends GameObject {
  constructor(args) {
    super(args)

    const material = new THREE.MeshNormalMaterial()
    const geometry = new THREE.SphereGeometry(0.05, 4, 4)
    this.mesh = new THREE.Mesh(geometry, material)

    scene.add(this.mesh)

    this.starRefs = this.getStarRefs()

    this.lines = []

  }
  getStarRefs() {
    const refs = []

    for (let key in gameObjects) {
      if (gameObjects[key].tag === 'star') {
        refs.push(gameObjects[key])
      }
    }
    return refs
  }
  getNearbyStars() {
    const cutOffDistance = 5
    const starsToZap = this.starRefs.filter(star => {
      if (star.mesh.position.distanceTo(this.mesh.position) < cutOffDistance) {
        return true
      }
      return false
    })

    return starsToZap
  }
  drawLines() {

    this.lines.forEach(line => scene.remove(line))
    this.lines = []


    const nearbyStars = this.getNearbyStars()
    var material = new THREE.LineBasicMaterial({
      color: 0x0000ff
    });

    nearbyStars.forEach(star => {

      var geometry = new THREE.Geometry()
      geometry.vertices.push(this.mesh.position)
      geometry.vertices.push(star.mesh.position)

      const line = new THREE.Line(geometry, material)
      this.lines.push(line)
      scene.add(line)
    })


  }
  update() {
    this.mesh.position.x += 0.01
    this.drawLines()

  }
  render() {

  }
}