const userRouter = require('./users');

const routes = [
  { route: '/users', router: userRouter }
];

const setupRoutes = (app) => {
  routes.forEach(({ route, router }) => {
    app.use(route, router);
  });
};

module.exports = {
    setupRoutes,
};
