import React, { useState, useEffect } from 'react'
import posed, { PoseGroup } from 'react-pose'
import styled from 'styled-components'
import Introduction from './Introduction'
import Portfolio from './Portfolio'
import AboutMe from './AboutMe'
import Contact from './Contact'


const Div = posed.div({
  enter: {
    beforeChildren: true,
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
})

const StyledLeftNav = styled.ul`
  @media (min-width: 1025px) {
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
      color: black;
      font-weight: bold;
    }
    .current {
      opacity: 0;
      animation-name: current-nav;
      animation-duration: 3s;
    }
    .text:hover {
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
      border-left: 1px solid black;
    }
    .current-icon {
      border-left: 5px solid black;
    }
  }
  
  @keyframes current-nav {
    0% { opacity: 0 };
    15% { opacity: 1 };
    75% { opacity: 1 };
    100% { opacity: 0 };
  }

  @media (max-width: 1024px) {
    list-style-type: none;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    
    li {
      margin: 5px 0;
    }
    .text {
      color: black;
      font-weight: bold;
      position: relative;
      left: -30px;
    }
    .text:hover {
      cursor: pointer;
    }
    .left-nav-list {
      display: inline-block;
      width: 123px;
    }
    .icon {
      display: inline-block;
      width: 30px;
      height: 25px;
      margin: 2px 0;
      border-left: 0;
      border-top: 1px solid black;
    }
    .current-icon {
      border-left: 0;
      border-top: 5px solid black;
    }
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

const renderPages = [
  <Introduction />,
  <Portfolio />,
  <AboutMe />,
  <Contact />
]

const Page = (props) => {
  const [isVisible, setIsVisible] = useState(false)
  const pageInfo = props.pages[props.pageNum]

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <PoseGroup>
      <StyledLeftNav className="left-nav" key="left-nav">
        {props.pages.map((page, i) =>
          <li className="left-nav-list" key={page.title}>
            <div
              className={props.pageNum === i ? 'current-icon icon' : 'icon'}></div>
            <span
              className={props.pageNum === i ? 'current text' : 'text'}
              onClick={() => props.handlePageClick(i)}
            >
              {page.title}
            </span>
          </li>
        )}

      </StyledLeftNav>

      {isVisible && pageInfo &&
        <StyledPage
          onPoseComplete={props.handlePoseComplete}
          key={pageInfo.title}
          backgroundColor={pageInfo.color}>
          {renderPages[props.pageNum]}
        </StyledPage>}
    </PoseGroup>
  )
}

export default Page
