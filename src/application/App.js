import React from 'react'
import {ParallaxProvider} from 'react-scroll-parallax'

import Router from './Router'

const App = () => {
  return (
    <ParallaxProvider>
      <Router />
    </ParallaxProvider>
  )
}

export default App
