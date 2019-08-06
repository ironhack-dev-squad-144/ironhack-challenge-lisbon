import React, { useState } from 'react'

export default function CustomizeImage() {
  const [img, setImg] = useState(
    'https://upload.wikimedia.org/wikipedia/commons/6/66/An_up-close_picture_of_a_curious_male_domestic_shorthair_tabby_cat.jpg'
  )
  const [size, setSize] = useState(100)

  function handleImgChange(e) {
    setImg(e.target.value)
  }
  function handleSizeChange(e) {
    setSize(Number(e.target.value))
  }

  return (
    <div>
      <h1>Customize Image</h1>
      <input type="text" value={img} onChange={handleImgChange} /> <br />
      <input
        type="range"
        value={size}
        onChange={handleSizeChange}
        min="0"
        max="200"
      />
      <p>
        {size} x {size} px
      </p>
      <img src={img} alt="" style={{ height: size, width: size }} />
      <br />
    </div>
  )
}
