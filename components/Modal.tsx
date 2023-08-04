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
            <button type="button" onClick={back} className="absolute top-8 md:top-10 right-5 z-10">
                <Image src="/cerrar.png" width={38} height={38} alt="close" />
            </button>

            <div className="modal_wrapper">
                {children}
            </div>
        </div>
    );
}

export default Modal