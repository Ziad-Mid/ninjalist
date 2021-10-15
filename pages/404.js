import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router'

function NotFound() {
    const router = useRouter()
    const [counter, setCounter] = useState(5)
   useEffect(() => {
       setTimeout(()=>{
        // router.go(1)
        router.push('/')

       },5000)
       
   }, [])  

   useEffect(() => {
    const interval = setInterval(() => {
      setCounter(counter -1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });

    return (
        <div className='not-found'>
        <div className='container'>
            <h1>Oooops...</h1>
            <h2>That page cannot be found.</h2>
            <p>Go back to the <Link href="/">Homepage</Link> </p>
        </div> 
            <h2>Redirecting to Home in <span style={{color:'red'}}>{counter}</span> </h2>
        </div>
    )
}

export default NotFound
