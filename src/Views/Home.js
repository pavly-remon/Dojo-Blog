import BlogTile from "../Components/BlogTile";
import useFetch from "../utils/useFetch";
import $ from "jquery";

const Home = () => {
    const {data: blogs, isLoading, error} = useFetch("http://localhost:8000/blogs");
    // const [blogs, setBlogs] = useState(data)
    const toggleVisibility = () => {
        $("#all-blogs").toggleClass("active")
        $("#blog-list").slideToggle();
    }


    const handleDelete = (id) => {
        fetch("http://localhost:8000/blogs/" + id, {
            method: "DELETE",
        }).then(() => {
            // setBlogs(blogs.filter(b => b.id !== id));
        })
    }

    return (
        <div className="Home flex flex-col items-start-start w-[50%] mb-5">
            <h1 id="all-blogs" className="active text-left text-2xl font-bold mb-5" onClick={toggleVisibility}>All
                Blogs</h1>
            <div id="blog-list">
                {error && <div>{error}</div>}
                {isLoading && <div>Loading...</div>}
                {
                    blogs && <div className="flex flex-col justify-center items-center">
                        {
                            blogs.map((blog, index) => (
                                    <BlogTile
                                        key={index}
                                        blogIndex={index}
                                        blog={blog}
                                        deleteFn={() => {
                                            handleDelete(blog.id)
                                        }}
                                    />
                                )
                            )
                        }
                    </div>
                }
            </div>
        </div>
    );
}


export default Home;