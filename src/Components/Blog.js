import 'material-icons/iconfont/material-icons.css';
// const Blog = ({propName1,propName2}) => {
const Blog = ({blog, onClick, deleteFn}) => {

    return (
        <div className="flex justify-between items-center w-[70%] m-2 p-5 rounded-lg bg-gray-50 transition duration-300
            hover:shadow-lg hover:ease-in">
            <div
                className="flex flex-col items-start"
                key={blog.id} onClick={onClick}>
                <p className="text-red-500 text-lg font-semibold">{blog.title}</p>
                <p className="text-gray-400">Written By {blog.author}</p>
            </div>
            <span className="material-icons-round text-red-600 bg-white rounded-3xl p-2 cursor-pointer" onClick={deleteFn}>delete</span>
        </div>
    );
}

export default Blog;