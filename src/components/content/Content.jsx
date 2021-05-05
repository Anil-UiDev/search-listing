import { useEffect, useState } from "react";
import List from "../list/List";
import Pagination from "../pagination/Pagination";
import Search from "../search/Search";
// import { showUser } from '../service';

const Content = () => {
    const apiUrl = "https://jsonplaceholder.typicode.com/users";
    const [user, setUser] = useState([]);
    const [search, setSearch] = useState('');
    const [currentpage, setCurrentPage] = useState(1);
    const [usersPerPage] = useState(5);

    useEffect(() => {
        fetch(apiUrl)
            .then(res => res.json())
            .then(res => setUser(res))
            .catch(err => console.log(err.message))
    }, [])

    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    const indexOfLastUser = currentpage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUser = user.slice(indexOfFirstUser, indexOfLastUser);

    const filteredData = currentUser.filter(item => {
        return item.name.toLowerCase().includes(search.toLowerCase());
    })

    const handlePaginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }


    return (
        <>
            <Search searchQuery={search} onChange={handleChange} />
            <List userList={filteredData} />
            <Pagination totalUsers={user.length} usersPerPage={usersPerPage} paginate={handlePaginate} />
        </>
    )
}

export default Content;