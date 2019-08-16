import React, { useContext, useEffect } from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import GithubContext from '../../context/github/githubContext';

const Users = () => {
  const githubContext = useContext(GithubContext);

  const { users, loading, getDefaultUser } = githubContext;

  // []only run this once when componentDidMount otherwise becomes a endless loop
  useEffect(() => {
    getDefaultUser();
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className='grid-3'>
        {users.map((user, index) => {
          return <UserItem key={index} user={user} />;
        })}
      </div>
    );
  }
};

export default Users;
