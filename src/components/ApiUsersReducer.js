import React, { useEffect, useReducer } from 'react';
import axios from 'axios';
import { reducer } from './reducer';

function ApiUsersReducer() {
    // 상태관리하기
    // useReducer(함수, 초기값)
    const [ state, dispatch ] = useReducer(reducer,{
        loading:false,
        data:null,
        error:null
    })
    const fetchUsers = async() => {
        try{
            //users초기화, error초기화, loading true
            dispatch({ type:'LOADING' })
            const response = await axios.get(
                //jsonplaceholder 브라우저의 리소스를 가져온거.
                'https://jsonplaceholder.typicode.com/users'
            )
            //요청이 성공했을 때
            dispatch({ type: 'SUCCESS', data:response.data });
        }
        //에러가 발생하면 catch구문이 실행됨.
        catch(e){
            //에러 번호를 확인하고 싶다면 e.response.status를 입력
            console.log(e.response.status);
            dispatch({ type:'ERROR', error:e });
        }
    }
    // 렌더링 될 때 호출
    useEffect(()=>{
        fetchUsers();
        //끝에 빈 배열[]을 쓰는 이유 : 안 쓰면 fetchUsers()가 계속 무한루프로 돌아가기 때문에, 마운트가 1번만 되도록 하려고.
    },[])
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
        </div>
    );
}

export default ApiUsersReducer;