import React from "react"
import { Link } from "gatsby"

import { ghostSettings } from "./queries/GhostSettingsQuery"

import { Navigation } from "."

import {
    siteFoot,
    siteFootNav,
    siteFootNavRight,
} from './Footer.module.scss'

const Footer = () => {
    const site = ghostSettings()

    return (
        <footer className={siteFoot}>
            <div className={`${siteFootNav} container`}>
                <div>
                    <Link to="/">{site.title}</Link> © 2021 &mdash; Published
                    with{` `}
                    <a
                        href="https://ghost.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Ghost
                    </a>
                </div>
                <div className={siteFootNavRight}>
                    <Navigation
                        data={site.navigation}
                    />
                </div>
            </div>
        </footer>
    )
}

export default Footer
