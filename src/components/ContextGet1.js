//전역 데이터를 Get하는 방법 중 Consumer사용하기
import PersonContext from "../contexts/PersonContext";
export default function ContextGet1(){
    return(
        <PersonContext.Consumer>
            {(persons)=>(
                <ul>
                    {persons.map((person)=>(
                        <li>{person.name}</li>
                    ))}
                </ul>
            )}
        </PersonContext.Consumer>
    );
}