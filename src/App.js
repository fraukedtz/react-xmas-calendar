import React, { Component } from 'react'
import Door from './Door.js'
import Counter from './Counter.js'
import './App.css'

class App extends Component {
  state = {
    doors: this.getRandomDoors()
  }

  getRandomDoors() {
    return [
      { text: 'Foo' },
      { text: 'Bar' },
      { text: 'Baz' },
      { text: 'Foobar' },
      { text: 'Lorem' },
      { text: 'ipsum' },
      { text: 'dolor' },
      { text: 'sit' },
      { text: 'hello' },
      { text: 'world' },
      { text: 'Foo' },
      { text: 'Bar' },
      { text: 'Baz' },
      { text: 'Foo' },
      { text: 'Foo' },
      { text: 'Foo' },
      { text: 'Foo' },
      { text: 'Foo' },
      { text: 'Foo' },
      { text: 'Foo' },
      { text: 'Foo' },
      { text: 'Foo' },
      { text: 'Foo' },
      { text: 'Foo' }
    ]
      .map((item, index, arr) => ({
        ...item,
        num: index + 1,
        isOpen: false,
        total: arr.length,
        rand: Math.random()
      }))
      .sort((a, b) => a.rand - b.rand)
      .map(item => {
        delete item.rand
        return item
      })
  }

  renderDoors() {
    return this.state.doors.map(door => (
      <Door key={door.num} {...door} onClick={() => this.openDoor(door.num)} />
    ))
  }

  openDoor = num => {
    const { doors } = this.state
    const index = doors.findIndex(d => d.num === num)
    const newDoors = [
      ...doors.slice(0, index),
      { ...doors[index], isOpen: true },
      ...doors.slice(index + 1)
    ]

    this.setState({
      doors: newDoors
    })
  }

  render() {
    const openDoorsNum = this.state.doors.filter(d => d.isOpen).length
    return (
      <section className="App">
        <Counter num={openDoorsNum} />
        {this.renderDoors()}
      </section>
    )
  }
}

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           {/* <img src={logo} className="App-logo" alt="logo" /> */}
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     )
//   }
// }

export default App
