import { useState } from "react";
import { useHistory } from "react-router";
import useFetch from "./useFetch";
const Create = (props) => {


    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("Mario");
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();
    const { data: blogs, isPending: pending, error } = useFetch("http://localhost:8000/blogs/" + props.editId);

   
    const handleEdit=()=>{

                props.setEditId(-1)
                setTitle(blogs.title)
                setBody(blogs.body)
                setAuthor(blogs.author)
                
                console.log(title)
                console.log(body)
                console.log(author)
               
    }

    console.log(props.editId)

    const handelSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };

        setIsPending(true);


        let method = "POST";


        fetch('http://localhost:8000/blogs', {
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


            
            {props.editId >= 0 && <h2>Loading...</h2>}
            {props.editId >= 0 && blogs && handleEdit()}
            {props.editId < 0 && (<div>

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
                    {!isPending && <button type="submit">Add Blog</button>}
                    {isPending && <button disabled >Adding blog</button>}
                </form>
            </div>)}

        </div>
    );
}

export default Create;