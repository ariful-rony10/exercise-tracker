import React from 'react'

const WorkoutDetails = ({workout}) => {
  return (
    <div key={workout.id} className='p-2 bg-purple-50 rounded-xl md:mx-4 py-4'>
        <h2 className='text-xl tracking-wider uppercase text-purple-800 font-bold'>{workout.title}</h2>
        <p><strong>Load (KG): </strong>{workout.load}</p>
        <p><strong>Reps : </strong>{workout.reps}</p>
    </div>
  )
}

export default WorkoutDetails