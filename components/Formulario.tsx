'use client'
import React, { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import Image from 'next/image';
import Redes from './Redes';

const Formulario: React.FC = () => {
    const [nombreValue, setNombreValue] = useState('');
    const [asuntoValue, setAsuntoValue] = useState('');
    const [mensajeValue, setMensajeValue] = useState('');


    return (
        <section className='min-h-screen py-2 flex flex-col justify-center sm:py-12'>
            <div className="relative py-4 sm:mt-7 w-full sm:max-w-xl sm:mx-auto group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#FFCA54] to-[#ffd677] group-hover:from-[#FFAF00] group-hover:to-[#FFCA54] shadow-lg transform -skew-y-6 sm:skew-y-0 -rotate-6 rounded-3xl"></div>
                <section className="relative px-2 py-4 bg-white shadow-lg sm:rounded-3xl sm:py-10 sm:px-20">
                    <div className="max-w-md mx-auto flex flex-col">
                        <div className='flex flex-col items-center'>
                            <h1 className="fuenteTitulo text-4xl md:text-5xl text-center w-full">Contacto:</h1>
                            <Image
                                src='/subContacto.png'
                                width={144}
                                height={80}
                                alt="line"
                                className='-ml-3 -translate-y-1 group-hover:filterColorCv'
                            />
                        </div>
                        <div>
                            <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                <div className="relative py-2">
                                <TextareaAutosize
                                        id="nombre"
                                        name="nombre"
                                        className={`peer placeholder-transparent h-12 w-full border-b-2 fuenteTexto text-base focus:outline-none focus:border-[#FFCA54]  resize-none ${nombreValue ? 'peer-placeholder-shown:top-2' : 'peer-placeholder-shown:top-8'}`}
                                        placeholder=" "
                                        value={nombreValue}
                                        onChange={(e) => setNombreValue(e.target.value)}
                                        rows={1}
                                    />
                                    <label
                                        htmlFor="nombre"
                                        className={`absolute left-0 -top-3.5 text-base peer-placeholder-shown:text-base  fuenteTexto ${nombreValue ? 'peer-placeholder-shown:top-2' : 'peer-placeholder-shown:-top-2'} transition-all peer-focus:-top-3.5`}
                                    >
                                        Nombre
                                    </label>
                                </div>
                                <div className="relative py-2">
                                <TextareaAutosize
                                        id="asunto"
                                        name="asunto"
                                        className={`peer placeholder-transparent h-12 w-full border-b-2 fuenteTexto text-base focus:outline-none focus:border-[#FFCA54]  resize-none ${asuntoValue ? 'peer-placeholder-shown:top-2' : 'peer-placeholder-shown:top-8'}`}
                                        placeholder=" "
                                        value={asuntoValue}
                                        onChange={(e) => setAsuntoValue(e.target.value)}
                                        rows={1}
                                    />
                                    <label
                                        htmlFor="asunto"
                                        className={`absolute left-0 -top-3.5 text-base peer-placeholder-shown:text-base  fuenteTexto ${asuntoValue ? 'peer-placeholder-shown:top-2' : 'peer-placeholder-shown:-top-2'} transition-all peer-focus:-top-3.5`}
                                    >
                                        Asunto
                                    </label>
                                </div>
                                <div className="relative py-2 my-2">
                                    <TextareaAutosize
                                        id="mensaje"
                                        name="mensaje"
                                        className={`peer placeholder-transparent h-12 w-full border-b-2 fuenteTexto text-base focus:outline-none focus:border-[#FFCA54] ${mensajeValue ? 'peer-placeholder-shown:top-2' : 'peer-placeholder-shown:top-8'}`}
                                        placeholder=" "
                                        value={mensajeValue}
                                        onChange={(e) => setMensajeValue(e.target.value)}
                                        minRows={2}
                                    />
                                    <label
                                        htmlFor="mensaje"
                                        className={`absolute left-0 -top-3.5 text-base peer-placeholder-shown:text-base  fuenteTexto ${mensajeValue ? 'peer-placeholder-shown:top-2' : 'peer-placeholder-shown:-top-2'} transition-all peer-focus:-top-3.5`}
                                    >
                                        Mensaje
                                    </label>
                                </div>
                                <div className="flex flex-col items-center">
                                    <button className="bg-[#FFCA54] group-hover:bg-[#FFAF00] text-white rounded-md px-2 py-1">Enviar</button>
                                </div>
                                <Redes />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
};

export default Formulario;


