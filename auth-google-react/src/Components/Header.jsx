import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className={"w-full h-auto flex m-auto"}>
            <div className={"max-w-[1200px] flex m-auto"}>
                    <NavLink className={"px-4 py-6"} to={"/main"}>Main</NavLink>
                    <NavLink className={"px-4 py-6"} to={"/logout"}>LogOut</NavLink>
                    <NavLink className={"px-4 py-6"} to={"/signin"}>SignIn</NavLink>
                    <NavLink className={"px-4 py-6"} to={"/account"}>Account</NavLink>
            </div>
        </div>
    );
};

export default Header;