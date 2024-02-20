import React from 'react'
import { BrowserRouter,Link,Route,Routes } from 'react-router-dom'
import AdminLayout from '../Layout/AdminLayout'
import Categoryes from '../admin/manage_category/Categoryes'
import AddCategory from '../admin/manage_category/AddCategory'
import UpdateCategory from '../admin/manage_category/UpdateCategory'
import AddProduct from '../admin/manage_products/AddProduct'
import UpdateProduct from '../admin/manage_products/UpdateProduct'
import Users from '../admin/manage_users/Users'
import DashboardSide from '../components/DashboardSide'
import ProductManage from '../admin/manage_products/ProductManage'
import NotFound from '../NotFound/NoteFound'
import Header2 from '../Layout/userLayout/header2'
import Test from '../test/Test'
import Likes from '../admin/manage_likes/Likes'
import Questions from '../admin/manage_questions/Questions'
import Discount from '../admin/manage_discount/Discount'
import AddDiscount from '../admin/manage_discount/AddDiscount'
import UpdateDiscount from '../admin/manage_discount/UpdateDiscount'
import CartManage from '../admin/manage_cart/CartManage'
import Orders from '../admin/manage_orders/Orders'
import Sales from '../admin/manage_sales/Sales'
import { useUserContext } from '../providers/UserProvider'
const AdminRoutes = () => {
const {user}=useUserContext()
  return (
    <>
    {
      user.role=="admin"?(
       <AdminLayout>
        <Routes>
        {/* categores routes  */}
        <Route path='/categores' element={<Categoryes/>} />
        <Route path='/create_category' element={<AddCategory/>} />
        <Route path='/update_category/:id' element={<UpdateCategory/>} />
        {/* categores routes  */}

        {/* products routes  */}
        <Route path='/create_product' element={<AddProduct/>} />
        <Route path='/products/manage' element={<ProductManage/>} />
        <Route path='/Update_product/:id' element={<UpdateProduct/>} />
        {/* products routes  */}


        {/* users rutes  */}
        <Route path='/users' element={<Users/>} />
        <Route path='/test' element={<Test/>} />
        {/* users rutes  */}

        {/* not found routes  */}
        <Route path='/*' element={<NotFound/>} />
        {/* not found routes  */}


        {/* Favorit route  */}
        <Route path='/likes' element={<Likes/>} />
        {/* Favorit route  */}


        {/* Questions route  */}
        <Route path='/questions' element={<Questions/>} />
        {/* Questions route  */}

        {/* dicount route  */}
        <Route path='/discount' element={<Discount/>} />
        <Route path='/create_discount' element={<AddDiscount/>} />
        <Route path='/update_discount/:id' element={<UpdateDiscount/>} />
        {/* dicount route  */}

        {/* cart route  */}
        <Route path='/cart' element={<CartManage/>} />
        {/* cart route  */}

      {/* orders route  */}
        <Route path='/orders' element={<Orders/>} />
      {/* orders route  */}


      {/* sale route  */}
        <Route path='/sales' element={<Sales/>} />
      {/* sale route  */}

        </Routes>
        </AdminLayout>
      ):(
        <div className='w-100 h-100 d-flex align-items-center justify-content-center'>
            <div className='mx-aout' style={{marginTop:'200px'}}>
              <h3 className='text-center text-secondary' style={{fontWeight:'bold'}}>"Unauthorized Access: This area is restricted for security reasons. Ensure you are logged in with the correct account or review our access policies."! </h3>
              <div className='d-flex align-items-center justify-content-center'>
              <Link style={{width:'120px'}} className='btn btn-secondary me-2 mt-4' to={'/contact'}>Contact Us</Link>
              <Link style={{width:'120px'}} className='btn btn-dark ms-2 mt-4' to={'/'}>Home</Link>
              </div>
            </div>
        </div>
      )
    }
    
    </>
       
  )
}

export default AdminRoutes
