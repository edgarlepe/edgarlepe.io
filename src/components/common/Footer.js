import React from "react"
import { Link } from "gatsby"

import { ghostSettings } from "./queries/GhostSettingsQuery"

import { Navigation } from "."

const Footer = () => {
    const site = ghostSettings()

    return (
        <footer className="site-foot">
            <div className="site-foot-nav container">
                <div>
                    <Link to="/">{site.title}</Link> © 2021
                </div>
                <div className="site-foot-nav-right">
                    <Navigation
                        data={site.navigation}
                    />
                </div>
            </div>
        </footer>
    )
}

export default Footer
