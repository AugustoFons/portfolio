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
        <div className="modal">
            <button type="button" onClick={back} className="absolute top-12 right-8 z-10">
                <Image src="/close.svg" width={27} height={27} alt="close" />
            </button>

            <div className="modal_wrapper">
                {children}
            </div>
        </div>
    );
}

export default Modal