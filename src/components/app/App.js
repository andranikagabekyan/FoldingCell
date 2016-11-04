import React, { Component } from 'react'
import FoldingCell from '../folding/FoldingCell'
import './app.scss'
export default class App extends Component {

  /**
    * constructor
    * @param  {} props
    */
  constructor (props) {
    super(props);
    this.state={
       show: false
    }
    this.onClickEventHandler=this.onClickEventHandler.bind(this);
  }

  onClickEventHandler () {
    this.setState({
      show: true
    })
  }
  /**
   * render
   */
  render () {
    return (
      <div className='container'>
        <FoldingCell style={'red--block'} clickEvent={this.onClickEventHandler}/>
        {this.state.show ?
           <FoldingCell style={'blue--block'} />
           :
           ''}
      </div>
    )
  }
}
