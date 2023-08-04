import { ProjectSearch, ProjectInterface } from "@/common.types";
import AboutMe from "@/components/AboutMe";
import ProjectCard from "@/components/ProjectCard";
import { fetchAllProjects } from "@/lib/actions";
import Image from "next/image";

const Home = async () => {
    const data = await fetchAllProjects() as ProjectSearch

    const projectsView = data?.projectSearch?.edges || [];

    if(projectsView.length === 0) {
        return (
            <section className="flexStart flex-col paddings w-full text-center my-10 px-2">
                Categories
                <p>No projects found</p>
            </section>
        )
    }

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
                    className="mr-8 mt-1"
                    />
                </div>
            </div>

            <section className="projects-grid">
                    {projectsView.map(({ node } : { node: ProjectInterface }) => (
                        <ProjectCard 
                        key={node?.id}
                        id={node?.id}
                        title={node?.title}
                        description={node?.description}
                        image={node?.image}
                        siteUrl={node?.siteUrl}
                        gitHub={node?.gitHub}
                        category={node?.category}
                        order={node?.order}
                        />
                    ))}
            </section>
        </section>
    )
}

export default Home;