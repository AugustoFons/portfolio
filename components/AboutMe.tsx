'use client'
import Image from "next/image"
import Typewriter from 'react-ts-typewriter';

const AboutMe = () => {

    return (
        <section className="flex-col items-center lg:flex lg:flex-row lg:items-center lg:justify-center">
            <div className="w-full lg:w-3/4 flex flex-col items-center">
                <h1 id="sobreMi" className="fuenteTitulo text-5xl text-center">Sobre Mi:</h1>
                <Image 
                    src='/line.png'
                    width={100}
                    height={80}
                    alt="line"
                    />
                <div className="pt-0 mt-2 animacion hover:pb-5" style={{
                    backgroundImage: `url('/fondo1.png')`,
                    backgroundSize: ' 100% 91%',
                    backgroundRepeat: 'no-repeat',
                    }} >
                        <Image
                            width={255}
                            height={100}
                            src='/mifoto.png'
                            alt="Mi Foto"
                            className="rounded-full pt-6 pb-2 lg:pb-0 lg:hidden hover:scale-125 hover:backdrop-blur-sm"
                            quality="100"
                            />  
                </div>
                <p className="justify-center indent-1 py-1 text lg:py-1 text-base lg:text-lg hyphens-auto fuenteTexto">
                ¡Hola! me llamo Augusto Fons, soy desarrollador web Full Stack, vivo en La ciudad de La Plata, Argentina. Apasionado por la programación y la creación de soluciones digitales. En este portfolio me gustaría compartirles varios de los proyectos en los que he estado trabajando, y con los que aprendo día a día. Actualmente me interesa ser parte de proyectos y oportunidades en las cuales pueda potenciar, desarrollar y aplicar mis conocimientos y habilidades. Para saber más sobre mí, pueden descargar mi CV o ver mis redes que dejaré en la sección de contacto.
                </p>
                
                <p className="indent-1 py-1 lg:py-0 text-base lg:text-lg font-bold text-start fuenteTexto rounded-lg ">
                    <Typewriter text='¡Gracias por visitar mi portfolio!' />
                </p>
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