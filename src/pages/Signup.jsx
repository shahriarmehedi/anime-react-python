import React, { useState } from 'react';
import Navbar from '../components/common/Navbar';
import { Link } from 'react-router-dom';

const Signup = () => {
    const [signupData, setSignupData] = useState({
        username: '',
        password: '',
        confirmPassword: '',
        email: '',
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const createAccount = (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        if (signupData.password !== signupData.confirmPassword) {
            setError('Passwords do not match');
            setLoading(false);
        } else {
            fetch(`${process.env.REACT_APP_BASEURL}/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(signupData)
            })
                .then(res => res.json())
                .then(data => {
                    setLoading(false);
                    if (data.error) {
                        setError(data.error);
                    } else {
                        localStorage.setItem('token', data.token);
                        window.location.href = '/';
                    }
                })
                .catch(err => console.log(err));
        }
    }

    return (
        <div>
            <Navbar />
            <section class="text-gray-400 bg-zinc-800 body-font">
                <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
                    <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                        <h1 class="title-font font-medium text-3xl text-white">Slow-carb next level shoindxgoitch ethical authentic, poko scenester</h1>
                        <p class="leading-relaxed mt-4">Poke slow-carb mixtape knausgaard, typewriter street art gentrify hammock starladder roathse. Craies vegan tousled etsy austin.</p>
                    </div>
                    <div class="lg:w-2/6 md:w-1/2 bg-zinc-700 bg-opacity-50 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                        <h2 class="text-white text-lg font-medium title-font mb-5">Sign Up</h2>
                        {error && <li class="text-red-500 text-sm">{error}</li>}
                        <div class="relative mb-4">
                            <label for="full-name" class="leading-7 text-sm text-gray-400">Username</label>
                            <input onChange={(e) => setSignupData({ ...signupData, username: e.target.value })} type="text" id="full-name" name="full-name" class="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-blue-900 rounded border border-gray-600 focus:border-blue-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div class="relative mb-4">
                            <label for="email" class="leading-7 text-sm text-gray-400">Email</label>
                            <input onChange={(e) => setSignupData({ ...signupData, email: e.target.value })} type="email" id="email" name="email" class="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-blue-900 rounded border border-gray-600 focus:border-blue-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div class="relative mb-4">
                            <label for="password" class="leading-7 text-sm text-gray-400">Password</label>
                            <input onChange={(e) => setSignupData({ ...signupData, password: e.target.value })} type="password" id="password" name="password" class="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-blue-900 rounded border border-gray-600 focus:border-blue-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div class="relative mb-4">
                            <label for="password2" class="leading-7 text-sm text-gray-400">Retype password</label>
                            <input onChange={(e) => setSignupData({ ...signupData, confirmPassword: e.target.value })} type="password" id="password2" name="password2" class="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-blue-900 rounded border border-gray-600 focus:border-blue-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        {loading? <button className="btn loading">loading...</button> : <button onClick={createAccount} class="text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">Create an account</button>}
                        <p class="text-xs mt-3">Already have an account? <Link to="/login" className="underline text-blue-500" >Log in</Link> here.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Signup;