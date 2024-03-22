'use client'
import Image from "next/image"
import { useEffect, useState } from "react";
import Typewriter from 'react-ts-typewriter';
import { InView  } from 'react-intersection-observer';

const AboutMe = () => {
    const [cursorOptions, setCursorOptions] = useState<boolean>(true) //estado para que desaparezca el cursor cuando termina la escritura automatica
    const [showTypewriter, setShowTypewriter] = useState(false);
    
    const handleIntersection = (inView: boolean) => {
        setCursorOptions(true);
        setShowTypewriter(inView);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setCursorOptions(false);
        }, 3500);
        // Limpiar el temporizador cuando el componente se desmonta
        return () => clearTimeout(timer);
    }, [handleIntersection]);



    return (
        <section className="lg:flex lg:items-center lg:justify-center gap-8">
            <div className="w-full lg:w-3/4 flex flex-col items-center">
                <h1 id="sobreMi" className="fuenteTitulo text-5xl text-center mt-4">Sobre Mi:</h1>
                <Image 
                    src='/line.png'
                    width={100}
                    height={80}
                    alt="line"
                    />
                <div className="animacion hover:pt-8 hover:pb-5" style={{
                        backgroundImage: `url('/fondo1.png')`,
                        background: '100% 91% no-repeat',
                    }}>
                    <Image
                        width={255}
                        height={100}
                        src='/mifoto.png'
                        alt="Mi Foto"
                        className="rounded-full pt-3 pb-2 lg:pb-0 lg:hidden hover:scale-125 hover:backdrop-blur-sm"
                        quality="100"
                        />  
                </div>
                    <p className="text-justify mx-auto max-w-4xl py-2 text-base lg:text-lg hyphens-auto fuenteTexto">
                        <span className="py-1 text-base lg:text-2xl font-base rounded-lg letterSpecial m-0">
                            {`¡Bienvenido! `} 
                        </span>
                        Me llamo Augusto Fons. Vivo en La ciudad de La Plata, Argentina, y soy desarrollador web Full Stack. En este portfolio intento reflejar mi dedicación a la programación, y a la creación de soluciones digitales, compartiendo varios de los proyectos en los que he estado trabajando, y a través de los cuales aprendo día a día. Actualmente me interesa ser parte de proyectos y oportunidades en los cuales pueda potenciar, desarrollar y aplicar mis conocimientos y habilidades. Para saber más sobre mí, pueden descargar mi CV o ver mis redes sociales que dejaré en la sección de contacto.
                    </p>
                <InView onChange={handleIntersection}>
                    <p className="justify-center text-center py-1 text-base lg:text-2xl font-base rounded-lg letterSpecial">
                        {showTypewriter && <Typewriter text='¡Gracias por visitar mi portfolio!' cursor={cursorOptions} />}
                    </p>
                </InView>
            </div>

            <div className="hidden lg:flex pt-2 animacionMiFoto hover:px-1" style={{
                backgroundImage: `url('/fondo1.png')`,
                }} >
                <Image
                    width={240}
                    height={100}
                    src='/mifoto.png'
                    alt="Mi Foto"
                    className="rounded-full pt-5 hover:scale-125 hover:backdrop-blur-sm"
                    quality="100"
                    />  
            </div>
        </section>
)
}

export default AboutMe