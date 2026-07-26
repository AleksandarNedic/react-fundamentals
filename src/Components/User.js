function  User(props){
    return (
        <>
            <h2>{props.name}</h2>
            <p>Age: {props.age}</p>
            <p>City: {props.city}</p>
        </>
    );
}
export default User;