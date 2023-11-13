import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Navbar from './Navbar'
import Itemcard from './Itemcards'
import Footer from './Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar>


     </Navbar>
   
 

    
   <>
   <div className='product-section'>
    <Itemcard></Itemcard>
    <Itemcard></Itemcard>
    <Itemcard></Itemcard>
    </div>
   

   <Footer></Footer>
  </>
   </>
  )
}

export default App
