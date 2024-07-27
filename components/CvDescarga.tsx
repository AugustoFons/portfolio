import Cv from './Cv';
import Link from 'next/link';

const CvDescarga = () => {

    return (
        <section id='cv' className='h-fit flex flex-col justify-start mb-20 lg:mb-0 lg:mt-1 cvResponsive'>
            <div className="relative py-4 sm:mt-7 w-72 xs:w-full sm:max-w-xl sm:mx-auto group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#ffc954b3] to-[#ffd677b3] group-hover:from-[#ffae00b3] group-hover:to-[#FFCA54] shadow-xl transform -skew-y-6 sm:skew-y-0 -rotate-6 rounded-3xl"></div>
                    <section className="relative py-4 bg-white shadow-lg sm:rounded-3xl sm:py-10 px-1 xs:px-0 sm:px-10 lg:px-4">
                            <Link href="https://drive.google.com/file/d/1GHrfc1irViLSRki6pIIZBgfP6599a976/view?usp=drive_link">
                                <Cv/>
                            </Link>
                    </section>
                </div>
        </section>
    )
}

export default CvDescarga