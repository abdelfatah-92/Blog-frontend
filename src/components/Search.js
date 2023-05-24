import { useState } from "react";
const Search = ({blogs}) => {
    const [search, setSearch] = useState([]);
    const [newSearch, setNewSearch] = useState('');

    const searchBlog = (event) => {
        event.preventDefault();
        setSearch(
          blogs.filter((blog) =>
            blog.author.toLowerCase().includes(newSearch.toLowerCase())
          )
        );
    };
    const handleSearchChange = (event) => {
        setNewSearch(event.target.value);
      };
    return (
        <div>
            <h2>Blogs</h2>
            <form onChange={searchBlog} onSubmit={searchBlog}>
             <label htmlFor="search">Search:</label>
             <input id="search" value={newSearch} onChange={handleSearchChange} />
             <button type="submit">Search</button>
            </form>  
            <ul>
             {search.map((blog) => (
                 <li key={blog.id}>
                          <p><label htmlFor="title">Title:</label> {blog.title}</p>
                          <div><label htmlFor="author">Author:</label> {blog.author}</div>
                          <div><label htmlFor="url">Link:</label> <a href={blog.url}>{blog.url}</a></div>
                          <div><label htmlFor="likes">Likes:</label> {blog.likes}</div>
                 </li> ))
             }
            </ul>
        </div>
    )
}
export default Search