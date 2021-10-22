import { useStaticQuery, graphql } from 'gatsby'

export const ghostIcon = () => {
    const { file } = useStaticQuery(
        graphql`{
  file(relativePath: {eq: "ghost-icon.png"}) {
    childImageSharp {
      gatsbyImageData(width: 30, height: 30, layout: FIXED)
    }
  }
}
`
    )

    return file.childImageSharp.gatsbyImageData;
}
