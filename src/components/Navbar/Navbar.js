import {Link, useLocation} from "react-router-dom";
import {AppRoutes} from "../../Routing/AppRoutes";


const Navbar = () => {
    const links = [
        {
            path: AppRoutes.MAIN,
            label: "Main"
        },
        {
            path: AppRoutes.CARS,
            label: "Cars"
        },
        {
            path: AppRoutes.POSTS,
            label: "Posts"
        },
        {
            path: AppRoutes.COMMENTS,
            label: "Comments"
        },
    ];

    const {pathname} = useLocation();

    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            backgroundColor: "blueviolet",
            color: "white",
            height: 70,
            fontFamily: "Roboto",
            fontSize: 25,
        }}>

            {links.map((link) => (
                <Link to={link.path} key={link.path} style={{color: link.path === pathname ? "white" : "lime"}}>
                    {link.label}
                </Link>
            ))}
        </div>);
};

export default Navbar;