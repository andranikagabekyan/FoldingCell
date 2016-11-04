import React, { Component } from 'react'
import './folding.scss'
class FoldingCell extends Component {

  /**
   * constructor
   * @param  {} props
   */
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className={"block " + this.props.style} onClick={this.props.clickEvent}></div>
    )
  }
}

export default FoldingCell
