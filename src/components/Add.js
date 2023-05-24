import { useState } from "react";
import blog from "../service/blog";
import Notification from "./Notification";
const Add = ({blogs, setBlog}) => {
    const [newTitle, setNewTitle] = useState('');
    const [newAuthor, setNewAuther] = useState('');
    const [newUrl, setNewUrl] = useState('');
    const [newLikes, setNewLikes] = useState('');
    const [message,setMessage] = useState(null)
    const addblog = (event) => {
        event.preventDefault();
        const existBlog = blogs.find((blog) => blog.title.toLowerCase() === newTitle.toLowerCase())
        const newblog = {
          title: newTitle,
          author: newAuthor,
          url : newUrl,
          likes: newLikes,
          id: blogs.length + 1,
        };
        if (existBlog) {
          if(
          window.confirm(`this blog is already added to your phonebook do you want to replace it`)){
            blog
             .ubdate(existBlog.id, newblog)
             .then(returnedData => {                   
              setBlog(blogs.map(n => n.id !== existBlog.id ? n : returnedData))
              
              setMessage(`${newblog.author} blog is ubdated`)
              setTimeout(() => {
                setMessage(null)
              },1000)})
              .catch(() => {
              setMessage(`${newblog.author} blog is deleted from server`)
              setTimeout(() => {
                setMessage(null)
              },1000)})
          }
        } else {    
            blog
             .create(newblog)
             .then(kk => setBlog([...blogs, kk]));
             setMessage(`${newblog.author} blog is added`)
             setTimeout(() => {
              setMessage(null)
             },1000)
        }
        setNewTitle('');
        setNewAuther('');
        setNewUrl('');
        setNewLikes('');
    };
      const handleTitleChange = (event) => {
        setNewTitle(event.target.value);
      };
      const handleAuthorChange = (event) => {
        setNewAuther(event.target.value);
      };
      const handleUrlChange = (event) => {
        setNewUrl(event.target.value);
      };
      const handleLikesChange = (event) => {
        setNewLikes(event.target.value);
      };
    return(
        <div>
            <h2>Add a new blog title</h2>
            <Notification message={message}/>
            <form onSubmit={addblog}>
              <div>
               <label htmlFor="title">Title:</label>
               <input id="title" value={newTitle} onChange={handleTitleChange} type="text" />
              </div>
              <div>
                <label htmlFor="author">Author:</label>
                <input id="author" value={newAuthor} onChange={handleAuthorChange} />
              </div>
              <div>
                <label htmlFor="url">URL:</label>
                <input id="url" value={newUrl} onChange={handleUrlChange} type="url" />
              </div>
              <div>
                <label htmlFor="likes">Likes:</label>
                <input id="likes" value={newLikes} onChange={handleLikesChange} type="number" />
              </div>
              <button type="submit">Add</button>
            </form>
        </div>
    )
}
export default Add