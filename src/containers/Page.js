import React, { useState, useEffect } from 'react'
import posed, { PoseGroup } from 'react-pose'
import styled from 'styled-components'

/* 
  Left nav
  - When component mounted, current page text is visible, then hidden after 3s
    => use CSS animation (keyframe 0% - 100%)
  d
*/

const Div = posed.div({
  enter: {
    beforeChildren: true,
    opacity: 1,
  },
  exit: {
    opacity: 0,
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

const StyledLeftNav = styled.ul`
  list-style-type: none;
  position: fixed;
  top: 30%;
  left: -25px;
  z-index: 1;
  
  li {
    margin: 5px 0;
  }
  .text {
    opacity: 0;
    color: white;
  }
  .current {
    opacity: 0;
    animation-name: current-nav;
    animation-duration: 3s;
  }
  .text:hover {
    font-weight: bold;
    cursor: pointer;
    opacity: 1;
  }
  .left-nav-list {
    display: flex;
    align-items: center;
  }
  .icon {
    display: inline-block;
    width: 10px;
    height: 25px;
    margin: 2px 0;
    border-left: 1px solid white;
  }
  .current-icon {
    border-left: 5px solid white;
  }

  @keyframes current-nav {
    0% { opacity: 0 };
    15% { opacity: 1 };
    75% { opacity: 1 };
    100% { opacity: 0 };
  }
`

const StyledPage = styled(Div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${p => p.backgroundColor};
`

const Page = (props) => {
  const totalPage = []
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {
    setIsVisible(true)
  }, [])

  for (let i = 0; i < props.totalPage; i++) {
    totalPage.push(i + 1)
  }

  return (
    <PoseGroup>
      <StyledLeftNav className="left-nav" key="left-nav">
        {totalPage.map(page =>
          <li className="left-nav-list" key={page}>
            <div
              className={props.pageNum === page ? 'current-icon icon' : 'icon'}></div>
            <span
              className={props.pageNum === page ? 'current text' : 'text'}
              onClick={() => props.handlePageClick(page)}
            >
              Page {page}
            </span>
          </li>
        )}
      </StyledLeftNav>
      {isVisible &&
        <StyledPage
          onPoseComplete={props.handlePoseComplete}
          key={`page${props.pageNum}`}
          backgroundColor={props.backgroundColor}>
          <Title>
            <h1>Page {props.pageNum}</h1>
          </Title>
        </StyledPage>}
    </PoseGroup>
  )
}

export default Page
