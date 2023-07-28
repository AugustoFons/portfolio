import { ProjectInterface } from "@/common.types";
import ProjectCard from "@/components/ProjectCard";
import { fetchAllProjects } from "@/lib/actions";

type ProjectSearch = {
    projectSearch: {
        edges: { node: ProjectInterface}[];
        pageInfo: {
            hasPreviousPage: boolean;
            hasNextPage: boolean;
            startCursor: string;
            endCursor: string;
        }
    }
}

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
        <section className="flex-start flex-col paddings mb-16">
            <h1>categories</h1>
            
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
                    />
                ))}
            </section>

        </section>
    )
}

export default Home;