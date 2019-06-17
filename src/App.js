import React from "react";
import Page from './containers/Page'
import "./index.css";

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      totalPage: 4,
      pageNum: 0,
    }

    window.addEventListener("wheel", this.mouseWheelEvent)

    this.pages = [
      {
        title: 'Introduction',
        color: 'lightskyblue'
      },
      {
        title: 'Portfolio',
        color: 'tomato'
      },
      {
        title: 'About Me',
        color: 'lightgreen'
      },
      {
        title: 'Contact Me',
        color: 'lightyellow'
      },
    ]
  }

  mouseWheelEvent = (e) => {
    if (e.deltaY > 0) {
      this.scrollDown()
    } else {
      this.scrollUp()
    }
  }

  handlePoseComplete = () => {
    window.addEventListener("wheel", this.mouseWheelEvent)
  }

  handlePageClick = (pageNum) => {
    this.setState({ pageNum })
  }

  scrollUp = () => {
    window.removeEventListener('wheel', this.mouseWheelEvent)
    this.setState(prevState => ({
      pageNum: prevState.pageNum === 0 ? 0 : prevState.pageNum - 1
    }))
  }

  scrollDown = () => {
    window.removeEventListener('wheel', this.mouseWheelEvent)
    this.setState(prevState => ({
      pageNum: prevState.pageNum === prevState.totalPage - 1
        ? prevState.totalPage - 1
        : prevState.pageNum + 1
    }))
  }

  render() {
    return (
      <Page
        totalPage={this.state.totalPage}
        pageNum={this.state.pageNum}
        handlePoseComplete={this.handlePoseComplete}
        handlePageClick={this.handlePageClick}
        pages={this.pages} />
    )
  }
}
