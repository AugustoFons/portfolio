import React from 'react'
import Image from 'next/image'
const Cv = () => {
    return (
        <section className='w-full flex justify-center items-center mt-5 cv'>
            <div className='w-96 h-96  md:w-96 md:h-96 md:rounded-full flex flex-col items-center mt-20 group backdrop-blur-sm cursor-pointer p-3 md:p-4' style={{
                backgroundImage: `url('/fondoCVdiv.png')`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                }}
                >
                    <div>
                        <h1 className="fuenteTitulo text-4xl md:text-5xl  text-center mt-8 xs:mt-8 group-hover:pb-2">Descargar <br />CV</h1>
                    </div>
            <Image 
                    src='/flechacv.png'
                    width={130}
                    height={188}
                    alt="descargarcv"
                    className='ml-4 scale-75 -translate-y-6 xs:-translate-y-0 xs:scale-100 group-hover:scale-75 xs:group-hover:scale-105 responsiveMob'
                    />
            </div>
        </section>

    )
}

export default Cv