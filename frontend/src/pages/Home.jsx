import { useState, useEffect } from 'react';
import CreateWorkout from '../components/CreateWorkout';
// Components
import WorkoutDetails from '../components/WorkoutDetails';
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
    <div className="md:grid md:grid-cols-3 mx-auto w-9/12">
      <div className="md:col-span-2 grid gap-2 my-2 rounded-xl ">
        {workouts &&
          workouts.map((workout) => {
            return  (
              <WorkoutDetails 
              key={workout.id} 
              workout={workout}
              />
            )
          })}
      </div>
      <div>
        <CreateWorkout />
      </div>
    </div>
  );
};

export default Home;
