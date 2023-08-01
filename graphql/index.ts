export const projectsQuery = `
    query getProjects($category: String, $endcursor: String) {
    projectSearch(first: 8, after: $endcursor, filter: {category: {eq: $category}}) {
    pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
    }
    edges {
        node {
        title
        gitHub
        description
        siteUrl
        id
        image
        category
        }
    }
    }
}
`;

export const getProjectByIdQuery = `
    query GetProjectById($id: ID!) {
    project(by: { id: $id }) {
        id
        title
        description
        image
        siteUrl
        gitHub
        category
    }
    }
`;

/***EJ QUERY CREATE***/
/* 

    mutation ProjectCreate {
    projectCreate(input: {
        category: "full stack",
        description: "blog",
        gitHub: "https://github.com/AugustoFons",
        image: "https://res.cloudinary.com/ddgzljvfv/image/upload/v1690513403/programandoBlog_ajjdnk.jpg",
        siteUrl: "https://programandoblog.vercel.app/",
        title: "programandoBlog"
    }){
        project {
        title
        description
        image
        siteUrl
        gitHub
        category
        id
        }
    }
    }
*/

/***EJ QUERY GET***/
/* 

    query ProjectCollection {
    projectCollection(first: 8){
        edges{
        node {
            title
        }
        }
    }
    }

*/