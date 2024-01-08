import { ProjectSearch, ProjectInterface } from "@/common.types";
import AboutMe from "@/components/AboutMe";
import CvDescarga from "@/components/CvDescarga";
import Formulario from "@/components/Formulario";
import ProjectCard from "@/components/ProjectCard";
import Image from "next/image";
import { data } from "./_data";

export const dynamic = 'force-dynamic';
export const dynamicParams = true;
export const revalidate = 0;

const Home = async () => {
/*     const data = await fetchAllProjects() as ProjectSearch

    const projectsView = data?.projectSearch?.edges;

    if(projectsView.length === 0) {
        return (
            <section className="flexStart flex-col paddings w-full text-center my-10 px-2">
                <p>No projects found</p>
            </section>
        )
    } */

    return (
        <section className="flex-start flex-col lg:px-20 py-4 px-5 mb-16">
            <AboutMe />
            <div className="w-full flex items-center md:my-6 my-4 p-2 justify-start">
                <div>
                    <h1 id="proyectos" className="fuenteTitulo text-5xl text-center">Proyectos:</h1>                
                    <Image 
                    src='/line1.png'
                    width={116}
                    height={80}
                    alt="line"
                    className="ml-3 mt-1"
                    />
                </div>
            </div>

            <section className="projects-grid">
                {data
                    .sort((a, b) => b.order - a.order) // Ordena los proyectos en orden descendente según el número de order
                    .map((item: ProjectInterface, index) => (
                        <ProjectCard 
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            description={item.description}
                            image={item.image}
                            siteUrl={item.siteUrl}
                            gitHub={item.gitHub}
                            category={item.category}
                            order={item.order}
                        />
                    ))}
            </section>

            <section className="flex flex-col lg:flex-row lg:justify-around lg:gap-20 items-center mt-20 md:mt-4 ">
                <CvDescarga />
                <Formulario />
            </section>


        </section>
    )
}

export default Home;