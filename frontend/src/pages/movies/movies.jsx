import React from 'react'

function Movies({ data }) {
  return (
    <div>
      <div>
        <h1>Movie Hub/ Night Tickecting Center</h1>
        <div>
          {data?.map((item, index) => (
          <div>
            <p>{item.Title}</p>
          </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Movies;
