// useAsync라는 훅을 만들어서 이걸로 계속 사용
// 파일명을 소문자로 시작하면 보통 훅 파일.

import React, { useReducer, useEffect} from 'react';

// LOADING, SUCCESS, ERROR
function reducer(state, action) {
    switch (action.type) {
        case 'LOADING':
            return {
                loading: true,
                data: null,
                error: null
            };
        case 'SUCCESS':
            return {
                loading: false,
                data: action.data,
                error: null
            };
        case 'ERROR':
            return {
                loading: false,
                data: null,
                error: action.error
            };
        default:
            return state;
    }
}
// callback은 api를 호출하는 함수를 전달 (ApiUserReducer에서 다운로드 받는 함수)
// deps는 값이 변결되었을 때 넣어줌
function useAsync(callback, deps=[]) {
    // 상태관리하기
    // useReducer(함수, 초기값)
    const [ state, dispatch ] = useReducer(reducer,{
        loading:false,
        data:null,
        error:null
    })
    const fetchData = async() => {
        try{
            //users초기화, error초기화, loading true
            dispatch({ type:'LOADING' })
            //비동기 전송이라서 await 붙임
            const data = await callback()

            //요청이 성공했을 때
            dispatch({ type: 'SUCCESS', data: data });
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
        fetchData();
        //끝에 빈 배열[]을 쓰는 이유 : 안 쓰면 fetchData()가 계속 무한루프로 돌아가기 때문에, 마운트가 1번만 되도록 하려고.
    },[])
    //useAsync함수가 실행되고 리턴되는게
    return [ state, fetchData];
}

export default useAsync;