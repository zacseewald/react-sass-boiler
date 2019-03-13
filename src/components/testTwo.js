// This is a testing component to show that you can have specific styles associated to a designated component. instead of using the system of having the index.js and index.css files in the component folder, they are separated into 2 folders. One for the component.js and the other for stylessheet.scss. This allows for better readability and control over styles. They load into App.js and are then thrown in to the main index.html

// Components_name.js should always be placed in the components folder. App.js should ne the only JS component file outside in the main directory.

import React, { Component } from 'react'

export class testTwo extends Component {
  render() {
    return (
      <div>
        <div className="parent-testTwo">
            <h1 id="h1-testTwo">This is testTwo h1</h1>
            <span>X</span>
        </div>
      </div>
    )
  }
}

export default testTwo
