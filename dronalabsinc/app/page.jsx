"use client"
import Photo from './components/Api_Integration.jpg'
import Image from 'next/image'
import Link from 'next/link'
 
import { motion } from 'framer-motion';
import Head from 'next/head'
 
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar';

export default function Home() {
 
  return (
    <main>
      <h2>Dashboard</h2>
     
      <div className="flex-container">
        <div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}   // Initial state: invisible and moved down
              animate={{ opacity: 1, x: 10 }}    // Animate to visible and move up to original position
              transition={{ duration: 1.5 }}    // Animation duration: 1.5 seconds
              >
                
                <Image
              className='photo'
              src={Photo}
              alt='Dojo Photo'
              width={870}
              height={870}
              placeholder='blur'
              quality={100}
                />  
            </motion.div>
          </div>
          <div>
            <p className= "parag">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero repellendus tempore, exercitationem odit, quasi doloremque possimus recusandae alias sequi totam soluta natus iure eius, obcaecati sint dolores blanditiis aspernatur quo officia iusto ut. Et, aliquid sed voluptates iste cum totam, facere explicabo, fugit suscipit ratione aspernatur consequuntur ex mollitia quaerat?
            </p>
          </div>
      </div>  

      <div className="flex justify-center my-8">
        <Link href="/tickets">
          <button className="btn-primary">View Tickets</button>
        </Link>
      </div>
    
      <h2>Company Updates</h2>

      <div className="card">
        <h3>New member of the web dev team...</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, at quam. Dolores omnis possimus quam soluta rerum illo laborum ullam pariatur molestiae, modi beatae corrupti.</p>
      </div>
      <div className="card">
        <h3>New website live!</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, at quam. Dolores omnis possimus quam soluta rerum illo laborum ullam pariatur molestiae, modi beatae corrupti, assumenda distinctio adipisci, cupiditate minima eum vitae? Similique dicta est facilis debitis, autem temporibus quo repellat illum unde id iste veritatis eveniet, aspernatur enim quas.</p>
      </div>
    </main>
  )
}