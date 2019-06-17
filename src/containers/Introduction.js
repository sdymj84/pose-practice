import React, { useState, useEffect } from 'react'
import posed from 'react-pose'
import styled from 'styled-components'

const Title = posed.div({
  visible: {
    opacity: 1,
    y: 0,
  },
  hidden: {
    opacity: 0,
    y: 50,
  },
})

const MovingDiv = posed.div({
  visible: {
    scale: 0.7,
    // x: -50,
    // y: -200,
    x: -50,
    delay: 500,
  },
  hidden: {
    scale: 1,
    // x: 0,
    // y: 0,
    x: 0,
  }
})

const Content = posed.div({
  visible: {
    opacity: 1,
    y: 0,
    delay: 500,
  },
  hidden: {
    opacity: 0,
    y: 50,
  }
})

const Container = styled.div`
  padding: 2em;
`

const StyledTitle = styled(Title)`
  font-size: 4em;
  font-weight: bold;
  position: absolute;
  top: 5%;
  left: 10%;
`

const Introduction = () => {
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <Container>
      <StyledTitle pose={isVisible ? "visible" : "hidden"}>
        <MovingDiv pose={isVisible ? "visible" : "hidden"}>
          Minjun Youn
      </MovingDiv>
      </StyledTitle>
      <Content pose={isVisible ? "visible" : "hidden"}>
        <h2>Please check my work below and contact me!</h2>
      </Content>
    </Container>
  )
}

export default Introduction
