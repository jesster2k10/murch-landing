import React, {useState, useEffect} from 'react'
import Typist from 'react-typist'

const InfiniteTypist = ({children, delay = 250}) => {
  const [typingIndex, setTypingIndex] = useState(0)
  const updateTypingIndex = () => {
    setTimeout(() => {
      setTypingIndex(typingIndex + 1)
    }, delay)
  }

  console.log(children)

  return (
    <Typist key={typingIndex} onTypingDone={updateTypingIndex}>
      {children}
    </Typist>
  )
}

InfiniteTypist.Backspace = Typist.Backspace

export default InfiniteTypist
