import React, { useEffect, useState } from 'react';
import Navbar from '../../components/common/Navbar';
import { useParams } from 'react-router-dom';
import SearchItem from './SearchItem';


const SearchPage = () => {

    const { searchQuery } = useParams();

    const [animes, setAnimes] = useState([]);
    const [noResults, setNoResults] = useState(false);
    const [loadMore, setLoadMore] = useState(false);
    const [page, setPage] = useState(2);
    const [loadingMore, setLoadingMore] = useState(false);

    useEffect(() => {
        setAnimes([])

        setNoResults(false)
        setTimeout(() => {
            setNoResults(true)
        }, 5000);

        fetch(`${process.env.REACT_APP_BASEURL}/search-result/${searchQuery}`)
            .then(res => res.json())
            .then(data => {
                if (data['results'].length) {
                    setAnimes(data['results'])
                    setNoResults(false)
                    data['more']? setLoadMore(true) : setLoadMore(false)
                }
            }
            )
            .catch(err => console.log(err));
    }, [searchQuery]);


    const loadMoreAnimes = () => {
        setPage(page + 1)
        setLoadingMore(true)
        setLoadMore(false)
        fetch(`${process.env.REACT_APP_BASEURL}/search-more-results`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("token")}`
            },
            body: JSON.stringify({
                searchQuery,
                page
            })
        })
            .then(res => res.json())
            .then(data => {
                setLoadingMore(false)
                if (data['results'].length) {
                    setAnimes([...animes, ...data['results']])
                    data['more']? setLoadMore(true) : setLoadMore(false)
                } else {
                    setLoadMore(false)
                }
            }
            )
            .catch(err => console.log(err));
    }



    if (!animes.length) {
        return (
            <>
                <Navbar />
                <div className=' h-[40vw] bg-zinc-800  flex flex-col justify-center items-center'>
                    {noResults ? <h1 className='text-white text-xl'>No results found for "{searchQuery}"</h1> : (
                        <>
                            <button className="btn loading normal-case">Searching for  "{searchQuery}"  ...</button>
                            <h3 className='py-5 text-gray-400'>It may take a while please be patient</h3>
                        </>
                    )}
                </div>
            </>
        )
    }

    return (
        <div className='bg-zinc-800'>
            <Navbar />
            <div className='w-5/6 mx-auto pb-10'>
                <h1 className='py-5 text-2xl font-semibold text-white'>Search results for "{searchQuery}"</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 cursor-pointer'>
                    {animes.map(anime => {
                        let id_name = anime.id; // "/anime/kaginado-season-2"
                        // replace /anime/ to ""
                        id_name = id_name.replace('anime/', '');
                        return <SearchItem id_name={id_name} anime={anime} />
                    })}
                </div>
                <br/><br/>
                {loadingMore ? <button className="btn loading normal-case">Loading more results ...</button> : (null)}
                {loadMore && <button onClick={loadMoreAnimes} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">Show more</button>}
            </div>

        </div>
    );
};

export default SearchPage;