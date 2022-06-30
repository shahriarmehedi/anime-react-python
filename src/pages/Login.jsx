import React, { useState } from 'react';
import Navbar from '../components/common/Navbar';
import { Link } from 'react-router-dom';

const Login = () => {
    const [loginData, setLoginData] = useState({
        username: '',
        password: ''
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        fetch(`${process.env.REACT_APP_BASEURL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginData)
        })
            .then(res => res.json())
            .then(data => {
                setLoading(false);
                if (data.error) {
                    setError(data.error);
                } else if (data.token) {
                    localStorage.setItem('token', data.token);
                    // go back to previous page
                    window.history.back();
                }
            })
            .catch(err => console.log(err));
    }
    return (
        <div className='bg-zinc-800'>
            <Navbar />
            <div class="w-5/6 lg:w-2/6 md:w-1/2 mx-auto bg-zinc-700 bg-opacity-50 rounded-lg p-8 flex flex-col mt-28">
                <h2 class="text-white text-lg font-medium title-font mb-5">Login</h2>
                {error && <li class="text-red-500 text-sm">{error}</li>}
                <div class="relative mb-4">
                    <label for="email" class="leading-7 text-sm text-gray-400">Username</label>
                    <input onChange={(e)=>setLoginData({...loginData, username: e.target.value})} type="email" id="email" name="email" class="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-blue-900 rounded border border-gray-600 focus:border-blue-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <div class="relative mb-4">
                    <label for="password" class="leading-7 text-sm text-gray-400">Password</label>
                    <input onChange={(e)=>setLoginData({...loginData, password: e.target.value})} type="password" id="password" name="password" class="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-blue-900 rounded border border-gray-600 focus:border-blue-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>

                {loading? <button className="btn loading">loading...</button> : <button onClick={handleLogin} class="text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">Login</button>}
                
                <p class="text-xs mt-3">Don't have an account? <Link to="/signup" className="underline text-blue-500" >Sign up</Link> here.</p>
            </div>
            <div className='h-28 bg-zinc-800'>

            </div>
        </div>
    );
};

export default Login;