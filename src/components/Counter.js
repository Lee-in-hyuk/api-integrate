import { useState } from "react";
import { useReducer } from "react";
function Counter(){

    function reducer(state,action){
        //action.type에 따라 다르게 처리하도록 switch문 사용 (if문 써도 됨.)
        switch (action.type){
            case 'INCREASE' :
                return state +1;
            case 'DECREASE' :
                return state -1;
            default :
                return state;
        }
    }

    //useState 사용해서 카운터 만들 때
    // const [ number, setNumber ] = useState(0);
    // const onIncrease = () => {
    //     setNumber(preNumber => preNumber +1);
    // }
    // const onDecrease = () => {
    //     setNumber(preNumber => preNumber -1);
    // }

    //useReducer 사용해서 카운터 만들 때
    const [ number, dispatch ] = useReducer(reducer,0);
    const onIncrease = () => {
        dispatch({type:'INCREASE'})
    }
    const onDecrease = () => {
        dispatch({type:'DECREASE'})
    }

    return(
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    );
}
export default Counter;