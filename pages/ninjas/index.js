import React from 'react'
import Head from 'next/head'
import styles from '../../styles/Ninjas.module.css'
import Link from 'next/link'


// ROUTE : ../ninjas/

//fetch data 
export const getStaticProps = async ()=>{

    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()

    return {
        props : {
            ninjas : data
        }
    }
}

function Ninjas({ninjas}) {
    return (
        <>
        <Head>
        <title>Ninja List | List</title>
        </Head>
        <div>
          <h1>Ninjas list</h1>
            {ninjas.map(ninja =>(
                <Link href={`/ninjas/${ninja.id}`} key={ninja.id}>
                    <a className={styles.single}>
                        <h3>{ninja.name}</h3>
                    </a>
                </Link>
            ))}
        </div>
        </>
    )
}

export default Ninjas
