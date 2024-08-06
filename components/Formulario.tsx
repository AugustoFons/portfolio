'use client'
import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import TextareaAutosize from 'react-textarea-autosize';
import Image from 'next/image';
import Redes from './Redes';

const Formulario: React.FC = () => {
    const [nombreValue, setNombreValue] = useState(''); //estos estados son solo para verificar si hay algun valor en los input y reposicionar el placeholder
    const [emailValue, setEmailValue] = useState('');
    const [mensajeValue, setMensajeValue] = useState('');

    const [envioExitoso, setEnvioExitoso] = useState(false);
    const [enviando, setEnviando] = useState(false);

    const form: any = useRef();

    const sendEmail = (e: any) => {
        e.preventDefault();
        setEnviando(true);
        
        emailjs.sendForm('service_wmh8cxj', 'template_vw5agvk', form.current, 'VVlLmi1iNNIDDwVdN')
            .then((result) => {
                console.log(result.text);
                setEnvioExitoso(true);

                setTimeout(() => {
                    setEnviando(false); // Ocultar el estado de envío después de unos segundos
                    setEnvioExitoso(false);
                    setNombreValue('')
                    setEmailValue('')
                    setMensajeValue('')
                }, 1000);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <section id='contacto' className='min-h-fit flex flex-col justify-start mb-0 mt-3 lg:mt-1 contactoResponsive'>
            <div className="relative py-4 sm:mt-7 w-full lg:max-w-xl sm:mx-auto group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#ffc954b3] to-[#ffd677b3] group-hover:from-[#ffae00b3] group-hover:to-[#FFCA54] shadow-xl transform skew-y-6 sm:skew-y-0 rotate-6 rounded-3xl transition-all duration-[1s] ease-in"></div>
                <section className="relative py-4 bg-white shadow-lg sm:rounded-3xl sm:py-10 px-6 xs:px-8 sm:px-20 lg:px-14">
                        <div className='flex flex-col items-center'>
                            <h1 className="fuenteTitulo text-4xl md:text-5xl text-center w-full">Contacto:</h1>
                            <Image
                                src='/subContacto.png'
                                width={144}
                                height={80}
                                alt="line"
                                className='-ml-3 -translate-y-1 group-hover:filterColorCv transition-all duration-[0.8s] ease-in'
                            />
                        </div>
                        <form ref={form} onSubmit={sendEmail} className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                            <div className="relative py-2">
                                <TextareaAutosize
                                    id="nombre"
                                    name="user_name"
                                    className={`peer placeholder-transparent h-12 w-3/4 xs:w-full border-b-2 fuenteTexto text-base focus:outline-none focus:border-[#FFCA54]  resize-none ${nombreValue ? 'peer-placeholder-shown:top-2' : 'peer-placeholder-shown:top-8'}`}
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
                                    id="email"
                                    name="user_email"
                                    className={`peer placeholder-transparent h-12 w-3/4 xs:w-full border-b-2 fuenteTexto text-base focus:outline-none focus:border-[#FFCA54]  resize-none ${emailValue ? 'peer-placeholder-shown:top-2' : 'peer-placeholder-shown:top-8'}`}
                                    placeholder=" "
                                    value={emailValue}
                                    onChange={(e) => setEmailValue(e.target.value)}
                                    rows={1}
                                />
                                <label
                                    htmlFor="email"
                                    className={`absolute left-0 -top-3.5 text-base peer-placeholder-shown:text-base  fuenteTexto ${emailValue ? 'peer-placeholder-shown:top-2' : 'peer-placeholder-shown:-top-2'} transition-all peer-focus:-top-3.5`}
                                >
                                    Email
                                </label>
                            </div>
                            <div className="relative py-2 my-2">
                                <TextareaAutosize
                                    id="mensaje"
                                    name="message"
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

                                {envioExitoso ? 
                                    <button 
                                        disabled
                                        type="submit" 
                                        value="Send" 
                                        className="flex  items-center gap-1 bg-[#FFCA54] group-hover:bg-[#FFAF00] text-white rounded-md px-2 py-1 transition-all duration-[2s] ease-in"
                                    >
                                        Enviar
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </button>
                                    :
                                    <button
                                        type="submit"
                                        value="Send"
                                        className="flex items-center gap-1 bg-[#FFCA54] group-hover:bg-[#FFAF00] text-white rounded-md px-2 py-1"
                                        disabled={enviando}
                                    >
                                        Enviar
                                        {enviando && (
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 animate-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                        )}
                                    </button>
                                }
                            </div>
                        </form>
                        <Redes />
                </section>
            </div>
        </section>
    );
};

export default Formulario;


