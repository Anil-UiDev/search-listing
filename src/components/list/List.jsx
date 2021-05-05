const List = (props) => {
    const {userList} = props;
    return(
        <table className="table">
            <thead>
                <tr>
                    <th>S No.</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email ID</th>
                    <th>City</th>
                    <th>Phone Number</th>
                </tr>
            </thead>
            <tbody>
                {userList.map(user => {
                    return(
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.address.city}</td>
                            <td>{user.phone}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default List;