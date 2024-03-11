# dh-dashboard
DigitalHub dashboard for component access. Static UI based on Vue SPA served with Nginx.

## Component Definition
File ``public/components.json`` defines the list of DH components that can be accessed with UI or port forwarding. Each component is defined with
- ``slug`` unique component ID managed by K8S
- ``name`` user-friendly component name
- ``description`` description of the component
- ``port`` defines TCP/HTTP port to perform port forwarding with SSH (optional).
- ``link`` defines the Web connection within coder domain management (optional).

## Monitoring Definition
File ``public/monitoring.json`` defines the list of Monitoring pages that can be accessed with UI or port forwarding. Each page is defined with
- ``slug`` unique dashboard ID
- ``name`` user-friendly dashboard name
- ``description`` description of the dashboard
- ``link`` defines the link to the dasboard.

## Authentication

It is possible to enable OIDC authentication for the dashboard component. Specifically, it is necessary to define the OIDC configuration (JSON) as of
[OIDC Client](https://authts.github.io/oidc-client-ts/) as environment variable ``VITE_OIDC_CONFIG``.

### Environment variables

It is possible to define the environment variables at the build time (``.env`` file notations) or at deployment time overwriting the file
``/public/env.js``. The supported variables are
- ``VITE_OIDC_CONFIG`` - OIDC configuration
- ``VITE_PLATFORM_TITLE``  - name of the platform
- ``VITE_PLATFORM_VERSION`` - version of the platform


## Build
To build Vue application, use the following steps (Node required):
- ``npm i`` to install the dependencies
- ``npm run build`` to build static resources

To build docker image, use the following steps:
- ``docker build -t <tag> .``
- ``docker run -d --name <container-name> -p 80:80 <tag>``
