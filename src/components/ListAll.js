const ListAll = ({ users }) => {
    return <ul className="list-group">
        {users.map((users)=><li className="list-group-item">
        {users.username}:{users.name}
        </li>)}
    </ul>
}

export default ListAll;