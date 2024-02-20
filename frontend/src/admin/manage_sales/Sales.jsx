import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretSquareRight, faCartArrowDown, faCartShopping, faCopy,faDollar,faHeart,faTrash } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Spinner } from 'react-bootstrap';
import { axiosClient2 } from '../../api/axios2';
import DashboardSide from '../../components/DashboardSide';
import UserSearch from '../../components/UserSearch';

const Sales = () => {
    const [sales ,setsales]=useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [message, setMessage] = useState('');
    const [count ,setCount]=useState(0);
    const [earning ,setEarning]=useState(0);

    useEffect(()=>{
      var t=0
        var s=sales.map((e)=>{    
        t+=(parseFloat(e.mount)-(parseFloat(e.mount)*e.discount/100))
        return t
      })
      setEarning(t)
    },[sales])
    useEffect(() => {

      if(sales.length<1){
        const timeoutId = setTimeout(() => {
          setMessage("You don't have any sales yet ");
  
        }, 10000);
    
        return () => clearTimeout(timeoutId);
      }
    }, []);




  useEffect(()=>{
    fetchsales()
    },[currentPage])

    useEffect(() => {
        console.log(sales); 
      }, [sales]); 

    useEffect(() => {
        console.log(totalPages); 
      }, [totalPages]); 

    const fetchsales=async()=>{
        try {
            const response=await axiosClient2.get(`api/sales?page=${currentPage}`);
            if(response.status==="failed"){
                console.log("failed fetch",response.data.message)
            }else{
                setsales(response.data.sales.data)
                setCount(response.data.count)
                setTotalPages(response.data.sales.last_page);
               
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


  return (
    <>
    <div className='container-fluid' style={{background:"#f0f0f0"}}>
    <div className='row'>
    <DashboardSide/>
    <div className='col-lg-10 col-md-10 col-sm-10'>

      <div className='d-flex '>
                <div className='text-white me-2 ms-4 mt-3 p-3 rounded-2 d-flex align-items-center justify-content-center'  style={{fontWeight:"bold",fontSize:"20px",boxShadow:"0 0 5px green",background:"rgb(129, 216, 94)"}}>
          {count} Sales  <FontAwesomeIcon icon={faCartArrowDown}  className='ms-2 fs-3'/>
        </div>
        <div className='text-white  mt-3 p-3 ms-3 rounded-2 d-flex align-items-center justify-content-center'  style={{fontWeight:"bold",fontSize:"20px",boxShadow:"0 0 5px green",background:"rgb(129, 216, 94)"}}>
        ${earning} Eraning   <FontAwesomeIcon icon={faDollar}  className='ms-2 fs-3'/>
        </div>
      </div>
        <div className='card mx-auto ms-3 mt-3 p-3'>
        {sales.length>0?(
            <>
            <h4 className='text-secondary' style={{fontWeight:"bold"}}> All sales</h4>
            <hr />
            <table className='table table-bordred w-100'>



                   <thead>
                <tr>
                    <th >ID</th>
                    <th>User ID</th>
                    <th>Product ID</th>
                    <th>Time</th>
                    <th>Discount</th>
                    <th>Mount</th>

                </tr>
            </thead>

            <tbody>
            {
                sales?.map((e)=>(
                    <tr key={e.id}>
                        <td>{e.id}</td>
                        <td>{e.user_id}</td>
                        <td>{e.product_id}</td>
                        <td>{e.formatted_created_at}</td>
                        <td>{e.discount}%</td>
                        <td>{e.mount}$</td>
                    </tr>
                )
              )
                }


                
            </tbody>
            </table>

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

export default Sales
