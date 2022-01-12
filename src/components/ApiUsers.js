import React, {useState,useEffect} from 'react';
import axios from 'axios';

const ApiUsers = () => {
    //상태관리하기 1)요청의 결과 2)로딩상태 3)에러
    // 1)
    const [ users, setUsers ] = useState(null);
    // 2)
    const [ loading, setLoading ] = useState(null);
    // 3)
    const [ error, setError ] = useState(null);
    //async를 붙이면 비동기 형태로 됨.
    const fetchUsers = async() => {
        try{
            //users초기화, error초기화, loading true
            setUsers(null);
            setError(null);
            setLoading(true);
            const response = await axios.get(
                //jsonplaceholder 브라우저의 리소스를 가져온거.
                'https://jsonplaceholder.typicode.com/users'
            )
            setUsers(response.data);
        }
        //에러가 발생하면 catch구문이 실행됨.
        catch(e){
            //에러 번호를 확인하고 싶다면 e.response.status를 입력
            console.log(e.response.status);
            setError(e);
        }
        //try와 catch가 끝나면 로딩이 끝났으니까 setLoading함.
        setLoading(false);
    }
    //렌더링 될 떄 axios사용해서 데이터를 받음
    useEffect(()=>{
        fetchUsers();
        //끝에 빈 배열[]을 쓰는 이유 : 안 쓰면 fetchUsers()가 계속 무한루프로 돌아가기 때문에, 마운트가 1번만 되도록 하려고.
    },[])
    //로딩중이라면?
    if(loading) return <div>로딩중...</div>
    //에러가 발생했다면?
    if(error) return <div> 에러가 발생했습니다.</div>
    if(!users) return null;
    return (
        <div>
            <ul>
                {users.map(user=>(
                    <li key={user.id}>{user.username}{user.name}</li>
                ))}
            </ul>
            <button onChange={fetchUsers}>다시 불러오기</button>
        </div>
    );
};

export default ApiUsers;