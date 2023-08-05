export const projectsQuery = `
    query getProjects {
    projectSearch(first: 20) {
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
        order
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
        order
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
        order: 4
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

/* UPDATE
	mutation UpdateProject($id: ID!) {
		projectUpdate(by: { id: $id }, input: {
        title: "Encriptador"
    }) {
			project {
				id
				title
				description
			}
		}
	}
*/