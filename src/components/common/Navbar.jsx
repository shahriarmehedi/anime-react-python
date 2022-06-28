import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {



    return (
        <>
            <nav className=" bg-base-100">
                <div className="navbar flex justify-between w-5/6 mx-auto">
                    <div className="">
                        <a className="btn btn-ghost normal-case text-xl">Anime</a>
                        <div className='flex ml-10'>
                            <NavLink to='/' className="btn btn-ghost">
                                <div className='px-4 cursor-pointer'>
                                    <h3 className='text-gray-400'>Home</h3>
                                </div>
                            </NavLink>


                        </div>
                    </div>
                    <div className=" gap-2">
                        <div className="form-control">
                            <input type="text" placeholder="Search" className="input input-bordered" />
                        </div>
                        <div className="dropdown dropdown-end">
                            <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src="https://api.lorem.space/image/face?hash=33791" />
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