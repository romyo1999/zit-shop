import React, { useEffect, useState } from 'react'
import { axiosClient2 } from '../api/axios2'
import ImageLoading from '../components/Image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faCheckCircle, faReceipt } from '@fortawesome/free-solid-svg-icons'
import { useFavoritContext } from '../providers/FavoritProvider'
import { useNavigate } from 'react-router-dom'
import { Spinner } from 'react-bootstrap'

const MyOrder = () => {
  const backendUrl = import.meta.env.VITE_IMAGE_BACKEND_URL;
    const [orders,setOrders]=useState([])
    const {setProduct_id}=useFavoritContext()
    const [message,setMessage]=useState('')
    const [Loading,setLoding]=useState(false)
    const navigate=useNavigate()

    useEffect(() => {

        if(orders.length<1){
          const timeoutId = setTimeout(() => {
            setMessage("You don't have any orders yet");
    
          }, 10000);
      
          return () => clearTimeout(timeoutId);
        }
      }, []);


    useEffect(()=>{
        fetchOrders()
    },[])

    const fetchOrders=async()=>{
        setLoding(true)
        try {
            const response=await axiosClient2.get("/api/myorders");
            if(response.status ==="failed"){
                console.error("fetching failed",response.data.message)
            }else{
                console.log('success', response.data);
                setOrders(response.data.orders);
            }
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
        }
        setLoding(false)
    }

    const Recive=async(e)=>{
        setLoding(true)
        try {
            const response = await axiosClient2.delete(`/api/order/${e}`);
            navigate('/reviews');
            console.log(response.data);

        } catch (error) {
            console.error('Error:', error);
        }
        setLoding(false)
        
    }

    const Refund= async(e)=>{
        setLoding(true)
        const response=await axiosClient2.delete(`/api/order/${e}`);
        console.log(response.data)
        fetchOrders()
        setLoding(false)
    }

  
  return (
    <div className='container-fluid'>
      <h3 className='mt-4 text-secondary text-center' style={{fontWeight:'bold'}}>My Orders</h3>
      <hr/>
      {
        Loading?(
            <div style={{height:'300px'}} className=' d-flex align-items-center justify-content-center'>
                    <Spinner/>
            </div>
        ):(
                  <table className='table w-100 '>
            <thead>
                <tr>
                <th>Title</th>
                <th>Image</th>
                <th>Size</th>
                <th>Quantity</th>
                <th>price</th>
                <th>Status</th>
                <th>Delivery </th>
                </tr>
            </thead>
            <tbody>
                {
                    orders.length>0?(
                        orders.map((e)=>(
                        <tr key={e.id}>
                            <td >
                                <div className=' d-flex align-items-center justify-content-center mt-5' style={{fontWeight:'bold'}}>
                                    {e.product.title}
                                </div>
                            </td>

                            <td>
                                <ImageLoading
                                path={`${backendUrl}${e.product.image1}`}
                                w={150}
                                h={150}
                                />
                            </td>

                            <td>
                            <div className=' d-flex align-items-center justify-content-center mt-5' style={{fontWeight:'bold'}}>
                                    {e.size}
                                </div>
                            </td>

                            <td>
                            <div className=' d-flex align-items-center justify-content-center mt-5' style={{fontWeight:'bold'}}>
                                    {e.quantity}
                                </div>
                            </td>

                            
                            <td>
                            <div className=' d-flex align-items-center justify-content-center mt-5' style={{fontWeight:'bold'}}>
                                    {parseFloat(e.product.price)*parseFloat(e.quantity)}
                                </div>
                            </td>

                            <td>
                            <div className={` d-flex align-items-center justify-content-center mt-5 ${e.status==='Cancelled'?"text-danger":""} `} style={{fontWeight:'bold',color:e.status==="processing"?"orange":"green"}}>
                                    {e.status}
                                </div>
                            </td>

                            <td>
                                {
                                    e.status==="Cancelled"?(
                                        <div className=' d-flex align-items-center justify-content-center mt-5' style={{fontWeight:'bold'}}>
                                        <button className='btn btn-primary' onClick={()=>Refund(e.id)}>Complete Refund<FontAwesomeIcon className='ms-2' icon={faCheck }/></button>
                                    </div>
                                    ):(
                                <div className=' d-flex align-items-center justify-content-center mt-5' style={{fontWeight:'bold'}}>
                                    <button disabled={e.status=="processing"?true:false} className='btn btn-success'onClick={()=>{setProduct_id(e.product.id) ;Recive(e.id)}} >I Receive it<FontAwesomeIcon className='ms-2' icon={faCheckCircle }/></button>
                                </div>

                                    )
                                }
                                </td>


                            

                        </tr>
                        ))
                    ):(
                        <tr>
                            <td colSpan={7} >
                            <h4 className='text-center ' style={{height:"260px" ,marginTop:"100px" ,fontWeight:'bold'}}>
                               {
                                message?(
                                    <>
                                    {message}
                                    </>
                                ):(
                                    <>
                                    Loading  
                                    <Spinner style={{width:"20px" ,height:"20px"}} className=' ms-2'/>
                                    </>
                                )
                               }
                                
                            </h4>
                            </td>
                        </tr>
                    )
                }
            </tbody>
      </table>
        )
      }

    </div>
  )
}

export default MyOrder
