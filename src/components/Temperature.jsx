import React, { useState } from 'react'

export default function Temperature() {
  const [temperature, setTemperature] = useState('')

  function handleChange(e) {
    let value
    if (e.target.value !== '') value = Number(e.target.value)
    else value = ''
    setTemperature(value)
  }

  let text
  let color
  if (temperature === '') {
  } else if (temperature < 10) {
    text = "It's cold ❄️"
    color = 'blue'
  } else if (temperature < 30) {
    text = "It's nice 🌼"
    color = ' black'
  } else {
    text = "It's warm ☀️"
    color = 'red'
  }

  return (
    <div>
      <h1>Temperature</h1>
      <input type="number" value={temperature} onChange={handleChange} />
      <p style={{ color: color }}>{text}</p>
    </div>
  )
}
