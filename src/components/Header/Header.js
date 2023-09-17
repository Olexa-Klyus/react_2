import {Link} from "react-router-dom";

import "./Header.css";

const Header = () => {
    return (
        <div className="main_navbar">
            <div className="site_name">
                site name
            </div>
            <div className="all_navbar_links">
                {/*<Link to={`${urls.films.all}`} className="navbar_button">movies</Link>*/}
                <Link to={"movies"} className="navbar_button">Movies</Link>
                {/*<Link to={`${urls.genres.base}`} className="navbar_button">genres</Link>*/}
                <Link to={"genres"} className="navbar_button">Genres</Link>
                <Link to={"search"} className="navbar_button">Search</Link>
            </div>
            <div className="theme_switcher">
                <div>
                    theme name
                </div>
                <div>
                    switcher button
                </div>
            </div>
            <div>
                <div className="user_navbar">
                    <div>
                        user logo
                    </div>
                    <div>
                        user name
                    </div>
                </div>
            </div>
        </div>
    );
};

export {Header};