import { useState, useEffect } from 'react';
// Components
import WorkoutDetails from '../components/WorkoutDetails'
const Home = () => {
  const [workouts, setWorkouts] = useState(null);
  // const [isPending, setIsPending] = useState(true);
  // const [isError, setIsError] = useState(true);

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await fetch('/api/v1/workouts/');
        const { data } = await response.json();
        if (response.ok) {
          return setWorkouts(data);
        }
      } catch (error) {}
    };
    fetchWorkouts();
  }, []);
  return (
    <div className='grid grid-cols-1 gap-2 my-2 rounded-xl mx-auto md:w-9/12 lg:w-6/12 lg:gap-6'>
      {workouts &&
        workouts.map((workout) => {
          return (
            <WorkoutDetails key={workout.id} workout={workout}/>
          );
        })}
    </div>
  );
};

export default Home;
