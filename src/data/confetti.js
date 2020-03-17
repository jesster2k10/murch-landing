const PARTICLE_COUNT = 50
const colors = ['#3CC157', '#2AA7FF', '#1B1B1B', '#FCBC0F', '#F85F36']

const particles = [...Array(PARTICLE_COUNT).keys()].map((count, index) => ({
  key: count,
  color: colors[Math.floor(Math.random() * colors.length)],
  left: Math.floor(Math.random() * 100),
  right: Math.floor(Math.random() * 100),
  scale: Math.random() * 2,
  width: Math.random(),
  to: {
    x: Math.random() * (index % 2 === 0 ? -11 : 11),
    y: Math.random() * 12
  }
}))

export default particles
