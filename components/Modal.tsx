'use client'

import { useCallback, ReactNode} from 'react'
import { useRouter } from "next/navigation"
import Image from "next/image"

const Modal = ({ children }: { children: ReactNode }) => {

    const router = useRouter();

    const back = useCallback(() => {        
        router.push("/");
    }, [router]);

    return (
        <div className="modal swing-in-top-fwd">
            <button type="button" onClick={back} className="absolute top-8 md:top-14 right-5 md:right-8 z-10 hover:-rotate-12 hover:scale-105">
                <Image src="/cerrar.png" width={42} height={42} alt="close" />
            </button>

            <div className="modal_wrapper">
                {children}
            </div>
        </div>
    );
}

export default Modal