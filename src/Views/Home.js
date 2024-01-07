import Blog from "../Components/Blog";
import useFetch from "../utils/useFetch";

const Home = () => {
    const {data: blogs, isLoading, error} = useFetch("http://localhost:8000/blogs")
    const handleClick = (name) => {
    }
    const handleDelete = (id) => {
        // setBlogs(blogs.filter(b => b.id !== id))
    }
    return (
        <div className="Home">
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            {blogs && <div className="flex flex-col justify-center items-center">
                {blogs.map((blog) => (
                    <Blog blog={blog}
                          onClick={(e) => {
                              handleClick(blog.title)
                          }}
                          deleteFn={(e) => {
                              handleDelete(blog.id)
                          }}
                    />
                ))}
                <button onClick={handleClick} className="bg-amber-300 rounded-md p-2">Click Me</button>
            </div>
            }
        </div>
    )
        ;
}

export default Home;