import React from 'react'
import Image from 'next/image'
const Redes = () => {
  return (
    <div className="flex flex-col items-center text-center h-96 w-full">
        <div className='flex flex-col items-center'>
            <h1 className="fuenteTitulo text-4xl md:text-5xl text-center w-full">Contacto:</h1>
                    <Image 
                    src='/line.png'
                    width={100}
                    height={80}
                    alt="line"
                    />
        </div>
                    
                    <Image 
                    src='/github.svg'
                    width={80}
                    height={80}
                    alt="descargarcv"
                    />
    </div>
  )
}

export default Redes