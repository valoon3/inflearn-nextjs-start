import { useRef, useState } from 'react';

function InputComponent({ usersState }) {
  const { users, setUsers } = usersState;
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
  });
  const nameInput = useRef();
  let userId = useRef(4);
  const { name, email } = userInfo;

  const onChange = (e) => {
    const { name, value } = e.target;

    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const onReset = () => {
    setUserInfo({
      name: '',
      email: '',
    });
    nameInput.current.focus();
  };

  const onCreate = () => {
    setUsers([...users, { ...userInfo, id: userId.current }]);
    onReset();
    userId.current += 1;
  };

  return (
    <>
      <div>
        <input
          name="name"
          placeholder="이름"
          onChange={onChange}
          ref={nameInput}
          value={name}
        />
        <input
          name="email"
          placeholder="이메일"
          onChange={onChange}
          value={email}
        />
        {/*<button onClick={onReset}>초기화</button>*/}
        <button onClick={onCreate}>등록</button>
        <div>
          <b>값: </b>
          이름 (닉네임)
        </div>
      </div>
    </>
  );
}

export default InputComponent;
