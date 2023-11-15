import { useState } from 'react'
 import { useEffect } from 'react'
import "../public/styles.css"
import Navbar from './Navbar'
import Itemcard from './Itemcards'
import Footer from './Footer'
import axios from 'axios'
import ProductSection from './ProductSection'
  
function App() {
  const [count, setCount] = useState(0)
 
 
  
 
    return (
      <>
       <Navbar>
  
  
       </Navbar>
     <div className="space"></div>
   <ProductSection></ProductSection>
  
      
  
      
      
       
       
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam maiores blanditiis libero dolorem rerum temporibus, atque necessitatibus impedit a nisi odit autem. Numquam ullam inventore iste at quaerat incidunt dolores?Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae optio autem sint amet? Vitae reprehenderit quae, aliquam facere rem minus assumenda! Ipsa ad recusandae rerum sint at quasi quia nesciunt. </p>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam maiores blanditiis libero dolorem rerum temporibus, atque necessitatibus impedit a nisi odit autem. Numquam ullam inventore iste at quaerat incidunt dolores?Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae optio autem sint amet? Vitae reprehenderit quae, aliquam facere rem minus assumenda! Ipsa ad recusandae rerum sint at quasi quia nesciunt. </p>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam maiores blanditiis libero dolorem rerum temporibus, atque necessitatibus impedit a nisi odit autem. Numquam ullam inventore iste at quaerat incidunt dolores?Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae optio autem sint amet? Vitae reprehenderit quae, aliquam facere rem minus assumenda! Ipsa ad recusandae rerum sint at quasi quia nesciunt. </p>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam maiores blanditiis libero dolorem rerum temporibus, atque necessitatibus impedit a nisi odit autem. Numquam ullam inventore iste at quaerat incidunt dolores?Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae optio autem sint amet? Vitae reprehenderit quae, aliquam facere rem minus assumenda! Ipsa ad recusandae rerum sint at quasi quia nesciunt. </p>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam maiores blanditiis libero dolorem rerum temporibus, atque necessitatibus impedit a nisi odit autem. Numquam ullam inventore iste at quaerat incidunt dolores?Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae optio autem sint amet? Vitae reprehenderit quae, aliquam facere rem minus assumenda! Ipsa ad recusandae rerum sint at quasi quia nesciunt. </p>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam maiores blanditiis libero dolorem rerum temporibus, atque necessitatibus impedit a nisi odit autem. Numquam ullam inventore iste at quaerat incidunt dolores?Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae optio autem sint amet? Vitae reprehenderit quae, aliquam facere rem minus assumenda! Ipsa ad recusandae rerum sint at quasi quia nesciunt. </p>
     
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam maiores blanditiis libero dolorem rerum temporibus, atque necessitatibus impedit a nisi odit autem. Numquam ullam inventore iste at quaerat incidunt dolores?Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae optio autem sint amet? Vitae reprehenderit quae, aliquam facere rem minus assumenda! Ipsa ad recusandae rerum sint at quasi quia nesciunt. </p>

     
     <Footer></Footer>
    </>
    
    )
  
  
}

export default App
