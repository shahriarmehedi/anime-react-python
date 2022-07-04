import React, { useState } from 'react';
import { useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Logo from '../../assets/images/PicsArt_06-29-09.42.02-min.png';
import animeuser from '../../assets/images/animeuser.png';
import Swal from 'sweetalert2';
const Navbar = () => {

    const [loggedIn, setLoggedIn] = useState(false);
    const [search, setSearch] = useState("");

    useEffect(() => {
        if (localStorage.getItem('token')) {
            setLoggedIn(true);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        setLoggedIn(false);
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Succesfully logged out',
            showConfirmButton: false,
            timer: 1500
        })
    }

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
                        <div className="form-control hidden md:block">
                            <div className="input-group">
                                <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search…" className="input input-bordered w-full" />
                                {search ? (
                                    <Link to={`/search-result/${search}`}>
                                        <button className="btn btn-square">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                        </button>
                                    </Link>
                                ) : (
                                    <button className="btn btn-square">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                    </button>
                                )}

                            </div>
                        </div>
                        {loggedIn ? (
                            <div className="dropdown dropdown-end">
                                <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img className='' src={animeuser} alt="" />
                                    </div>
                                </label>
                                <ul tabIndex="0" className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">

                                    <li><a onClick={handleLogout} >Logout</a></li>
                                </ul>
                            </div>
                        ) : (
                            <Link to="/login">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4" >
                                    <span>Login</span>
                                </button>
                            </Link>
                        )}
                    </div>
                </div>
                <div className="form-control w-5/6 mx-auto block md:hidden pb-3">
                    <div className="input-group input-group-xs">
                        <input type="text" placeholder="Search…" className="input  input-bordered w-full" />
                        <button className="btn btn-square">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;