import React ,{useState,useEffect} from 'react'
import Input from '../components/Input'
import photoProfile from "../assets/user.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit ,faArrowAltCircleLeft,faCreditCard, faClose } from '@fortawesome/free-solid-svg-icons'
// import TextArea from '../components/TextArea'
import { axiosClient } from '../api/axios'
import { axiosClient2 } from '../api/axios2'
import { ToastContainer, toast } from 'react-toastify';
import { Spinner } from 'react-bootstrap'
import contries from '../components/countries'

import { useUserContext } from '../providers/UserProvider'
import { Link } from 'react-router-dom'
const Profile = () => {
  const backendUrl = import.meta.env.VITE_IMAGE_BACKEND_URL;
    const [formVisible ,setFormVisible]=useState(false)
    const [Country ,setCountry]=useState("")
    const [Adress1 ,setAdress1]=useState("")
    const [Adress2 ,setAdress2]=useState("")
    const [City ,setCity]=useState("")
    const [Zip ,setZip]=useState("")
    // const [Image ,setImage]=useState("")
    const [userId ,setUserId]=useState()
    const [PageLoading ,setPageLoading]=useState(false)
    const [FirstName ,setFirstName]=useState("")
    const [LastName ,setLastName]=useState("")
    const [Address ,setAddress]=useState("")
    const [Phone ,setPhone]=useState("")
    const [Image ,setImage]=useState("")
    const [loading,setloading]=useState(false)
    const [uploadLoading ,setUploadLoading]=useState(false)
    const {user,count ,setCount}=useUserContext();

    const [Errors ,SetErrors]=useState([])


      useEffect(()=>{
      fetchData()
      },[])

    const fetchData=()=>{
      axiosClient.get("/api/user/profile").then((res)=>{
        console.log(res.data.user)
        setImage(res.data.user.image)
        setFirstName(res.data.user.first_name)
        setLastName(res.data.user.last_name)
        setAddress(res.data.user.address)
        setPhone(res.data.user.phone)
        setUserId(res.data.user.id)
        setPageLoading(true)
      setUploadLoading(false)

      })


    }

    const updateImage=(Image)=>{
        const Data= new FormData();
        Data.append("image",Image)

        axiosClient.post(`/api/user/profile/image/${userId}`,Data)
        .then((Response)=>{
          console.log(Response)

        })

    }


    const updateProfile =async()=>{
      setloading(true)
      const data={
        first_name:FirstName,
        last_name:LastName,
        address:Address,
        phone:Phone
      }

      try {
       const res = await axiosClient2.put(`api/user/profile/${userId}`,data)
          console.log(res)
          SetErrors([])
          toast.success('updated successfully');
      } catch (error) {
        if (error.response){
          SetErrors(error.response.data.errors)
          toast.error('Failed to update the information');
        }
      }
      setloading(false)

    }


    const  handleAdress=async(e)=>{
      e.preventDefault();
      setAddress(` country :${Country}  ,  Address1 : ${Adress1} ,  Address2:${Adress2} , City:${City}  , Zip code :${Zip}` );
      setFormVisible(false)
    }
     

    if(Object.keys(user).length>0){

      return (
        <div  className='container-fluid mt-4 d-flex flex-column align-items-center justify-content-center w-100' >
          <div className='row'>
          <div className=' border-0  bg-white col-lg-12 col-md-12 col-sm-12 mx-auto  card m-4'>
    
            {PageLoading?(
              <div>
                <h2 style={{fontWeight:"bold",textAlign:"center"}}>Profile Image</h2>
            <div className='line mb-3'></div>
            <div className='m-2 w-100 d-flex  align-items-center'>
    
    
            <img 
            style={{ background:"silver"}}
            width={100} height={100} 
            className='rounded-circle d-inline-block ms-4 me-2'
             src={user.image==="images/user.png"?photoProfile:`${backendUrl}${Image}`}
             />
    
    
            <input type='file'  onChange={(e)=>{updateImage(e.target.files[0])}} className='d-inline-block me-3' />
            <button style={{fontWeight:"bold" ,width:"100px" }} onClick={()=>{ setUploadLoading(true);  fetchData();setCount(count+1)}} className='btn  btn-primary d-inline-block '>
            {
              uploadLoading?(
                <Spinner style={{width:'20%' ,height:"15px" }}/>
              ):(
                "Upload"
              )
            }
    
            </button>
            </div>
            <h2 style={{fontWeight:"bold" ,textAlign:"center"}} className='mt-4'>Profile Information</h2>
            <div className='line mb-3'></div>
            <div className='w-100'>
              
              <div>
    
              <Input label=" First Name "
            required={true}
            placeholder="entre your first name"
            type="text"
            setVar={setFirstName}
            var={FirstName}
            error={Errors.first_name?true:false}
            />
           <small style={{display:"inline-block", width:"100%",textAlign:"center" ,color:"red",fontWeight:"bold"}}>{Errors.first_name}</small>
    
            <Input label=" Last Name "
            required={true}
            placeholder="entre your last name"
            type="text"
            setVar={setLastName}
            var={LastName}
            error={Errors.last_name?true:false}
            />
           <small style={{display:"inline-block", width:"100%",textAlign:"center" ,color:"red",fontWeight:"bold"}}>{Errors.last_name}</small>
    
            {/* <TextArea label="Address "
            required={true}
            placeholder="entre your Address , zip code ,city   "
            type="text"
            setVar={setAddress}
            var={Address}
            error={Errors.address?true:false}
    
            /> */}
              {
                                formVisible?(
    
                                    <form    onSubmit={handleAdress} className='  w-100  p-2 d-flex flex-column align-items-center justify-content-around'>
                                    <FontAwesomeIcon onClick={()=>setFormVisible(false)} className='mt-3 fs-5 ps-2 pe-2 pt-1 pb-1  btn-hover' style={{marginLeft:'70%'}} icon={faClose}/>
                                    <div className='form-group mt-3 w-100'>
                                    <label className='address-lable '>Country <span className='fs-4 text-danger '>* </span> :</label>
                                    <select  onChange={(e)=>setCountry(e.target.value)} className='form-control' required>
                                        <option value='' >Select Country</option>
                                        {
                                            contries?.map((e)=>(
                                                <option value={e}>{e}</option>
                                            ))
                                        }
                                    </select>
                                    </div>
        
                                    <div className='form-group mt-3 w-100'>
                                    <label className=' address-label'>Address <span className='fs-4 text-danger'>* </span> :</label>
                                    <input required className='form-control' onChange={(e)=>setAdress1(e.target.value)} type='text '/>
                                    </div>
        
                                    <div className='form-group mt-3 w-100'>
                                    <label className=' address-label'>Address 2 : </label>
                                    <input  className='form-control' onChange={(e)=>setAdress2(e.target.value)} type='text '/>
                                    </div>
           
        
                                    <div className='w-100 d-flex  align-items-center justify-content-center'>
                                        <div className='form-group mt-3 w-50 me-1  '>
                                            <label className=' address-label'>City <span className='fs-4 text-danger'>*</span>:</label>
                                            <input required className='form-control' onChange={(e)=>setCity(e.target.value)} type='text'/>
                                        </div>
        
                                        <div className='form-group mt-3 w-50 ms-1   '>
                                            <label className=' address-label'>Zip Code <span className='fs-4 text-danger'>*</span>:</label>
                                            <input required className='form-control' onChange={(e)=>setZip(e.target.value)} type='text'/>
                                        </div>
                                    </div>
        
                                    <button  className=' btn btn-success w-100 mt-4  mb-3 '>      
                                          <FontAwesomeIcon icon={faEdit}/>  Update                          
                                   </button>
                                    
                                </form>
    
    
                                ):(
    
                            <div className='mt-3 d-flex flex-column align-items-center justify-content-center w-100 '  id='form-close'>
                                <h4 style={{fontWeight:'bold' }}> Address <FontAwesomeIcon onClick={()=>setFormVisible(true)} style={{cursor:"pointer"}} className='text-primary fs-5 ms-4'  icon={faEdit}/></h4>
                                <div className='w-100 h-100 p-3' style={{border:"2px solid #78b5df" ,borderRadius:'8px'}}>
                                    {
                                        Address
                                    }
                                  
                                </div>
                            </div>
                                )
                            }
    
           <small style={{display:"inline-block", width:"100%",textAlign:"center" ,color:"red",fontWeight:"bold"}}>{Errors.address}</small>
    
    
            <Input label=" Phone "
            required={true}
            placeholder="+212 00 00 00 00 "
            type="text"
            setVar={setPhone}
            var={Phone}
            error={Errors.phone?true:false}
            />
           <small style={{display:"inline-block", width:"100%",textAlign:"center" ,color:"red",fontWeight:"bold" }} >{Errors.phone}</small>
    
    
            <button onClick={updateProfile}  className='btn btn-primary p-1  w-100 text-white mt-4 fs-4' style={{borderRadius:"15px",fontWeight:"bold"}}  >
                            {loading?(
                                <Spinner/>
                            )
                            :(
                                "UPDATE"
                            )}
                            
            </button>
    
              </div>
    
            </div>
          <div>
    
    
          </div>
          <ToastContainer position="bottom-right" autoClose={3000} />
    
              </div>
    
            ):(
                
              <div className='d-flex align-items-center justify-content-center' style={{height:"556px"}}>
                <di>Loading <Spinner/></di>
             </div>
            )
            
            }
    
    
    
          
    
    
    
    
          </div>
          </div>
        </div>
      )


    }else{
      return (
        <>
          <div className='container'>
            <div className='row'>
            <div className='w-50 mx-auto mt-4'>
            <h3 className='text-center'>Please Sign in  First </h3>
            <div className='d-flex align-items-center justify-content-center mt-4'>
            <Link className='text-white text-decoration-none  btn btn-info d-inline-block me-4' to="/registre">Registre</Link>
            <Link className=' text-decoration-none btn btn-primary ps-4 pe-4' to="/login">Login</Link>
            </div>
            </div>
            </div>
          </div>
        </>
      )
    }


 
}

export default Profile
