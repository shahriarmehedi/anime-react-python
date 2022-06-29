import React from 'react';
import Navbar from '../components/common/Navbar';

const Login = () => {
    return (
        <div className='bg-zinc-800'>
            <Navbar />
            <div class="w-5/6 lg:w-2/6 md:w-1/2 mx-auto bg-zinc-700 bg-opacity-50 rounded-lg p-8 flex flex-col mt-28">
                <h2 class="text-white text-lg font-medium title-font mb-5">Login</h2>

                <div class="relative mb-4">
                    <label for="email" class="leading-7 text-sm text-gray-400">Email</label>
                    <input type="email" id="email" name="email" class="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-blue-900 rounded border border-gray-600 focus:border-blue-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <div class="relative mb-4">
                    <label for="password" class="leading-7 text-sm text-gray-400">Password</label>
                    <input type="password" id="password" name="password" class="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-blue-900 rounded border border-gray-600 focus:border-blue-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>

                <button class="text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">Login</button>
                <p class="text-xs mt-3">Literally you probably haven't heard of them jean shorts.</p>
            </div>
            <div className='h-28 bg-zinc-800'>

            </div>
        </div>
    );
};

export default Login;