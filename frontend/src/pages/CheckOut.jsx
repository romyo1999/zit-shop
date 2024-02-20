import React, { useState,useEffect } from 'react'
import { useCartContext } from '../providers/CartProvider'
import { useUserContext } from '../providers/UserProvider'
import TextArea from '../components/TextArea'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit ,faArrowAltCircleLeft,faCreditCard, faClose } from '@fortawesome/free-solid-svg-icons'
import { Link,useNavigate } from 'react-router-dom'
import { Spinner } from 'react-bootstrap'
import { axiosClient2 } from '../api/axios2'
import { ToastContainer, toast } from 'react-toastify'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import contries from '../components/countries'

const CheckOut = () => {
    const [formVisible ,setFormVisible]=useState(false)
    const [Country ,setCountry]=useState("")
    const [Adress1 ,setAdress1]=useState("")
    const [Adress2 ,setAdress2]=useState("")
    const [City ,setCity]=useState("")
    const [Zip ,setZip]=useState("")
    const {checkout,refresh ,setrefresh}=useCartContext()
    const [updateLoading,setUpdatingLoading]=useState(false)
    const [error,setError]=useState("")
    const [message,setMessage]=useState("")
    const{user,count ,setCount}=useUserContext();
    const[address,setAddress]=useState(user.address)
    const navigate=useNavigate()
    console.log(checkout)
    console.log(checkout.pr_info)

    const EmptyCart=async()=>{
        const response=await axiosClient2.delete("/api/cart")
        setrefresh(refresh+1)
        console.log(response,"deleted")
    }

    const AddOrder=async()=>{
            console.log(typeof checkout.discount+"%" )
        try {
            // Use Promise.all to wait for all async operations to complete
            await Promise.all(
                
                (checkout.pr_info).map(async (e) => {
                    const DATA = {
                        "size": e.size,
                        "quantity": e.quantity,
                        "gift": checkout.gift?true:false,
                        'product_id': e.product_id,
                        'discount': checkout.discount+"%",
                        'shipping': checkout.shipping === 9 ? "standard" : 'express'
                    };
    
                    console.log(DATA);
    
                    try {
                        const response = await axiosClient2.post("/api/order", DATA);
                        if (response.status === "failed") {
                            console.error("Adding failed", response.data.message);
                            toast.error('Failed to create category');
                        } else {
                            console.log('Added successfully:', response.data);
                        }
                    } catch (error) {
                        // Handle the inner catch block as needed
                        console.error('Inner Error:', error);
                    }
                })
            );
        } catch (error) {
            // Handle the outer catch block as needed
            console.error('Outer Error:', error);
            toast.error('Failed to create order');
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
          EmptyCart()
          navigate("/paymentsuccess")
          // You can handle the successful payment here
        });
      };
  
  

    
    if(Object.keys(checkout).length>0&&Object.keys(user).length>0){
        const handleAddress=async(e)=>{
            e.preventDefault();
            setUpdatingLoading(true)
            setAddress((` country :${Country}  ,  Address1 : ${Adress1} ,  Address2:${Adress2} , City:${City}  , Zip code :${Zip}` ))
            if(address){
                 const newAddress={
                "address":(` country :${Country}  ,  Address1 : ${Adress1} ,  Address2:${Adress2} , City:${City}  , Zip code :${Zip}` )
            }
            console.log(newAddress)
            const response= await axiosClient2.put(`/api/user/address/${user.id}`,newAddress)
            console.log('res' ,response)
            toast.success("Address updated successf")
            setCount(count+1)
            setFormVisible(false)
            setUpdatingLoading(false)
            setError('')
            }else{
                setError("empty !!")
                toast.error("Faield to Update")
                setUpdatingLoading(false)

            }
           

        } 


        return (
            <>
            {/* checkout information  */}
            <div className='container-fluid  ' id='information' style={{background:"lightblue" }}>
                <ToastContainer/>
                <div className='row mt-4'>
                    <div className='col-lg-8 col-md-10 col-sm-10 mx-auto card mt-4 mb-4 '>
                        <h3 style={{fontWeight:"bold"}} className="text-secondary text-center card-header">Checkout</h3>
                        <div className=' mt-4 d-flex align-items-center justify-content-around'>
                           <h4 style={{fontWeight:"bold"}}>Shopping Cart : <span style={{fontFamily:"sans-serif" ,fontWeight:"bold",color:"#2980b9"}}>{checkout.count} Items</span></h4>
                           <h4 style={{fontWeight:"bold"}}>SubTotal  : <span style={{fontFamily:"sans-serif" ,fontWeight:"bold",color:"#2980b9"}}> {checkout.subTootal}$</span></h4>
        
                        </div>
                        
                        <div className=' mt-4 d-flex align-items-center justify-content-around'>
                           <h4 style={{fontWeight:"bold"}}>Discount  : <span style={{fontFamily:"sans-serif" ,fontWeight:"bold",color:"#2980b9"}}> {checkout.discount}%</span></h4>
                           <h4 style={{fontWeight:"bold"}}>Shipping  : <span style={{fontFamily:"sans-serif" ,fontWeight:"bold",color:"#2980b9"}}> {checkout.shipping}$</span></h4>
                        </div>
        
                

                        {
                            formVisible?(

                                <form  id="form-open"  onSubmit={handleAddress} className='mt-4 d-flex flex-column align-items-center justify-content-around'>
                                <FontAwesomeIcon onClick={()=>setFormVisible(false)} className='mt-3 fs-5 ps-2 pe-2 pt-1 pb-1  btn-hover' style={{marginLeft:'70%'}} icon={faClose}/>
                                <div className='form-group mt-3 w-75'>
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

                        <h4 className='text-center mt-4' style={{fontWeight:"bold"}}>Total  : <span style={{fontFamily:"sans-serif" ,fontWeight:"bold",color:"rgb(34, 34, 165)"}}> {checkout.tootal}$</span></h4>
            
                          <hr/>
                          <div className='payment-buttons'>
                          <PayPalButtons className='col-lg-12' 
                          createOrder={(data, actions) => createOrder(checkout.tootal.toString(), actions)}
                          onApprove={(data, actions) => onApprove(checkout.tootal.toString(), actions)}
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
                    Object.keys(checkout).length>0?(
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

export default CheckOut
