import React from 'react';
import Navbar from '../../components/common/Navbar';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Episodes = () => {


    const comment = () => {
        alert('Comment button is working');

    }


    return (
        <div className='bg-zinc-800'>
            <Navbar />
            <div className='w-5/6 mx-auto '>
                <h1 className='px-5 pt-5 text-2xl font-bold text-white'>Episodes Title</h1>
                <h1 className='px-5 py-2'>Episodes no.</h1>
                <div className='flex'>
                    <div className='w-5/6  lg:w-[70%] mx-auto px-5 mr-5 pt-5'>
                        <Tabs>
                            <TabList>
                                <Tab>Option 1</Tab>
                                <Tab>Option 2</Tab>
                            </TabList>

                            <TabPanel>
                                <div className="relative pt-[56%]">
                                    <iframe allowFullScreen className="absolute inset-0 w-full h-full" src="https://mega.nz/embed#!09Ei3YLT!aYDCqbZ_G62gDnIl5xH1DIkrTZh5T1xsKVLqBGew04M'" frameBorder="0"></iframe>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="relative pt-[56%]">
                                    <iframe allowFullScreen className="absolute inset-0 w-full h-full" src="https://mega.nz/embed#!09Ei3YLT!aYDCqbZ_G62gDnIl5xH1DIkrTZh5T1xsKVLqBGew04M'" frameBorder="0"></iframe>
                                </div>
                            </TabPanel>
                        </Tabs>


                    </div>
                    <div className='w-5/6  lg:w-[30%] mx-auto mt-16'>
                        <img src="https://images-na.ssl-images-amazon.com/images/I/91QEHqpNzML._SL500_.png" alt="" />
                    </div>
                </div>

                {/* --------------  C O M M E N T   S E C T I O N  ----------- */}

                <h3 className='py-5 px-3 text-2xl font-bold text-white'>Comments</h3>



                <div className='flex'>
                    <div className='bg-zinc-700 rounded-md p-3 w-5/6  lg:w-[65%] mx-auto'>

                        {/* --------------ALL COMMENTS----------- */}

                        <div className='bg-zinc-700 rounded-md flex items-center my-3 py-3'>
                            <div class="avatar">
                                <div class="w-14 mx-2 mask mask-squircle">
                                    <img src="https://api.lorem.space/image/face?hash=47449" />
                                </div>
                            </div>
                            <div className='mx-3'>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                        <hr className='border-zinc-600' />
                        <div className='bg-zinc-700 rounded-md flex items-center my-3 py-3'>
                            <div class="avatar">
                                <div class="w-14 mx-2 mask mask-squircle">
                                    <img src="https://api.lorem.space/image/face?hash=47449" />
                                </div>
                            </div>
                            <div className='mx-3'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae odit delectus expedita vel officia et omnis temporibus corrupti maxime ut?</p>
                            </div>
                        </div>




                        {/* ------------WRITE NEW COMMENTS---------- */}

                        <form onSubmit={comment}>
                            <div className='flex items-center'>

                                <div class="avatar">
                                    <div class="w-14 mx-2 mask mask-squircle">
                                        <img src="https://api.lorem.space/image/face?hash=47449" />
                                    </div>
                                </div>
                                <textarea className="textarea w-full mx-3" placeholder="Write your comment here"></textarea>

                            </div>
                            <div className='flex justify-end mr-3'>
                                <button type='submit' className='bg-sky-500 text-white px-5 py-2 rounded mt-5 text-right'>Comment</button>
                            </div>
                        </form>
                    </div>
                    <div className='w-5/6  lg:w-[30%] mx-auto '>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Episodes;