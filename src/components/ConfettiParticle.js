import React from 'react'
import styled, {keyframes} from 'styled-components'

const ConfettiParticle = ({color, width, scale, left, top, to}) => {
  const animation = keyframes`
    from {
      transform: translate(0, 0)
    }
    to {
      transform: translate(${to.x}rem, ${to.y}rem)
    }
  `

  return (
    <Particle
      particleColor={color}
      particleScale={scale}
      particleLeft={left}
      particleTop={top}
      particleSize={width * 1.1}
      animation={animation}
      duration={(Math.random() + 1) * 5}
    >
      <></>
    </Particle>
  )
}

const Particle = styled.div.attrs(
  ({
    particleColor,
    particleSize,
    particleTop,
    particleLeft,
    particleScale
  }) => ({
    style: {
      background: particleColor,
      height: `${particleSize}em`,
      width: `${particleSize}em`,
      top: `${particleTop}vh`,
      left: `${particleLeft}vw`,
      transform: `scale(${particleScale})`
    }
  })
)`
  position: absolute;
  border-radius: 100%;
  opacity: 0.7;
  animation: ${({animation}) => animation};
  animation-duration: ${({duration}) => duration}s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  animation-fill-mode: both;
  animation-direction: alternate;
`

export default ConfettiParticle
