import { useEffect } from 'react';

function User({ user, onRemove, onToggle }) {
  // useEffect(() => {
  //   console.log('user 값 세팅');
  //   console.log(user);
  //
  //   return () => {
  //     console.log('user 이 바뀌기 전');
  //     console.log(user);
  //   };
  // }, [user]);

  return (
    <>
      <div>
        <b onClick={() => onToggle(user.id)}>{user.name}</b>
        &nbsp;&nbsp;
        <span>(email : {user.email})</span>
      </div>
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </>
  );
}

function UserListComponent({ usersState, onToggle }) {
  const { users, setUsers } = usersState;
  const onRemove = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div>
      {users.map((user) => (
        <User
          user={user}
          key={user.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}

export default UserListComponent;
