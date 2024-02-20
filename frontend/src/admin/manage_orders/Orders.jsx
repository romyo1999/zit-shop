import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList, faCopy,faHeart,faTrash } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Spinner } from 'react-bootstrap';
import { axiosClient2 } from '../../api/axios2';
import DashboardSide from '../../components/DashboardSide';
import UserSearch from '../../components/UserSearch';

const Orders = () => {
    const [orders ,setorders]=useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [message, setMessage] = useState('');
    const [count ,setCount]=useState(0);
    const [loading ,setloading]=useState(false);

    useEffect(() => {

      if(orders.length<1){
        const timeoutId = setTimeout(() => {
          setMessage("You don't have any orders yet ");
  
        }, 10000);
    
        return () => clearTimeout(timeoutId);
      }
    }, []);


  

  useEffect(()=>{
    fetchorders()
    },[currentPage])

    useEffect(() => {
        console.log(orders); 
      }, [orders]); 

    useEffect(() => {
        console.log(totalPages); 
      }, [totalPages]); 

    const fetchorders=async()=>{
        try {
            const response=await axiosClient2.get(`api/orders?page=${currentPage}`);
            if(response.status==="failed"){
                console.log("failed fetch",response.data.message)
            }else{

                console.log(response.data.orders.data)
                setorders(response.data.orders.data)
                setCount(response.data.count)
                setTotalPages(response.data.orders.last_page);
            }
        } catch (error) {
            if(error.response){
                console.error("Response Error",error.response.data)
                console.error("Status Error",error.response.status)
                console.error("Headers",error.response.headers)
            }else if(error.request){
                console.error("Request Error" ,error.request)
            }else{
                console.error("general Error" ,error.message)
            }
        }
    }
        

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
      };



      const Confirm=async(id,user_id,product_id ,quantity,shipping,price,discount)=>{
        setloading(true);
        const newSale={
          "mount":parseFloat(quantity)+parseFloat(price),
          "shipping":shipping,
          "discount":parseInt(discount),
          "user_id":user_id,
          "product_id":product_id
        }

        const Data={
          "status":"confirmed"
        }

        const response1 =await axiosClient2.post(`/api/sale` ,newSale)
        console.log(response1);

        const response =await axiosClient2.put(`/api/orders/${id}`,Data)
        console.log(response)
        fetchorders()
        setloading(false)
      }

      const Cancel=async(e)=>{
        setloading(true)
        const Data={
          "status":"Cancelled"
        }
        const response =await axiosClient2.put(`/api/orders/${e}`,Data)
        console.log(response)
        fetchorders()
        setloading(false)
      }



  return (
    <>
    <div className='container-fluid' style={{background:"#f0f0f0"}}>
    <div className='row'>
    <DashboardSide/>
    <div className='col-lg-10 col-md-10 col-sm-10'>
        <div className='text-white ms-4 mt-3 p-3 rounded-2 d-flex align-items-center justify-content-center'  style={{fontWeight:"bold",fontSize:"20px",width:'20%',height:"8%" ,boxShadow:"0 0 5px green",background:"rgb(129, 216, 94)"}}>
          {count} orders  <FontAwesomeIcon icon={faClipboardList }  className='ms-2 fs-3'/>
        </div>
        <div className='card mx-auto ms-3 mt-3 p-3'>
        {orders.length>0?(
            <>
            <h4 className='text-secondary' style={{fontWeight:"bold"}}> New orders</h4>
            <hr />

            {
                loading?(
                  <div className='d-flex align-items-center justify-content-center' style={{marginTop:"20%",marginBottom:"20%"}}>
                    <Spinner/>
                  </div>
              ):(
                <table className='table table-bordred w-100'>
                <thead>
                    <tr>
                        <th >Order ID</th>
                        <th>User ID</th>
                        <th>Product ID</th>
                        <th>Size</th>
                        <th>Quantity</th>
                        <th>Shipping</th>
                        <th>Gift</th>
                        <th>Time</th>
                        <th>Action</th>
    
                    </tr>
                </thead>
    
                <tbody>
                {
                    orders?.map((e)=>(
                        <tr key={e.id}>
                            <td>{e.id}</td>
                            <td>{e.user_id}</td>
                            <td>{e.product_id}</td>
                            <td>{e.size}</td>
                            <td>{e.quantity}</td>
                            <td>{e.shipping}</td>
                            <td>{e.gift==0?"yes":"no"}</td>
                            <td>{e.formatted_created_at}</td>
                            <td>
                                <button onClick={()=>Confirm(e.id,e.user_id ,e.product_id ,e.quantity ,e.shipping ,e.product.price,e.discount)} className='btn btn-primary me-2'>Confirm</button>
                                <button onClick={()=>Cancel(e.id)}  className='btn btn-danger '>Cancel</button>
                            </td>
                        </tr>
                    )
                  )
                    }
    
    
                    
                </tbody>
                </table>
              )
            }
           

            <div className='d-flex align-items-center justify-content-center'>
            <button className="pagination-button rounded-circle p-2 m-2" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
            <FontAwesomeIcon className='' icon={faArrowLeft} /> 
            </button>
            <span  className="pagination-info fs-6 ">{`Page ${currentPage} of ${totalPages}`}</span>
            <button className="pagination-button rounded-circle p-2 m-2" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
             <FontAwesomeIcon className='' icon={faArrowRight} />
            </button>
          </div>
            </>
                
                ):(
                   <div className='d-flex align-items-center justify-content-center' style={{height:"556px"}}>
                    {
                    message?(
                      <h2>{message}</h2>
                    ):( 
                      <di>Loading <Spinner/></di>)
                  
                  }
                   
                   </div>
                )}


        </div>

    </div>
    </div>

    </div> 
    </>
  )
}

export default Orders 
