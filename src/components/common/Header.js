import React from 'react'
import PropTypes from 'prop-types'
import { Link, StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import config from '../../utils/siteConfig'
import Navigation from './Navigation'

const Header = ({ data, isHome }) => {
    const site = data.allGhostSettings.edges[0].node
    const twitterUrl = site.twitter ? `https://twitter.com/${site.twitter.replace(/^@/, ``)}` : null
    const facebookUrl = site.facebook ? `https://www.facebook.com/${site.facebook.replace(/^\//, ``)}` : null

    return (
        <header
            className="site-head"
            style={{
                ...(site.cover_image && {
                    backgroundImage: `url(${site.cover_image})`,
                }),
            }}
        >
            <div className="container">
                <div className="site-mast">
                    <div className="site-mast-left">
                        <Link to="/">
                            {site.logo ? (
                                <img
                                    className="site-logo"
                                    src={site.logo}
                                    alt={site.title}
                                />
                            ) : (
                                <Img
                                    fixed={data.file.childImageSharp.fixed}
                                    alt={site.title}
                                />
                            )}
                        </Link>
                    </div>
                    <div className="site-mast-right">
                        {site.twitter && (
                            <a
                                href={twitterUrl}
                                className="site-nav-item"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    className="site-nav-icon"
                                    src="/images/icons/twitter.svg"
                                    alt="Twitter"
                                />
                            </a>
                        )}
                        {site.facebook && (
                            <a
                                href={facebookUrl}
                                className="site-nav-item"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    className="site-nav-icon"
                                    src="/images/icons/facebook.svg"
                                    alt="Facebook"
                                />
                            </a>
                        )}
                        <a
                            className="site-nav-item"
                            href={`https://feedly.com/i/subscription/feed/${config.siteUrl}/rss/`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                className="site-nav-icon"
                                src="/images/icons/rss.svg"
                                alt="RSS Feed"
                            />
                        </a>
                    </div>
                </div>
                {isHome ? (
                    <div className="site-banner">
                        <h1 className="site-banner-title">{site.title}</h1>
                        <p className="site-banner-desc">{site.description}</p>
                    </div>
                ) : null}
                <nav className="site-nav">
                    <div className="site-nav-left">
                        {/* The navigation items as setup in Ghost */}
                        <Navigation
                            data={site.navigation}
                            navClass="site-nav-item"
                        />
                    </div>
                    <div className="site-nav-right">
                        <Link className="site-nav-button" to="/about">
                            About
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    )
}

Header.propTypes = {
    isHome: PropTypes.bool,
    data: PropTypes.shape({
        file: PropTypes.object,
        allGhostSettings: PropTypes.object.isRequired,
    }).isRequired,
}

const HeaderSettingsQuery = props => (
    <StaticQuery
        query={graphql`
            query GhostSettingsAndIcon {
                allGhostSettings {
                    edges {
                        node {
                            ...GhostSettingsFields
                        }
                    }
                }
                file(relativePath: {eq: "ghost-icon.png"}) {
                    childImageSharp {
                        fixed(width: 30, height: 30) {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
            }
        `}
        render={data => <Header data={data} {...props} />}
    />
)

export default HeaderSettingsQuery
