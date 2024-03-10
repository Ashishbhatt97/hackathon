"use client";

import React from 'react'
import { useRouter } from 'next/navigation';
import Link from 'next/link';


const Navbar = () => {
    const adminLogin = localStorage.getItem("adminLogin");
    console.log(adminLogin);

    const router = useRouter();
    return (
        <div className="w-full h-[80px]  flex items-center justify-center">
            <div className="text-sm max-h-full flex gap-24 pl-20">
                <Link className="cursor-pointer" href={"/"} >Home</Link>
                <Link className="cursor-pointer" href={"/about"} >About Us</Link>

                {!adminLogin && <Link className="cursor-pointer" href={"/user/login"} >Login</Link>}
                <Link className="cursor-pointer" href={"/contact"} >Contact Us</Link>
                {adminLogin &&
                    <>

                        <Link className="cursor-pointer" href={"/contact"} >Dashboard</Link>
                        <h2 className="cursor-pointer" onClick={localStorage.setItem("adminLogin", null)} >Logout</h2>
                    </>
                }
            </div>
        </div >
    );
}

export default Navbar