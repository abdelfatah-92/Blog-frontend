import {useEffect} from "react";
import blog from "../service/blog";
const Delete = ({blogs, setBlogs}) => { 
  useEffect(() => {
    blog.getAll().then(mm => {
      setBlogs(mm)
    }, [])
  }) 
  const deleteblog = async id => {
    const foundblog = blogs.find(p => p.id === id);
    if (window.confirm(`Delete this blog`)){
      try {
        await blog.remove(foundblog.id)
        setBlogs(blogs.filter(m => foundblog.id !== m.id))
      } catch (error) {
        console.log(error)
      }
    }
  };
    return(
        <div>
            <h2>Blog title list</h2>
            <ul>
              {blogs.map(blog => (
                <li key={blog.id}>
                  <p className="title"><label className="title" htmlFor="title">Title:</label> {blog.title}</p>
                  <div><label htmlFor="author">Author:</label> {blog.author}</div>
                  <div><label htmlFor="url">Link:</label> <a href={blog.url}>{blog.url}</a></div>
                  <div><label htmlFor="likes">Likes:</label> {blog.likes}</div>
                  <button onClick={() => deleteblog(blog.id)}>Delete</button>
                </li>
              ))}
           </ul>

        </div>
    )
}
export default Delete