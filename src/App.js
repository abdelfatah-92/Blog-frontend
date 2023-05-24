import { useState} from "react";
import Search from "./components/Search";
import Add from "./components/Add";
import Delete from "./components/Delete";
const App = () => {
  const [blogs, setBlogs] = useState([]);
  return (
    <div>
      <Search blogs={blogs}/>
      <Add blogs={blogs} setBlogs={setBlogs}/>
      <Delete blogs={blogs} setBlogs={setBlogs}/>
    </div>
  )
}
export default App
