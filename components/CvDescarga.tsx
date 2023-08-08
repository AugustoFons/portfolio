import Cv from './Cv';
import Link from 'next/link';

const CvDescarga = () => {

    return (
        <section className='h-fit flex flex-col justify-start mb-24 lg:mb-0 lg:mt-1 cvResponsive'>
            <div className="relative py-4 sm:mt-7 w-72 xs:w-full sm:max-w-xl sm:mx-auto group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#FFCA54] to-[#ffd677] group-hover:from-[#FFAF00] group-hover:to-[#FFCA54] shadow-xl transform -skew-y-6 sm:skew-y-0 -rotate-6 rounded-3xl"></div>
                    <section className="relative py-4 bg-white shadow-lg sm:rounded-3xl sm:py-10 px-1 xs:px-0 sm:px-10 lg:px-4">
                        <div>
                            <Link href="https://drive.google.com/file/d/11psC_23Ce2azTmR9LapWT1QJdIZV5CJi/view?usp=drive_link">
                                <Cv/>
                            </Link>
                        </div>
                    </section>
                </div>
        </section>
    )
}

export default CvDescarga