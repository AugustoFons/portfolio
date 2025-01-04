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
        <section className="lg:flex lg:items-center lg:justify-center md:gap-0 gap-8">
            <div className="w-full lg:w-3/4 flex flex-col items-center">
                <h1 id="sobreMi" className="fuenteTitulo text-5xl text-center mt-1">Sobre Mi:</h1>
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
                        width={285}
                        height={100}
                        src='/fotomy.png'
                        alt="Mi Foto"
                        className="rounded-full pt-3 pb-2 lg:pb-0 lg:hidden hover:scale-125 hover:backdrop-blur-sm transition-all duration-[2s] ease-linear"
                        quality="100"
                        />  
                </div>
                    <p className="text-left mx-auto max-w-3xl py-2 text-base lg:text-lg hyphens-auto fuenteTexto z-10">
                        <span className="py-1 text-base lg:text-2xl font-base rounded-lg letterSpecial m-0">
                            {`¡Bienvenido! `} 
                        </span>
                        Me llamo Augusto Fons. Vivo en La ciudad de La Plata, Argentina, y soy desarrollador web Full Stack. En este portfolio intento reflejar mi dedicación a la programación, y a la creación de soluciones digitales, compartiendo varios de los proyectos en los que trabajo, y a través de los cuales aprendo día a día. Actualmente me interesa ser parte de proyectos y oportunidades en los cuales pueda potenciar, desarrollar y aplicar mis conocimientos y habilidades. Para saber más sobre mí, mis estudios y experiencia profesional, pueden descargar mi CV o ver mis redes sociales que dejaré en la sección de contacto.
                    </p>
                <InView onChange={handleIntersection}>
                    <p className="justify-center text-center pt-1 text-base lg:text-2xl font-base rounded-lg letterSpecial">
                        {showTypewriter && <Typewriter text='¡Gracias por visitar mi portfolio!' cursor={cursorOptions} />}
                    </p>
                </InView>
            </div>

            <div className="hidden lg:flex pt-2 animacionMiFoto hover:px-1">
                <Image
                    width={350}
                    height={160}
                    src='/fotomy.png'
                    alt="Mi Foto"
                    className="pt-5 hover:w-[450px] hover:h-[auto] hover:backdrop-blur-sm transition-all duration-[2s] ease-linear"
                    quality="100"
                    />  
            </div>
        </section>
)
}

export default AboutMe