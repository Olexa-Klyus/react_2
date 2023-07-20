import {Link, useLocation} from "react-router-dom";
import {AppRoutes} from "../../Routing/AppRoutes";


const Navbar = () => {
    const links = [
        {
            path: AppRoutes.MAIN,
            label: "Main"
        },
        {
            path: AppRoutes.LOGIN,
            label: "Login"
        },
        {
            path: AppRoutes.USERS,
            label: "Users"
        },
        {
            path: AppRoutes.USERS_INFO,
            label: "Users info"
        },
        {
            path: AppRoutes.USER_ID,
            label: "User id"
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
            height: 40
        }}>
            {/*<Link to={AppRoutes.MAIN}>main</Link>*/}
            {/*// щоб не писати тут мільйон різних кнопок із різними посиланнями, їх можна замапити, а всі посилання винести в масив links (вгорі): */}

            {links.map((link) => (
                <Link to={link.path}
                    // якщо хочемо поміняти колір активної кнопки:
                      style={{color: link.path === pathname ? "white" : "lime"}}>

                    {link.label}
                </Link>
            ))}
        </div>);
};

export default Navbar;