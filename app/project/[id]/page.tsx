import { ProjectInterface } from '@/common.types'
import DescriptionProject from '@/components/DescriptionProject';
import Modal from '@/components/Modal';
import { getProjectId } from '@/lib/actions'
import Image from 'next/image'
import Link from 'next/link'



const Project = async ({ params: { id } }: { params: { id: string } }) => {

    /* get por ID */
    const data = await getProjectId(id) as {
        project?: ProjectInterface
    };
    const projectId = data?.project

    if (!data?.project) {
        <p>Failed to fetch</p>
    }

    return (
        <Modal>
            <section className='flex items-center px-7 py-4 md:h-40 h-20 rounded-lg mt-5 xs:mt-2' style={{
                backgroundImage: `url('/fondoTitulo.png')`,
                backgroundSize: ' 100% 91%',
                backgroundRepeat: 'no-repeat',
            }}>
                <p className='text-center text-3xl fuenteTitulo mb-4 tracking-wider z-10'>
                    {projectId?.title}
                </p>
            </section>

            <section className="mt-2 group">
                <Image
                    src={`${projectId?.image}`}
                    className="object-cover rounded-2xl lg:group-hover:blur-md"
                    width={1000}
                    height={563}
                    alt="portada"
                />

                <div className="hidden w-full lg:group-hover:flex flex-wrap justify-center mt-5 gap-5 lg:group-hover:-translate-y-80 xl:group-hover:-translate-y-96 group-hover:scale-150 z-10">
                    <Link href={`${projectId?.gitHub}`}>
                        <div className="flexCenter gap-1 filterColor">
                            <Image
                                src='/github.svg'
                                width={44}
                                height={44}
                                alt="github"
                                className="rounded-full"
                            />
                            <p className="font-semibold text-xs text-slate-500 group-hover:text-slate-700 fuenteTexto">Repositorio</p>
                        </div>
                    </Link>
                    <Image src="/dot.svg" width={6} height={6} alt="dot" className='mx-12' style={{
                        filter: 'brightness(0) saturate(100%)'
                    }} />
                    <Link href={`${projectId?.siteUrl}`} className="">
                        <div className="flexCenter gap-1 filterColor">
                            <Image
                                src="/deployment.png"
                                width={46}
                                height={46}
                                alt="deploy"
                                className="filterColor"
                            />
                            <p className="font-semibold text-xs text-slate-500 group-hover:text-slate-700 fuenteTexto">Deploy</p>
                        </div>
                    </Link>
                </div>
            </section>

            <section className="flexCenter flex-col mt-4">

                <DescriptionProject description={projectId?.description} />

                <div className="flex flex-col sm:flex-row mt-5 gap-2 xs:gap-5 group-hover:scale-150 group-hover:-translate-y-96 z-10">
                    <Link href={`${projectId?.gitHub}`}>
                        <div className="flexCenter gap-1 filterColor">
                            <Image
                                src='/github.svg'
                                width={34}
                                height={34}
                                alt="github"
                                className="rounded-full"
                            />
                            <p className="font-semibold text-xs text-slate-500 group-hover:text-slate-700 fuenteTexto">Repositorio</p>
                        </div>
                    </Link>
                    <Image src="/dot.svg" width={6} height={6} alt="dot" className='hidden sm:flex md:mx-12' />
                    <Link href={`${projectId?.siteUrl}`} className="">
                        <div className="flex items-center gap-1 filterColor">
                            <Image
                                src="/deployment.png"
                                width={36}
                                height={36}
                                alt="deploy"
                                className="filterColor"
                            />
                            <p className="font-semibold text-xs text-slate-500 group-hover:text-slate-700 fuenteTexto">Deploy</p>
                        </div>
                    </Link>
                </div>
            </section>

        </Modal>
    )
}

export default Project