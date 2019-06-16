import React from "react";
import Page from './containers/Page'
import "./index.css";

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      totalPage: 3,
      pageNum: 1,
    }

    window.addEventListener("wheel", this.mouseWheelEvent)

    this.pageColor = [
      'lightskyblue',
      'tomato',
      'lightgreen',
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
      pageNum: prevState.pageNum === 1 ? 1 : prevState.pageNum - 1
    }))
  }

  scrollDown = () => {
    window.removeEventListener('wheel', this.mouseWheelEvent)
    this.setState(prevState => ({
      pageNum: prevState.pageNum === prevState.totalPage
        ? prevState.totalPage
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
        backgroundColor={this.pageColor[this.state.pageNum - 1]} />
    )
  }
}
