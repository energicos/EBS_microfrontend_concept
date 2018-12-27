# micro-frontend concept

A PoC implementation of the micro-frontend pattern. The main goals of the concept are:
- Ease of maintenance;
- Stability;
- Freedom to choose different tech stacks.

## Concept

- The main part of each screen is separated in its own micro-frontend
- Micro-frontends are renders inside a "shell" application.
- Each micro-frontend is hosted as a separate application to allow for an independent life cycle.

## Building block view

The solution consists of the following major components:
- The "shell" application is implemented using Vue.js CLI
- Several micro-frontends: contact manager, organization manager, pod manager, building manager, TAM and settings.
- A reverse proxy to serve the shell and micro-frontends.


![Concept](img/concepts.png)

### Shell

The shell app is generated using [Vue CLI](https://cli.vuejs.org/) to avoid maintaining a custom project setup.

The shell app uses the [EbsApp](../src/ebs-shell/src/micro-frontends/EbsApp.vue) component Vue.js component to render each micro-frontend 
and the [EventBus](../src/ebs-shell/src/micro-frontends/EventBus.js) to enable communication between micro-frontends.

![Shell](img/shell.mmd.svg)

### Micro-frontends

Each micro-frontend is based on [Nuxt.js](https://nuxtjs.org/guide) as the most popular out of the box implementation of
server-side rendering for Vue.js. 

## Runtime view

### Rendering micro-frontends

Micro-frontends are rendered by embedding remote applications using iframes. This allows to:
1. Easily embed remote applications in the shell.
2. Encapsulate its HTML and CSS.
3. Completely isolate its JavaScript runtime.

From the downsides of this approach one can note that some additional efforts might be required to make the iframe
fit nicely in the overall layout of the application.

The logic of working with iframes is encapsulated in the [EbsApp](../src/ebs-shell/src/micro-frontends/EbsApp.vue) app component.

### Communication

The micro-frontends need to be able to communicate with other micro-frontends and the shell itself. To enable easier
integration of new micro-frontends, the communication is done using an event-based API.

There is a native [window.postMessage()](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage) that allows to 
communicate between different `window` objects. Consumers can subscribe to messages by listening to the `message` event. 

Messaging between different `window` objects is seamlessly integrated
together using a simple [event bus](../src/ebs-shell/src/micro-frontends/EventBus.js) that listens to messages on each of the windows
and broadcasts them to others. This way the applications won't even know that they are talking to a different application.

#### Message envelope

Messages are represented using objects with a `type` property and any other payload.

```js
{
    type: 'app.my-message',
    customProperty: 'some-value'
}
```
k
The `type` property needs to start with `app.` to distinguish application messages from the rest.

#### Messaging sequence diagram

![Messaging](img/messaging.mmd.svg)

## Deployment view

Each micro-frontend the shell app is deployed as a separate Docker container. All of them a served via a single reverse Nginx proxy.
The proxy is used to avoid limitations with loading resources from different domains. It can also be used for SSL and HTTP/2 termination.

![Deployment](img/deployment.png)

## Development

### Development mode

1. Run a micro-service that you need, e.g. contacts:

```bash
cd ebs-contacts
npm i
npm run dev
```

1. Run the shell app:

```bash
cd ebs-shell
npm i
npm run serve
```

### Running in Docker 

To start the application using Docker run `docker-compose up` and open [localhost:3000](http://localhost:3000) in your browser.

### Adding new micro-frontends

To add a new micro-frontend using Nuxt.js follow these steps:
1. Generate a new project. Choose SSR and use npm as the package manager.
```
npx create-nuxt-app <project-name>
```
2. Configure the base URL for the app to properly serve assets by adding the following code to the `nuxt.config.js` file:
```js
  router: {
    base: '/<app-url>/'
  }
```
3. Choose and configure a unique port for the app. 
4. You should now be able to run the app using `npm run dev` and open it on 
`http://localhost:<port>/<app-url>/`
5. Create a proxy in the `ebs-shell` `vue.config.js` to serve the app in development mode. Verify that its working by running the shell and opening `/<app-url/`.
6. Render the micro-frontend in the shell-app using the `EbsApp` component.

#### Production setup
1. Add a `Dockerfile` to the new project.
1. Configure the app in the `ebs-proxy`. 
1. Add the new app to `docker-compose.yml`.


# Notes

### Web Components

Using web components to embed server-side rendered applications has a number of issues:
- JS contained in the embedded app needs to be executed manually. When loading the app using ajax and including it
in the shell, the browser does not evaluate the included `script` tags. They need to be evaluated manually. While this is 
doable for synchronous scripts, it can be tricky to get the execution order correctly when the app uses `async` and `defer`
for loading scripts.
- JS will be executed in the global context. Web components do not provide any mechanism for sandboxing the JS code of the 
embedded app. Since the rest of the HTML code is encapsulated in a shadow root, the globally evaluated scripts will fail to 
access some of the DOM elements. For example, nuxt.js crashes with an error when trying to locate the `#__nuxt` element. 
- Since JS is executed in the global scope, running multiple applications will cause them to interfere with each other. For example, 
nuxt.js relies on the `window.__NUXT__` variable to propagate data from the server-side to the client. Loading libraries of 
different versions for different apps is also likely to cause problems.

Considering these factors, web components don't seem like a proper way to embed server-side rendered applications.

References on using web components:
- https://developer.mozilla.org/en-US/docs/Web/Web_Components
- https://www.sitepen.com/blog/2018/07/06/web-components-in-2018/
- https://custom-elements-everywhere.com/

## References

Useful articles on the micro-frontend pattern:
- https://medium.embengineering.com/micro-front-ends-whats-the-best-solution-3bc31218eae4
- https://medium.com/@_rchaves_/building-microfrontends-part-i-creating-small-apps-710d709b48b7
