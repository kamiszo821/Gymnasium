import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const LoginForm = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .post('http://localhost/api/Authorization/login', {
        username: username,
        password: password,
      })
      .then((response) => {
        console.log(response)
        const authToken = response.data
        localStorage.setItem('authToken', authToken)
        window.location.replace('/')
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div id="login">
      <h1>Zaloguj się</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Adres E-Mail"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Hasło"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" value="Zaloguj się" />
      </form>
      <a href="#">
        <h3>Nie pamiętam hasła</h3>
      </a>
      <h2 style={{ fontSize: '2.5rem', marginTop: '100px' }}>
        Nie masz jeszcze konta?
      </h2>
      <a href="register">
        <button type="button" className="header-btn">
          Zarejestruj się
        </button>
      </a>
    </div>
  )
}

export default LoginForm
