import {Link, useLocation} from "react-router-dom";
import {AppRoutes} from "../../Routing/AppRoutes";


const Navbar = () => {
    const links = [
        {
            path: AppRoutes.MAIN,
            label: "Main"
        },
        {
            path: AppRoutes.TODOS,
            label: "Todos"
        },
        {
            path: AppRoutes.ALBUMS,
            label: "Albums"
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
            height: 60,
            fontFamily: "Roboto",
            fontSize: 20,
        }}>

            {links.map((link) => (
                <Link to={link.path} style={{color: link.path === pathname ? "white" : "lime"}}>
                    {link.label}
                </Link>
            ))}
        </div>);
};

export default Navbar;