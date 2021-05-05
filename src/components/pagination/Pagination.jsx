const Pagination = ({ usersPerPage, totalUsers, paginate }) => {
    const pageNumber = [];

    for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
        pageNumber.push(i);
    }



    return (
        <nav className="d-flex w-100 justify-content-center">
            <ul className="pagination">
                {pageNumber.map(number => (
                    <li key={number} className="page-item">
                        <span className="page-link" onClick={() => paginate(number)}>{number}</span>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination;