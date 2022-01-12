//전역 데이터를 Get하는 방법 중 useContext사용하기
import { useContext } from "react";
import PersonContext from "../contexts/PersonContext";

export default function ContextGet2(){
    const persons = useContext(PersonContext);
    return(
        <ul>
            {persons.map((person)=>(
                <li>이름은 {person.name}이고 나이는 {person.age}살 입니다.</li>
            ))}
        </ul>
    );
}