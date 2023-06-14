# dh-dashboard
DigitalHub dashboard for component access. Static UI based on Vue SPA served with Nginx.

## Component Definition
File ``public/components.json`` defines the list of DH components that can be accessed with UI or port forwarding. Each component is defined with
- ``slug`` unique component ID managed by K8S
- ``name`` user-friendly component name
- ``description`` description of the component
- ``port`` defines TCP/HTTP port to perform port forwarding with SSH (optional).
- ``link`` defines the Web connection within coder domain management (optional).

## Build
To build Vue application, use the following steps (Node required):
- ``npm i`` to install the dependencies
- ``npm run build`` to build static resources

To build docker image, use the following steps:
- ``docker build -t <tag> .``
- ``docker run -d --name <container-name> -p 80:80 <tag>``
