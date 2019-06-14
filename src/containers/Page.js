import React, { useState, useEffect } from 'react'
import posed, { PoseGroup } from 'react-pose'

const Div = posed.div({
  enter: {
    beforeChildren: true,
    y: 0,
    transition: {
      duration: 2000,
      ease: 'linear',
      y: ({ from, to }) => ({
        type: 'keyframes',
        values: [from, 0]
      })
    },
  },
  exit: {
    y: '100vh',
    transition: {
      duration: 2000,
      ease: 'linear',
      y: ({ from, to }) => ({
        type: 'keyframes',
        values: [0, '-100vh']
      })
    }
  },
})

const Title = posed.div({
  enter: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: 50,
  },
})

const Page = ({ pageNum, handlePoseComplete }) => {
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <PoseGroup>
      {isVisible &&
        <Div
          onPoseComplete={handlePoseComplete}
          key={`page${pageNum}`}
          className={`page page${pageNum}`}>
          <Title>
            <h1>Page {pageNum}</h1>
          </Title>
        </Div>}
    </PoseGroup>
  )
}

export default Page
