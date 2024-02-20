import React, { createContext,useContext, useState,useEffect } from 'react';
import { axiosClient2 } from '../api/axios2';

const FavoritContext  = createContext(null);

const FavoritProvider = ({ children }) => {
    const [Data ,setData]=useState([])
    const [count ,setCount]=useState(0)
    const [reload ,setReload]=useState(0)
    const [product_id ,setProduct_id]=useState("")
    

    useEffect(()=>{
        fetchProducts()
      },[count,reload])
    
    
    const fetchProducts=async()=>{
      const response = await axiosClient2.get("api/favorites");
      setData(response.data.favorites)
    }
    

  const contextValues ={
    Data,
    count,
    setCount,
    setProduct_id,
    product_id,
    reload,
    setReload
  }
  return (
    <FavoritContext.Provider value={contextValues}     >
      {children}
    </FavoritContext.Provider>
  );


};

const useFavoritContext = () => {
    return useContext(FavoritContext);
};

export { FavoritProvider ,useFavoritContext };
