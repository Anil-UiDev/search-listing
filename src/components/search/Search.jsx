const Search = (props) => {
    const { searchQuery, onChange } = props;
    return (
        <div className="form-group">
            <input type="text" name="search" id="search" className="form-control" value={searchQuery} onChange={onChange} />
        </div>
    )
}

export default Search;