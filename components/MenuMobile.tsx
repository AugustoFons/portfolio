'use client'
import Image from 'next/image'
import { useState, Fragment } from 'react'
import { Menu, Transition } from "@headlessui/react";
import Link from 'next/link';
import { NavLinks } from '@/constant'

const MenuMobile = () => {
    const [open, setOpen] = useState(false)


    return (
        <div className='md:hidden flexCenter z-10 flex-col relative'>
            <Menu as="div">
                <Menu.Button className="flexCenter" onClick={() => {setOpen(!open)}} >
                    <Image 
                        src='/menu.png'
                        width={48}
                        height={48}
                        alt='Boton menu'
                        className={open ? '-rotate-45' : ''}
                        />
                </Menu.Button>

                <Transition
                    as={Fragment}
                    >
                    <Menu.Items
                        static
                        className="flexStart menu-items group"
                        >
                        <div className="flex flex-col gap-6 pt-4 items-center w-full fuenteTexto">
                            {NavLinks.map((link) => (
                                <div key={link.key} className='w-max'>
                                    <Menu.Item>
                                        <Link 
                                            href={link.href} key={link.key} 
                                            className='fuenteTexto linkBorder box-decoration-slice py-4 px-3' 
                                            onClick={() => {setOpen(!open)}}
                                            >
                                            {link.text}
                                        </Link>
                                    </Menu.Item>
                                </div>
                            ))}    
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    )
}

export default MenuMobile