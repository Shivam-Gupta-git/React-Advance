import React, { Component } from 'react'
import CountVal from './CountVal'

export default class UpdatingPhase extends Component {

  constructor(){
    super()
    this.state={
      count: 0
    }
  }
  componentDidMount(){
    console.log("componentDidMount: when component render first time")
  }

  increment(){
    this.setState({count: this.state.count + 1})
  }

  render() {
    return (
      <div className='text-2xl h-[300px] w-full bg-green-300 flex items-center justify-center p-2 flex-col'>
      <div className='h-full w-[50%] bg-gray-100 flex flex-col items-center justify-center p-2'>
      <div className='w-full h-[20%] border flex items-center justify-center rounded border-gray-300 shadow-sm'>
        <h1>Updating Phase</h1>
      </div>
      <div className='h-[80%] flex flex-col items-center justify-center'>
       <CountVal number={this.state.count}></CountVal>
      <button onClick={()=> this.increment()} className='border px-2 py-1 rounded bg-gray-400 border-gray-300 shadow-sm shadow-gray-500 cursor-pointer text-[20px] text-white hover:border-black mt-2'>increment</button>
      </div>
      </div>
    </div>
    )
  }
}
