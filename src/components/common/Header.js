import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

// Queries
import { ghostSettings } from "./queries/GhostSettingsQuery"

// Config
import config from "../../utils/siteConfig"

// Styles
import Navigation from "./Navigation"
import {
    siteHead,
    siteMast,
    siteMastRight,
    siteLogo,
    siteLogoInitials,
    siteBanner,
    siteBannerTitle,
    siteBannerDesc,
    siteNav,
    siteNavLeft,
    siteNavItem,
    siteNavIcon,
    siteNavButton,
} from "./Header.module.scss"

const Header = ({ isHome }) => {
    const site = ghostSettings()
    const twitterUrl = site.twitter
        ? `https://twitter.com/${site.twitter.replace(/^@/, ``)}`
        : null
    const facebookUrl = site.facebook
        ? `https://www.facebook.com/${site.facebook.replace(/^\//, ``)}`
        : null

    return (
        <header className={siteHead}>
            <div className="container">
                <div className={siteMast}>
                    <div>
                        <Link to="/">
                            {site.logo ? (
                                <img
                                    className={siteLogo}
                                    src={site.logo}
                                    alt={site.title}
                                />
                            ) : (
                                <h1 className={siteLogoInitials}>EGL</h1>
                            )}
                        </Link>
                    </div>
                    <div className={siteMastRight}>
                        {site.twitter && (
                            <a
                                href={twitterUrl}
                                className={siteNavItem}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    className={siteNavIcon}
                                    src="/images/icons/twitter.svg"
                                    alt="Twitter"
                                />
                            </a>
                        )}
                        {site.facebook && (
                            <a
                                href={facebookUrl}
                                className={siteNavItem}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    className={siteNavIcon}
                                    src="/images/icons/facebook.svg"
                                    alt="Facebook"
                                />
                            </a>
                        )}
                        <a
                            className={siteNavItem}
                            href={`https://feedly.com/i/subscription/feed/${config.siteUrl}/rss/`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                className={siteNavIcon}
                                src="/images/icons/rss.svg"
                                alt="RSS Feed"
                            />
                        </a>
                    </div>
                </div>
                {isHome ? (
                    <div className={siteBanner}>
                        <h1 className={siteBannerTitle}>
                            {site.title}
                        </h1>
                        <p className={siteBannerDesc}>
                            {site.description}
                        </p>
                    </div>
                ) : null}
                <nav className={siteNav}>
                    <div className={siteNavLeft}>
                        {/* The navigation items as setup in Ghost */}
                        <Navigation
                            data={site.navigation}
                            navClass={siteNavItem}
                        />
                    </div>
                    <div>
                        <Link
                            className={siteNavButton}
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
