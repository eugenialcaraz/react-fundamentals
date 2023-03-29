/*
// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 🐨 add a className prop to each div and apply the correct class names
// based on the text content
// 💰 Here are the available class names: box, box--large, box--medium, box--small
// 💰 each of the elements should have the "box" className applied

// 🐨 add a style prop to each div so their background color
// matches what the text says it should be
// 🐨 also use the style prop to make the font italic
// 💰 Here are available style attributes: backgroundColor, fontStyle

const smallBox = (
  <div
    className="box box--small"
    style={{backgroundColor: 'lightblue', fontStyle: 'italic'}}
  >
    small lightblue box
  </div>
)
const mediumBox = (
  <div
    className="box box--medium"
    style={{backgroundColor: 'pink', fontStyle: 'italic'}}
  >
    medium pink box
  </div>
)
const largeBox = (
  <div
    className="box box--large"
    style={{backgroundColor: 'orange', fontStyle: 'italic'}}
  >
    large orange box
  </div>
)

function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
    </div>
  )
}

export default App

*/

/*
//Extra credit 1

//Try to make a custom <Box /> component that renders a div, accepts all the props and merges the given style and className props with the shared values.

import * as React from 'react'
import '../box-styles.css'

const Box = props => (
  <div
    {...props}
    className={`box ${props.className}`}
    style={{...props.style, fontStyle: 'italic'}}
  />
)
const boxes = [
  {
    content: 'small lightblue box',
    className: 'box--small',
    style: {backgroundColor: 'lightblue'},
  },
  {
    content: 'medium pink box',
    className: 'box--medium',
    style: {backgroundColor: 'pink'},
  },
  {
    content: 'large orange box',
    className: 'box--large',
    style: {backgroundColor: 'orange'},
  },
]
function App() {
  return (
    <div>
      {boxes.map(({content, className, style}) => (
        <Box
          key={content}
          children={content}
          className={className}
          style={style}
        />
      ))}
    </div>
  )
}

export default App
*/

//Extra credit 2

//Try to make a custom <Box /> component that renders a div, accepts all the props and merges the given style and className props with the shared values.

import * as React from 'react'
import '../box-styles.css'

const Box = props => (
  <div
    {...props}
    className={`box box--${props.size}`}
    style={{...props.style, fontStyle: 'italic'}}
  />
)
const boxes = [
  {
    content: 'small lightblue box',
    size: 'small',
    style: {backgroundColor: 'lightblue'},
  },
  {
    content: 'medium pink box',
    size: 'medium',
    style: {backgroundColor: 'pink'},
  },
  {
    content: 'large orange box',
    size: 'large',
    style: {backgroundColor: 'orange'},
  },
]
function App() {
  return (
    <div>
      {boxes.map(({content, size, style}) => (
        <Box key={content} children={content} size={size} style={style} />
      ))}
    </div>
  )
}

export default App
