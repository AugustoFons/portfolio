import React from 'react'
import Image from 'next/image'

const Cv = () => {
    return (
        <section className='flex justify-center items-center'>
            <div className='md:rounded-full flex flex-col items-center group backdrop-blur-sm cursor-pointer p-3 md:p-4 cv'>
                <div>
                    <h1 className="fuenteTitulo text-4xl md:text-5xl text-center mt-28 xs:mt-20 pt-3 xs:pt-2 group-hover:pb-2 transition-all duration-1000 ease-linear">
                        Descargar <br />CV
                    </h1>
                </div>
                <Image 
                    src='/flechacv.png'
                    width={126}
                    height={181}
                    alt="descargarcv"
                    className='ml-4 xs:-translate-y-1 xs:group-hover:-translate-y-2 sm:group-hover:filterColorCv  responsiveDescarga'
                />
            </div>
        </section>


    )
}

export default Cv