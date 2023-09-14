"use client"
import React, { useState } from 'react'
import Image from "next/image";
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Logo from '@/assets/Logo.png'
import Icon from '@/assets/Icon.png'

const Header = () => {
    const [searchText, setSearchtext] = useState("")
    const router = useRouter()

    const handleSubmit = (e) => {
        e.preventDefault()
        if(searchText){
            router.push(`/movies/search?query=${searchText}`);
        }
    }

  return (
      <nav
        className="relative flex w-full flex-wrap items-center justify-between py-2 text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:py-4 z-20 px-10">
        <div className="flex w-full flex-wrap items-center justify-between px-3">
            <Link className="ml-2 text-xl text-neutral-800 dark:text-neutral-200"
            href="/"
            ><Image src={Logo} width={200} height={200}/></Link>

            <div className='w-[40%]'>
            <form role='search' onSubmit={e => handleSubmit(e)}
            className="ml-5 flex w-[100%] items-center justify-between rounded border border-solid border-neutral-300">
            <input
                onChange={e => setSearchtext(e.target.value)}
                type="search"
                class="relative m-0 block w-[1px] min-w-0 flex-auto bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none motion-reduce:transition-none dark:border-neutral-500 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="button-addon2" />

                <button type='submit'
                    className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-white dark:text-neutral-200"
                    id="basic-addon2">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="h-5 w-5">
                    <path
                        fill-rule="evenodd"
                        d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                        clip-rule="evenodd" />
                    </svg>
                </button>
            </form>
            </div>
            
            <div className='flex items-center justify-between gap-3'>
                <p>Sign in</p>
                <p className='w-[20px] h-[20px]'><Image src={Icon} alt='icon'/></p>
            </div>
            
        </div>
        </nav>
  )
}

export default Header
