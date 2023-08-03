import {Link, useLocation} from "react-router-dom";

const Navbar = () => {
    const links = [
        {
            path: "/testmemo",
            label: "Test memo"
        },
    ];

    const {pathname} = useLocation();

    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            backgroundColor: "lightgray",
            color: "darkblue",
            height: 70,
            fontFamily: "Roboto",
            fontSize: 25,
        }}>

            {links.map((link) => (
                <Link to={link.path} key={link.path} style={{color: link.path === pathname ? "white" : "darkblue"}}>
                    {link.label}
                </Link>
            ))}
        </div>);
};

export default Navbar;