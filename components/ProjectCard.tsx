import Image from "next/image";
import Link from "next/link";

type Props = {
    title: string;
    description: string;
    image: string;
    siteUrl: string;
    gitHub: string;
    category: string;
    id: string;
}

const ProjectCard = ({ title, description, image, siteUrl, gitHub, category, id}: Props) => {
    return (
        <section>
            <div className="flex flex-col items-center mb-4">
                <h1 className="fuenteTitulo text-5xl text-center">Proyectos:</h1>
                <Image 
                src='/line1.png'
                width={100}
                height={80}
                alt="line"
                className="mr-6 mt-1"
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

                    <div className="hidden group-hover:flex profile_card-title">
                        <p className="w-full">{title}</p>
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
                            <p className="font-semibold text-xs text-slate-500 group-hover:text-slate-700">{category}</p>
                        </div>
                    </Link>

                    <div className="flexCenter">
                        <div className="flexCenter flex-col ">
                            <Image
                            src="/deployment.png"
                            width={26}
                            height={26}
                            alt="deploy"
                            className="filterColor"
                            />
    {/*                         <p className="text-sm ">deploy</p>
    */}                    </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProjectCard