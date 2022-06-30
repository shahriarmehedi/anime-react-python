import React, { useState, useEffect } from 'react';
import Navbar from '../../components/common/Navbar';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Comment from './Comment';
import animeuser from '../../assets/images/animeuser.png';

const Episodes = () => {

    useEffect(() => {
        const backToTop = () => {
            window.scrollTo({
                top: 0
            });
        }
        backToTop();
    }, []);

    const { episodeId } = useParams();

    const [nextEpisode, setNextEpisode] = useState("");
    const [viseoServers, setViseoServers] = useState([]);
    const [comments, setComments] = useState([]);
    const [myComment, setMyComment] = useState("");


    useEffect(() => {
        fetch(`${process.env.REACT_APP_BASEURL}/episode-info/${episodeId}`)
            .then(res => res.json())
            .then(data => {
                if (data['video_servers'].length) {
                    setViseoServers(data['video_servers']);
                }
            })
            .catch(err => console.log(err));
    }, [episodeId]);

    let episodeTitle = episodeId.split('-')
    const episodeNumber = episodeTitle[episodeTitle.length - 1];
    episodeTitle.pop();
    // if 'slash' is in the title, remove the 1st and 2nd item
    if (episodeTitle.includes('slash')) {
        episodeTitle.shift();
        episodeTitle.shift();
    }
    episodeTitle = episodeTitle.join(' ');
    episodeTitle = episodeTitle.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });


    useEffect(() => {
        fetch(`${process.env.REACT_APP_BASEURL}/next-episode`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                anime_title: episodeTitle,
                episode_number: episodeNumber
            })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data['next_episode']) {
                    const nextEpisode = data['next_episode']['id'].replace(/\//g, '-slash-')
                    setNextEpisode(nextEpisode);
                } else {
                    setNextEpisode("");
                }
            })
            .catch(err => console.log(err));
    }, [episodeTitle, episodeNumber]);


    useEffect(() => {
        fetch(`${process.env.REACT_APP_BASEURL}/get-comments/${episodeId}`)
            .then(res => res.json())
            .then(data => {
                setComments(data);
            })
            .catch(err => console.log(err));
    }, [episodeId]);
    

    const addComment = () => {
        const token = localStorage.getItem('token');
        console.log(token);
        if (!token) {
            alert("You must be logged in to comment");
            return;
        } else if (myComment === "") {
            return;
        }

        fetch(`${process.env.REACT_APP_BASEURL}/add-comment`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`

            },
            body: JSON.stringify({
                anime_id: episodeId,
                comment: myComment
            })
        })
            .then(res => res.json())
            .then(data => {
                if (data['success']) {
                    setComments(data['comments']);
                    setMyComment("");
                }
            })
            .catch(err => console.log(err));
    }


    return (
        <div className='bg-zinc-800'>
            <Navbar />
            <div className='w-5/6 mx-auto '>
                <h1 className='lg:px-5 pt-5 text-2xl font-bold text-white'>{episodeTitle}</h1>
                <h1 className='lg:px-5 py-2'>Episodes no. {episodeNumber}</h1>
                <div className='flex flex-col lg:flex-row'>
                    <div className=' lg:w-[70%] mx-auto lg:px-5 lg:mr-5 pt-5'>
                        {
                            viseoServers.length ?
                                <Tabs>
                                    <TabList>
                                        {viseoServers[0]?.map((server, index) => {
                                            return (
                                                <Tab key={index}>{server.title}</Tab>
                                            )
                                        })}
                                    </TabList>


                                    {viseoServers[0]?.map((server, index) => {
                                        return (
                                            <TabPanel key={index}>
                                                <div className="relative pt-[56%]">
                                                    <iframe allowFullScreen className="absolute inset-0 w-full h-full" src={server.code} frameBorder="0" title="1"></iframe>
                                                </div>
                                            </TabPanel>
                                        )
                                    })}

                                </Tabs>
                                :
                                <div className='min-h-[35vw] bg-zinc-800 flex justify-center items-center'>
                                    <button className="btn loading">loading...</button>
                                </div>
                        }

                        <div className='flex justify-end'>
                            {nextEpisode ? (
                                <Link to={`/episodes/${nextEpisode}`}>
                                    <button onClick={() => setViseoServers([])} className='bg-green-500 text-white px-5 py-2 rounded mt-5 text-right'>Next episode <i className="bi bi-arrow-right-circle-fill"></i> </button>
                                </Link>
                            ) : (
                                <button className='cursor-not-allowed bg-gray-500 text-white px-5 py-2 rounded mt-5 text-right'>Next episode <i className="bi bi-arrow-right-circle-fill"></i> </button>
                            )}

                        </div>
                    </div>
                    <div className='lg:w-[30%] mx-auto mt-16'>
                        <img src="https://images-na.ssl-images-amazon.com/images/I/91QEHqpNzML._SL500_.png" alt="" />

                    </div>
                </div>

                {/* --------------  C O M M E N T   S E C T I O N  ----------- */}

                <h3 className='py-5 lg:px-3 text-2xl font-bold text-white'>Comments</h3>



                <div className='flex flex-col lg:flex-row'>
                    <div className='bg-zinc-700 rounded-md px-2 py-5 mb-10 lg:px-3 lg:py-5 lg:w-[65%] mx-auto'>

                        {/* --------------ALL COMMENTS----------- */}

                        {comments?.map((comment, index) => {
                            return (<Comment key={index} data={comment} />)
                        })}


                        {/* ------------WRITE NEW COMMENTS---------- */}

                        <div className='flex items-center'>
                            <div className="avatar">
                                <div className=" w-7 lg:w-14 mx-2 rounded-full">
                                    <img src={animeuser} alt="" />
                                </div>
                            </div>
                            <textarea value={myComment} onChange={(e)=> setMyComment(e.target.value)} className="textarea w-full mx-3" placeholder="Write your comment here"></textarea>

                        </div>
                        <div className='flex justify-end mr-3'>
                            <button onClick={addComment} type='button' className='bg-sky-500 text-white px-5 py-2 rounded mt-5 text-right'>Comment</button>
                        </div>
                    </div>
                    <div className='w-5/6  lg:w-[30%] mx-auto '>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Episodes;