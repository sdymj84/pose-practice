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
    // x: -50,
    // y: -200,
    delay: 500,
  },
  hidden: {
    // x: 0,
    // y: 0,
    x: 0,
  }
})

const Content = posed.div({
  visible: {
    x: '0%',
    delayChildren: 1000,
    staggerChildren: 2000,
  },
  hidden: {
    x: '0%',
  }
})

const H2 = posed.h2({
  visible: {
    opacity: 1,
    x: 0,
  },
  hidden: {
    opacity: 0,
    x: 10,
  }
})

const Container = styled.div`
  padding: 2em;

`

const StyledTitle = styled(Title)`
  font-size: 4em;
  font-weight: bold;
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
        <H2>I am a enthusiastic web developer</H2>
        <H2>Love the moment challenging problem is solved</H2>
        <H2>Please check my work below that shows I'm ready</H2>
      </Content>
    </Container>
  )
}

export default Introduction
