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
        github
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