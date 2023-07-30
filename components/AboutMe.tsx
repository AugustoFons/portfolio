import Image from "next/image"

const AboutMe = () => {
    return (
    <section className="flex-col items-center lg:flex lg:flex-row lg:items-center lg:justify-center">
        <div className="w-full lg:w-2/3 flex flex-col items-center">
            <h1 className="fuenteTitulo text-4xl text-center">Sobre Mi:</h1>
            <Image 
            src='/line.png'
            width={100}
            height={80}
            alt="line"
            />
            <Image
            width={190}
            height={100}
            src='/mifoto.png'
            alt="Mi Foto"
            className="rounded-full pt-4 lg:hidden"
            quality="100"
            />  
            <p className="justify-center py-2 hyphens-auto font-sans text-lg">
                Hola! Me llamo Augusto Fons, tengo 25 años y me dedico al Desarrollo Web Full Stack. Actualmente estoy radicado en La Ciudad de La Plata, Buenos Aires Argentina. He realizado una Diplomatura en Desarrollo Web Full Stack en Academia Numen, ademas me he capacitado en el uso de varias tecnologias tanto de programación como de marketing digital, soporte tecnico, excel, entre otras. Anteriormente he completado tambien estudios como Tecnico en Sonido y Grabacion. En este portfolio me gustaria que conozcan los proyectos en los que he estado trabajando y con los que continuo aprendiendo hoy en dia.
            </p>
        </div>
        <div className="py-2" >
            <Image
            width={240}
            height={100}
            src='/mifoto.png'
            alt="Mi Foto"
            className="rounded-full pt-4 hidden lg:flex"
            quality="100"
            />  
        </div>
    </section>
)
}

export default AboutMe