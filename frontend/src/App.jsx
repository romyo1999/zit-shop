import { useState } from 'react'

import { PayPalScriptProvider } from "@paypal/react-paypal-js";

import './App.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './route'

function App() {
  const [count, setCount] = useState(0)
  

  return (
    <PayPalScriptProvider>

    <div  options={{ "client-id": "AeUcvpPwu-9bRDlYBp5Mugyrf3hKj7C8n9wFzLY_R1hSeKNgdUqBcl9dbduVqBGoKFEr5wVS0eqDXYrA" }} >
    <RouterProvider router={router}/>
    </div>
    </PayPalScriptProvider>

  )
}

export default App
