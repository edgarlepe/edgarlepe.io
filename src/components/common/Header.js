import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

// Queries
import { ghostSettings } from "./queries/GhostSettingsQuery"

// Config
import config from "../../utils/siteConfig"

// Styles
import Navigation from "./Navigation"
import headerStyles from "./Header.module.scss"

const Header = ({ isHome }) => {
    const site = ghostSettings()
    const twitterUrl = site.twitter
        ? `https://twitter.com/${site.twitter.replace(/^@/, ``)}`
        : null
    const facebookUrl = site.facebook
        ? `https://www.facebook.com/${site.facebook.replace(/^\//, ``)}`
        : null

    return (
        <header className={headerStyles.siteHead}>
            <div className="container">
                <div className={headerStyles.siteMast}>
                    <div className={headerStyles.siteMastLeft}>
                        <Link to="/">
                            {site.logo ? (
                                <img
                                    className={headerStyles.siteLogo}
                                    src={site.logo}
                                    alt={site.title}
                                />
                            ) : (
                                <h1 className={headerStyles.siteLogoInitials}>EGL</h1>
                            )}
                        </Link>
                    </div>
                    <div className={headerStyles.siteMastRight}>
                        {site.twitter && (
                            <a
                                href={twitterUrl}
                                className={headerStyles.siteNavItem}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    className={headerStyles.siteNavIcon}
                                    src="/images/icons/twitter.svg"
                                    alt="Twitter"
                                />
                            </a>
                        )}
                        {site.facebook && (
                            <a
                                href={facebookUrl}
                                className={headerStyles.siteNavIem}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    className={headerStyles.siteNavIcon}
                                    src="/images/icons/facebook.svg"
                                    alt="Facebook"
                                />
                            </a>
                        )}
                        <a
                            className={headerStyles.siteNavItem}
                            href={`https://feedly.com/i/subscription/feed/${config.siteUrl}/rss/`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                className={headerStyles.siteNavIcon}
                                src="/images/icons/rss.svg"
                                alt="RSS Feed"
                            />
                        </a>
                    </div>
                </div>
                {isHome ? (
                    <div className={headerStyles.siteBanner}>
                        <h1 className={headerStyles.siteBannerTitle}>
                            {site.title}
                        </h1>
                        <p className={headerStyles.siteBannerDesc}>
                            {site.description}
                        </p>
                    </div>
                ) : null}
                <nav className={headerStyles.siteNav}>
                    <div className={headerStyles.siteNavLeft}>
                        {/* The navigation items as setup in Ghost */}
                        <Navigation
                            data={site.navigation}
                            navClass={headerStyles.siteNavItem}
                        />
                    </div>
                    <div className={headerStyles.siteNavRight}>
                        <Link
                            className={headerStyles.siteNavButton}
                            to="/about"
                        >
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
}

export default Header
