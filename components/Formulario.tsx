import React from 'react'
import Image from 'next/image'
import Redes from './Redes'
const Formulario = () => {
    return (
        <section className="relative py-4 mt-7 sm:max-w-xl sm:mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-[#FFCA54] to-[#ffd677] shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
            <div className="relative px-2 py-4 bg-white shadow-lg sm:rounded-3xl sm:py-10 sm:px-20">
                <div className="max-w-md mx-auto">
                    <div className='flex flex-col items-center'>
                        <h1 className="fuenteTitulo text-4xl md:text-5xl text-center w-full">Contacto:</h1>
                        <Image
                            src='/subContacto.png'
                            width={144}
                            height={80}
                            alt="line"
                            className='-ml-3 -translate-y-1'
                        />
                    </div>
                    <div className="divide-y divide-gray-200">
                        <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                            <div className="relative">
                                <input id="email" name="email" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
                                <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Nombre</label>
                            </div>
                            <div className="relative">
                                <input id="password" name="password" type="password" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
                                <label htmlFor="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Asunto</label>
                            </div>
                            <div className="relative">
                                <input id="password" name="password" type="password" className="peer placeholder-transparent h-14 focus:h-20 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
                                <label htmlFor="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Mensaje</label>
                            </div>
                            <div className="flex flex-col items-center">
                                <button className="bg-[#FFCA54] text-white rounded-md px-2 py-1">Enviar</button>
                            </div>
                            <Redes />

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Formulario