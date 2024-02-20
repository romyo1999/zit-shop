import React, { useState,useEffect } from 'react'
import { useCartContext } from '../providers/CartProvider'
import { useUserContext } from '../providers/UserProvider'
import TextArea from '../components/TextArea'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft, faClose, faCreditCard, faEdit, faGift } from '@fortawesome/free-solid-svg-icons'
import { Spinner } from 'react-bootstrap'
import { axiosClient2 } from '../api/axios2'
import { ToastContainer, toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'
import contries from '../components/countries'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const Buy = () => {
  const [formVisible ,setFormVisible]=useState(false)
  const [Country ,setCountry]=useState("")
  const [Adress1 ,setAdress1]=useState("")
  const [Adress2 ,setAdress2]=useState("")
  const [City ,setCity]=useState("")
  const [Zip ,setZip]=useState("")
    const {buy}=useCartContext()
    const [updateLoading,setUpdatingLoading]=useState(false)
    const [error,setError]=useState("")
    const [message,setMessage]=useState("")
    const{user,count ,setCount}=useUserContext();
    const[address,setAddress]=useState(user.address)
  const [shipping,setShipping]=useState(9)
  const [gift,setGift]=useState(false);
  const [tootal,setTootal]=useState("");
  const [errorType,setErrorType]=useState("");

  var coast=parseFloat(shipping)+parseFloat(buy.price)
  const navigate=useNavigate()


    console.log(buy)
    console.log(user)

    // const  mount = (parseFloat(shipping)+parseFloat(buy.price)).toString()
    const AddOrder=async()=>{
      const DATA={
        "size":buy.size,
        "quantity":1,
        "gift":gift,
        'product_id':buy.id,
        'discount':"0%",
        'shipping':shipping==9?"standard":'express'
      }
      console.log(DATA)

      try {
        const response=await axiosClient2.post("/api/order" ,DATA);
        if(response.status ==="failed"){
          console.error("adding failed",response.data.message)
          toast.error('Failed to create category');
      }else{
          console.log('added successful:', response.data);
      }
      } catch (error) {
        if (error.response) {
          console.error('Response Error:', error.response.data);
          toast.error('Failed to create order');
          console.error('Status Code:', error.response.status);
          console.error('Headers:', error.response.headers);
      } else if (error.request) {
          console.error('Request Error:', error.request);
      } else {
          console.error('General Error:', error.message);
      }
      }
    }


    const createOrder = (mount ,actions) => {
      return actions.order.create({
        purchase_units: [
          {
            amount: {
              value:mount,
            },
          },
        ],
      });
    };
  
    const onApprove = (mount, actions) => {
      return actions.order.capture().then((details) => {
        console.log("Transaction completed. Details:", details);
        AddOrder()
        navigate("/paymentsuccess")
        // You can handle the successful payment here
      });
    };



    
    if(Object.keys(user).length>0 && Object.keys(buy).length>0){

      function handleShipping(e){
        coast=parseFloat(e)+parseFloat(buy.price)
        setShipping(e)
        console.log(coast)

      }

      const handleAddress=async(e)=>{
        e.preventDefault();
        setUpdatingLoading(true)
        setAddress(` country :${Country}  ,  Address1 : ${Adress1} ,  Address2:${Adress2} , City:${City}  , Zip code :${Zip}` )
        if(address){
             const newAddress={
            "address":(` country :${Country}  ,  Address1 : ${Adress1} ,  Address2:${Adress2} , City:${City}  , Zip code :${Zip}` )
        }
        const response= await axiosClient2.put(`/api/user/address/${user.id}`,newAddress)
        toast.success("Address updated successf")
        setCount(count+1)
        console.log(response)
        setFormVisible(false)
        setUpdatingLoading(false)
        setError('')
        }else{
            setError("empty !!")
            toast.error("Faield to Update")
            setUpdatingLoading(false)

        }
       

    } 


        function handlieGift(){
          setGift(!gift)
        }

     


        return (
            <>

                {/* item information  */}
                <div className='container-fluid  ' id='information' style={{background:"lightblue" }}>
                <ToastContainer/>
                <div className='row mt-4'>
                    <div className='col-lg-8 col-md-10 col-sm-10 mx-auto card mt-4 mb-4 '>
                        <h3 style={{fontWeight:'bold'}} className="text-secondary text-center card-header">Checkout</h3>
                        <div className=' mt-4 d-flex align-items-center justify-content-around'>
                           <h4 style={{fontWeight:"bold"}}>Size : <span style={{fontFamily:"sans-serif" ,fontWeight:"bold",color:"#2980b9"}}>{buy.size} </span></h4>
                           <h4 style={{fontWeight:"bold"}}>Price  : <span style={{fontFamily:"sans-serif" ,fontWeight:"bold",color:"#2980b9"}}> {buy.price}$</span></h4>
        
                        </div>

                        <form className='mb-3 w-100 d-flex align-items-center justify-content-center'>
                        <label htmlFor='standard'   className='d-flex align-items-center justify-content-around w-100 ps-4 pe-4 pt-2 pb-2 mt-2 '  style={{border:"2px",borderStyle:'solid',borderColor:shipping==9?"rgb(19, 60, 105)":"silver"}}>
                        <input type='radio'  checked={shipping==9?true:false} name='shipping' id='standard' value={9} onChange={(e)=>handleShipping(e.target.value)} className='me-3 '/>
                        <div className='d-flex flex-column'>
                        <label htmlFor='standard' className='fs-5 mt-3' style={{fontWeight:"bold"}}><span style={{fontWeight:'bolder',color:"rgb(19, 60, 105)"}}>+$9 </span> Standard Shipping</label>
                        <small className='text-secondary'>Delivery Between 30 and 40 days</small>
                        </div>
                        </label>

                        <label htmlFor='express'  className='d-flex align-items-center justify-content-around w-100 ps-4 pe-4 pt-2 pb-2 mt-2'  style={{border:"2px",borderStyle:'solid',borderColor:shipping==40?"rgb(19, 60, 105)":"silver"}}>
                        <input type='radio'  name='shipping' id='express' value={40} className='me-3'  onChange={(e)=>handleShipping(e.target.value)}/>
                        <div className='d-flex flex-column'>
                        <label htmlFor='express' className='fs-5 mt-3' style={{fontWeight:"bold"}}><span style={{fontWeight:'bolder',color:"rgb(19, 60, 105)"}}>+$40 </span> Express Shipping</label>
                        <small className='text-secondary'>Delivery Between 5 and 10 days</small>
                        </div>
                        </label>
                        </form>
                

                        <div className=' mt-2 d-flex flex-column  align-items-center justify-content-center'>
                            <label htmlFor='gift' className='p-2 d-flex align-items-center justify-content-center m-3' style={{border:"2px",borderStyle:"solid",borderColor:"rgb(44, 90, 105)",borderRadius:"10px"}}>
                            <input  type='checkbox' id='gift' name='gift' onChange={handlieGift} className='me-4'/>
                            <label style={{fontWeight:'bold',fontSize:"16px",fontFamily:"inherit"}} htmlFor='gift' className=''>this order is a gift </label>
                            <FontAwesomeIcon className='ms-3' icon={faGift}/>
                            </label>
                        </div>
        
                        {
                            formVisible?(

                                <form  id="form-open"  onSubmit={handleAddress} className='mt-4 d-flex flex-column align-items-center justify-content-around'>
                                <FontAwesomeIcon onClick={()=>setFormVisible(false)} className='mt-3 fs-5 ps-2 pe-2 pt-1 pb-1  btn-hover' style={{marginLeft:'70%'}} icon={faClose}/>
                                <div className='form-group  w-75'>
                                <label className='address-lable '>Country <span className='fs-4 text-danger '>* </span> :</label>
                                <select required onChange={(e)=>setCountry(e.target.value)} className='form-control'>
                                    <option value=''>Select Country</option>
                                    {
                                        contries?.map((e)=>(
                                            <option value={e}>{e}</option>
                                        ))
                                    }
                                </select>
                                </div>
    
                                <div className='form-group mt-3 w-75'>
                                <label className=' address-label'>Address <span className='fs-4 text-danger'>* </span> :</label>
                                <input required className='form-control' onChange={(e)=>setAdress1(e.target.value)} type='text '/>
                                </div>
    
                                <div className='form-group mt-3 w-75'>
                                <label className=' address-label'>Address 2 : </label>
                                <input  className='form-control' onChange={(e)=>setAdress2(e.target.value)} type='text '/>
                                </div>
       
    
                                <div className='w-75 d-flex  align-items-center justify-content-center'>
                                    <div className='form-group mt-3 w-50 me-1  '>
                                        <label className=' address-label'>City <span className='fs-4 text-danger'>*</span>:</label>
                                        <input required className='form-control' onChange={(e)=>setCity(e.target.value)} type='text'/>
                                    </div>
    
                                    <div className='form-group mt-3 w-50 ms-1   '>
                                        <label className=' address-label'>Zip Code <span className='fs-4 text-danger'>*</span>:</label>
                                        <input required className='form-control' onChange={(e)=>setZip(e.target.value)} type='text'/>
                                    </div>
                                </div>
    
                                <button  type='submit' className=' btn btn-success w-75 mt-4  mb-3 '>
                               {
                                updateLoading?(
                                    <Spinner style={{width:"15px" ,height:"15px"}}/>
                                ):(
                                    <>
                                      <FontAwesomeIcon icon={faEdit}/>  Update
                                    </>
                                  
                                )
                               }
                               
                               </button>
                                
                            </form>


                            ):(

                        <div className='mt-3 d-flex flex-column align-items-center justify-content-center' id='form-close'>
                            <h4 style={{fontWeight:'bold' }}>Shipping Address <FontAwesomeIcon onClick={()=>setFormVisible(true)} style={{cursor:"pointer"}} className='text-primary fs-5 ms-4'  icon={faEdit}/></h4>
                            <div className='w-50 h-100 p-3' style={{border:"1px solid silver"}}>
                                {
                                    address
                                }
                              
                            </div>
                        </div>
                            )
                        }

                        <h4 className='mt-4 text-center' style={{fontWeight:"bold"}}>Total  : <span style={{fontFamily:"sans-serif" ,fontWeight:"bold",color:"rgb(34, 34, 165)"}}> {(parseFloat(shipping)+parseFloat(buy.price)).toString()}$</span></h4>

        
                          <hr/>
                        
                          <div className='payment-buttons'>
                          <PayPalButtons className='col-lg-12' 
                          createOrder={(data, actions) => createOrder(coast.toString(), actions)}
                          onApprove={(data, actions) => onApprove(coast.toString(), actions)}
                          />
                          </div>
                    </div>
                </div>
            </div>
            </>
          )
    }else{

        return(
            <div className='mt-4 d-flex align-items-center justify-content-center'>
                {
                    Object.keys(buy).length>0?(
                        <div className='w-50 mx-auto mt-4'>
                        <h3 className='text-center'>Please Sign in  First </h3>
                        <div className='d-flex align-items-center justify-content-center mt-4'>
                        <Link className='text-white text-decoration-none  btn btn-info d-inline-block me-4' to="/registre">Registre</Link>
                        <Link className=' text-decoration-none btn btn-primary ps-4 pe-4' to="/login">Login</Link>
                        </div>
                        </div>
                    ):(
                        <div className='w-50 mx-auto mt-4'>
                        <h3 className='text-center'>Nothing to buy </h3>
                        <div className='d-flex align-items-center justify-content-center mt-4'>
                        <Link className='text-white text-decoration-none  btn btn-info d-inline-block me-4' to="/">Home</Link>
                        </div>
                        </div>
                    )
                }

            </div>
        )
    }
  
}

export default Buy
