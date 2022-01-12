import React, { useEffect, useReducer } from 'react';
import axios from 'axios';
import useAsync from './useAsync';

// useAsync.js를 실행할 때 작동되는 함수
// 
async function getUsers(){
    const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
    )
    return response.data;
}

function ApiUsersReducer() {
    const [ state, refetch ] = useAsync(getUsers);
    
    //state를 구조분해 할당해서 loading, error, users를 사용할 수 있게 하는데, users는 없기 때문에 data로 쓰겠다.
    const { loading, error, data:users } = state;
    //로딩중이라면?
    if(loading) return <div>로딩중...</div>
    //에러가 발생했다면?
    if(error) return <div> 에러가 발생했습니다.</div>
    if(!users) return null;
    return (
        <div>
            <ul>
                {users.map((user)=>(
                    <li key={user.id}>{user.username}{user.name}</li>
                ))}
            </ul>
            <button onClick={refetch}>다시 불러오기</button>
        </div>
    );
}

export default ApiUsersReducer;