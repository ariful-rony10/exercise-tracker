import { useState } from 'react';

const CreateWorkout = (props) => {
  const [title, setTitle] = useState('');
  const [load, setLoad] = useState('');
  const [reps, setReps] = useState('');
  const [error, setError] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = { title, load, reps };
    const response = await fetch('/api/v1/workouts', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }

    if (response.ok) {
      setError(null);
      console.log('New Workout added');
      setTitle('');
      setLoad('');
      setReps('');
    }
  };
  return (
    <div className="my-2 bg-purple-50 rounded-xl py-2">
      <h1 className="text-center text-xl font-bold text-purple-800">
        Add New Workout
      </h1>
      <form className="grid gap-2 grid-cols-1 p-3" onSubmit={handleSubmit}>
        <div className="grid gap-2 md:grid-cols-2">
          <label htmlFor="title" className="text-center md:text-right">
            Exercise Title :
          </label>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 border-purple-300 outline-purple-900 rounded ml-2 text-purple-900 bg-transparent"
          />
        </div>
        <div className="grid gap-2 md:grid-cols-2">
          <label htmlFor="load" className="text-center md:text-right">
            Load (in KG) :
          </label>
          <input
            type="number"
            name="load"
            id="load"
            value={load}
            onChange={(e) => setLoad(e.target.value)}
            className="border-2 border-purple-300 outline-purple-900 rounded ml-2 text-purple-900 bg-transparent"
          />
        </div>
        <div className="grid gap-2 md:grid-cols-2">
          <label htmlFor="reps" className="text-center md:text-right">
            Reps :
          </label>
          <input
            type="number"
            name="reps"
            id="reps"
            value={reps}
            onChange={(e) => setReps(e.target.value)}
            className="border-2 border-purple-300 outline-purple-900 rounded ml-2 text-purple-900 bg-transparent"
          />
        </div>
        <button className="mt-2 bg-purple-400 rounded-full text-white py-2 w-1/3 place-self-center hover:bg-purple-900">
          Add
        </button>
        {error && <div>{error}</div>}
      </form>
    </div>
  );
};

export default CreateWorkout;
