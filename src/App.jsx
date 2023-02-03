import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [firstN, setFirstN] = useState('firstname')
  const [LastN, setLastN] = useState('lastname')
  const [password, setpassword] = useState('9009jfnd')
  const [Age, setAge] = useState('23')
  const [level, setLevel] = useState('100')
  const [Email, setEmail] = useState('Uthmanabdullahi2020@gmail.com')

  return (
    <div className="body">
      <main>
        <header>
          Intelligence's Form
        </header>
        <div className="forminpuits">
          <label htmlFor="FirstName"> First Name</label>
          <input type="text" placeholder='First Name' onChange={(e) => setFirstN(e.target.value)} />

          <p className='err'>{firstN.match(/^[A-Za-z.*$]{3,16}$/) && !firstN.match(/[0-9]/) ? '' : 'First name must be Alphabetic and contain 3 - 16 characters'}</p>


          <label htmlFor="Last Name"> Last Name</label>
          <input type="text" placeholder='Last Name' onChange={(e) => setLastN(e.target.value)} />
          <p className="err">{LastN.match(/^[A-Za-z.*$]{3,16}$/) && !LastN.match(/[0-9]/) ? '' : 'Last name must be Alphabetic and contain 3 - 16 characters'}</p>

          <label htmlFor="Email"> Email</label>
          <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
          <p className="err">{Email.match(/[A-Za-z0-9]+@[a-zA-Z]+[.]+[a-zA-Z]/) ? '' : 'Last name must be Alphabetic and contain 3 - 16 characters'}</p>

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
