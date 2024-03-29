import React, { useState } from 'react';
import Navbar from '../components/common/Navbar';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

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
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Successfully created account',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        window.history.back();
                    }
                })
                .catch(err => console.log(err));
        }
    }

    return (
        <div>
            <Navbar />
            <section className="text-gray-400 bg-zinc-800 body-font">
                <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
                    <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                        <h1 className="title-font font-medium text-3xl text-white">Slow-carb next level shoindxgoitch ethical authentic, poko scenester</h1>
                        <p className="leading-relaxed mt-4">Poke slow-carb mixtape knausgaard, typewriter street art gentrify hammock starladder roathse. Craies vegan tousled etsy austin.</p>
                    </div>
                    <div className="lg:w-2/6 md:w-1/2 bg-zinc-700 bg-opacity-50 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                        <h2 className="text-white text-lg font-medium title-font mb-5">Sign Up</h2>
                        {error && <li className="text-red-500 text-sm">{error}</li>}
                        <div className="relative mb-4">
                            <label for="full-name" className="leading-7 text-sm text-gray-400">Username</label>
                            <input onChange={(e) => setSignupData({ ...signupData, username: e.target.value })} type="text" id="full-name" name="full-name" className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-blue-900 rounded border border-gray-600 focus:border-blue-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4">
                            <label for="email" className="leading-7 text-sm text-gray-400">Email</label>
                            <input onChange={(e) => setSignupData({ ...signupData, email: e.target.value })} type="email" id="email" name="email" className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-blue-900 rounded border border-gray-600 focus:border-blue-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4">
                            <label for="password" className="leading-7 text-sm text-gray-400">Password</label>
                            <input onChange={(e) => setSignupData({ ...signupData, password: e.target.value })} type="password" id="password" name="password" className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-blue-900 rounded border border-gray-600 focus:border-blue-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4">
                            <label for="password2" className="leading-7 text-sm text-gray-400">Retype password</label>
                            <input onChange={(e) => setSignupData({ ...signupData, confirmPassword: e.target.value })} type="password" id="password2" name="password2" className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-blue-900 rounded border border-gray-600 focus:border-blue-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        {loading ? <button className="btn loading">loading...</button> : <button onClick={createAccount} className="text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">Create an account</button>}
                        <p className="text-xs mt-3">Already have an account? <Link to="/login" className="underline text-blue-500" >Log in</Link> here.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Signup;