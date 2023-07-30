import { NavLinks } from '@/constant'
import Image from 'next/image'
import Link from 'next/link'
const Navbar = () => {
    return (
        <nav className='flex justify-center lg:justify-start navbar'>
            <div className=' flex-col content-center lg:flex lg:flex-row lg:items-center lg:justify-start py-2 gap-80'>
                <div className='w-full flex justify-center'>
                    <Link href='/'>
                        <Image
                        src='/lg.png'
                        width={200}
                        height={100}
                        alt='Augusto Fons'
                        />
                    </Link>
                </div>

                    <ul className='flex text-base font-semibold py-4 lg:py-0 xl:text-lg gap-7 lg:gap-16 justify-center'> {/* xl:flex hidden text-small gap-7 */}
                        {NavLinks.map((link) => (
                            <div key={link.key} className='w-max'>
                                <Link href={link.href} key={link.key} className='filterColor'>
                                    {link.text}
                                </Link>
                            </div>
                        ))}    
                    </ul> 

            </div>
        </nav>
    )
}

export default Navbar