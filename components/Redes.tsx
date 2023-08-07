import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Formulario from './Formulario'

const Redes = () => {
    return (
            <div className='flex items-center gap-10'>
                <Link href={'https://github.com/AugustoFons'}>
                    <Image
                        src='/github.svg'
                        width={50}
                        height={50}
                        alt="descargarcv"
                        className='filterColor'
                    />
                </Link>
                <Link href={'https://github.com/AugustoFons'}>
                    <Image
                        src='/lk.svg'
                        width={70}
                        height={69}
                        alt="descargarcv"
                        className='filterColor'
                    />
                </Link>
                <Link href={'https://github.com/AugustoFons'}>
                    <Image
                        src='/instagram.svg'
                        width={69}
                        height={69}
                        alt="descargarcv"
                        className='filterColor'
                    />
                </Link>
            </div>
    )
}

export default Redes