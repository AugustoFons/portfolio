import Image from "next/image";
import Link from "next/link";
import { Props } from "@/common.types";


const ProjectCard = ({ title, description, image, siteUrl, gitHub, category, id}: Props) => {
    return (
        <section>
            <div className="flex flex-col items-center mb-4">
                <h1 id="proyectos" className="fuenteTitulo text-5xl text-center">Proyectos:</h1>                
                <Image 
                src='/line1.png'
                width={116}
                height={80}
                alt="line"
                className="mr-10 mt-1"
                />
            </div>
            <div className="flexCenter flex-col rounded-2xl group bg-stone-100 hover:shadow-[#ffae007a] hover:shadow-2xl">
                <Link href={`/project/${id}`} className="flexCenter group relative w-full h-full">
                    <Image
                    src={image}
                    width={414}
                    height={314}
                    alt={title}
                    className="w-ful h-full rounded-2xl object-cover"
                    />

                    <div className="hidden group-hover:flex group-hover:flex-col card-title">
                        <p className="w-full fuenteTexto">{title}</p>
                        <div className="flex justify-start w-full">
                            <p className="w-full fuenteTexto font-light text-xs flex items-center">Ver descripcion
                            <Image 
                                src='/clic.png'
                                width={20}
                                height={20}
                                alt="pointer"
                                className="-rotate-12 left-10"
                                />
                            </p>
                        </div>
                    </div>
                </Link>

                <div className="flexBetween w-full px-2 mt-3 font-semibold text-sm rounded-2xl pb-2">
                    <Link href={gitHub}>
                        <div className="flexCenter gap-1 filterColor">
                            <Image
                            src='/github.svg'
                            width={24}
                            height={24}
                            alt="github"
                            className="rounded-full"
                            />
                            <p className="font-semibold text-xs text-slate-500 group-hover:text-slate-700 fuenteTexto">{category}</p>
                        </div>
                    </Link>
                    <div className="flexCenter">
                        <Link href={siteUrl}>
                            <div className="flexCenter">
                                <Image
                                src="/deployment.png"
                                width={26}
                                height={26}
                                alt="deploy"
                                className="filterColor"
                                />
                            </div>
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default ProjectCard