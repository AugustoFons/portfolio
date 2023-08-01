import { NavLinks } from '@/constant'
import Image from 'next/image'
import Link from 'next/link'
const Navbar = () => {
    return (
        <nav className='flex justify-center lg:justify-start navbar'>
            <div className='w-full flex-col content-center lg:flex lg:flex-row lg:items-center lg:justify-between py-2 lg:py-1'>
                <div className='w-full flex justify-center lg:justify-start'>
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
                    <ul className='flex text-base font-semibold py-4 lg:py-0 lg:text-lg gap-6 lg:gap-16 justify-center'> {/* xl:flex hidden text-small gap-7 */}
                        {NavLinks.map((link) => (
                            <div key={link.key} className='w-max'>
                                <Link href={link.href} key={link.key} className='filterColor fuenteTexto font-semibold'>
                                    {link.text}
                                </Link>
                            </div>
                        ))}    
                    </ul> 
                </div>


            </div>
        </nav>
    )
}

export default Navbar