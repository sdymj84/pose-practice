import React from 'react'
import styled from 'styled-components'

const StyledLeftNav = styled.ul`
  list-style-type: none;
  position: fixed;
  top: calc(50% - 70px);
  z-index: 1;
  
  li {
    margin: 5px 0;
  }
  .text {
    opacity: 0;
  }
  .current {
    opacity: 0;
    animation-name: current-nav;
    animation-duration: 4s;
  }
  .text:hover {
    font-weight: bold;
    cursor: pointer;
    opacity: 1;
  }
  .icon {
    font-weight: bold;
    margin-right: 10px;
  }

  @keyframes current-nav {
    0% { opacity: 0 };
    15% { opacity: 1 };
    75% { opacity: 1 };
    100% { opacity: 0 };
  }
`

const LeftNav = (props) => {
  return (
    <StyledLeftNav className="left-nav">
      <li>
        <span className="icon">|</span>
        <span className={props.pageNum === 1 ? 'current text' : 'text'}>Page 1</span>
      </li>
      <li>
        <span className="icon">|</span>
        <span className={props.pageNum === 2 ? 'current text' : 'text'}>Page 2</span>
      </li>
      <li>
        <span className="icon">|</span>
        <span className={props.pageNum === 3 ? 'current text' : 'text'}>Page 3</span>
      </li>
    </StyledLeftNav>
  )
}

export default LeftNav
