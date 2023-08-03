import { ProjectInterface } from '@/common.types'
import Modal from '@/components/Modal';
import { getProjectId } from '@/lib/actions'
import Image from 'next/image'
import  Link  from 'next/link'

const Project = async ({ params: { id } }: { params: { id: string } }) => {

    const data = await getProjectId(id) as {
        project?: ProjectInterface
    };

    const projectId = data?.project

    if (!data?.project) {
        <p>Failed to fetch</p>
    }

    return (
        <Modal>
            <section className='w-full'>
                    <p className='text-center text-2xl fuenteTitulo uppercase tracking-wider'>
                        {projectId?.title}
                    </p>
            </section>

            <section className="mt-2 group">
                    <Image
                        src={`${projectId?.image}`}
                        className="object-cover rounded-2xl lg:group-hover:blur-md "
                        width={964}
                        height={620}
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
                <p className="max-w-5xl text-xl font-normal">
                    {projectId?.description}
                </p>

                <div className="flex flex-wrap mt-5 gap-5 group-hover:scale-150 group-hover:-translate-y-96 z-10">
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
                    <Image src="/dot.svg" width={6} height={6} alt="dot" className='mx-12' />
                    <Link href={`${projectId?.siteUrl}`} className=""> 
                    <div className="flexCenter gap-1 filterColor">
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