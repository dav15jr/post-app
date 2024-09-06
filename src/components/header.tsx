'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const navLinks = [
{
  href:"/",
  label: "Home",
},
{
  href:"/posts",
  label: "Posts",
},
{
  href:"/create-post",
  label: "Create post",
}
]

function Header() {
const pathname = usePathname();

  return (
    <header className='flex justify-between items-center py-4 px-7 border-b' >
      <Link href='/'>
        <Image 
        src="/222-no-bg.png" 
        width="35" 
        height="35" 
        alt="Logo"
        className='w-[35px] h-[35px] '
        />
      </Link>

      <nav className="">
        <ul className="flex gap-x-5 text-[14px]">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link className={`${
                pathname === link.href ? "text-zinc-900" : "text-zinc-400"
                }`} href={link.href}>{link.label}</Link>
            </li> 
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header

