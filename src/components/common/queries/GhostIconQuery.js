import { useStaticQuery, graphql } from 'gatsby'

export const ghostIcon = () => {
    const { file } = useStaticQuery(
        graphql`
            query {
                file(relativePath: { eq: "ghost-icon.png" }) {
                    childImageSharp {
                        fixed(width: 30, height: 30) {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
            }
        `
    )

    return file.childImageSharp.fixed
}
