import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { axiosClient } from '../api/axios'
import { Link, useNavigate } from 'react-router-dom'
import {useUserContext} from "../providers/UserProvider"
import womens from "../assets/women.png"
import men from "../assets/men.png"
import hoodie from "../assets/hoodie.png"
import tshirt from "../assets/tshirt.png"
import shipping from "../assets/shipping.svg"
import payment from "../assets/payment.svg"
import Return from "../assets/return.svg"
import support from "../assets/support.svg"
import Spinner from '../spinners/Spinner'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile } from '@fortawesome/free-solid-svg-icons'


const Dashboard = () => {
    const [imageLoading1 ,setImageLoading1]=useState(true)
    const [imageLoading2 ,setImageLoading2]=useState(true)
    const [imageLoading3 ,setImageLoading3]=useState(true)
    const [imageLoading4 ,setImageLoading4]=useState(true)
    const navigate =useNavigate()
    const [data ,setData]=useState({});
    const [login ,setLogin]=useState('false')
    const {user}=useUserContext()


    useEffect(()=>{
       
        checkAuthentication()
    },[])

    const fetchUser=async ()=>{
        const user = await axiosClient.get("/api/dashboard");
        setData(user)
        console.log(data)
    }


const checkAuthentication = async () => {
    try {
        const response = await axiosClient.get('/api/dashboard');
        console.log(response.data);
        setLogin(true)
    } catch (error) {
        if (error.response) {

            console.error('Response Error:', error.response.data);
            console.error('Status Code:', error.response.status);
            console.error('Headers:', error.response.headers);
        } else if (error.request) {

            console.error('Request Error:', error.request);
        } else {

            console.error('General Error:', error.message);
        }
        navigate('/login')

    }
};




   if (login === true){

      return (
    <div className='container'>
      <>
      <h3 className=' p-1 text-center text-dark'>

       {
        Object.keys(user).length>0?(
            <>
            Welcome 
            <span style={{fontWeight:"bold"}}> {user.first_name} {user.last_name} <FontAwesomeIcon className='ms-2 me-2 text-secondary' icon={faSmile}/></span>
            Explore our latest styles
           <hr/>
            </>
        ):(
""
        )
       } 
      </h3>
    
    <div className='container'>
     <div className='row'>
       <Link className='col-lg-3 col-md-3 col-sm-6 mb-3' style={{textDecorationLine:"none" }}  to={'/women'}> 
           <div  style={{width:"100%",height:"auto" ,overflow:"hidden"}}>

           {imageLoading1 && (
               <div className="mb-4 d-flex align-items-center justify-content-center "style={{width:"100%" ,height:"380px" ,background:"rgba(172, 173, 173, 0.8)"}}>
               <div >
                  <Spinner/>
               </div>
               
               </div>
           )}


           <img src={womens}
            style={{ display: imageLoading1 ? 'none' : 'block' }}
            onLoad={()=>{setImageLoading1(false)}}
           className='img-fluid zoom-img'
            alt='women clothing'/>
           </div>

           <h3  className='text-center  pt-2  fs-4' style={{fontWeight:"bold" ,color:"rgb(45, 45, 104)" }}>Women's Clothing</h3>
       </Link>

       <Link className='col-lg-3 col-md-3 col-sm-6 mb-3' style={{textDecorationLine:"none" }}  to={'/men'}> 
           <div style={{width:"100%",height:"auto" ,overflow:"hidden"}}>

           {imageLoading2 && (
               <div className="mb-4 d-flex align-items-center justify-content-center "style={{width:"100%" ,height:"380px" ,background:"rgba(172, 173, 173, 0.8)"}}>
               <div >
                  <Spinner/>
               </div>
               
               </div>
           )}
           <img src={men} 
             style={{ display: imageLoading2 ? 'none' : 'block' }}
             onLoad={()=>{setImageLoading2(false)}}
              className='img-fluid zoom-img' alt='Mens clothing'/>
           </div>
           <h3  className='text-center  pt-2  fs-4' style={{fontWeight:"bold" ,color:"rgb(45, 45, 104)" }}>Mens's Clothing</h3>
       </Link>

       <Link className='col-lg-3 col-md-3 col-sm-6 mb-3' style={{textDecorationLine:"none" }}  to={'/tshirts'}> 
           <div style={{width:"100%",height:"auto" ,overflow:"hidden"}}>

           {imageLoading3 && (
               <div className="mb-4 d-flex align-items-center justify-content-center "style={{width:"100%" ,height:"380px" ,background:"rgba(172, 173, 173, 0.8)"}}>
               <div >
                  <Spinner/>
               </div>
               
               </div>
           )}
           <img src={tshirt} 
             style={{ display: imageLoading3 ? 'none' : 'block' }}
             onLoad={()=>{setImageLoading3(false)}}
              className='img-fluid zoom-img' alt='women clothing'/>
           </div>
           <h3  className='text-center  pt-2  fs-4' style={{fontWeight:"bold" ,color:"rgb(45, 45, 104)" }}>T-shirts and Tops</h3>
       </Link>

       <Link className='col-lg-3 col-md-3 col-sm-6 mb-3' style={{textDecorationLine:"none" }}  to={'/hoodies'}> 
           <div style={{width:"100%",height:"auto" ,overflow:"hidden"}}>

           {imageLoading4 && (
               <div className="mb-4 d-flex align-items-center justify-content-center "style={{width:"100%" ,height:"380px" ,background:"rgba(172, 173, 173, 0.8)"}}>
               <div >
                  <Spinner/>
               </div>
               
               </div>
           )}
           <img src={hoodie} 
             style={{ display: imageLoading4 ? 'none' : 'block' }}
             onLoad={()=>{setImageLoading4(false)}}
              className='img-fluid zoom-img' alt='women clothing'/>
           </div>
           <h3  className='text-center  pt-2  fs-4' style={{fontWeight:"bold" ,color:"rgb(45, 45, 104)"}}>Hoodies & Sweatshirts</h3>
       </Link>
     </div>
     
   </div>

   <div className='container-fluid  mt-4  p-4' style={{background:"rgb(202, 199, 199)"}}>
       <div className='row'>
           <div className='card col-lg-10 col-md-10 col-sm-10 mx-auto '>
               <div className='row'>

           <div className='col-lg-3 d-flex flex-column align-items-center justify-content-center mb-4 pt-3 mt-3'>
               <img src={shipping} className='img-fluid  '  style={{marginTop:"50px"}} width={100} height={100}  alt='worldwide shiping'/>
               <h4 className='mt-2'>Worldwide Shiping</h4>
               <p className=' text-center text-secondary  ' style={{width:"90%"}}>
               Global reach, your way. Explore our worldwide shipping options, available in both Standard 
               and Express delivery for your convenience
               </p>
           </div>

           <div className='col-lg-3 d-flex flex-column align-items-center justify-content-center mb-4 pt-3'>
           <img src={payment}className='img-fluid ' style={{marginTop:"50px"}} width={100} height={100} alt='worldwide shiping'/>
               <h4 className='mt-3'>Secure Payments</h4>
               <p className=' text-center text-secondary' style={{width:"90%"}}>
               Shop with confidence! Enjoy 100% secure payments protected by 256-bit SSL 
               Encryption for a safe and worry-free shopping experience
               </p>
           </div>

           <div className='col-lg-3 d-flex flex-column align-items-center justify-content-center mb-4 pt-3'>
           <img src={Return} className='img-fluid '  style={{marginTop:"30px"}} width={100} height={100}  alt='worldwide shiping'/>
               <h4 className='mt-3'>Free Return</h4>
               <p className=' text-center text-secondary' style={{width:"90%"}}>
               Shop stress-free with our Free Return policy. Enjoy the flexibility of
                exchanges or a money-back guarantee on all orders
               </p>
           </div>

           <div className='col-lg-3 d-flex flex-column  align-items-center justify-content-center mb-4 pt-3'>
           <img src={support} className='img-fluid ' style={{marginTop:"30px"}} width={100} height={100}  alt='worldwide shiping'/>
               <h4 className='mt-3'>Local Support</h4>
               <p className=' text-center text-secondary' style={{width:"90%"}}>
               Feel supported around the clock! Benefit from our 24/7 dedicated local 
               support for any assistance you may need
               </p>
           </div>
               </div>
          
           </div>

       </div>
     </div>
   </>
    </div>
  )
   }

}

export default Dashboard
