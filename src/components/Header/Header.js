import {Link} from "react-router-dom";

// import {urls} from "../../constants";
import "./Header.css";

const Header = () => {
    return (
            <div className="main_navbar">
                {/*<Link to={`${urls.films.all}`} className="navbar_button">movies</Link>*/}
                <Link to={"movies"} className="navbar_button">movies</Link>
                {/*<Link to={`${urls.genres.base}`} className="navbar_button">genres</Link>*/}
                <Link to={"genres"} className="navbar_button">genres</Link>
                <Link to={"search"} className="navbar_button">search</Link>
            </div>
    );
};

export {Header};