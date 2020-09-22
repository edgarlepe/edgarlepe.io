import { useStaticQuery, graphql } from 'gatsby'

export const ghostSettings = () => {
    const { allGhostSettings } = useStaticQuery(
        graphql`
            query {
                allGhostSettings {
                    edges {
                        node {
                            ...GhostSettingsFields
                        }
                    }
                }
            }
        `
    )

    return allGhostSettings.edges[0].node
}
