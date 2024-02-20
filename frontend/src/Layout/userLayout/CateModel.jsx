import React from "react";
import './style.css'
import "bootstrap/dist/css/bootstrap.min.css"
import {Link } from "react-router-dom";
import hats from "../../assets/hats.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRemove } from "@fortawesome/free-solid-svg-icons";
import woman from "../../assets/cat/woman.jpg"
import man from "../../assets/cat/man.jpeg"
import kids from "../../assets/cat/kids.jpeg"
import tshirts from "../../assets/cat/tshirts.webp"
import hoodies from "../../assets/cat/hoodies.webp"
import bucketHats from "../../assets/cat/buckethats.jpeg"
import dresses from "../../assets/cat/dresses.jpeg"

const CateModel=({open,onClose})=>{
    if (!open) return null

    function handleClose(){
            onClose()

        
           
    }


    return(
        <>
            <div className="overlay" >
                    <div className='model-right '>
                        <h6 style={{fontWeight:'bold',fontSize:"20px" ,marginTop:"10px"}}>Shop By Category </h6>
                        <FontAwesomeIcon icon={faRemove} className="pt-2 pb-2 ps-2 pe-2 fs-5 btn-hover text-center" style={{width:"23px", height:"23px"}} onClick={handleClose}/>
                    </div>
                    <hr/>
                <div className="container text-center">
                    <div className="row ">
                        <Link onClick={onClose} to="women" s className=" card-cat col-lg-3 col-sm-6 text-dark text-decoration-none  ">
                            <div className="image-div " >
                            <img className='cat-img-fix zoom-img' src={woman} alt="img"  style={{background:"silver"}}/>
                            </div>
                            <p>Women Clothing</p>
                        </Link>
                        <Link  onClick={onClose}  to="men" className="col-lg-3  card-cat col-sm-6  text-dark text-decoration-none">
                        <div className="image-div" >
                        <img className='cat-img-fix zoom-img' src={man} alt="img"  style={{background:"silver"}}/>
                            </div>
                            <p>Men Clothing</p>
                        </Link>
                        <Link   onClick={onClose} to="kids" className="col-lg-3  card-cat col-sm-6 text-dark text-decoration-none">
                            <div className="image-div" >
                            <img className='cat-img-fix zoom-img' src={kids} alt="img"  style={{background:"silver"}}/>
                            </div>
                            <p>Kids Clothing</p>
                        </Link>
                        <Link   onClick={onClose} to="hoodies" className="col-lg-3 card-cat col-sm-6  text-dark text-decoration-none">
                            <div className="image-div" >
                            <img className='cat-img-fix zoom-img' src={hoodies} alt="img"  style={{background:"silver"}}/>
                            </div>
                            <p>Hoodies And SweatShrits</p>
                        </Link>


                        <Link  onClick={onClose}  to="hats" className="col-lg-3 card-cat col-sm-6  text-dark text-decoration-none">
                            <div className="image-div"  >
                            <img className='cat-img-fix zoom-img' src={hats} alt="img"  style={{background:"silver"}} />
                            </div>
                            <p>Hats</p>
                        </Link>
                        <Link   onClick={onClose} to="buckethats" className="col-lg-3 card-cat col-sm-6  text-dark text-decoration-none text-dark text-decoration-none">
                            <div className="image-div"  >
                            <img className='cat-img-fix zoom-img' src={bucketHats} alt="img"  style={{background:"silver"}}/>
                            </div>
                            <p>Bucket Hats</p>
                        </Link>
                        <Link  onClick={onClose}  to="tshirts" className="col-lg-3 card-cat  col-sm-6  text-dark text-decoration-none text-dark text-decoration-none">
                            <div className="image-div" >
                            <img className='cat-img-fix zoom-img' src={tshirts} alt="img"  style={{background:"silver"}}/>
                            </div>
                            <p>T-shirts and Tops</p>
                        </Link>
                        <Link   onClick={onClose} to="dresses" className="col-lg-3 card-cat  col-sm-6  text-dark text-decoration-none text-dark text-decoration-none">
                            <div className="image-div"  >
                            <img className='cat-img-fix zoom-img' src={dresses} alt="img"  style={{background:"silver"}}/>
                            </div>
                            <p>Dresses</p>
                        </Link>


                    </div>
                </div>
               
            </div>

        </>
    )
}
export default CateModel;
