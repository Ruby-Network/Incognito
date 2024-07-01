<div align="center">
         
<img src="https://socialify.git.ci/titaniumnetwork-dev/incognito/image?description=1&font=Inter&forks=1&issues=1&language=1&name=1&owner=1&pattern=Circuit%20Board&pulls=1&stargazers=1&theme=Dark" alt="ruby" width="640" height="320" />

<img alt="repo size" src="https://img.shields.io/github/repo-size/titaniumnetwork-dev/incognito?style=for-the-badge"></img>
<img alt="website status" src="https://img.shields.io/website?url=https%3A%2F%2Fincog.nebula.christmas&style=for-the-badge"></img>
<img alt="commit a week" src="https://img.shields.io/github/commit-activity/w/titaniumnetwork-dev/incognito?style=for-the-badge"></img>
<a href="https://github.com/caracal-js/incognito" target="_blank" rel="noopener noreferer"><img alt="original repo" src="https://img.shields.io/badge/Original-Repo-gray?style=for-the-badge&link=https%3A%2F%2Fgithub.com%2Fcaracal-js%2Fincognito"></img></a>

</div>

<div align="center">
    <h2>Get Started</h2>
    <a>To get started, press one of the buttons below to deploy Incog</a>
    <br />
    <br />
    <a href="#terminal">
        <img src="https://img.shields.io/badge/terminal-%23121011.svg?style=for-the-badge&logo=gnu-bash&logoColor=white" alt="Terminal">
        </img>
    </a>
    <a href="#docker">
        <img src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white" alt="Docker">
        </img>
    </a>
</div>

## NOTE:

-   For Cyclic users this will unfortunatley *not* work due to Cyclic supporting very little languages
-   This will **NOT** deploy on Github Pages, Netlify, Vercel, Gitlab Pages or any other _static_ host
-   This will **NOT** work on Render
---

## How to get links

[![Titanium Network Discord](https://invidget.switchblade.xyz/unblock?theme=dark)](https://discord.gg/unblock)

---

## Features

-   Tons of themes

- Lots and lots of games

-   Multiple Proxy Backends:
    -   [Ultraviolet](https://github.com/titaniumnetwork-dev/ultraviolet)
    -   [RammerHead](https://github.com/binary-person/rammerhead)
---

## Contributors

- [MotorTruck1221](https://motortruck1221.com) - Maintainer
- [Rifting](https://github.com/rifting) - Maintainer
- [caracal-js](https://github.com/caracal-js) - Original Creator
---

## Tech Stack

-   [Astro](https://astro.build)
-   [Fastify](https://fastify.dev)
-   [Bare Server Node](https://github.com/tomphttp/bare-server-node)
-   [Ultraviolet](https://github.com/titaniumnetwork-dev/ultraviolet)
-   [RammerHead](https://github.com/binary-person/rammerhead)
-   [Epoxy](https://github.com/mercuryworkshop/epoxy-tls)
-   HTML, CSS, and JavaScript (DUH)
---

## Deployment

### Terminal

Prerequisites:
- Node & npm
- Git

1. Clone the repo:
```bash
git clone https://github.com/titaniumnetwork-dev/incognito && cd incognito
```

2. Install all of the dependencies:
```bash
npm i
```

3. Create a .env file
```bash
cp .env.example .env
```

4. Modify the .env file to you liking (docs [here](#environment))
```
nano .env
```

5. Build the frontend:
```bash
npm run build
```

6. Start the server
```bash
npm start
```

> [!NOTE]
> You can run `npm run bstart` to build and start together
---

### Games

- By default, games are reverse proxied by the server
    - Game assets are located [here](https://github.com/ruby-network/ruby-assets)
- To turn off Games, and access to them see [#environment](#environment)


### Docker

- There are two ways to deploy with docker:
    - [Normal docker](#normal-docker)
    - [Docker Compose](#docker-compose)

#### Normal Docker

Prerequisites:
- Git
- Docker

1. Clone the repo:
```bash
git clone https://github.com/titaniumnetwork/incognito && cd incognito
```

2. Create an .env file:
```bash
cp .env.example .env
```

3. Modify the .env file to your liking (docs [here](#environment))
```bash
nano .env
```

4. Build the docker image:
```bash
docker build --build-arg BARE_SERVER_OPTION=true -t incog:latest
```
For info on the build arg check [here](#environment)

5. Run the docker images:
```bash
docker run --env-file ./.env incog:latest
```

#### Docker Compose

Prerequisites:
- Git
- Docker w/compose

1. Clone the repo:
```bash
git clone https://github.com/titaniumnetwork-dev/incognito
```

2. Create an .env file:
```bash
cp .env.example .env
```

3. Modify the .env file to your liking (docs on that [here](#environment)]
```bash
nano .env
```

4. Build the docker image:
```bash
docker compose build
```

5. Run the docker image:
```bash
docker compose up
```
Or:
```bash
docker compose up -d
```
To start it in the background

---

## Environment

- There are a couple of environment variables for incognito. Most of the time, the defaults are fine, but there are instances where you may not want certain options enabled or certain things running.

| Variable               | Description                                                                                              | Default |
|------------------------|----------------------------------------------------------------------------------------------------------|---------|
| `MASQR`                | Enables (`true`)/Disables (`false`) Masqr (most people don't want this)                                   | `false` |
| `BARE_SERVER_ENABLED`  | Enables (`true`)/Disables (`false`) the integrated bare server. Use this if you already have a server (e.g., reverse proxy) or don't want users accessing it. | `true`  |
| `PORT`                 | The port that the server listens on ***IGNORED IN THE DOCKER ENVIRONMENTS***                              | `8080` |
| `GAMES` | Disable (`false`)/Enable (`true`) the reverse proxy for Games | `true` |
| `RAMMERHEAD_SERVER_ENABLED` | Disable (`false`)/Enabled (`true`) the integrated Rammerhead server | `true` |
| `SITE` | Your websites domain (eg: https://example.com) | `http://localhost:8080` |
| `BARE_SERVER_OPTION`   | Enables (`true`)/Disables (`false`) the option to use a bare server in the frontend. ***THIS IS A BUILD TIME ONLY VARIABLE*** | `true`  |
| `GAMES_LINK` | Enables (`true`)/Disables (`false`) access to the games page ***BUILD TIME ONLY*** | `true` |
| `RAMMERHEAD_OPTION` | Enabled (`true`)/Disables (`false`) the option to use Rammerhead in the frontend. ***BUILD TIME ONLY*** | `true` |
