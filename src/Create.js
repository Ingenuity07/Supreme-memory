import { useState } from "react";
import { useHistory } from "react-router";
import useFetch from "./useFetch";
const Create = (props) => {


    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("Mario");
    const [isPending, setIsPending] = useState(false);
    const [editing,setEditing] = useState(null);
    const history = useHistory();

    const [blogs,setBlogs] = useState(null)


    console.log(props.editId)
    console.log(blogs)

    if(props.editId&&editing===null)
    {
        setEditing(true);
    }
    else if(editing!=null&&(!props.editId))
    setEditing(null);

   
    const handleEdit=()=>{
                setEditing(false);
                setBlogs(props.editId)
                setTitle(props.editId.title)
                setBody(props.editId.body)
                setAuthor(props.editId.author)  
    }


    const handelSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };

        setIsPending(true);

        let req="";
        let method = "POST";
        if(props.editId)
        {
            method="PUT";
            req="/"+props.editId.id;
        }


        fetch('http://localhost:8000/blogs'+req, {
            method: method,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            setIsPending(false);
            history.push('/');
        })

    }
    return (
        <div className="create">

            {editing && handleEdit()}
            {!editing && (<div>

                <h2>Add a New Blog</h2>

                <form onSubmit={handelSubmit}>
                    <label >Add Title</label>
                    <input
                        type="text"
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <label >Add Blog</label>
                    <textarea
                        required
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                    ></textarea>
                    <label >Select Author</label>
                    <select
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    >
                        <option value="Mario">Mario</option>
                        <option value="Luigi">Luigi</option>
                    </select>
                    {props.editId<0 ? <div>
                    {!isPending && <button type="submit">Add Blog</button>}
                    {isPending && <button disabled >Adding blog</button>}
                    </div>:
                    <div>
                    {!isPending && <button type="submit">Update Blog</button>}
                    {isPending && <button disabled >Updatinging blog</button>}
                    </div>}
                </form>
            </div>)}

        </div>
    );
}

export default Create;