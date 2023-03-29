// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

/*
import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input

  const handleSubmit = e => {
    e.preventDefault()
    onSubmitUsername(e.target.elements[0].value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="formInput">Username:</label>
        <input id="formInput" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
*/

/*Extra credit 1
import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const inputRef = React.useRef(null)

  const handleSubmit = e => {
    e.preventDefault()
    onSubmitUsername(inputRef.current.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="formInput">Username:</label>
        <input ref={inputRef} id="formInput" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
*/

/*Extra credit 2
import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [inputValue, setInputValue] = React.useState('')
  const [error, setError] = React.useState(false)

  const handleChange = e => {
    setError(false)
    const value = e.target.value
    if (value === value.toLowerCase()) {
      setInputValue(value)
    } else {
      setError(true)
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    onSubmitUsername(inputValue)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="formInput">Username:</label>
          <input
            value={inputValue}
            onChange={handleChange}
            id="formInput"
            type="text"
          />
          <div style={{display: error ? 'block' : 'none'}} role="alert">
            <span style={{color: 'red'}}>Username must be lower case</span>
          </div>
        </div>
        <button type="submit" disabled={error}>
          Submit
        </button>
      </form>
    </>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
*/

/*Extra credit 3*/
import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [inputValue, setInputValue] = React.useState('')

  const handleChange = e => {
    const value = e.target.value
    setInputValue(value.toLowerCase())
  }

  const handleSubmit = e => {
    e.preventDefault()
    onSubmitUsername(inputValue)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="formInput">Username:</label>
          <input
            value={inputValue}
            onChange={handleChange}
            id="formInput"
            type="text"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
