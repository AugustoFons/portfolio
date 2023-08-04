
export type ProjectSearch = {
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

export type Props = {
    title: string;
    description: string;
    image: string;
    siteUrl: string;
    gitHub: string;
    category: string;
    id: string;
    order: number;
}

export interface ProjectInterface {
    title: string;
    description: string;
    image: string;
    siteUrl: string;
    gitHub: string;
    category: string;
    id: string;
    order: number;
}
