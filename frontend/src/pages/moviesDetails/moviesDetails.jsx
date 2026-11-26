import React from 'react'
import { useParams } from 'react-router-dom';
import { useData } from '../../context/dataContext';


function MoviesDetails() {
  const {data} = useData();

  const {id} = useParams()
  const movieTitle = decodeURIComponent(id)
  const foundData = data.find((item) => item.Title === movieTitle)
  return (
    <div>
      <img src={foundData.Poster} alt={foundData.Title} />
      <p>{movieTitle}</p>
      <h3>Year: {foundData.Year}</h3>
    </div>
  )
}

export default MoviesDetails;
