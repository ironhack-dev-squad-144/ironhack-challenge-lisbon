import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Celebrities() {
  const [celebrities, setCelebrities] = useState([])
  const [selectedCelebrity, setSelectedCelebrity] = useState(null)
  const [search, setSearch] = useState('')

  // useEffect with `[]` as a 2nd parameter is triggered only after the 1st render
  useEffect(() => {
    for (let page = 1; page <= 10; page++) {
      axios
        .get(
          'https://api.themoviedb.org/3/person/popular?api_key=ac8d871bc92c64c3486c06e7c6f7224b&page=' +
            page
        )
        .then(response => {
          setCelebrities(celebrities => [
            ...celebrities,
            ...response.data.results,
          ])
        })
    }
  }, [])

  function handleClickCelebrity(celebrity) {
    setSelectedCelebrity(celebrity)
  }

  function handleChange(e) {
    setSearch(e.target.value)
  }

  return (
    <div>
      <h1>Celebrities</h1>
      <p>
        <input
          type="text"
          placeholder="Search for a celebrity..."
          value={search}
          onChange={handleChange}
        />
      </p>
      <div className="celebrities-panel">
        <table>
          <tbody>
            {celebrities
              .filter(c => c.name.toUpperCase().includes(search.toUpperCase()))
              .map(c => (
                <tr key={c.id} onClick={() => handleClickCelebrity(c)}>
                  <td>
                    <img
                      className="thumbnail"
                      src={'https://image.tmdb.org/t/p/w185' + c.profile_path}
                      alt=""
                    />
                  </td>
                  <td>{c.name}</td>
                </tr>
              ))}
          </tbody>
        </table>
        <div className="celebrity-detail">
          {selectedCelebrity && (
            <div>
              <h1>{selectedCelebrity.name}</h1>
              <img
                src={
                  'https://image.tmdb.org/t/p/w185' +
                  selectedCelebrity.profile_path
                }
                alt=""
              />
              <ul>
                {selectedCelebrity.known_for.map(movie => (
                  <li key={movie.id}>{movie.title || movie.name}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
