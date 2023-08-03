import Image from 'next/image'

const Footer = () => {
    return (
        <footer className='flexStart footer lg:px-20 py-4 px-5'>
            <div className='flex flex-col gap-5 w-full'>
                <div className='flex flex-col items-start'>
                    <Image
                        src='/logo.png'
                        width={150}
                        height={100}
                        alt='Augusto Fons'
                        />
                </div>
                <div className='footer_copyright'>
                    <p>
                        @ 2023 Portfolio. Sitio desarrollado por augustofonsdev@gmail.com
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer