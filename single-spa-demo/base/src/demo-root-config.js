import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome@2.4.3/dist/single-spa-welcome.js"
    ),
    activeWhen: (location) => location.pathname === '/'
  // activeWhen: ["/"],
});

registerApplication({
  name: "@demo/react-child",
  app: () =>
    System.import(
      "@demo/react-child"
    ),
  activeWhen: (location) => location.pathname.startsWith('/react-child')
   
  // activeWhen: ["demo-react"],
});

registerApplication({
  name: "@demo/vue-child",
  app: () =>
    System.import(
      "@demo/vue-child"
    ),
  activeWhen: (location) =>location.pathname.startsWith('/vue-child')
   
  // activeWhen: ["demo-react"],
});

start({
  urlRerouteOnly: true,
});
