import Image from 'next/image'

const Footer = () => {
    return (
    <footer className='flex justify-center py-4 px-5 bg-amber-100'>
        <div className='w-full max-w-screen-lg flex flex-col items-center gap-2'>
            <Image
                src='/lg.png'
                width={140}
                height={100}
                alt='Augusto Fons'
                className='back'
            />
            <div className='max-sm:w-full'>
                <p className='text-center fuenteTexto font-medium'>
                    © 2023 Portfolio. Sitio desarrollado por{" "}
                    <a
                        href='mailto:augustofonsdev@gmail.com'
                        className='text-[#ff8000] hover:underline'
                    >
                        augustofonsdev@gmail.com
                    </a>
                </p>
            </div>
        </div>
    </footer>
    )
}

export default Footer