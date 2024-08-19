import React from 'react'
import { useNavigate } from 'react-router-dom'

const SingleWorkout = () => {
    const navigate = useNavigate()

  return (
    <>
        <button onClick={() => navigate(-1)}>Go Back</button>
        <div>SingleWorkout</div>
    </>
  )
}

export default SingleWorkout
