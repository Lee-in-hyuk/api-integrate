import Counter from './components/Counter';
import UserList from './components/UserList';
import { useState, useRef, useReducer } from 'react';
import CreateUser from './components/CreateUser';
import './App.css';

const initialState = {
  inputs: {
    username:'',
    userage:''
  },
  users: [
    { id:1, username: "그린", age:30},
    { id:2, username: "블루", age:18},
    { id:3, username: "레드", age:22},
    { id:4, username: "하양", age:28},
  ]
}
function reducer(state,action){
  // onChange함수가 실행되면 dispatch도 실행되면서 reducer함수도 자동으로 실행됨.
  // 이 함수가 실행되면 type이 'CHANGE_INPUT'일 때 return이 반환되도록 스위치문 작성 (if문써도 됨)
  //return의 내용
  //state는 그대로 두고, inputs의 값에서 name값이 value로 반환
  switch(action.type){
    case 'CHANGE_INPUT':
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.name]:action.value
        }
      };
    case 'CREATE_USER':
      return {
        inputs: state.inputs,
        //state.users는 그대로 두고, action.user를 추가하겠다.
        users:[
          ...state.users,
          action.user
        ]
      }
    default:
      return state;
  }
  return state;
}

function App() {
  //redux로 만들 때 !!!!!!! 위에 initialState랑 reducer함수도 포함
  const [ state, dispatch ] = useReducer(reducer, initialState);
  const { users } = state; //state에 담긴 users만 구조분해할당으로 변수로 만듬.
  const { username, userage } = state.inputs;
  const nextId = useRef(5);

  function onChange(e){
    const { name,value } = e.target;
    //dispatch를 써서 reducer함수를 발동시킴. 이 때 type을 지정해서 스위치문에 조건을 걸어줌.
    dispatch({
      type: 'CHANGE_INPUT',
      name: name,
      value:value
    })
  }
  function onCreate(){
      dispatch({
        type: 'CREATE_USER',
        user: {
          id:nextId.current,
          username: username,
          age: userage
        }
      })
      nextId.current = nextId.current+1;
    }

  //useState로 만들었을 때 !!!!!!!!!
  // const [ inputs, setInputs ] = useState({
  //   username:'',
  //   userage:''
  // })
  // const nextId = useRef(5); //id값들을 다르게 하려고.
  // const { username, userage } = inputs;
  // const [ users, setUsers ] = useState([
  //   { id:1, username: "그린", age:30},
  //   { id:2, username: "블루", age:18},
  //   { id:3, username: "레드", age:22},
  //   { id:4, username: "하양", age:28},
  // ])

  // //name의 값들이 반환되어 출력되게 만들도록
  // function onChange(e){
  //   const { name,value } = e.target;
  //   setInputs({
  //     ...inputs,
  //     [name]:value
  //   })
  // }

  // //버튼 눌렀을 때 input에 들어가있는 값들을 반환하게 만드는 함수 - button에 넣을거.
  // function onCreate(){
  //   setUsers([
  //     ...users,
  //     { id:nextId.current, username: username, age: userage }
  //   ])
  //   nextID.current = nextId.current+1;
  // }

  return (
    <div className="App">
      {/* <Counter/> */}
      <CreateUser username={username} userage={userage} onChange={onChange} onCreate={onCreate}/>
      <UserList users={users}/>
    </div>
  );
}

export default App;
