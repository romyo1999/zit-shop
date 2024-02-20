import { faCoffee, faPaperPlane, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { useFavoritContext } from '../providers/FavoritProvider'
import { Link } from 'react-router-dom'
import { axiosClient2 } from '../api/axios2'
import { Spinner } from 'react-bootstrap'
const Reviews = () => {
  const {product_id}=useFavoritContext();
  const [reviews ,setReviews]=useState('good Product');
  const [rating ,setRating]=useState(1);
  const [start1,setStar1]=useState(true);
  const [start2,setStar2]=useState(false);
  const [start3,setStar3]=useState(false);
  const [start4,setStar4]=useState(false);
  const [start5,setStar5]=useState(false);
  const [loading,setLoading]=useState(false)
  const [thanks ,setThanks]=useState(false)

  

  function handleRating(e){
    if(e===true){
      setRating(rating-1)
    }else{
      setRating(rating+1)
    }
    console.log(rating)
  }


  const sendFeedback=async()=>{
    setLoading(true)
    const DATA={
      "rating":rating,
      'reviews':reviews
    }
    console.log(DATA)
      const response=await axiosClient2.post(`/api/feedback/${product_id}`,DATA);
      console.log(response)
      setLoading(false)
      setThanks(true)
  }


  if(product_id===""){

    return(
      <div className='container '>
        <div className='w-100 h-100 d-flex flex-column align-items-center justify-content-center'>
        <h2 className='mt-4 text-secondary'>Nothing Here !</h2>
        <div className=' d-flex mt-4 align-items-center justify-content(center'>
          <Link style={{fontWeight:"bold",width:"110px"}} className='btn btn-secondary fs-6 me-3' to={"/"}>Home</Link>
          <Link style={{fontWeight:"bold",width:"110px"}} className='btn btn-primary fs-6 ms-3' to={"/myorders"}>My Orders</Link>
        </div>
        </div>
      </div>
    )
  }else{
  return (
    <div className='container d-flex flex-column align-items-center justify-content-center '>

      {
        thanks?(
        <div  className='mt-4 d-flex flex-column align-items-center'>
        {
          rating<=2?(
            <h3 style={{fontWeight:'bold',marginTop:'60px' ,borderBottom:"2px" ,borderBottomStyle:"solid" ,borderBottomColor:'gray'}}>"We're sorry to hear about the issue you experienced. Our team is working to address it. Thank you for bringing it to our attention</h3>
          ):(
            <h3 style={{fontWeight:'bold',marginTop:'60px' ,borderBottom:"2px" ,borderBottomStyle:"solid" ,borderBottomColor:'gray'}}>
              {
                rating>=4?(
                    <>Thank you for your positive feedback! We're thrilled to hear that you had a great experience</>
                ):(
                  <>Thank you for sharing your feedback with us! We appreciate your input</>
                )
              }
            
            
            </h3>
          )
        }
        
        <div>
        <Link style={{width:'120px'}} className='btn btn-secondary me-2 mt-4' to={'/contact'}>Contact Us</Link>
        <Link style={{width:'120px'}} className='btn btn-dark ms-2 mt-4' to={'/myorders'}>My Orders</Link>
        </div>
        </div>
        ):(
          <>
                <h3 style={{fontWeight:'bold',marginTop:'60px' ,borderBottom:"2px" ,borderBottomStyle:"solid" ,borderBottomColor:'gray'}}>Your feedback matters! Please share your thoughts with us. 🌟</h3>

        <div className='d-flex align-items-center justify-center'>

            <FontAwesomeIcon  onClick={()=>{handleRating(start1)  ;setStar1(!start1)}} className='me-3' style={{color:rating>=1?'black':'rgb(155, 152, 152)' ,fontSize:'60px',cursor:"pointer"}} icon={faStar}/>
            <FontAwesomeIcon onClick={()=>{handleRating(start2)  ;setStar2(!start2)}} className='ms-3' style={{color:rating>=2?'black':'rgb(155, 152, 152)' ,fontSize:'60px',cursor:"pointer"}} icon={faStar}/>
            <FontAwesomeIcon onClick={()=>{handleRating(start3)  ;setStar3(!start3)}} className='ms-3' style={{color:rating>=3?'black':'rgb(155, 152, 152)' ,fontSize:'60px',cursor:"pointer"}} icon={faStar}/>
            <FontAwesomeIcon  onClick={()=>{handleRating(start4)  ;setStar4(!start4)}} className='ms-3' style={{color:rating>=4?'black':'rgb(155, 152, 152)' ,fontSize:'60px',cursor:"pointer"}} icon={faStar}/>
            <FontAwesomeIcon  onClick={()=>{handleRating(start5)  ;setStar5(!start5)}} className='ms-3' style={{color:rating>=5?'black':'rgb(155, 152, 152)' ,fontSize:'60px',cursor:"pointer"}} icon={faStar}/>
        </div>
        <textarea onChange={(e)=>setReviews(e.target.value)} className='mt-4 reviews-input' placeholder='     E n t r e     y o u r      R e v i e w s.....' ></textarea>
        <button  disabled={loading?true:false}  style={{width:"100px"}} onClick={sendFeedback} className='btn btn-primary mt-4 fs-5'>
          {
            loading?(
              <Spinner style={{width:'15px',height:"15px"}}/>
            ):(
              <>
              send  <FontAwesomeIcon icon={faPaperPlane }/>
              </>
            )
          }
        </button>
          </>
        )
      }

    

    </div>
  )
  }

}

export default Reviews
