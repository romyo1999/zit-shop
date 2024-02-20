import React from 'react'
import { Routes,Route, Router } from 'react-router-dom'
import UserLayout from '../Layout/UserLayout'
import Home from '../pages/Home'
import Registre from '../auth/Registre'
import Login from '../auth/Login'
import Women from '../category/Women'
import WomanTshirt from '../category/woman_category/WomanTshirt'
import WomenBucketHat from '../category/woman_category/WomenBucketHat'
import Men from '../category/Men'
import ManTshirt from '../category/man _category/ManTshirt'
import ManHoodie from '../category/man _category/ManHoodie'
import ManHat from '../category/man _category/ManHat'
import ManBucketHats from '../category/man _category/ManBucketHats'
import Kids from '../category/Kids'
import KidsTshirt from '../category/kids_category/KidsTshirt'
import KidsHoodie from '../category/kids_category/KidsHoodie'
import KidsHat from '../category/kids_category/KidsHat'
import KidsDresse from '../category/kids_category/KidsDresse'
import Tshirt from '../category/Tshirt'
import Hoodies from '../category/Hoodies'
import Hats from '../category/Hats'
import BucketHats from '../category/BucketHats'
import Dresses from '../category/Dresses'
import Dashboard from '../auth/Dashboard'
import WomenDresse from '../category/woman_category/WomenDresse'
import KidsBucketHat from '../category/kids_category/KidsBucketHat'
import NotFound from '../NotFound/NoteFound'
import Profile from '../pages/Profile'
import WomanHoodie from '../category/woman_category/WomanHoodie'
import WomenHat from '../category/woman_category/WomenHat'
import Products from '../pages/Products'
import Favorit from '../pages/Favorit'
import Contact from '../pages/Contact'
import Cart from '../pages/Cart'
import Show from '../pages/Show'
import CheckOut from '../pages/CheckOut'
import Buy from '../pages/Buy'
import MyOrder from '../pages/MyOrder'
import PaymentSuccess from '../pages/PaymentSuccess'
import Reviews from '../pages/Reviews'
import AboutUs from '../pages/footerModels/aboutUs'
import GetStart from '../pages/footerModels/getStart'
import Career from '../pages/footerModels/Career'
import Cop from '../pages/footerModels/cop'
import FAQ from '../pages/footerModels/faq'
import Help from '../pages/footerModels/help'
import Selling from '../pages/footerModels/Selling'
import Advertise from '../pages/footerModels/advertise'
import Policy from '../pages/footerModels/policy'
import Pursh from '../pages/footerModels/pursh'
const UserRoutes = () => {
  return (
    <UserLayout>
        <Routes>
            {/* home route  */}
            <Route  path='/' element={<Home/>} />
            <Route  path='/home' element={<Home/>} />
            <Route  path='/dashboard' element={<Dashboard/>} />
            <Route  path='/products/:term' element={<Products/>} />
            <Route  path='/products' element={<Products/>} />

            {/* home route  */}

            {/* aut route  */}
            <Route path='/login' element={<Login/>} />
            <Route path='/registre' element={<Registre/>} />
            {/* aut route  */}


            {/* woman routes  */}
            <Route path='/women' element={<Women/>} />
            <Route path='/woman_tshirt' element={<WomanTshirt/>} />
            <Route path='/woman_hoodie' element={<WomanHoodie/>} />
            <Route path='/woman_hat' element={<WomenHat/>} />
            <Route path='/woman_bucket_hat' element={<WomenBucketHat/>} />
            <Route path='/woman_dresse' element={<WomenDresse/>} />
            {/* woman routes  */}


            {/* man routes  */}
            <Route path='/men' element={<Men/>} />
            <Route path='/man_tshirt' element={<ManTshirt/>} />
            <Route path='/man_hoodie' element={<ManHoodie/>} />
            <Route path='/man_hat' element={<ManHat/>} />
            <Route path='/man_bucket_hat' element={<ManBucketHats/>} />
            {/* man routes  */}


            {/* kids route  */}
            <Route path='/kids' element={<Kids/>} />
            <Route path='/kids_tshirt' element={<KidsTshirt/>} />
            <Route path='/kids_hoodie' element={<KidsHoodie/>} />
            <Route path='/kids_hat' element={<KidsHat/>} />
            <Route path='/kids_bucket_hat' element={<KidsBucketHat/>} />
            <Route path='/kids_dresse' element={<KidsDresse/>} />

            {/* kids route  */}

            {/* category routes  */}
            <Route path='/tshirts' element={<Tshirt/>} />
            <Route path='/hoodies' element={<Hoodies/>} />
            <Route path='/hats' element={<Hats/>} />
            <Route path='/buckethats' element={<BucketHats/>} />
            <Route path='/dresses' element={<Dresses/>} />
            {/* category routes  */}


            {/* not found routes  */}
            <Route path='/*' element={<NotFound/>} />
            {/* not found routes  */}


            {/* user route  */}
            <Route path='/profile' element={<Profile/>} />
            {/* user route  */}


            {/* favorit route  */}
            <Route path='/favorites' element={<Favorit/>} />
            {/* favorit route  */}


            {/* contact us route  */}
            <Route path='/contact' element={<Contact/>} />
            {/* contact us route  */}

            {/* cart route  */}
            <Route path='/cart' element={<Cart/>} />
            <Route path='/checkout' element={<CheckOut/>} />
            {/* cart route  */}

            {/* one product route  */}
            <Route path='/show/:id' element={<Show/>} />
            {/* one product route  */}

            {/* buy noow route  */}
            <Route path='/buy' element={<Buy/>} />
            {/* buy noow route  */}


            {/* myorder route  */}
            <Route path='/myorders' element={<MyOrder/>} />
            {/* myorder route  */}

            {/* payment success route  */}
            <Route path='/paymentsuccess' element={<PaymentSuccess/>} />
            {/* payment success route  */}

            {/* reviews route  */}
            <Route path='/reviews' element={<Reviews/>} />
            {/* reviews route  */}


            {/* footer routes  */}
            <Route path='/aboutUs' element={<AboutUs/>} />
            <Route path='/getStart' element={<GetStart/>} />
            <Route path='/Career' element={<Career/>} />
            <Route path='/Selling' element={<Selling/>} />
            <Route path='/advertise' element={<Advertise/>} />
            <Route path='/cop' element={<Cop/>} />
            <Route path='/help' element={<Help/>} />
            <Route path='/pursh' element={<Pursh/>} />
            <Route path='/policy' element={<Policy/>} />
            <Route path='/faq' element={<FAQ/>} />
            {/* footer routes  */}
        </Routes>
    </UserLayout>
  )
}

export default UserRoutes
