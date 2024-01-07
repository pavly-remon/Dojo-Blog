import {Link} from "react-router-dom";

const NavBar = () => {
    const pages = [
        {"tabName": "Home", "to": "/"},
        {"tabName": "About", "to": "/about"},
        {"tabName": "New Blog", "to": "/create"}
    ]
    return (
        <div className="flex justify-start w-[70%]">
            {
                pages.map((page) => (
                    <Link className="tab-item m-2 p-2" to={page.to}>
                        <div key={page.tabName}>{page.tabName}</div>
                    </Link>
                ))
            }
        </div>
    )
}

export default NavBar;