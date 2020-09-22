import React from "react"
import { Link } from "gatsby"

import { ghostSettings } from "./queries/GhostSettingsQuery"

import { Navigation } from "."

import footerStyles from './Footer.module.scss'

const Footer = () => {
    const site = ghostSettings()

    return (
        <footer className={footerStyles.siteFoot}>
            <div className={`${footerStyles.siteFootNav} container`}>
                <div className={footerStyles.siteFootNavLeft}>
                    <Link to="/">{site.title}</Link> © 2019 &mdash; Published
                    with{` `}
                    <a
                        className={footerStyles.siteFootNavItem}
                        href="https://ghost.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Ghost
                    </a>
                </div>
                <div className={footerStyles.siteFootNavRight}>
                    <Navigation
                        data={site.navigation}
                        navClass={footerStyles.siteFootNavItem}
                    />
                </div>
            </div>
        </footer>
    )
}

export default Footer
