import { useState } from 'react';
//state에 inputs와 users가 있을 때, inputs에 해당하는 역할을 함수로 만듬.
function useInputs(initialForm){
    const [ form, setForm ] = useState();
    const onChange = (e) => {
        const {name,value} = e.target;
        setForm( form => ({...form, [name]:value}));
    }
    const reset = () => setForm(initialForm);
    return [form, onChange, reset];
}
export default useInputs;