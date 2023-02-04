import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [firstN, setFirstN] = useState('')
  const [LastN, setLastN] = useState('')
  const [Email, setEmail] = useState('')
  const [password, setpassword] = useState('')
  const [Age, setAge] = useState('')
  const [level, setLevel] = useState('')

  const handleInputs = (e) => {
    if (e.target.name === "firstName") {
      setFirstN(e.target.value);
    } else if (e.target.name === "lastName") {
      setLastN(e.target.value);
    } else if (e.target.name = "email") {
      setEmail(e.target.value)
    }
  }

  const handleValidation = (name) => {
    switch (name) {
      case "firstName":
        const firstNRegex = /^[A-Za-z.*$]{3,16}$/
        if (firstN) {
          if (firstN.match(firstNRegex) && !firstN.match(/[0-9]/)) {
            return ''
          }
          return 'First name must be Alphabetic and contain 3 - 16 characters'
        }
        break;
      case "LastName":
        const lastNRegex = /^[A-Za-z.*$]{3,16}$/
        if (LastN) {
          if (LastN.match(lastNRegex) && !LastN.match(/[0-9]/)) {
            return ''
          }
          return 'Last name must be Alphabetic and contain 3 - 16 characters'
        }
        break;
        const emailRegex = /[A-Za-z0-9]+@[a-zA-Z]+[.]+[a-zA-Z]/
        if (Email) {
          if (Email.match(emailRegex)) {
            return ''
          }
          return 'Email must be a valid address, e.g exmaple@example.com'
        }
        break;
      default:
        return ''
    }
  }

  return (
    <div className="body">
      <main>
        <header>
          Intelligence's Form
        </header>
        <div className="forminpuits">
          <label htmlFor="FirstName">First Name</label>
          <input type="text" placeholder='First Name' onChange={handleInputs} name="firstName" />
          <p className='err'>{handleValidation("firstName")}</p>


          <label htmlFor="Last Name"> Last Name</label>
          <input type="text" placeholder='Last Name' onChange={handleInputs} name="lastName" />
          <p className="err">{handleValidation("lastName")}</p>

          <label htmlFor="Email"> Email</label>
          <input type="email" placeholder='Email' onChange={handleInputs} name=
            'email' />
          <p className="err">{handleValidation('email')}</p>

          <label htmlFor="Password">Password</label>
          <input type="password" placeholder='Password'
            onChange={(e) => setpassword(e.target.value)} />
          <p className="err">{password.match(/^[A-Za-z0-9]{6,20}$/) || password.match(/[@-_]/) ? '' : 'Password must be alphanumeric (@,_ and - are also allowed) and between 6 - 20 characters'}</p>

          <label htmlFor="Age">Age</label>
          <input type="number" placeholder='Age' onChange={(e) => setAge(e.target.value)} />
          <p className="err">{(Age >= 16 && Age <= 50) ? '' : 'Ages must be between 16 and 50'}</p>

          <label htmlFor="Last Name">Level</label>
          <input type="text" placeholder='Level' onChange={(e) => setLevel(e.target.value)} />
          <p className="err">{level.match(/[0-9]+00/) && level.length == 3 ? '' : 'Levels must be three number length ending with two (00)'}</p>
        </div>
      </main>
    </div>
  )
}

export default App
