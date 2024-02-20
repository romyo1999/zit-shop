import { faDiagramSuccessor, faSmile } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import success from '../assets/success.png'
import React from 'react'
import { Link } from 'react-router-dom'

const PaymentSuccess = () => {
  return (
    <div className='container d-flex flex-column align-items-center justify-content-center'>
        <img className='img-fluid' width={200} src={success}/>
      <h2 className='text-center text-secondary' style={{fontWeight:'bold'}}>Thank You  <FontAwesomeIcon icon={faSmile}/></h2>
      <h4 className='text-center text-secondary'>Your Payment is successfully Done</h4>
      <div className='mt-4 d-flex align-items-center justify-content-center'>
        <Link className='btn btn-primary  p-2 me-2 ' to={"/"} style={{width:"150px",fontWeight:"bold"}}>Home</Link>
        <Link className='btn btn-success p-2 ms-2' to={"/myorders"} style={{width:"150px",fontWeight:'bold'}}>My Orders</Link>
      </div>
    </div>
  )
}

export default PaymentSuccess
