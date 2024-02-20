import { faHeart, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import ImageLoading from './Image';

const ReviewsCard = (props) => {
    const backendUrl = import.meta.env.VITE_IMAGE_BACKEND_URL;
    const [feedback ,setFeedback]=useState(props.data)
    const [str ,setStr]=useState([])

        for (var i=0 ;i<feedback.rating;i++){
            if(str.length<feedback.rating-1){
                 str.push(i)
            }else{
                break
            }
           
        }
  


  return (
    <div className='ms-4 w-100 d-flex flex-column align-items-center mt-3 ' style={{borderTop:"2px" ,borderTopStyle:"solid",borderTopColor:"silver"}}>
    <div className='mt-4 w-100 ms-4'>
        {
            str.map((e)=>(
                <FontAwesomeIcon icon={faStar}/>
            ))
        }
    <FontAwesomeIcon icon={faStar}/>
    </div>
    <p className='w-100'>{feedback.reviews}</p>
    <Link className='d-flex flex-row align-items-center justify-content-start w-100 mt-3 text-secondary '>
    <ImageLoading
    path={`${backendUrl}${feedback.user.image}`}
    w={50}
    h={50}
    rounded={true}
    />
    <small className='ms-2'>{feedback.user.first_name} {feedback.user.last_name}</small>
    </Link>
    </div>
  )
}

export default ReviewsCard
