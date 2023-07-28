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
        <div className="flexCenter flex-col rounded-2xl drop-shadow-card">
            <Link href={`/project/${id}`} className="flexCenter group relative w-full h-full">
                <Image
                src={image}
                width={414}
                height={314}
                alt={title}
                className="w-ful h-full rounded-2xl object-cover"
                />

                <div className="hidden group-hover:flex profile_card-title">
                    <p className="w-full ">{title}</p>
                </div>
            </Link>

            <div className="flexBetween w-full px-2 mt-3 font-semibold text-sm">
                <Link href={gitHub}>
                    <div className="flexCenter gap-2">
                        <Image
                        src='/github.svg'
                        width={24}
                        height={24}
                        alt="github"
                        className="rounded-full"
                        />
                        <p>Repositorio {category}</p>
                    </div>
                </Link>

                <div className="flexCenter">
                    <div className="flexCenter flex-col text-slate-500 filterColor">
                        <Image
                        src="/deployment.png"
                        width={24}
                        height={24}
                        alt="deploy"
                        />
{/*                         <p className="text-sm ">deploy</p>
 */}                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard