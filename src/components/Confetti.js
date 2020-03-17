import React, {memo} from 'react'
import ConfettiParticle from './ConfettiParticle'

const colors = ['#3CC157', '#2AA7FF', '#1B1B1B', '#FCBC0F', '#F85F36']
const particleTypes = ['circle', 'bar', 'squiggle', 'star', 'triangle']

const Confetti = memo(({particleCount = 50}) => {
  const particles = [...Array(particleCount).keys()]
  return particles.map((count, index) => (
    <ConfettiParticle
      key={count}
      color={colors[Math.floor(Math.random() * colors.length)]}
      left={Math.floor(Math.random() * 100)}
      top={Math.floor(Math.random() * 100)}
      scale={Math.random() * 2}
      width={Math.random()}
      to={{
        x: Math.random() * (index % 2 === 0 ? -11 : 11),
        y: Math.random() * 12
      }}
      type={particleTypes[Math.floor(Math.random() * particleTypes.length)]}
    />
  ))
})

export default Confetti
