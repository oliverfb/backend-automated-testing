const routes = [];

const setupRoutes = (app) => {
  routes.forEach(({ route, router }) => {
    app.use(route, router);
  });
};

module.exports = {
    setupRoutes,
};
