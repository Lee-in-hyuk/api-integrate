//전역 데이터를 Get하는 방법 중 this.context사용하기
import React from "react";
import PersonContext from "../contexts/PersonContext";

export default class ContextGet3 extends React.Component {
    static contextType = PersonContext;
    render() {
        const persons = this.context;
        return(
            <ul>
                {persons.map((person)=>(
                    <li>이름 : {person.name} <br/> 나이 : {person.age}</li>
                ))}
            </ul>
        );
    }
}