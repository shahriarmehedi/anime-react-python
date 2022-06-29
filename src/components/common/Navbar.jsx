import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/images/PicsArt_06-29-09.42.02-min.png';
const Navbar = () => {



    return (
        <>
            <nav className=" bg-base-100">
                <div className="navbar flex justify-between px-6 lg:px-28">
                    <div className="">
                        <NavLink
                            to='/'
                            className="btn-ghost rounded-md normal-case text-xl">
                            <img className=' h-10 lg:h-14 relative bottom-1 ' src={Logo} alt="" />
                        </NavLink>

                    </div>
                    <div className="gap-1">
                        <div class="form-control hidden md:block">
                            <div class="input-group">
                                <input type="text" placeholder="Search…" class="input input-bordered w-full" />
                                <button class="btn btn-square">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                </button>
                            </div>
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
                <div class="form-control w-5/6 mx-auto block md:hidden pb-3">
                    <div class="input-group input-group-xs">
                        <input type="text" placeholder="Search…" class="input  input-bordered w-full" />
                        <button class="btn btn-square">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;