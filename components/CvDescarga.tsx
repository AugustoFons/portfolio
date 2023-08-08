import TextareaAutosize from 'react-textarea-autosize';
import Image from 'next/image';
import Cv from './Cv';
const CvDescarga = () => {

    return (
        <section className='h-fit py-0 flex flex-col justify-start mb-16 lg:mt-1 contactoResponsive'>
            <div className="relative py-4 sm:mt-7 w-72 xs:w-full sm:max-w-xl sm:mx-auto group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#FFCA54] to-[#ffd677] group-hover:from-[#FFAF00] group-hover:to-[#FFCA54] shadow-lg transform skew-y-6 sm:skew-y-0 rotate-6 rounded-3xl"></div>
                    <section className="relative py-4 bg-white shadow-lg sm:rounded-3xl sm:py-10 px-1 xs:px-0 sm:px-10 lg:px-4">
                        <div className="max-w-md mx-auto flex flex-col">
                            <Cv/>
                        </div>
                    </section>
                </div>
        </section>
    )
}

export default CvDescarga