import { NavLinks } from '@/constant'
import Image from 'next/image'
import Link from 'next/link'
import MenuMobile from './MenuMobile'

const Navbar = () => {
    return (
        <nav className='flex justify-center lg:justify-start navbar'>
            <div className='w-full content-center flex flex-row items-center justify-between py-1'>
                <div className='w-full flex justify-start'>
                    <Link href='/'>
                        <Image
                        src='/lg.png'
                        width={190}
                        height={100}
                        alt='Augusto Fons'
                        />
                    </Link>
                </div>
                <div>
                    <ul className='hidden md:flex text-base font-semibold lg:text-lg xs:gap-8 gap-16 justify-center'> {/* xl:flex hidden text-small gap-7 */}
                        {NavLinks.map((link) => (
                            <div key={link.key} className='w-max'>
                                <Link href={link.href} key={link.key} className='fuenteTexto linkBorder box-decoration-slice py-4 px-3'>
                                    {link.text}
                                </Link>
                            </div>
                        ))}    
                    </ul> 
                </div>
                <MenuMobile />
            </div>
        </nav>
    )
}

export default Navbar