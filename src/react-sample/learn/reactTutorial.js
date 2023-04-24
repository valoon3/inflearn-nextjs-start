import { useEffect, useRef, useState } from 'react';
import UserListComponent from './userListComponent';
import InputComponent from './inputComponent';

function ReactTutorial() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'velopert',
      email: 'public.velopert@gmail.com',
    },
    {
      id: 2,
      name: 'tester',
      email: 'tester@example.com',
    },
    {
      id: 3,
      name: 'liz',
      email: 'liz@example.com',
    },
  ]);

  return (
    <>
      <InputComponent usersState={{ users, setUsers }} />
      <UserListComponent usersState={{ users, setUsers }} />
      <div></div>
    </>
  );
}

export default ReactTutorial;
