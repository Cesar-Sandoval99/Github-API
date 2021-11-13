import React from "react";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className="h-20 bg-blueDark text-yellow flex justify-center items-center p-4 text-3xl">
            <Link to={"/"}><h1>Github Users</h1></Link>
           
        </header>
    )

}


export default Header;