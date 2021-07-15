[![Netlify Status](https://api.netlify.com/api/v1/badges/8f001645-c5b6-442f-ba5b-34c86baafd8d/deploy-status)](https://app.netlify.com/sites/frosty-wright-559d28/deploys)
[![CircleCI](https://circleci.com/gh/edgarlepe/edgarlepe.io/tree/master.svg?style=svg)](https://circleci.com/gh/edgarlepe/edgarlepe.io/tree/master)

# Edgar Giovanni Lepe's personal website

This is the source for my personal website [edgarlepe.io](https://edgarlepe.io).
It pulls content from a [Ghost](https://ghost.org) headless instance and uses
[Gatsby](https://gatsbyjs.org) for the front end. See
[gatsby-starter-ghost](https://github.com/TryGhost/gatsby-starter-ghost) for
more details.

# Installing

```bash
# From Source
git clone https://github.com/edgarlepe.io
cd edgarlepe.io
```

Then install dependencies

```bash
yarn
```

&nbsp;

# Running

Start the development server. You now have a Gatsby site pulling content from
headless Ghost.

```bash
gatsby develop
```

To use your own install, you will need to add your
[Ghost API credentials](https://ghost.org/docs/content-api/) to a
`.env.development` file in project's root directory. Set `GHOST_API_URL` to the
URL of your Ghost site. For Ghost(Pro) customers, this is the Ghost URL ending
in `.ghost.io`, and for people using the self-hosted version of Ghost, it's the
same URL used to access your site.

Next, set `GHOST_CONTENT_API_KEY` to the key associated with the Ghost site. A
key can be provided by creating an integration within Ghost Admin. Navigate to
Integrations and click "Add new integration". Name the integration appropriately
and click create.

Your `.env.development` file should look something like this:

```text
GHOST_API_URL         = https://gatsby.ghost.io
GHOST_CONTENT_API_KEY = 9cc5c67c358edfdd81455149d0
```

How you go about setting the environment variables for a production build
depends on your setup. If you are hosting your static site on a instance you
have command-line access to, you can set the environment variables the standard
way, or add a `.env.production` file to the project's root directory. If you're
using Netlify, add the credentials in the "Deploy settings."

Finally, configure your desired URL in `siteConfig.js`, so links (e. g.
canonical links) are generated correctly. You can also update other default
values, such as `postsPerPage` in this file.

To use this starter without issues, your Ghost installation needs to be at least
on version.

The default Ghost version that is used for this starter is `4.x`.

&nbsp;

# Deploying with Netlify

The starter contains three config files specifically for deploying with Netlify.
A `netlify.toml` file for build settings, a `/static/_headers` file with default
security headers set for all routes, and `/static/_redirects` to set Netlify
custom domain redirects.

To deploy to your Netlify account, hit the button below.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/TryGhost/gatsby-starter-ghost)

Once deployed, you can set up a
[Ghost + Netlify Integration](https://docs.ghost.org/integrations/netlify/) to
use deploy hooks from Ghost to trigger Netlify rebuilds. That way, any time data
changes in Ghost, your site will rebuild on Netlify.

&nbsp;

# Optimising

You can disable the default Ghost Handlebars Theme front-end by enabling the
`Make this site private` flag within your Ghost settings. This enables password
protection in front of the Ghost install and sets
`<meta name="robots" content="noindex" />` so your Gatsby front-end becomes the
source of truth for SEO.

&nbsp;

# Extra options

```bash
# Run a production build, locally
gatsby build

# Serve a production build, locally
gatsby serve
```

Gatsby `develop` uses the `development` config in `.ghost.json` - while Gatsby
`build` uses the `production` config.

&nbsp;

# Copyright \& License

Copyright (c) 2020-2021 Edgar Giovanni Lepe - Released under the [MIT license](LICENSE).
