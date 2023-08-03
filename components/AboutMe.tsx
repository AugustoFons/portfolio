import Image from "next/image"

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
                <p className="justify-center mt-1 py-1 lg:py-0 fuenteTexto text-base lg:text-lg hyphens-auto">
                    Hola! Me llamo Augusto Fons, tengo 25 años y me dedico al Desarrollo Web Full Stack. Actualmente estoy radicado en La Ciudad de La Plata, Buenos Aires Argentina. He realizado una Diplomatura en Desarrollo Web Full Stack en Academia Numen, ademas me he capacitado en el uso de varias tecnologias tanto de programación como de marketing digital, soporte tecnico, excel, entre otras. Anteriormente he completado tambien estudios como Tecnico en Sonido y Grabacion. En este portfolio me gustaria que conozcan los proyectos en los que he estado trabajando y con los que continuo aprendiendo hoy en dia.
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