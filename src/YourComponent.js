import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './actions/dataActions';
import { Toaster, toast } from 'react-hot-toast';

const YourComponent = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) {
    toast.error("Failed to fetch data!");
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <Toaster />
      <h1>User List</h1>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.first_name} {user.last_name}</li>
        ))}
      </ul>
    </div>
  );
};

export default YourComponent;