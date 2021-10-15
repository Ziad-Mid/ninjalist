import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
function Navbar() {
    return (
        <div>
            <nav>
                <div className="logo">
                    <Image src="/logo.png" width={128} height={77} />
                </div>
                <Link href="/"><a>Home</a></Link> <br />
                <Link href="/about"><a>About</a></Link> <br />
                <Link href="/ninjas"><a>Ninjas List</a></Link> <br />
             
            </nav>
        </div>
    )
}

export default Navbar
