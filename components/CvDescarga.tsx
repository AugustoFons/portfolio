import TextareaAutosize from 'react-textarea-autosize';
import Image from 'next/image';
import Cv from './Cv';
const CvDescarga = () => {

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
                        <Cv/>
                    </div>
                </section>
            </div>
        </section>
    )
}

export default CvDescarga