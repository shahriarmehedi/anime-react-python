import React from 'react'
import animeuser from '../../assets/images/animeuser.png';

export default function Comment(props) {
  return (
    <div className='bg-zinc-700 rounded-md flex items-center my-3 py-3'>
        <div className="avatar">
            <div className=" w-7 lg:w-14 mx-2 rounded-full">
                <img src={animeuser} alt="" />
            </div>
        </div>
        <div className='mx-3'>
            <h4 className='font-bold text-lg'>{props.data.user.username}</h4>
            <p>{props.data.comment}</p>
        </div>
    </div>
  )
}
