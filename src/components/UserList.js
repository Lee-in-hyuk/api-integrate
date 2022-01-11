function UserList({users}){
    return(
        <div>
            {
                // users.map((user)=>{
                //     return <p>이름은 {user.username}이고 나이는 {user.age}이다</p>
                // })
                users.map((user=><p key={user.id}>이름은 {user.username}이고 나이는 {user.age}이다</p>))
            }
        </div>
    );
}
export default UserList;