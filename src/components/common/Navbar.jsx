import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {



    return (
        <>
            <nav className=" bg-base-100">
                <div className="navbar flex justify-between px-2 lg:px-28">
                    <div className="">
                        <NavLink
                            to='/'
                            className="btn btn-ghost normal-case text-xl">
                            Anime
                        </NavLink>

                    </div>
                    <div className="gap-1">
                        <div className="form-control">
                            <input type="text" placeholder="Search" className="input input-bordered w-32" />
                        </div>
                        <div className="dropdown dropdown-end">
                            <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img className='' src="https://api.lorem.space/image/face?hash=33791" />
                                </div>
                            </label>
                            <ul tabIndex="0" className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                <li>
                                    <a className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li><a>Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;